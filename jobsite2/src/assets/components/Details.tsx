import React from "react";

export default function Details({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-red-100 p-1 grow-1 overflow-visible z-50 ">
      <div className="relative bg-pink-50 p-1 rounded-md h-full overflow-visible">
        {children}
      </div>
    </div>
  );
}
