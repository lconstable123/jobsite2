import Flames from "./AtomicComponents/Flames";
import Spinner from "./AtomicComponents/Spinner";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  useActiveIdContext,
  useJobItem,
  useJobItemsContext,
  usePageContext,
  useSearchTextContext,
} from "./lib/hooks";
import JobDetail from "./JobDetail";
import { useEffect, useState } from "react";

export default function JobDetails() {
  // const { isLoading, isFetching } = useJobItemsContext();
  const { activeId } = useActiveIdContext();

  const { isLoading: isLoading2, jobItem } = useJobItem(activeId);
  const { totalNumberOfResults, isLoading } = useJobItemsContext();
  const { noSearchText } = useSearchTextContext();

  const { toggle1, bookmarksWindow } = usePageContext();

  const handleclick = () => {};

  const fadeOut = !bookmarksWindow ? "opacity-0" : "opacity-70";

  const secondbgstyle = toggle1 ? "h-full" : "h-0";

  return (
    <>
      <div
        className={`transition-all duration-400 absolute w-full h-full bg-amber-100 ${fadeOut} z-400 pointer-events-none`}
      ></div>

      <div
        className=" relative bg-[url('curve@1x-1.0s-77px-77px.svg')] bg-[length:10%_10%]   w-full h-full rounded-md ring-2 ring-amber-200 flex flex-col overflow-hidden "
        onClick={handleclick}
      >
        <div className="relative top-100   z-11 flex items-center justify-center ">
          <Flames />
        </div>

        <div
          id="detail"
          className="origin-top transition-all duration-250 pt-10 flex items-start justify-center h-full  "
        >
          {(isLoading || isLoading2) && <LoadingJobContent />}
          {!isLoading && !isLoading2 && jobItem && (
            <JobDetail jobItem={jobItem} />
          )}
          {!isLoading && !isLoading2 && !jobItem && (
            <EmptyJobContent
              totalNumberOfResults={totalNumberOfResults}
              noSearchText={noSearchText}
              isLoading={isLoading}
            />
          )}
        </div>

        <div
          className={`absolute transition-all duration-300 w-full bg-[url('/Wave-fainteryellow.svg')] z-11 ${secondbgstyle}`}
        ></div>
      </div>
    </>
  );
}

function EmptyJobContent({
  totalNumberOfResults,
  noSearchText,
  isLoading,
}: {
  totalNumberOfResults: number;
  noSearchText: boolean;
  isLoading: boolean;
}) {
  const [loadstyle, setLoadStyle] = useState("scale-0");

  useEffect(() => {
    setLoadStyle("scale-0");
    const handleDelay = setTimeout(() => {
      setLoadStyle("scale-100");
    }, 300);

    // setLoadStyle("scale-0");
    // requestAnimationFrame(() => {
    //   setLoadStyle("scale-100");
    // });
    return () => {
      clearTimeout(handleDelay);
    };
  }, [noSearchText, isLoading, totalNumberOfResults]);
  return (
    <section className="relative  font-light text-xl flex items-center justify-center w-full h-full p-4 rounded-md   z-100 starting:scale-0   ">
      <div
        className={` transition-all duration-250 flex uppercase items-center justify-center border-1  py-2 px-4 border-amber-200 bg-white rounded-xl gap-2 ${loadstyle}`}
      >
        <MagnifyingGlassIcon width={30} height={30} />
        {totalNumberOfResults === 0 ? "no results" : "found a list"}{" "}
        <MagnifyingGlassIcon width={30} height={30} />
      </div>
    </section>
  );
}

function LoadingJobContent() {
  return (
    <section className="w-full h-full flex justify-center align-center p-4 rounded-md   z-100   ">
      <Spinner />
      {/* <Scanner /> */}
    </section>
  );
}
