import React, { useMemo } from "react";
import FloatingParticle from "./FloatingParticle";

export default function BackgroundParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, () => ({
      delay: Math.random() * 20,
      size: Math.random() * 10 + 5,
      top: `${Math.random() * 100}%`,
    }));
  }, []); // empty deps = only runs once

  return (
    <div className="absolute h-full w-full -left-10 inset-0 z-400 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}
    </div>
  );
}
