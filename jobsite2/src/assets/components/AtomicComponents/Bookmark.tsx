import { useEffect, useState } from "react";
import {
  useActiveIdContext,
  useBookmarksContext,
  useJobItemsContext,
} from "../lib/hooks";

type BookmarkIconProps = {
  id: number;
  size: number | undefined;
  clickEvent: () => void;
  border?: boolean;
};

export default function Bookmark({ id, size, clickEvent }: BookmarkIconProps) {
  const [filled, setFilled] = useState(false);
  const { bookmarkedIds, addBookmarkedId } = useBookmarksContext();
  const { isLoading } = useJobItemsContext();
  const { activeId } = useActiveIdContext();
  const fillColor = filled ? "oklch(87.9% 0.169 91.605)" : "none";
  const strokeColor = !filled ? "oklch(87.9% 0.169 91.605)" : "none";

  useEffect(() => {
    if (!bookmarkedIds.includes(id || 0)) {
      setFilled(false);
    } else {
      setFilled(true);
    }
  }, [bookmarkedIds, activeId, isLoading, id]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    clickEvent();
    addBookmarkedId(id);
  };

  return (
    <div className="transition-all duration-400    hover:scale-130 rounded-lg p-0">
      <button
        onClick={handleClick}
        className="cursor-pointer  opacity-100 flex items-center justify-center"
      >
        <svg
          className="px-[1px] py-[1px] "
          width={String(size)}
          height={String(size)}
          viewBox="0 0 15 15"
          fill={fillColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 2C3.22386 2 3 2.22386 3 2.5V13.5C3 13.6818 3.09864 13.8492 3.25762 13.9373C3.41659 14.0254 3.61087 14.0203 3.765 13.924L7.5 11.5896L11.235 13.924C11.3891 14.0203 11.5834 14.0254 11.7424 13.9373C11.9014 13.8492 12 13.6818 12 13.5V2.5C12 2.22386 11.7761 2 11.5 2H3.5Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="0.2"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
