import ClockIcon from "./AtomicComponents/Clock-icon";
import { useState } from "react";

type SortingButtonProps = {
  text: string;
  onClick: () => void;
  isActive: boolean;
};

export default function SortingButton({
  text,
  isActive,
  onClick,
}: SortingButtonProps) {
  const ActiveStyle = isActive ? "bg-gray-300" : "bg-gray-200";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`uppercase cursor-pointer text-[8pt] ${ActiveStyle} py-1 px-2 rounded-sm transition-all duration-200`}
    >
      {text}
      <ClockIcon filled={isHovered} />
    </button>
  );
}
