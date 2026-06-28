import { domains, projects } from "@/data/projects";
import type { ProjectDomain } from "@/data/projects";
import DomainSection from "./projects/DomainSection";

const Projects = () => (
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

      {domains.map((domain) => (
        <DomainSection
          key={domain.id}
          domain={domain}
          projects={projects.filter((p) => p.domain === domain.id)}
        />
      ))}
    </div>
  </section>
);

export default Projects;
