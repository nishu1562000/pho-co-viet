import { cn } from "@/lib/cn";

// Official MTA trunk-line colours.
const lineColor: Record<string, string> = {
  A: "bg-[#0039a6] text-white",
  C: "bg-[#0039a6] text-white",
  "1": "bg-[#ee352e] text-white",
  "2": "bg-[#ee352e] text-white",
  "3": "bg-[#ee352e] text-white",
  R: "bg-[#fccc0a] text-ink",
  W: "bg-[#fccc0a] text-ink",
  "4": "bg-[#00933c] text-white",
  "5": "bg-[#00933c] text-white",
  "6": "bg-[#00933c] text-white",
};

/** Subway line bullets, e.g. (A)(C)(1)(2)(3). */
export function TransitLines({ lines }: { lines: readonly string[] }) {
  return (
    <span role="img" className="inline-flex gap-1" aria-label={`Lines ${lines.join(", ")}`}>
      {lines.map((l) => (
        <span
          key={l}
          aria-hidden
          className={cn(
            "inline-flex size-5.5 items-center justify-center rounded-full text-[0.7rem] leading-none font-bold",
            lineColor[l] ?? "bg-ink text-paper",
          )}
        >
          {l}
        </span>
      ))}
    </span>
  );
}
