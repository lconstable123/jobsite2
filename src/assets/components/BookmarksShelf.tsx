import { useEffect, useState } from "react";

import type { JobItemDetails } from "./lib/types";
import toast from "react-hot-toast";

import { useBookmarksContext } from "./lib/hooks";
import BookmarksButton from "./BookmarksButton";

import TopBookmark from "./AtomicComponents/TopBookmark";
export default function Shelf({
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
      // toast.error(`click not on current page ${jobItem?.id} to ${lastStored}`);
      return;
    }
    clickEvent();
  }, [bookmarkedIds]);

  const handleClick = () => {};

  return (
    <>
      <BookmarksButton handleClick={handleClick} />
    </>
  );
}
