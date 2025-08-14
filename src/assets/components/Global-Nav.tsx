import { NavButton } from "./NavButton";

export default function GlobalNav() {
  return (
    <div id="navButtons" className="fixed top-0 right-0 z-10">
      <NavButton direction="prev" />
      <NavButton direction="next" />
    </div>
  );
}
