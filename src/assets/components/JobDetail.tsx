import type { JobItemDetails } from "./lib/types";
import { usePageContext } from "./lib/hooks";
// import toast from "react-hot-toast";

export default function JobDetail({
  jobItem,
}: {
  jobItem: JobItemDetails | undefined;
}) {
  const { toggle1 } = usePageContext();
  // const { activeId } = useActiveIdContext();
  const togglestyle = toggle1 ? "top-15" : "-top-200";
  // let transitionstyle = "scale-100";

  return (
    <div
      id="main"
      className={`absolute transition-all duration-300 flex justify-start items-center px-3 z-12  ${togglestyle} starting:scale-70 ease-in-out
         `}
    >
      <div className="  w-full flex flex-col  justify-start items-center gap-2 mx-0 sm:mx-2 ">
        <div className="flex justify-center items-center flex-col  rounded-2xl    bg-white border-5 border-double border-rose-200 uppercase text-[8pt] sm:text-lg p-3 pb-2 sm:mb-5  sm:slowbounce font-light ">
          <div className="border-rose-100   text-sm sm:text-xl border-1  px-1 py-1 rounded-xl font-normal ">
            {jobItem?.title}
          </div>
          {jobItem?.company}
        </div>
        {/* <div className="jobDetailsBox px-6 py-1">{jobItem?.company}</div> */}
        <div className="jobDetailsBox sm:px-6 py-1  rounded-2xl mx-10  bg-white gap-3  text-gray-700 text-[8pt] sm:text-sm  ">
          <div className="bg-gray-50 py-1 px-2 rounded-xl">
            {jobItem?.location}
          </div>
          <div className="bg-gray-50 py-1 px-2 rounded-xl">
            {jobItem?.salary}
          </div>
          <div className="bg-gray-50 py-1 px-2 rounded-xl flex items-center">
            {jobItem?.duration}
          </div>
        </div>
        <div className=" flex justify-center gap-1 flex-wrap border-1 bg-white jobDetailsBox pb-1 ">
          {jobItem?.qualifications.slice(0, 7).map((qualification, index) => {
            return (
              <div
                style={{ animationDelay: `${index * 0.1}s` }}
                key={index}
                className=" text-gray-700 text-[8pt] sm:text-xs py-1 px-4  rounded-xl mx-1 mt-1 pausebounce   bg-gray-50 "
              >
                {qualification}
              </div>
            );
          })}
        </div>
        {/* //flex justify-evenly  rounded-2xl mx-10 mt-4   bg-white border-1 border-amber-200; */}
        <div
          className="jobDetailsBox
           text-center text-[7pt] sm:text-[10pt] font-light p-4 mt-2"
        >
          {jobItem?.description}
        </div>
        <div className="hidden sm:block w-full rounded-2xl mx-10 mt-2  bg-white border-1 border-pink-200">
          <p className="text-center border-b-1 border-pink-200 pb-1 pt-1">
            Reviews
          </p>
          <div className=" flex justify-center  my-2 px-1 flex-wrap gap-2  ">
            {jobItem?.reviews.map((review, index) => {
              return (
                <div
                  style={{ animationDelay: `${index * 0.1}s` }}
                  key={index}
                  className="text-center  italic flex items-center  text-gray-700 text-[7pt] sm:text-xs rounded-xl  px-2 py-1 bg-gray-50"
                >
                  "{review}"
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
