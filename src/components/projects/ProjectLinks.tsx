import { ArrowUpRight } from "lucide-react";
import type { ProjectLinks as ProjectLinksType } from "@/data/projects";

type ProjectLinksProps = {
  links: ProjectLinksType;
  className?: string;
};

const linkClass =
  "group inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-300";

const ProjectLinks = ({ links, className }: ProjectLinksProps) => {
  const items = [
    links.github && { href: links.github, label: "Source" },
    links.demo && { href: links.demo, label: "Live" },
    links.certificate && { href: links.certificate, label: "Certificate" },
  ].filter(Boolean) as { href: string; label: string }[];

  if (items.length === 0) return null;

  return (
    <nav aria-label="Project links" className={className}>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {items.map(({ href, label }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {label}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProjectLinks;
