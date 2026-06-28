import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import HighlightsLine from "./HighlightsLine";
import ProjectLinks from "./ProjectLinks";
import ProjectScreenshot from "./ProjectScreenshot";
import StackLine from "./StackLine";
import StoryGrid from "./StoryGrid";

type FeaturedProjectProps = {
  project: Project;
  reverse?: boolean;
};

const FeaturedProject = ({ project, reverse = false }: FeaturedProjectProps) => (
  <article
    aria-labelledby={`${project.slug}-title`}
    className="border-t border-slate-200/80 py-16 sm:py-20 lg:py-24 dark:border-white/[0.06]"
  >
    <div
      className={cn(
        "grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20",
        reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
      )}
    >
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
          {String(project.rank).padStart(2, "0")} · Featured
        </p>
        <h3
          id={`${project.slug}-title`}
          className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
        >
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
          {project.impact}
        </p>
        <HighlightsLine highlights={project.highlights} className="mt-5 text-sm font-medium" />
        <StoryGrid story={project.story} compact className="mt-10" />
        <footer className="mt-10 flex flex-col gap-4 border-t border-slate-200/80 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.06]">
          <StackLine
            stack={project.stack}
            className="text-sm font-medium text-slate-500 dark:text-slate-400"
          />
          <ProjectLinks links={project.links} />
        </footer>
      </div>

      <ProjectScreenshot
        src={project.image}
        alt={`${project.title} product interface`}
        title={project.title}
        aspect="wide"
        className="lg:sticky lg:top-24"
      />
    </div>
  </article>
);

export default FeaturedProject;
