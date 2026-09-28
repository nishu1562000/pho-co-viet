import { cn } from "@/lib/cn";

type Props = {
  index?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "ink";
};

/** Small uppercase label that opens a section, e.g. "01 — The Restaurant". */
export function Eyebrow({ index, children, className, tone = "paper" }: Props) {
  return (
    <p
      className={cn(
        "type-caption flex items-center gap-3",
        tone === "paper" ? "text-muted" : "text-muted-dark",
        className,
      )}
    >
      {index && (
        <>
          <span className={tone === "paper" ? "text-brick" : "text-brick-light"}>{index}</span>
          <span aria-hidden className="h-px w-8 bg-current opacity-50" />
        </>
      )}
      <span>{children}</span>
    </p>
  );
}
