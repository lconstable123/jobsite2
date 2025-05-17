import { Toaster } from "react-hot-toast";
// import GlobalNav from "./assets/components/Global-Nav";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Page1 from "./assets/components/Page1";
import EntryForm from "./assets/components/EntryForm";

import { usePageContext, useSiteHelpers } from "./assets/components/lib/hooks";
import Banner from "./assets/components/AtomicComponents/banner";
import { useEffect, useState } from "react";
import Page0 from "./assets/components/Page0";

import CaroselButton from "./components/ui/CaroselButton";
import PinkLines from "./PinkLines";

function App() {
  const { setApi, page, canScrollNext, canScrollPrev, scrollNext, scrollPrev } =
    usePageContext();

  const { inputRef, IstextFieldPrompting } = useSiteHelpers(page);

  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (page === 0) {
      timer = setTimeout(() => {
        setIsUp(true);
      }, 100);
    } else {
      timer = setTimeout(() => {
        setIsUp(false);
      }, 100);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [page]);
  const height = !isUp ? "h-15" : "h-80";

  return (
    <>
      <Banner pos={"top"} height={height} />
      {/* <BackgroundParticles /> */}

      <PinkLines position="top" isUp={isUp} />
      <div className="backgroundSplash  bg-opacity-20 overflow-hidden z-0">
        <EntryForm prompting={IstextFieldPrompting} ref={inputRef} />

        <Carousel
          className="w-screen"
          opts={{ align: "center", loop: true }}
          setApi={setApi}
          z-index={200}
        >
          <CarouselContent className="flex">
            <CarouselItem
              id="item1"
              className="relative flex items-center justify-center"
            >
              <Page0 />
            </CarouselItem>
            <CarouselItem
              id="item2"
              className=" flex items-center justify-center"
            >
              <Page1 />
            </CarouselItem>
          </CarouselContent>

          <CaroselButton
            canScrollNext={canScrollNext}
            canScrollPrev={canScrollPrev}
            scrollNext={scrollNext}
            scrollPrev={scrollPrev}
            side="left"
          />
          <CaroselButton
            canScrollNext={canScrollNext}
            canScrollPrev={canScrollPrev}
            scrollNext={scrollNext}
            scrollPrev={scrollPrev}
            side="right"
          />
        </Carousel>

        <Toaster position="bottom-right" />
      </div>
      <PinkLines position="bottom" isUp={isUp} />
      <Banner pos={"bottom"} height={height} />
    </>
  );
}

export default App;
