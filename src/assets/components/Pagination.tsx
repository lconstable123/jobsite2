import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

import { useJobItemsContext } from "./lib/hooks";

export default function Pagination() {
  const { currentPage, totalNumberOfPages } = useJobItemsContext();
  return (
    <section className="pagination grid grid-cols-[1fr_5fr_1fr] bg-gray-50 p-1 text-xs border-b-1 mt-auto border-b-gray-300 py-2 px-3">
      <div>{currentPage > 1 && <PaginationButton direction="prev" />}</div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700">{`${currentPage} / ${totalNumberOfPages}`}</p>
      </div>
      <div>
        {currentPage < totalNumberOfPages && (
          <PaginationButton direction="next" />
        )}
      </div>
    </section>
  );
}
type PaginationButtonProps = {
  direction: "prev" | "next";
};
function PaginationButton({ direction }: PaginationButtonProps) {
  const { handleSetCurrentPage } = useJobItemsContext();

  const handleClick = () => {
    handleSetCurrentPage(direction);
  };

  return (
    <button
      onClick={handleClick}
      className=" w-full flex items-center justify-center rounded-md bg-gray-200 py-1 px-2  hover:bg-gray-300 transition-all duration-200"
    >
      {direction === "prev" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </button>
  );
}
