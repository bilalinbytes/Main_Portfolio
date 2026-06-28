import type { Project } from "@/data/projects";
import HighlightsLine from "./HighlightsLine";
import ProjectLinks from "./ProjectLinks";
import ProjectScreenshot from "./ProjectScreenshot";
import StackLine from "./StackLine";
import StoryGrid from "./StoryGrid";
import StarRating from "./StarRating";

type DomainCardProps = {
  project: Project;
};

const DomainCard = ({ project }: DomainCardProps) => (
  <article
    aria-labelledby={`${project.slug}-title`}
    className="group rounded-2xl border border-slate-200/50 transition-colors hover:border-slate-300/60 dark:border-white/[0.06] dark:hover:border-white/[0.12]"
  >
    <ProjectScreenshot
      src={project.image}
      alt={`${project.title} product interface`}
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

      <div className="mt-3 flex flex-wrap gap-x-2.5 gap-y-1 text-xs text-slate-400 dark:text-slate-500">
        {project.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <footer className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 pt-4 dark:border-white/[0.06]">
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
