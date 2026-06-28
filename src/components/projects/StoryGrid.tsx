import type { ProjectStory } from "@/data/projects";
import { cn } from "@/lib/utils";

const STORY_LABELS: { key: keyof ProjectStory; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "challenge", label: "Engineering challenge" },
  { key: "solution", label: "Solution" },
  { key: "impact", label: "Impact" },
];

type StoryGridProps = {
  story: ProjectStory;
  compact?: boolean;
  className?: string;
};

const StoryGrid = ({ story, compact = false, className }: StoryGridProps) => (
  <dl
    className={cn(
      compact
        ? "grid gap-8 sm:grid-cols-2"
        : "grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12",
      className,
    )}
  >
    {STORY_LABELS.map(({ key, label }) => (
      <div key={key}>
        <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {label}
        </dt>
        <dd
          className={cn(
            "mt-3 text-slate-600 dark:text-slate-300",
            compact ? "text-sm leading-6" : "text-sm leading-7 sm:text-[0.95rem]",
          )}
        >
          {story[key]}
        </dd>
      </div>
    ))}
  </dl>
);

export default StoryGrid;
