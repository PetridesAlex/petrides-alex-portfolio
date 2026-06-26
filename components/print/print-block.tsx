import type { ReactNode } from "react";

export function PrintSectionHead({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}): ReactNode {
  return (
    <div className="print-section-head mb-5 flex flex-col gap-1.5 border-b border-foreground/10 pb-4">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40">
        {label}
      </p>
      <h2 className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground sm:text-[1.5rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[52ch] text-[14px] leading-relaxed tracking-tight text-foreground/55">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PrintBlock({
  children,
  allowBreak = false,
  className = "",
}: {
  children: ReactNode;
  allowBreak?: boolean;
  className?: string;
}): ReactNode {
  return (
    <div
      className={`print-block ${allowBreak ? "print-block--allow-break" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
