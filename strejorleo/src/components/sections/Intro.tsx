import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { site } from "@/content/site";

const details = [
  { term: "Cuisine", value: site.cuisine },
  { term: "Open for", value: "Lunch · Dinner" },
  { term: "Service", value: "Dine-in · Takeout" },
  { term: "Neighbourhood", value: site.address.neighborhood },
];

export function Intro() {
  return (
    <section id="restaurant" aria-labelledby="restaurant-title" className="section-y">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <Eyebrow index="01" className="lg:col-span-3 lg:pt-4">
            The Restaurant
          </Eyebrow>
          <h2 id="restaurant-title" className="type-h2 max-w-[18ch] text-balance lg:col-span-9" data-reveal>
            A New England table in the middle of Lower Manhattan.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6 lg:col-span-5" data-reveal>
            <Photo
              image={images.roomWindows}
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              aspect="aspect-[4/5]"
            />
          </div>

          <div className="flex flex-col md:col-span-6 md:pl-4 lg:col-span-5 lg:col-start-7 lg:pl-0">
            <div className="type-lead space-y-6 text-ink/85" data-reveal>
              <p>
                <span className="font-display text-[1.35em] leading-none text-ink">{site.name}</span>{" "}
                cooks the food of the northeast coast: generous, direct, and built around the sea.
              </p>
              <p>
                The room is on Reade Street in Tribeca, between Church Street and Broadway. Sit down
                for a long lunch, come back for dinner, or take it with you.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 border-t border-line" data-reveal>
              {details.map((d) => (
                <div key={d.term} className="border-b border-line py-4 pr-4">
                  <dt className="type-caption text-muted">{d.term}</dt>
                  <dd className="mt-1.5">{d.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 ml-auto w-2/3 md:mt-auto md:w-3/5 md:pt-16" data-reveal>
              <Photo
                image={images.oysterSingle}
                sizes="(min-width: 768px) 20vw, 66vw"
                aspect="aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
