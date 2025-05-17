export default function SkillComponents({
  index,
  skill,
}: {
  index: number;
  skill: string;
}) {
  return (
    <div
      style={{ animationDelay: `${index * 0.4}s` }}
      className={`pausebounce  transition-all font-light font-family-inter uppercase text-[9pt] px-3 py-1 border-rose-100 rounded-2xl border-1 text-center bg-gray-50`}
    >
      {skill}
    </div>
  );
}
