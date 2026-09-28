import { cn } from "@/lib/cn";

type Props = {
  id: string;
  kicker: string;
  children: React.ReactNode;
  tone?: "rice" | "phin";
  className?: string;
  aside?: React.ReactNode;
};

/** Kicker + display heading, with optional right-aligned aside (link, note). */
export function SectionHeading({ id, kicker, children, tone = "rice", className, aside }: Props) {
  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div>
        <p
          className={cn(
            "type-caption flex items-center gap-2.5",
            tone === "rice" ? "text-chili" : "text-lantern",
          )}
        >
          <span aria-hidden className="size-1.5 rounded-full bg-current" />
          {kicker}
        </p>
        <h2 id={id} className="type-h2 mt-4 max-w-[18ch] text-balance" data-reveal>
          {children}
        </h2>
      </div>
      {aside}
    </div>
  );
}
