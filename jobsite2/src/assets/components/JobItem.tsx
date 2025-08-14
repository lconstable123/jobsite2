import { useEffect, useState } from "react";
import Bookmark from "./AtomicComponents/Bookmark";
import type { TJobItem } from "./lib/types";

export default function JobItem({
  jobItem,
  index,
  isActive,
  reset,
  transition,
  time = 5,
  listDelay = 1.5,
}: {
  jobItem: TJobItem;
  index: number;
  isActive: boolean;
  reset: boolean;
  transition: boolean;
  time?: number;
  listDelay?: number;
  isAnimated?: boolean;
}) {
  const [mouseOver, setMouseOver] = useState(false);
  const mouseOverStyle = mouseOver
    ? "translate-x-2 md:translate-x-4"
    : "translate-x-0";
  const [transIn, setTransIn] = useState("-translate-x-100");

  const delay = Math.round((index + 1) ** listDelay) * time + 1;
  const duration = `duration-[${delay}]`;
  const activeStyling = isActive ? "bg-gray-100" : "bg-white";

  useEffect(() => {
    !transition ? setTransIn("-translate-x-100") : setTransIn("translate-x-0");
    const Delayhandle = setTimeout(() => {
      !transition
        ? setTransIn("translate-x-0")
        : setTransIn("-translate-x-100");
    }, delay);
    return () => clearTimeout(Delayhandle);
  }, [transition]);

  useEffect(() => {
    setTransIn("-translate-x-100");
    const Delayhandle = setTimeout(() => {
      setTransIn("translate-x-0");
    }, delay);
    return () => clearTimeout(Delayhandle);
  }, [reset]);

  const handleClick = () => {};

  return (
    <>
      <li
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        id="posting"
        className={`text-[5pt] sm:text-[9pt] transform transition-all ${duration} font-family-inter ${transIn}  border-amber-500 pl-2 md:pl-4 pr-2 py-1 ${activeStyling} `}
      >
        <a href={`#${jobItem.id}`} className="flex justify-between  ">
          <div
            className={`transition-all flex flex-col justify-between ${mouseOverStyle}`}
          >
            <div>{jobItem.title.slice(0, 27)}</div>
            <div className="font-thin  italic ">{jobItem.company}</div>
          </div>

          <div className="flex gap-1  justify-between items-center cursor-default">
            <div
              id="daysAgo"
              className="text-[5pt] sm:text-[7pt]  border-0 sm:border-1 p-1  h-4 flex  items-center border-gray-200 rounded-xl"
            >
              {jobItem.daysAgo} {+jobItem.daysAgo > 1 ? "days ago" : "day ago"}
            </div>
            <Bookmark id={jobItem.id} size={20} clickEvent={handleClick} />
          </div>
        </a>
      </li>
    </>
  );
}
