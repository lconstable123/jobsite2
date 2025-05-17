import { useState } from "react";
import Bookmark from "./AtomicComponents/Bookmark";
import type { TJobItem } from "./lib/types";

export default function JobItemSecondary({
  jobItem,

  isActive,
}: {
  jobItem: TJobItem;
  index: number;
  isActive: boolean;
}) {
  const [mouseOver, setMouseOver] = useState(false);
  const mouseOverStyle = mouseOver ? "translate-x-4" : "translate-x-0";

  const activeStyling = isActive ? "bg-gray-100" : "bg-white";

  const handleClick = () => {};

  return (
    <>
      <li
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        id="posting"
        className={`transform transition-all font-family-inter border-amber-500 pl-4 pr-2 py-1 ${activeStyling}  `}
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
              className="text-[7pt] border p-1  h-4 flex  items-center border-gray-200 rounded-xl"
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
