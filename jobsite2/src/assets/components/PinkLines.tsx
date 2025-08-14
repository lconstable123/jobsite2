export default function PinkLines({
  position,
  isUp,
}: {
  position: "top" | "bottom";
  isUp: boolean;
}) {
  const styleIn =
    position === "top"
      ? isUp
        ? "md:translate-y-0"
        : "-translate-y-80"
      : isUp
      ? "translate-y-0"
      : "translate-y-80";

  if (position === "top") {
    return (
      <div id="top" className="">
        <div
          className={` overflow-hidden duration-700 transition-all absolute  top-20 md:top-50 ${styleIn}  border-red-100`}
        >
          <div className="h-10 w-screen bg-red-100 border-t-3 border-red-300  "></div>
          <div className="mt-3 top-72 h-2 w-screen bg-red-100 border-b-3 border-red-300"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="top" className="">
        <div
          className={`z-20 overflow-hidden duration-700 transition-all absolute  bottom-20 md:bottom-50 ${styleIn}  border-red-100`}
        >
          <div className=" top-72 h-2 w-screen bg-red-100 border-t-3 border-red-300"></div>
          <div className="h-10 w-screen bg-red-100 border-b-3 mt-3 border-red-300  "></div>
        </div>
      </div>
    );
  }
}
