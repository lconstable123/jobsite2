import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  pagenum: number;
};
export default function Container({ children }: ContainerProps) {
  return (
    <>
      <div
        className=" start-scaleanim animation-all transition-transform duration-600 flex  w-screen lg:w-250 
      h-[80vh] sm:h-[70vh]   rounded-lg overflow-hidden shadow-2xl  bg-gray-100  z-10 "
      >
        {children}
      </div>
    </>
  );
}
