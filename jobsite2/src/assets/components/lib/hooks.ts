import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type Context,
} from "react";
import { PageContext } from "../contexts/pageContextProvider";
import type {
  TJobItem,
  JobItemApiResponse,
  JobItemDetailApiResponse,
} from "./types";
import toast from "react-hot-toast";
import { BASE_API_URL } from "./constants";
import type { CarouselApi } from "@/components/ui/carousel";
import { useQueries, useQuery } from "@tanstack/react-query";

import { SearchTextContext } from "../contexts/searchTextContextProvider";
import { JobItemsContext } from "../contexts/jobItemsContextProvider";
import { ActiveIdContext } from "../contexts/activeIdContentProvider";
import { BookmarksContext } from "../contexts/bookmarksContextProvider";

export function UseInitialAnimations() {
  const [initial, setInitial] = useState(true);
  useEffect(() => {
    setInitial(false);
  }, []);

  return initial
    ? " animation-all duration-300 scale-70"
    : "animation-all duration-300";
}

const fetchJobItems = async (
  searchText: string
): Promise<JobItemApiResponse> => {
  const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
  if (!response.ok) {
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.description);
    }
  }
  const data = await response.json();
  console.log(data.jobItems);

  return data;
};

const fetchJobItem = async (
  id: number | null
): Promise<JobItemDetailApiResponse> => {
  const response = await fetch(`${BASE_API_URL}/${id}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }
  const data = await response.json();
  return data;
};

export const useTextQuery = (searchText: string) => {
  const { status, error, isLoading, isFetching, data } = useQuery({
    queryKey: ["search-text", searchText],
    queryFn: () => fetchJobItems(searchText),
    enabled: Boolean(searchText),
    staleTime: 1000 * 60 * 5, // 5 minutes,
    refetchOnWindowFocus: false,
    retry: false,
  });
  const jobItems: TJobItem[] = data?.jobItems ?? [];
  return { status, error, isLoading, jobItems, isFetching } as const;
};

export const useJobItem = (id: number | null) => {
  const { status, error, isLoading, data } = useQuery({
    queryKey: ["job-item", id],
    queryFn: (): Promise<JobItemDetailApiResponse> => fetchJobItem(id),
    enabled: Boolean(id),
    staleTime: 1000 * 60 * 5, // 5 minutes,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const jobItem = data?.jobItem;
  return {
    status,
    error,
    isLoading,
    jobItem,
  } as const;
};

export const useJobItems = (ids: number[]) => {
  const results = useQueries({
    queries:
      ids?.map((id) => ({
        queryKey: ["job-item", id],
        queryFn: (): Promise<JobItemDetailApiResponse> => fetchJobItem(id),
        enabled: Boolean(id),
        staleTime: 1000 * 60 * 5, // 5 minutes,
        refetchOnWindowFocus: false,
        retry: false,
      })) ?? [],
  });
  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((item) => item !== undefined);

  const isLoading = results.some((result) => result.isLoading);
  return { jobItems, isLoading } as const;
};

export function useDebounce<T>(value: T, delay = 250): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

//--carousel

export const useCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      const hash = api.selectedScrollSnap();
      // toast.success(`moving carousel ${hash}`);
      setPage(hash);
    });
  }, [api]);

  const handleClicker = () => {
    if (api) {
      toast.success(`resetting carousel`);
      api.scrollTo(0);
    }
  };

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return { api, setApi, handleClicker, page, scrollNext, scrollPrev } as const;
};

export const useAnimationDelay = (trigger: number, delay: number = 100) => {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (trigger === 0) {
      timer = setTimeout(() => {
        setIsUp(true);
      }, delay);
    } else {
      timer = setTimeout(() => {
        setIsUp(false);
      }, delay);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [trigger]);

  return { isUp } as const;
};

//-----------------------------------------------------------------------------------FOR DEMO

export const useSiteHelpers = (
  // --> Returns a ref to focus and logic to handle initial prompting animation.
  // <-- Provide the page, intended page status for prompting, and prompt delay.
  page: number,
  promptingPage: number = 1,
  delay: number = 500
) => {
  const focusComponent = useRef<HTMLInputElement>(null);
  const { searchText } = useSearchTextContext();
  const { prompt, handleSetPrompt } = usePageContext();
  const IsPrompting = page === promptingPage && prompt === 1;

  useEffect(() => {
    let startAnimation: ReturnType<typeof setTimeout>;

    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();
      handleSetPrompt(0);
    };

    focusComponent.current?.focus();

    if (page === promptingPage) {
      document.addEventListener("click", handleClick);
      startAnimation = setTimeout(() => {
        handleSetPrompt(1);
      }, delay);
    }

    return () => {
      clearTimeout(startAnimation);
      document.removeEventListener("click", handleClick);
    };
  }, [page]);

  useEffect(() => {
    handleSetPrompt(0);
  }, [searchText]);

  return { focusComponent, IsPrompting };
};

//------------------------------------------------------------------------------------------END DEMO

export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const { noSearchText } = useSearchTextContext();
  useEffect(() => {
    const handleHashChange = () => {
      const hash = +window.location.hash.slice(1);
      setActiveId(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (noSearchText) {
      setActiveId(null);
    }
  }, [noSearchText]);

  return activeId;
}

//--contexts
export function useSafeContext<T>(context: Context<T | null>, name: string): T {
  const result = useContext(context);
  if (!result) {
    throw new Error(`${name} must be used within a ${name}Provider`);
  }
  return result;
}

export const usePageContext = () => useSafeContext(PageContext, "PageContext");

export const useSearchTextContext = () =>
  useSafeContext(SearchTextContext, "SearchTextContext");

export const useJobItemsContext = () =>
  useSafeContext(JobItemsContext, "JobItemsContext");

export const useActiveIdContext = () =>
  useSafeContext(ActiveIdContext, "ActiveIdContext");

export const useBookmarksContext = () =>
  useSafeContext(BookmarksContext, "BookmarksContext");

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
