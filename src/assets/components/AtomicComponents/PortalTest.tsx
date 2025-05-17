import { createPortal } from "react-dom";

import { useEffect, useState } from "react";

import { usePageContext } from "../lib/hooks";

export default function PortalTest() {
  const portalRoot = document.getElementById("portal");
  if (!portalRoot) {
    console.error("Portal root not found");
    return null;
  }
  const { page } = usePageContext();

  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (page === 0) {
      timer = setTimeout(() => {
        setIsUp(true);
      }, 900);
    } else {
      timer = setTimeout(() => {
        setIsUp(false);
      }, 100);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [page]);

  const bannerUp = isUp ? "bottom-0" : "-bottom-60";
  // bg-[url('/Wave-fainteryellow.svg')]
  return createPortal(
    <div className="absolute h-screen w-screen overflow-hidden">
      <div
        className={`transition-all duration-600  ease-in-out absolute
     left-1/2  p-1 origin-center w-[40%] ${bannerUp}  bg-rose-200 rounded-t-4xl z-300 h-30   -translate-x-1/2 outline-3 outline-amber-300  shadow-sm flex flex-col items-center overflow-hidden`}
      >
        <div className="   w-full h-full rounded-t-4xl z-30 bg-rose-100 p-1">
          <div className="   w-full h-full rounded-t-4xl z-30  bg-gray-50 flex flex-col items-center pt-4 text-gray-800">
            {/* <div className="absolute top-0 w-full h-3 bg-amber-300 z-0" /> */}
            <div className="   bg-white relative underline uppercase rounded-4xl px-5 py-1 font-family-inter  font-medium  text-2xl flex items-center border-1  border-double border-rose-200">
              <a href="https://www.lukeconstable.com/">VirtuallyAnything.xyz</a>
            </div>
            <div className="relative uppercase  rounded-2xl font-family-inter px-3 py-1 font-light mt-1 text-[8pt] flex items-center border-rose-200">
              Api mechanics courtesy of &nbsp;
              <a href="https://bytegrad.com/" className="underline">
                Wesley @ByteGrad.
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 w-full h-2 bg-amber-300 border-t-1 border-amber-200" /> */}
    </div>,
    portalRoot
  );
}
