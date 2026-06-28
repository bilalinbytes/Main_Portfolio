type StackLineProps = {
  stack: string[];
  className?: string;
};

const StackLine = ({ stack, className }: StackLineProps) => (
  <p className={className}>
    <span className="sr-only">Core stack: </span>
    {stack.join(" · ")}
  </p>
);

export default StackLine;
