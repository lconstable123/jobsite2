import React, { useEffect } from "react";
import { usePageContext } from "./lib/hooks";
type ContainerProps = {
  children: React.ReactNode;
  pagenum: number;
};
export default function ContainerReactive({
  children,
  pagenum,
}: ContainerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [transform, setTransform] = React.useState("translateX(0px)");
  const { page } = usePageContext();
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const screenWidth = window.innerWidth;
      const offset = screenWidth + containerWidth;
      if (page === pagenum) {
        setTransform("translateX(0px)");
      } else if (page === pagenum - 1) {
        setTransform(`translateX(${offset}px)`);
      } else if (page === pagenum + 1) {
        setTransform(`translateX(-${offset}px)`);
      } else {
      }
    }
  }, [page]);

  return (
    <div
      ref={containerRef}
      className=" animation-all transition-transform duration-800 delay-100 flex lg:w-250  h-150 rounded-md shadow-2xl  bg-gray-100 overflow-hidden md:w-1/2"
      style={{ transform }}
    >
      {children}
    </div>
  );
}
