import { archive, featuredSecondary, flagship } from "@/data/projects";
import FeaturedProject from "./projects/FeaturedProject";
import FlagshipProject from "./projects/FlagshipProject";
import ProjectArchive from "./projects/ProjectArchive";

const Projects = () => (
  <section
    id="projects"
    aria-labelledby="projects-heading"
    className="section-shell section-secondary"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <header className="mb-16 max-w-2xl sm:mb-20 lg:mb-24">
        <p className="section-kicker">Selected work</p>
        <h2 id="projects-heading" className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
          Systems built for production.
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
          Problem, constraint, architecture, outcome — in that order.
        </p>
      </header>

      <FlagshipProject project={flagship} />

      {featuredSecondary.map((project, index) => (
        <FeaturedProject key={project.slug} project={project} reverse={index % 2 === 1} />
      ))}

      <ProjectArchive projects={archive} />
    </div>
  </section>
);

export default Projects;
