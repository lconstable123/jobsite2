import { createContext, useEffect, useMemo, useState } from "react";

import type { TJobItem, PaginationDirection, SortBy } from "../lib/types";
import { useSearchTextContext, useTextQuery } from "../lib/hooks";
import { RESULTS_PER_PAGE } from "../lib/constants";

type jobItemsContextProviderProps = {
  jobItems: TJobItem[];
  jobItemsSortedSliced: TJobItem[];
  totalNumberOfResults: number;
  totalNumberOfPages: number;
  sortBy: SortBy;
  handleChangeSortBy: (sortBy: SortBy) => void;
  currentPage: number;
  handleSetCurrentPage: (direction: "prev" | "next") => void;
  isLoading: boolean;
  isFetching: boolean;
  error?: string;
  JobItemsAnimations: boolean;
  transitionJobList: boolean;
};

export const JobItemsContext =
  createContext<jobItemsContextProviderProps | null>(null);

export default function JobItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { debouncedSearchText } = useSearchTextContext();
  const { jobItems, isLoading, isFetching } = useTextQuery(debouncedSearchText);
  const [sortBy, setSortBy] = useState<SortBy>("relevant");
  const [JobItemsAnimations, setResetJobItemsAnimations] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [transitionJobList, setTransitionJobList] = useState(false);
  const totalNumberOfResults = jobItems?.length || 0;
  const totalNumberOfPages = Math.ceil(totalNumberOfResults / RESULTS_PER_PAGE);

  //derived states

  const jobItemsSorted = useMemo(
    () =>
      [...(jobItems || [])].sort((a, b) => {
        if (sortBy === "relevant") {
          return a.relevanceScore - b.relevanceScore;
        } else {
          return +a.daysAgo - +b.daysAgo;
        }
      }),
    [jobItems, sortBy]
  );

  const jobItemsSortedSliced =
    jobItemsSorted.slice(
      currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
      currentPage * RESULTS_PER_PAGE
    ) || [];

  //handles

  const handleChangeSortBy = (newSortBy: SortBy) => {
    if (transitionJobList) return;
    setTransitionJobList(true);
    setTimeout(() => {
      setSortBy(newSortBy);
      setTransitionJobList(false);
    }, 250);
  };

  const handleSetCurrentPage = (direction: PaginationDirection) => {
    if (transitionJobList) return;
    setTransitionJobList(true);
    setTimeout(() => {
      if (direction === "next") {
        setCurrentPage((prevPage) => prevPage + 1);
      } else if (direction === "prev") {
        setCurrentPage((prevPage) => prevPage - 1);
      }
      setTransitionJobList(false);
    }, 250);
  };

  useEffect(() => {
    setResetJobItemsAnimations(!JobItemsAnimations);
  }, [debouncedSearchText, currentPage, isLoading, sortBy]);

  useEffect(() => {
    if (!isLoading) {
    }
  }, [isLoading]);

  const contextValue = useMemo(
    () => ({
      jobItems,
      jobItemsSortedSliced,
      totalNumberOfPages,
      totalNumberOfResults,
      handleChangeSortBy,
      sortBy,
      handleSetCurrentPage,
      currentPage,
      isLoading,
      isFetching,
      JobItemsAnimations,
      transitionJobList,
    }),
    [
      jobItems,
      jobItemsSortedSliced,
      JobItemsAnimations,
      isLoading,
      isFetching,
      totalNumberOfPages,
      totalNumberOfResults,
      currentPage,
      transitionJobList,
    ]
  );

  return (
    <JobItemsContext.Provider value={contextValue}>
      {children}
    </JobItemsContext.Provider>
  );
}
