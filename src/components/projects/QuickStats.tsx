import type { Project } from "@/data/projects";

type QuickStatsProps = {
  projects: Project[];
};

type Stat = {
  label: string;
  value: number;
  emoji: string;
};

const QuickStats = ({ projects }: QuickStatsProps) => {
  const stats: Stat[] = [
    { label: "Projects", value: projects.length, emoji: "📁" },
    {
      label: "Production Apps",
      value: projects.filter((p) => p.tag === "production" || p.difficulty === "production-grade").length,
      emoji: "🚀",
    },
    {
      label: "Enterprise",
      value: projects.filter((p) => p.tag === "enterprise").length,
      emoji: "🏢",
    },
    {
      label: "AI / ML",
      value: projects.filter((p) => p.tag === "ai-llm" || p.tag === "ml").length,
      emoji: "🤖",
    },
    {
      label: "Healthcare",
      value: projects.filter((p) => p.tag === "healthcare").length,
      emoji: "🩺",
    },
    {
      label: "Full Stack",
      value: projects.filter((p) => p.tag === "full-stack").length,
      emoji: "🌐",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/50 px-3.5 py-1.5 text-sm dark:border-white/[0.06] dark:bg-white/[0.02]"
        >
          <span aria-hidden="true" className="text-xs">{stat.emoji}</span>
          <span className="font-medium text-slate-800 dark:text-slate-200">
            {stat.value}
          </span>
          <span className="text-slate-500 dark:text-slate-400">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
