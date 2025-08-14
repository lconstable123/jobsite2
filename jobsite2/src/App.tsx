import { Toaster } from "react-hot-toast";
import EntryForm from "./assets/components/EntryForm";
import {
  useAnimationDelay,
  usePageContext,
  useSiteHelpers,
} from "./assets/components/lib/hooks";
import Banner from "./assets/components/AtomicComponents/banner";
import PinkLines from "./assets/components/PinkLines";
import PageCarousel from "./assets/components/PageCarousel";

function App() {
  const { page, fontsLoaded } = usePageContext();

  {
    /* //-------------------------------------------------------------------------------------------------------FOR DEMO */
  }
  const { focusComponent, IsPrompting } = useSiteHelpers(page, 1, 2000);
  {
    /* //-------------------------------------------------------------------------------------------------------FOR DEMO */
  }
  const { isUp } = useAnimationDelay(page, 100);
  const height = !isUp ? "h-15" : "h-80";

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Banner pos={"top"} height={height} />
      <PinkLines position="top" isUp={isUp} />
      <div className="backgroundSplash  bg-opacity-20 overflow-hidden z-0">
        {/* //-------------------------------------------------------------------------------------------------------FOR DEMO */}
        <EntryForm prompting={IsPrompting} ref={focusComponent} />
        {/* //-------------------------------------------------------------------------------------------------------FOR DEMO */}
        {fontsLoaded && <PageCarousel />}
        <Toaster position="bottom-right" />
      </div>
      <PinkLines position="bottom" isUp={isUp} />
      <Banner pos={"bottom"} height={height} />
    </div>
  );
}

export default App;
