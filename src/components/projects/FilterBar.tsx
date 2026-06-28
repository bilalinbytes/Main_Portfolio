import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { viewOptions } from "@/data/projects";
import type { ProjectTag } from "@/data/projects";

type FilterBarProps = {
  view: ProjectTag | "all";
  technology: string;
  technologies: string[];
  onViewChange: (value: ProjectTag | "all") => void;
  onTechnologyChange: (value: string) => void;
};

const FilterBar = ({
  view,
  technology,
  technologies,
  onViewChange,
  onTechnologyChange,
}: FilterBarProps) => (
  <div className="flex flex-wrap gap-3">
    <Select
      value={view}
      onValueChange={(v) => onViewChange(v as ProjectTag | "all")}
    >
      <SelectTrigger className="w-52">
        <SelectValue placeholder="All Projects" />
      </SelectTrigger>
      <SelectContent>
        {viewOptions.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            <span className="flex items-center gap-2">
              <span aria-hidden="true">{opt.emoji}</span>
              {opt.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

    <Select
      value={technology}
      onValueChange={onTechnologyChange}
    >
      <SelectTrigger className="w-52">
        <SelectValue placeholder="All Technologies" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">
          <span className="flex items-center gap-2">
            <span aria-hidden="true">💻</span>
            All Technologies
          </span>
        </SelectItem>
        {technologies.map((tech) => (
          <SelectItem key={tech} value={tech}>
            {tech}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default FilterBar;
