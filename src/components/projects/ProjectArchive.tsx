import type { Project } from "@/data/projects";
import ProjectLinks from "./ProjectLinks";
import StackLine from "./StackLine";
import StoryGrid from "./StoryGrid";

type ProjectArchiveProps = {
  projects: Project[];
};

const ProjectArchive = ({ projects }: ProjectArchiveProps) => (
  <div className="border-t border-slate-200/80 pt-16 sm:pt-20 dark:border-white/[0.06]">
    <header className="mb-10 max-w-2xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
        Additional systems
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
        More engineering work
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 dark:text-slate-400">
        Supporting systems across infrastructure, applied ML, and full-stack delivery.
      </p>
    </header>

    <div className="divide-y divide-slate-200/80 dark:divide-white/[0.06]">
      {projects.map((project) => (
        <details key={project.slug} className="group">
          <summary className="cursor-pointer list-none rounded-lg py-6 outline-none transition-colors hover:bg-slate-50/80 focus-visible:ring-2 focus-visible:ring-teal-500/40 dark:hover:bg-white/[0.02] [&::-webkit-details-marker]:hidden">
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-8">
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h4>
                  <span className="hidden text-[11px] uppercase tracking-wider text-slate-400 sm:inline dark:text-slate-500">
                    {project.category}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {project.impact}
                </p>
              </div>

              <StackLine
                stack={project.stack}
                className="text-xs font-medium text-slate-400 sm:text-sm dark:text-slate-500"
              />

              <span className="text-xs font-medium text-teal-700 group-open:hidden dark:text-teal-400">
                Explore
              </span>
            </div>
          </summary>

          <div className="pb-8 pl-0 sm:pl-0">
            <StoryGrid story={project.story} compact className="mt-2 max-w-4xl" />
            <ProjectLinks links={project.links} className="mt-6" />
          </div>
        </details>
      ))}
    </div>
  </div>
);

export default ProjectArchive;
