import type { Project, ProjectTag } from "@/data/projects";
import { viewOptions } from "@/data/projects";
import HighlightsLine from "./HighlightsLine";
import ProjectLinks from "./ProjectLinks";
import ProjectScreenshot from "./ProjectScreenshot";
import StackLine from "./StackLine";
import StarRating from "./StarRating";

type DomainCardProps = {
  project: Project;
};

const tagEmoji = (tag: ProjectTag): string =>
  viewOptions.find((o) => o.value === tag)?.emoji ?? "";

const difficultyLabel: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  "production-grade": "Production Grade",
};

const DomainCard = ({ project }: DomainCardProps) => (
  <article
    aria-labelledby={`${project.slug}-title`}
    className="group rounded-2xl border border-slate-200/50 transition-colors hover:border-slate-300/60 dark:border-white/[0.06] dark:hover:border-white/[0.12]"
  >
    <ProjectScreenshot
      src={project.image}
      alt={project.title}
      title={project.title}
      aspect="wide"
      className="rounded-t-2xl"
    />

    <div className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3
          id={`${project.slug}-title`}
          className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white"
        >
          {project.title}
        </h3>
        <StarRating rating={project.rating} />
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {project.impact}
      </p>

      <HighlightsLine
        highlights={project.highlights}
        className="mt-4 text-xs font-medium"
      />

      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-white/[0.04] dark:text-slate-400">
          <span aria-hidden="true">{tagEmoji(project.tag)}</span>
          {viewOptions.find((o) => o.value === project.tag)?.label ?? project.tag}
        </span>
        <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-white/[0.04] dark:text-slate-400">
          {difficultyLabel[project.difficulty] ?? project.difficulty}
        </span>
        {project.status === "live-demo" && (
          <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
            Live Demo
          </span>
        )}
      </div>

      <p className="mt-3 text-xs text-slate-400 dark:text-slate-500" aria-label="Skills">
        {project.skills.join(" · ")}
      </p>

      <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 pt-3 dark:border-white/[0.06]">
        <StackLine
          stack={project.stack}
          className="text-xs font-medium text-slate-400 dark:text-slate-500"
        />
        <ProjectLinks links={project.links} />
      </footer>
    </div>
  </article>
);

export default DomainCard;
