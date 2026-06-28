import type { Project } from "@/data/projects";
import HighlightsLine from "./HighlightsLine";
import ProjectLinks from "./ProjectLinks";
import ProjectScreenshot from "./ProjectScreenshot";
import StackLine from "./StackLine";
import StoryGrid from "./StoryGrid";
import StarRating from "./StarRating";

type CardSize = "hero" | "medium" | "grid";

type DomainCardProps = {
  project: Project;
  size?: CardSize;
};

const wrapperStyles: Record<CardSize, string> = {
  hero: "animate-fade-in-up",
  medium: "rounded-2xl border border-slate-200/70 p-6 sm:p-8 dark:border-white/[0.06]",
  grid: "rounded-xl border border-slate-200/50 p-5 dark:border-white/[0.06]",
};

const DomainCard = ({ project, size = "grid" }: DomainCardProps) => {
  if (size === "hero") {
    return (
      <article aria-labelledby={`${project.slug}-title`} className="animate-fade-in-up">
        <header className="max-w-4xl">
          <h3
            id={`${project.slug}-title`}
            className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white"
          >
            {project.title}
          </h3>
          <div className="mt-3 flex items-center gap-3">
            <StarRating rating={project.rating} />
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Flagship
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
            {project.impact}
          </p>
          <HighlightsLine
            highlights={project.highlights}
            className="mt-5 text-sm font-medium sm:text-[0.95rem]"
          />
        </header>

        <ProjectScreenshot
          src={project.image}
          alt={`${project.title} product interface`}
          title={project.title}
          priority
          aspect="cinema"
          className="mt-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/40 lg:mt-14"
        />

        <StoryGrid story={project.story} className="mt-12 lg:mt-16" />

        <footer className="mt-10 flex flex-col gap-4 border-t border-slate-200/80 pt-7 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.06]">
          <StackLine
            stack={project.stack}
            className="text-sm font-medium text-slate-500 dark:text-slate-400"
          />
          <ProjectLinks links={project.links} />
        </footer>
      </article>
    );
  }

  if (size === "medium") {
    return (
      <article
        aria-labelledby={`${project.slug}-title`}
        className="rounded-2xl border border-slate-200/70 dark:border-white/[0.06]"
      >
        <div className="grid items-start gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <StarRating rating={project.rating} />
            </div>
            <h3
              id={`${project.slug}-title`}
              className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-white"
            >
              {project.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              {project.impact}
            </p>
            <HighlightsLine highlights={project.highlights} className="mt-4 text-sm font-medium" />
            <StoryGrid story={project.story} compact className="mt-8" />
            <footer className="mt-8 flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.06]">
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
  }

  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="group rounded-xl border border-slate-200/50 p-5 transition-colors hover:border-slate-300/60 dark:border-white/[0.06] dark:hover:border-white/[0.12]"
    >
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
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <HighlightsLine highlights={project.highlights} className="text-xs font-medium" />
      </div>
      <footer className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 pt-4 dark:border-white/[0.06]">
        <StackLine
          stack={project.stack}
          className="text-xs font-medium text-slate-400 dark:text-slate-500"
        />
        <ProjectLinks links={project.links} />
      </footer>
    </article>
  );
};

export default DomainCard;
