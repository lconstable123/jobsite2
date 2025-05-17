import toast from "react-hot-toast";
import ThickArrowLeft from "./ThickArrowLeft";

type CarouselbuttonProps = {
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  side: "left" | "right";
};

export default function CaroselButton({
  scrollPrev,
  scrollNext,
  canScrollPrev,
  canScrollNext,
  side,
}: CarouselbuttonProps) {
  const sideStyle = side === "left" ? "top-1/2 left-10" : "top-1/2 right-10";
  const activeStyle =
    side === "left"
      ? !canScrollPrev
        ? "opacity-30"
        : ""
      : !canScrollNext
      ? "opacity-30"
      : "";
  const handleScrollNext = () => {
    if (canScrollNext) {
      scrollNext();
    }
  };
  const handleScrollPrev = () => {
    if (canScrollPrev) {
      scrollPrev();
    }
  };
  //
  return (
    <button
      disabled={false}
      onClick={side === "left" ? handleScrollPrev : handleScrollNext}
      className={`absolute  w-15 h-30 -translate-y-1/2 bg-rose-200 rounded-full border-3 border-white shadow-xl z-500  ${sideStyle} ${activeStyle} transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl`}
    >
      <div
        className=" w-full
          rounded-4xl h-full border-1 border-rose-200  flex items-center justify-center"
      >
        <ThickArrowLeft size={70} color="#FF8A8A" side={side} />
      </div>

      <span className="sr-only">Previous slide</span>
    </button>
  );
}
