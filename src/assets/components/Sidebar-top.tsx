import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

export default function SidebarTop() {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-1 text-xs border-b-1 border-b-gray-300 py-2 px-3 ">
      <ResultsCount results={12} />
      <SortingControls />
    </div>
  );
}
