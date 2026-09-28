import { Check } from "lucide-react";

import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { site } from "@/content/site";

export function TheSpace() {
  return (
    <section aria-labelledby="space-title" className="on-dark section-y overflow-hidden bg-phin text-rice">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pt-10">
          <p className="type-caption flex items-center gap-2.5 text-lantern">
            <span aria-hidden className="size-1.5 rounded-full bg-current" />
            The café
          </p>
          <h2 id="space-title" className="type-h2 mt-4" data-reveal>
            Room to sit. A park <span className="accent text-chili-light">across the street.</span>
          </h2>
          <p className="type-lead mt-6 max-w-md text-rice/80" data-reveal>
            Big communal tables for catching up or getting some work done. A short walk from the
            Foley Square courthouses, so it’s handy on a jury-duty lunch break.
          </p>

          <ul className="mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2" data-reveal>
            {site.amenities.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-lantern" strokeWidth={2.5} />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative grid grid-cols-12 gap-4 lg:col-span-6 lg:col-start-7">
          <div className="col-span-7" data-reveal>
            <Photo image={images.chinatown} sizes="(min-width: 1024px) 28vw, 58vw" aspect="aspect-[3/4]" parallax />
            <p className="type-caption mt-3 text-muted-dark">Chinatown, Manhattan</p>
          </div>
          <div className="col-span-5 mt-24 sm:mt-32" data-reveal style={{ "--reveal-delay": 150 } as React.CSSProperties}>
            <Photo image={images.matcha} sizes="(min-width: 1024px) 20vw, 40vw" aspect="aspect-[3/4]" parallax />
            <p className="type-caption mt-3 text-muted-dark">Iced matcha</p>
          </div>
        </div>
      </div>
    </section>
  );
}
