import { createContext, useState } from "react";
import { useDebounce } from "../lib/hooks";
import { useNavigate } from "react-router-dom";

type searchTextContextProviderProps = {
  searchText: string;
  handleChangeSearchText: (text: string) => void;
  debouncedSearchText: string;
  noSearchText: boolean;
};

export const SearchTextContext =
  createContext<searchTextContextProviderProps | null>(null);

export default function SearchtextContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState("");
  const noSearchText = searchText.length < 1;
  const debouncedSearchText = useDebounce(searchText);
  const nav = useNavigate();
  const handleChangeSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
    if (newSearchText.length < 1) {
      nav("/");
    }
  };

  return (
    <SearchTextContext.Provider
      value={{
        searchText,
        debouncedSearchText,
        handleChangeSearchText,
        noSearchText,
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}
