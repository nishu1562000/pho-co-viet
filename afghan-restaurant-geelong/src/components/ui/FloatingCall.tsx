import { Phone } from "lucide-react";

import { site } from "@/content/site";

/** Thumb-reach call button, mobile only. Desktop has the header button. */
export function FloatingCall() {
  return (
    <a
      href={site.phoneHref}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex min-h-14 items-center gap-2 rounded-full bg-pomegranate px-5 font-semibold text-white shadow-[0_12px_30px_-8px_rgb(20_16_13/0.6)] ring-2 ring-saffron/70 transition-transform active:scale-95 md:hidden"
    >
      <Phone aria-hidden className="size-5" strokeWidth={2.2} />
      Call<span className="sr-only"> {site.phoneDisplay}</span>
    </a>
  );
}
