import React from "react";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white   flex flex-col basis-1/3 overflow-hidden   ">
      {children}
    </div>
  );
}
