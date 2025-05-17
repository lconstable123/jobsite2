import React from "react";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white  min-w-75 flex flex-col overflow-hidden ">
      {children}
    </div>
  );
}
