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
        ? "translate-y-0"
        : "-translate-y-80"
      : isUp
      ? "translate-y-0"
      : "translate-y-80";

  if (position === "top") {
    return (
      <div id="top" className="">
        <div
          className={` overflow-hidden duration-700 transition-all absolute top-60 ${styleIn}  border-red-100`}
        >
          <div className="h-10 w-screen bg-red-100 border-t-3 border-red-300  "></div>
          <div className="mt-3 top-72 h-2 w-screen bg-red-100 border-b-3 border-red-300"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="bottom"
        className="absolute overflow-hidden h-full w-full top-0 left-0 "
      >
        <div
          className={` overflow-hidden duration-700 transition-all absolute bottom-60 z-1 border-t-3 border-red-300 ${styleIn}`}
        >
          <div className=" overflow-hidden  h-2 w-screen bg-red-100"></div>
          <div className=" overflow-hidden mt-3 h-10 w-screen bg-red-100 border-b-3 border-red-300"></div>
        </div>
      </div>
    );
  }
}
