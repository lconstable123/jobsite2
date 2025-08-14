import { useState } from "react";
import SortingButton from "./SortingButton";
import { useJobItemsContext } from "./lib/hooks";
import toast from "react-hot-toast";

export default function SortingControls() {
  const { handleChangeSortBy } = useJobItemsContext();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    toast.success(`Sorting by ${clicked ? "relevant" : "recent"}`);
    clicked ? handleChangeSortBy("relevant") : handleChangeSortBy("recent");
  };

  return (
    <section className="sorting flex items-center gap-1 ">
      <i className="fa fa-arrow-down-short-wide text-xs px-1"></i>

      <SortingButton isActive={clicked} text={""} onClick={handleClick} />
    </section>
  );
}
