import { cn } from "@/lib/cn";

type Props = {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "cream" | "wood";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ id, eyebrow, children, intro, tone = "cream", align = "left", className }: Props) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      <p className={cn("type-eyebrow", tone === "cream" ? "text-red" : "text-gold")}>{eyebrow}</p>
      <h2 id={id} className="type-h2 mt-3 text-balance" data-reveal>
        {children}
      </h2>
      {intro && (
        <p
          className={cn("type-lead mt-5 text-pretty", tone === "cream" ? "text-wood/80" : "text-cream/80", align === "center" && "mx-auto max-w-xl")}
          data-reveal
        >
          {intro}
        </p>
      )}
    </div>
  );
}
