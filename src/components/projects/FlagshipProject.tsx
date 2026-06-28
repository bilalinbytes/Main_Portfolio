import type { Project } from "@/data/projects";
import HighlightsLine from "./HighlightsLine";
import ProjectLinks from "./ProjectLinks";
import ProjectScreenshot from "./ProjectScreenshot";
import StackLine from "./StackLine";
import StoryGrid from "./StoryGrid";

type FlagshipProjectProps = {
  project: Project;
};

const FlagshipProject = ({ project }: FlagshipProjectProps) => (
  <article aria-labelledby={`${project.slug}-title`} className="animate-fade-in-up">
    <header className="max-w-4xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
        01 · Flagship
      </p>
      <h3
        id={`${project.slug}-title`}
        className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white"
      >
        {project.title}
      </h3>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9 dark:text-slate-300">
        {project.impact}
      </p>
      <HighlightsLine
        highlights={project.highlights}
        className="mt-6 text-sm font-medium sm:text-[0.95rem]"
      />
    </header>

    <ProjectScreenshot
      src={project.image}
      alt={`${project.title} product interface`}
      title={project.title}
      priority
      aspect="cinema"
      className="mt-12 shadow-2xl shadow-slate-200/50 dark:shadow-black/40 lg:mt-16"
    />

    <StoryGrid story={project.story} className="mt-14 lg:mt-20" />

    <footer className="mt-12 flex flex-col gap-4 border-t border-slate-200/80 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.06]">
      <StackLine
        stack={project.stack}
        className="text-sm font-medium text-slate-500 dark:text-slate-400"
      />
      <ProjectLinks links={project.links} />
    </footer>
  </article>
);

export default FlagshipProject;
