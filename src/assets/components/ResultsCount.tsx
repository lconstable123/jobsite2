import { useJobItemsContext } from "./lib/hooks";

export default function ResultsCount() {
  const { totalNumberOfResults } = useJobItemsContext();

  return <div>{totalNumberOfResults} results</div>;
}
