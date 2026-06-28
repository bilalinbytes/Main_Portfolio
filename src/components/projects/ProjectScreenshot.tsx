import { useState } from "react";
import { cn } from "@/lib/utils";

type ProjectScreenshotProps = {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
  className?: string;
  aspect?: "cinema" | "wide" | "standard";
};

const aspectClasses = {
  cinema: "aspect-[21/10]",
  wide: "aspect-[16/10]",
  standard: "aspect-video",
};

const Placeholder = ({ title }: { title: string }) => (
  <div
    className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-[#0A101C]"
    aria-hidden="true"
  >
    <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
    <div className="relative text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
        Product interface
      </p>
      <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
    </div>
  </div>
);

const ProjectScreenshot = ({
  src,
  alt,
  title,
  priority = false,
  className,
  aspect = "wide",
}: ProjectScreenshotProps) => {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = failed || !src;

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 dark:border-white/[0.08] dark:bg-[#0A101C]",
        aspectClasses[aspect],
        className,
      )}
    >
      {showPlaceholder ? (
        <Placeholder title={title} />
      ) : (
        <img
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      )}
    </figure>
  );
};

export default ProjectScreenshot;
