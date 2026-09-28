import { cn } from "@/lib/cn";

// Official MTA trunk-line colours.
const lineColor: Record<string, string> = {
  J: "bg-[#996633] text-white",
  Z: "bg-[#996633] text-white",
  N: "bg-[#fccc0a] text-phin",
  Q: "bg-[#fccc0a] text-phin",
  R: "bg-[#fccc0a] text-phin",
  W: "bg-[#fccc0a] text-phin",
  "4": "bg-[#00933c] text-white",
  "5": "bg-[#00933c] text-white",
  "6": "bg-[#00933c] text-white",
};

/** Subway line bullets, e.g. (J)(Z)(6). */
export function TransitLines({ lines }: { lines: readonly string[] }) {
  return (
    <span role="img" aria-label={`Lines ${lines.join(", ")}`} className="inline-flex flex-wrap gap-1">
      {lines.map((l) => (
        <span
          key={l}
          aria-hidden
          className={cn(
            "inline-flex size-5.5 items-center justify-center rounded-full text-[0.7rem] leading-none font-bold",
            lineColor[l] ?? "bg-phin text-rice",
          )}
        >
          {l}
        </span>
      ))}
    </span>
  );
}
