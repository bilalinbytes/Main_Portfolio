type HighlightsLineProps = {
  highlights: string[];
  className?: string;
};

const HighlightsLine = ({ highlights, className }: HighlightsLineProps) => (
  <p className={className} aria-label="Engineering highlights">
    {highlights.map((item, index) => (
      <span key={item}>
        <span className="text-slate-700 dark:text-slate-200">{item}</span>
        {index < highlights.length - 1 && (
          <span className="mx-2 text-slate-300 dark:text-slate-600" aria-hidden="true">
            ·
          </span>
        )}
      </span>
    ))}
  </p>
);

export default HighlightsLine;
