import { createContext, use, useState } from "react";
import toast from "react-hot-toast";
import type { PaginationDirection } from "../lib/types";
import { useCarousel } from "../lib/hooks";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type pageContextProviderProps = {
  page: number;
  handleChangePage: (direction: PaginationDirection) => void;
  handleToggle1: () => void;
  toggle1: boolean;
  bookmarksWindow: boolean;
  toggleBookmarksWindow: () => void;
  closeBookmarksWindow: () => void;
  openBookmarksWindow: () => void;
  prompt: number;
  handleSetPrompt: (value: number) => void;
  api: any;
  setApi: any;
  scrollNext: () => void;
  scrollPrev: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

export const PageContext = createContext<pageContextProviderProps | null>(null);

export default function PageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [page, SetPage] = useState<number>(0);
  const [prompt, setPrompt] = useState(0);
  const [toggle1, setToggle1] = useState(true);
  const [bookmarksWindow, setBookmarksWindow] = useState(false);

  const { api, setApi, handleClicker, page, scrollNext, scrollPrev } =
    useCarousel();

  const handleChangePage = (direction: PaginationDirection) => {
    // toast.success(`moving pageddd ${direction}`);
    // if (direction === "next") {
    //   SetPage((prevPage) => prevPage + 1);
    // } else if (direction === "prev") {
    //   SetPage((prevPage) => prevPage - 1);
    // }
  };
  const canScrollPrev = true;
  const canScrollNext = true;

  const handleToggle1 = () => {
    setToggle1((prev) => !prev);
  };

  const handleSetPrompt = (value: number) => {
    // toast.success(`prompt set to ${value}`);
    setPrompt(value);
  };

  const toggleBookmarksWindow = () => {
    setBookmarksWindow((prev) => !prev);
  };

  const closeBookmarksWindow = () => {
    setBookmarksWindow(false);
  };

  const openBookmarksWindow = () => {
    setBookmarksWindow(true);
  };

  return (
    <PageContext.Provider
      value={{
        page,
        handleChangePage,
        handleToggle1,
        toggle1,
        bookmarksWindow,
        toggleBookmarksWindow,
        closeBookmarksWindow,
        openBookmarksWindow,
        prompt,
        handleSetPrompt,
        api,
        setApi,
        canScrollNext,
        canScrollPrev,
        scrollNext,
        scrollPrev,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
