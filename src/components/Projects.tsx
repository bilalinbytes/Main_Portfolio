import { useState, useMemo } from "react";
import { domains, projects } from "@/data/projects";
import type { ProjectTag } from "@/data/projects";
import DomainSection from "./projects/DomainSection";
import FilterBar from "./projects/FilterBar";
import QuickStats from "./projects/QuickStats";

const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

const Projects = () => {
  const [view, setView] = useState<ProjectTag | "all">("all");
  const [technology, setTechnology] = useState("all");

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        if (view !== "all" && p.tag !== view) return false;
        if (technology !== "all" && !p.stack.includes(technology)) return false;
        return true;
      }),
    [view, technology],
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-shell section-secondary"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-4 max-w-2xl sm:mb-6 lg:mb-8">
          <p className="section-kicker">Selected work</p>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
          >
            Systems built for production.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Problem, constraint, architecture, outcome — in that order.
          </p>
        </header>

        <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-center lg:justify-between">
          <QuickStats projects={filtered} />
          <FilterBar
            view={view}
            technology={technology}
            technologies={allTechnologies}
            onViewChange={setView}
            onTechnologyChange={setTechnology}
          />
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-sm text-slate-500 dark:text-slate-400">
            No projects match the selected filters.
          </p>
        ) : (
          domains.map((domain) => (
            <DomainSection
              key={domain.id}
              domain={domain}
              projects={filtered.filter((p) => p.domain === domain.id)}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
