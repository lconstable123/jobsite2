export default function ThickArrowLeft({
  size = 20,

  color = "currentColor",
  side,
}: {
  size?: number;
  fill?: boolean;
  color?: string;
  side: "left" | "right";
}) {
  const orientation =
    side !== "left" ? "rotate-180 -translate-x-[3px]" : "translate-x-[3px]";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 85"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`${orientation} `}
    >
      <path d="M3.16,33.82L34.54,2.44c5.21-5.21,14.12-1.52,14.12,5.85v67.52c0,7.44-9.06,11.1-14.23,5.74L3.02,48.95c-4.09-4.24-4.02-10.97.14-15.13Z" />
    </svg>
  );
}
