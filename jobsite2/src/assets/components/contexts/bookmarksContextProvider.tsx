import { createContext, useEffect, useState } from "react";

import { useJobItemsContext, useLocalStorage } from "../lib/hooks";
import type { TJobItem } from "../lib/types";

type BookmarkProviderProps = {
  bookmarkedIds: number[];
  addBookmarkedId: (id: number) => void;
  lastStored: number | null;
  bookmarkedJobItems: TJobItem[];
  isLoading: boolean;
  clearIds: () => void;
};

export const BookmarksContext = createContext<BookmarkProviderProps | null>(
  null
);

export default function BookmarkContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  );
  const [lastStored, setLastStored] = useState<number | null>(null);
  const [bookmarkedJobItems, setBookmarkedJobItems] = useState<TJobItem[]>([]);
  const addBookmarkedId = (id: number) => {
    setBookmarkedIds((prev) => {
      if (prev?.includes(id)) {
        return prev.filter((bookmarkedId) => bookmarkedId !== id);
      } else {
        setLastStored(id);
        return [...(prev || []), id];
      }
    });
  };

  const { jobItems } = useJobItemsContext();
  useEffect(() => {
    setBookmarkedJobItems(
      jobItems.filter((jobItem) => bookmarkedIds?.includes(jobItem.id))
    );
  }, [bookmarkedIds]);

  const clearIds = () => {
    setBookmarkedIds([]);
    setLastStored(null);
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        addBookmarkedId,
        lastStored,
        isLoading: false,
        bookmarkedJobItems,
        clearIds,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
