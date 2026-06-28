import { useState } from "react";
import { ExternalLink, Github, Eye, ChevronDown, ChevronUp } from "lucide-react";
import { projects, type Project } from "@/data/projects";

// ─── Image Component ──────────────────────────────────────────

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-video items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <svg className="mx-auto h-8 w-8 text-slate-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
          <p className="mt-2 text-[11px] font-medium text-slate-400 dark:text-slate-500">Project Preview</p>
          <p className="text-[10px] text-slate-300 dark:text-slate-600">Coming Soon</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
    />
  );
};

// ─── Tech Groups ───────────────────────────────────────────────

const TechGroup = ({ tech, expanded }: { tech: Project["tech"]; expanded: boolean }) => {
  const allItems = tech.flatMap((g) => g.items);
  const visible = expanded ? allItems : allItems.slice(0, 6);
  const hidden = allItems.length - visible.length;

  return (
    <div className="space-y-3">
      {expanded ? (
        tech.map((group) => (
          <div key={group.name}>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{group.name}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-wrap gap-1.5">
          {visible.map((item) => (
            <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
              {item}
            </span>
          ))}
        </div>
      )}
      <span className="block text-[10px] font-medium text-slate-400 dark:text-slate-500">{allItems.length} technologies</span>
    </div>
  );
};

// ─── Metric Chips ──────────────────────────────────────────────

const MetricChips = ({ metrics }: { metrics: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {metrics.map((m) => (
      <span key={m} className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
        {m}
      </span>
    ))}
  </div>
);

// ─── Action Links ──────────────────────────────────────────────

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap gap-3">
    {project.github && (
      <a href={project.github} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200">
        <Github className="h-3.5 w-3.5" /> GitHub
      </a>
    )}
    {project.demo && (
      <a href={project.demo} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200">
        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
      </a>
    )}
    {project.certificate && (
      <a href={project.certificate} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200">
        <Eye className="h-3.5 w-3.5" /> Certificate
      </a>
    )}
  </div>
);

// ─── Category Badge ────────────────────────────────────────────

const CategoryBadge = ({ category }: { category: string }) => {
  const colors: Record<string, string> = {
    "AI/ML": "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800/30 dark:bg-purple-900/20 dark:text-purple-300",
    "Full-Stack": "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/30 dark:bg-emerald-900/20 dark:text-emerald-300",
    Infra: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800/30 dark:bg-blue-900/20 dark:text-blue-300",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${colors[category] || "border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"}`}>
      {category}
    </span>
  );
};

// ─── Featured Card ─────────────────────────────────────────────

const FeaturedCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900">
      <div className="relative overflow-hidden">
        <ProjectImage src={project.image} alt={`${project.title} preview`} />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
            <CategoryBadge category={project.category} />
          </div>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

        <div className="mt-4">
          <MetricChips metrics={project.metrics} />
        </div>

        <div className="mt-4">
          <TechGroup tech={project.tech} expanded={expanded} />
          {project.tech.flatMap((g) => g.items).length > 6 && (
            <button onClick={() => setExpanded(!expanded)}
              className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              {expanded ? <>Show Less <ChevronUp className="h-3 w-3" /></> : <>View Full Stack <ChevronDown className="h-3 w-3" /></>}
            </button>
          )}
        </div>

        <div className="mt-5 border-t border-slate-100 pt-4 dark:border-white/5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
};

// ─── Standard Card ─────────────────────────────────────────────

const StandardCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const allTech = project.tech.flatMap((g) => g.items);
  const visible = expanded ? allTech : allTech.slice(0, 4);
  const hidden = allTech.length - visible.length;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900">
      <div className="relative overflow-hidden">
        <ProjectImage src={project.image} alt={`${project.title} preview`} />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
          <CategoryBadge category={project.category} />
        </div>
        <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{project.description}</p>

        <div className="mt-3">
          <MetricChips metrics={project.metrics} />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {visible.map((item) => (
            <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[9px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
              {item}
            </span>
          ))}
          {hidden > 0 && !expanded && (
            <button onClick={() => setExpanded(true)}
              className="rounded-md border border-dashed border-slate-200 px-1.5 py-0.5 text-[9px] font-medium text-slate-400 hover:border-slate-300 dark:border-white/10 dark:text-slate-500">
              +{hidden}
            </button>
          )}
          {expanded && (
            <button onClick={() => setExpanded(false)}
              className="rounded-md border border-dashed border-slate-200 px-1.5 py-0.5 text-[9px] font-medium text-slate-400 hover:border-slate-300 dark:border-white/10 dark:text-slate-500">
              less
            </button>
          )}
        </div>

        <div className="mt-auto pt-3">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
};

// ─── Filter Row ────────────────────────────────────────────────

const FILTERS = [
  { id: "AI/ML", label: "AI/ML" },
  { id: "Full-Stack", label: "Full-Stack" },
  { id: "Infra", label: "Infrastructure" },
];

// ─── Main Component ────────────────────────────────────────────

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const filtered = activeFilter ? others.filter((p) => p.category === activeFilter) : others;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Projects</span>
          <h2 id="projects-heading">Engineering Portfolio</h2>
          <p>Production software across AI, full-stack, and infrastructure.</p>
        </div>

        {/* Featured */}
        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">Featured</h3>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/5" />
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {featured.map((p, i) => (
              <div key={p.title} className={i === 0 ? "lg:col-span-2 xl:col-span-2" : ""}>
                <FeaturedCard project={p} />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Header + Filter */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">All Projects</h3>
            <span className="text-xs text-slate-400">({filtered.length})</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button onClick={() => setActiveFilter(null)}
              className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                activeFilter === null
                  ? "bg-slate-800 text-white dark:bg-white dark:text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
              }`}>
              All
            </button>
            {FILTERS.map((f) => (
              <button key={f.id} onClick={() => setActiveFilter(f.id === activeFilter ? null : f.id)}
                className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                  activeFilter === f.id
                    ? "bg-slate-800 text-white dark:bg-white dark:text-slate-900"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
                }`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <StandardCard key={p.title} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 py-12 dark:border-white/5">
            <p className="text-sm text-slate-500">No projects in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
