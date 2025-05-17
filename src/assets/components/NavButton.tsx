import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import type { PaginationDirection } from "./lib/types";
import { usePageContext } from "./lib/hooks";

export function NavButton(direction: PaginationDirection) {
  const { handleChangePage } = usePageContext();

  return (
    <button
      onClick={() => handleChangePage(direction)}
      className=" flex gap-1 items-center rounded-md bg-gray-200 py-1 px-2  hover:bg-gray-300 transition-all duration-200"
    >
      {direction === "prev" ? (
        <>
          <ArrowLeftIcon />
          {direction}
        </>
      ) : (
        <>
          {direction}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
