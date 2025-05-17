import { useEffect, useState } from "react";

import type { JobItemDetails } from "./lib/types";

import { useBookmarksContext } from "./lib/hooks";

import TopBookmark from "./AtomicComponents/TopBookmark";
export default function BookmarksCorner({
  jobItem,
}: {
  jobItem: JobItemDetails | undefined;
}) {
  const [bubbleScale, setBubbleScale] = useState("fadeOut");
  let bookmarkscale = jobItem ? "scale-100" : "scale-0";
  const { bookmarkedIds, lastStored } = useBookmarksContext();

  const clickEvent = () => {
    setBubbleScale("fadeOut");
    requestAnimationFrame(() => {
      setBubbleScale("fadeIn");
    });
    // setTimeout(() => {}, 100);
  };

  const handleAnimationEnd = () => {
    setBubbleScale("fadeOut");
  };

  useEffect(() => {
    if (jobItem?.id !== lastStored || !bookmarkedIds?.includes(lastStored)) {
      return;
    }
    clickEvent();
  }, [bookmarkedIds]);

  return (
    <>
      <TopBookmark
        clickEvent={clickEvent}
        jobItem={jobItem}
        bookmarkscale={bookmarkscale}
        handleAnimationEnd={handleAnimationEnd}
        bubbleScale={bubbleScale}
      />
    </>
  );
}
