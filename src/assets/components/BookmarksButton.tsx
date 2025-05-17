import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

import BookmarksPopover from "./BookmarksPopover";
import { usePageContext } from "./lib/hooks";

export default function BookmarksButton({}: { handleClick: () => void }) {
  const [isIn, setIsIn] = useState("left-2");

  const { bookmarksWindow, toggleBookmarksWindow, closeBookmarksWindow } =
    usePageContext();

  const handle = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    toggleBookmarksWindow();
  };

  const handleMouseEnter = () => {
    setIsIn("left-6");
  };
  const handleMouseExit = () => {
    setIsIn("left-2");
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();

      if (
        e.target instanceof HTMLElement &&
        !e.target.closest(".bookmarks-btn")
      ) {
        if (bookmarksWindow) {
          closeBookmarksWindow();
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [bookmarksWindow]);

  return (
    <>
      <div className="absolute top-1 left-1 w-full z-600">
        <BookmarksPopover isOpen={bookmarksWindow} />
      </div>

      <section
        onClick={handle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        className="absolute top-1 left-1
      z-500 flex items-center justify-start w-full h-10 "
      >
        <button
          className={`absolute font-light tracking-wider  transition-all text-[9pt] flex items-center justify-center uppercase bg-white border-1 border-amber-200 rounded-lg   ${isIn}`}
        >
          <TriangleDownIcon /> bookmarks <TriangleDownIcon />
        </button>
      </section>
    </>
  );
}

// import { TriangleDownIcon } from "@radix-ui/react-icons";
// import BookmarksPopover from "./BookmarksPopover";
// import { useRef, useState } from "react";
// import { useOnClickOutside } from "../lib/hooks";

// export default function BookmarksButton() {
//   const [isOpen, setIsOpen] = useState(false);
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const popoverRef = useRef<HTMLDivElement>(null);

//   function togglePopover() {
//     setIsOpen((prev) => !prev);
//   }
//   useOnClickOutside([buttonRef, popoverRef], () => {
//     setIsOpen(false);
//   });

//   return (
//     <section>
//       <button ref={buttonRef} onClick={togglePopover} className="bookmarks-btn">
//         Bookmarks <TriangleDownIcon />
//       </button>
//       {isOpen && <BookmarksPopover ref={popoverRef} />}
//     </section>
//   );
// }
