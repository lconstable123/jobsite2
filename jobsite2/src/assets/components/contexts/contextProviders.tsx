import React from "react";
import SearchtextContextProvider from "./searchTextContextProvider";
import JobItemsContextProvider from "./jobItemsContextProvider";
import PageContextProvider from "./pageContextProvider";
import ActiveIdContextProvider from "./activeIdContentProvider";
import BookmarksContextProvider from "./bookmarksContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SearchtextContextProvider>
        <JobItemsContextProvider>
          <BookmarksContextProvider>
            <PageContextProvider>
              <ActiveIdContextProvider>{children}</ActiveIdContextProvider>
            </PageContextProvider>
          </BookmarksContextProvider>
        </JobItemsContextProvider>
      </SearchtextContextProvider>
    </QueryClientProvider>
  );
}
