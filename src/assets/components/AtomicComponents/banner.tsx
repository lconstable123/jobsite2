export default function Banner({
  pos,
  height,
}: {
  pos: "top" | "bottom";
  height: string;
}) {
  const posStyle = pos === "top" ? "top-0" : "bottom-0";
  return (
    <div
      className={` flex flex-col items-start absolute transition-all duration-500 ${height} bg-[url('/Maze-softred.svg')] bg-center w-full -z-0 border-1 border-red-200 ${posStyle}`}
    ></div>
  );
}
