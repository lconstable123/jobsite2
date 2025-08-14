import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Page0 from "./Page0";
import Page1 from "./Page1";
import CaroselButton from "@/components/ui/CaroselButton";
import { usePageContext } from "./lib/hooks";

export default function PageCarousel() {
  const { setApi, canScrollNext, canScrollPrev, scrollNext, scrollPrev } =
    usePageContext();
  return (
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
        <CarouselItem id="item2" className=" flex items-center justify-center">
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
  );
}
