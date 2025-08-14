import { useEffect, useState } from "react";
import { useBookmarksContext, useJobItems } from "./lib/hooks";
import JobList from "./JobList";
import Nobookmarks from "./AtomicComponents/nobookmarks";

const BookmarksPopover = ({ isOpen }: { isOpen: boolean }) => {
  const { bookmarkedIds, clearIds } = useBookmarksContext();
  const { jobItems, isLoading } = useJobItems(bookmarkedIds);
  const [windowSize, setWindowSize] = useState("scale-30");
  useEffect(() => {}, [bookmarkedIds]);

  useEffect(() => {
    setWindowSize(!isOpen ? "scale-30 opacity-0" : "scale-85 opacity-100");
  }, [isOpen]);

  const handleClick = () => {
    clearIds();
  };

  return (
    <aside
      className={`  transition-all  duration-300 bookmarks-btn  w-80 font-light  absolute  left-1 top-9 z-0  bg-white rounded-md shadow-lg overflow-clip  pb-1  origin-top min-h-30 ${windowSize}`}
    >
      <div className="w-full h-2 bg-amber-300"></div>
      <div className="flex flex-col items-center h-full ">
        <button
          onClick={handleClick}
          className=" w-20 font-light text-[10pt] ring-1 ring-amber-200 bg-white mt-2 px-2 rounded-2xl"
        >
          clear all
        </button>
      </div>

      {bookmarkedIds.length === 0 && <Nobookmarks />}

      <JobList
        jobItems={jobItems}
        JobItemsAnimations={false}
        isLoading={isLoading}
        transitionJobList={false}
        time={70}
        listDelay={0}
        isAnimated={false}
      />
    </aside>
  );
};

export default BookmarksPopover;
