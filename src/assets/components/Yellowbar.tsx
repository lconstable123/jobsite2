import { twMerge } from "tailwind-merge";
export default function Yellowbar({
  bubbleScale,
  handleAnimationEnd,
}: {
  bubbleScale: string;
  handleAnimationEnd: () => void;
}) {
  return (
    <section
      className={twMerge(
        `absolute border-6 border-white opacity-0 w-30 h-30 rounded-full z-10 ${bubbleScale}`
      )}
      onAnimationEnd={handleAnimationEnd}
    >
      {" "}
    </section>
  );
}
