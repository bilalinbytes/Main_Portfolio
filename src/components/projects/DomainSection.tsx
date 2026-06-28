import type { Project, DomainConfig } from "@/data/projects";
import DomainCard from "./DomainCard";

type DomainSectionProps = {
  domain: DomainConfig;
  projects: Project[];
};

const DomainSection = ({ domain, projects }: DomainSectionProps) => {
  if (projects.length === 0) return null;

  const heroProject = projects.find((p) => p.cardSize === "hero");
  const mediumProjects = projects.filter(
    (p) => p.cardSize === "medium" && p !== heroProject,
  );
  const gridProjects = projects.filter(
    (p) => p !== heroProject && !mediumProjects.includes(p),
  );

  return (
    <section
      aria-labelledby={`domain-${domain.id}-heading`}
      className="border-t border-slate-200/80 pt-14 sm:pt-18 lg:pt-22 dark:border-white/[0.06]"
    >
      <header className="mb-10 max-w-2xl">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          <span className="text-base" aria-hidden="true">{domain.emoji}</span>
          {domain.label}
        </p>
        <h3
          id={`domain-${domain.id}-heading`}
          className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-white"
        >
          {domain.label}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 dark:text-slate-400">
          {domain.description}
        </p>
      </header>

      <div className="space-y-10">
        {heroProject && (
          <DomainCard project={heroProject} size="hero" />
        )}

        {mediumProjects.map((project) => (
          <DomainCard key={project.slug} project={project} size="medium" />
        ))}

        {gridProjects.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gridProjects.map((project) => (
              <DomainCard key={project.slug} project={project} size="grid" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainSection;
