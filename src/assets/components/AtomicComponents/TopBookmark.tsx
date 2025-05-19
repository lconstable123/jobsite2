import { twMerge } from "tailwind-merge";
import Bookmark from "./Bookmark";
import type { TJobItem } from "../lib/types";
import Yellowbar from "../Yellowbar";
export default function TopBookmark({
  jobItem,
  clickEvent,
  bookmarkscale,
  bubbleScale,
  handleAnimationEnd,
}: {
  jobItem: TJobItem | undefined;
  clickEvent: () => void;
  bookmarkscale: string;
  bubbleScale: string;
  handleAnimationEnd: () => void;
}) {
  return (
    <div
      className="absolute top-8
       sm:top-1 right-10  z-500 flex items-center justify-center
    -"
    >
      <div
        id="bk"
        className={twMerge(
          `absolute transition-all duration-250  z-200 bg-white w-15 h-15 rounded-full flex items-center  border-amber-200 border-2 justify-center hover:scale-120  ${bookmarkscale}`
        )}
      >
        <Bookmark id={jobItem?.id || 0} size={40} clickEvent={clickEvent} />
      </div>
      <Yellowbar
        bubbleScale={bubbleScale}
        handleAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
}
