export default function FloatingParticle({
  delay,
  size,
  top,
}: {
  delay: number;
  size: number;
  top: string;
}) {
  return (
    <div
      className="absolute left-0 transition-all  bg-white rounded-full floatx z-400"
      style={{
        width: size,
        height: size,
        top: top,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
