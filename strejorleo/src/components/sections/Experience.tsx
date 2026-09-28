import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";

// Every point here maps to a verified fact from the Google listing
// (category, address, service periods, "popular for solo dining").
const pillars = [
  {
    title: "The New England table",
    body: "The cooking of the northeast coast. Generous, direct, and never fussier than it needs to be.",
  },
  {
    title: "A Tribeca address",
    body: "On Reade Street in the cast-iron district, between Church Street and Broadway, a block from City Hall Park.",
  },
  {
    title: "Lunch into dinner",
    body: "Open for both, so the same table works for a working lunch and a slow evening.",
  },
  {
    title: "A seat for one",
    body: "Popular with solo diners. Bring a book, or don't.",
  },
];

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="on-dark section-y bg-ink text-paper">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <Eyebrow index="04" tone="ink" className="lg:col-span-3 lg:pt-4">
            The Experience
          </Eyebrow>
          <h2 id="experience-title" className="type-h2 max-w-[16ch] lg:col-span-9" data-reveal>
            Coastal cooking, <em className="text-brick-light">a Manhattan address.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 md:col-start-2" data-reveal>
            <Photo
              image={images.roomSconces}
              sizes="(min-width: 768px) 40vw, 100vw"
              aspect="aspect-[4/5]"
              parallax
            />
          </div>
          <div
            className="w-4/5 justify-self-end md:col-span-5 md:col-start-8 md:w-full md:self-end md:pb-24"
            data-reveal
            style={{ "--reveal-delay": 150 } as React.CSSProperties}
          >
            <Photo
              image={images.mussels}
              sizes="(min-width: 768px) 40vw, 80vw"
              aspect="aspect-[4/3]"
              parallax
            />
          </div>
        </div>

        <ol className="mt-20 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-28 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className="border-t border-line-dark pt-6"
              data-reveal
              style={{ "--reveal-delay": i * 90 } as React.CSSProperties}
            >
              <span className="font-display text-4xl text-brick-light italic">
                <span className="sr-only">Point </span>
                {i + 1}
              </span>
              <h3 className="type-h3 mt-6">{p.title}</h3>
              <p className="type-small mt-3 max-w-xs text-muted-dark">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
