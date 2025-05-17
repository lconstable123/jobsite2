import Container from "@/assets/components/Container";

import Sidebar from "./Sidebar";
import SidebarTop from "./Sidebar-top";
import Pagination from "./Pagination";
import Details from "./Details";
import JobDetails from "./JobDetails";
import JobList from "./JobList";

import {
  useActiveIdContext,
  useJobItem,
  useJobItemsContext,
  usePageContext,
} from "./lib/hooks";
import Shelf from "@/assets/components/BookmarksShelf";
import PortalTest from "./AtomicComponents/PortalTest";
import BookmarksCorner from "./BookmarkCorner";
import BookmarksButton from "./BookmarksButton";

export default function Page1() {
  // const [isUp, setIsUp] = useState(true);
  const { activeId } = useActiveIdContext();
  const { toggle1, handleToggle1 } = usePageContext();
  const { jobItem } = useJobItem(activeId);

  const {
    jobItemsSortedSliced: jobItems,
    isLoading: isItemsLoading,
    JobItemsAnimations,
    transitionJobList,
  } = useJobItemsContext();

  const toggle = () => {
    handleToggle1();
  };
  const translateOffset = toggle1 ? "h-100" : " h-50 translate-y-100";
  return (
    <section className="absolute ">
      <BookmarksCorner jobItem={jobItem} />
      <Container pagenum={1}>
        <Sidebar>
          <SidebarTop />
          <JobList
            jobItems={jobItems}
            JobItemsAnimations={JobItemsAnimations}
            isLoading={isItemsLoading}
            transitionJobList={transitionJobList}
            time={5}
            listDelay={1.5}
          />
          <Pagination />
        </Sidebar>
        <Details>
          <PortalTest />
          <BookmarksButton handleClick={() => []} />
          <JobDetails />
        </Details>
        <div className="  w-3 animation-all duration-500" onClick={toggle}>
          <div
            className={`  wee transition-all duration-200 ${translateOffset}  `}
          ></div>
        </div>
      </Container>
    </section>
  );
}
