import { useEffect } from "react";
import JobItem from "./JobItem";
import { useActiveIdContext } from "./lib/hooks";
import Spinner from "./AtomicComponents/Spinner";

import type { TJobItem } from "./lib/types";
import JobItemSecondary from "./JobItemSecondary";

type JobListProps = {
  jobItems: TJobItem[];
  isLoading: boolean;
  JobItemsAnimations: boolean;
  transitionJobList: boolean;
  time?: number;
  listDelay?: number;
  isAnimated?: boolean;
};

export default function JobList({
  jobItems,
  isLoading,
  JobItemsAnimations,
  transitionJobList,
  time = 5,
  listDelay = 1.5,
  isAnimated = true,
}: JobListProps) {
  const { activeId } = useActiveIdContext();

  useEffect(() => {}, [JobItemsAnimations]);

  return (
    <>
      {/* <Scanner /> */}
      {isLoading ? (
        <Spinner />
      ) : (
        // <Scanner />

        <ul className=" bookmarks-btn mt-2  jobList flex flex-col  bg-white text-xs min-height-[200px]">
          {jobItems.map((jobItem, index) => {
            const isActive = activeId === jobItem.id;

            return isAnimated ? (
              <JobItem
                key={jobItem.id}
                jobItem={jobItem}
                index={index}
                reset={JobItemsAnimations}
                isActive={isActive}
                transition={transitionJobList}
                time={time}
                listDelay={listDelay}
                isAnimated={true}
              />
            ) : (
              <JobItemSecondary
                key={jobItem.id}
                jobItem={jobItem}
                index={index}
                isActive={isActive}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
