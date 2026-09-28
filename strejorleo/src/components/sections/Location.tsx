import { StreetMap } from "@/components/location/StreetMap";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hours } from "@/components/ui/Hours";
import { Photo } from "@/components/ui/Photo";
import { TransitLines } from "@/components/ui/TransitLines";
import { images } from "@/content/images";
import { site } from "@/content/site";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <dt className="type-caption pt-1 text-muted">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export function Location() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="section-y">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 xl:col-span-5">
          <Eyebrow index="05">Visit</Eyebrow>
          <h2 id="visit-title" className="type-h1 mt-8" data-reveal>
            76 Reade
            <br />
            <em className="text-brick">Street.</em>
          </h2>
          <p className="type-lead mt-6 text-ink/80" data-reveal>
            In Tribeca, a block north of City Hall Park.
          </p>

          <dl className="mt-12 border-b border-line" data-reveal>
            <Row label="Address">
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </address>
              <p className="type-small mt-1 text-muted">{site.address.crossStreets}</p>
            </Row>
            <Row label="Hours">
              <Hours />
            </Row>
            <Row label="Subway">
              <ul className="space-y-2.5">
                {site.transit.map((t) => (
                  <li key={t.station} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <TransitLines lines={t.lines} />
                    <span>{t.station}</span>
                  </li>
                ))}
              </ul>
            </Row>
            {(site.phone || site.email) && (
              <Row label="Contact">
                {site.phone && (
                  <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="link-underline">
                    {site.phone}
                  </a>
                )}
                {site.email && (
                  <p>
                    <a href={`mailto:${site.email}`} className="link-underline">
                      {site.email}
                    </a>
                  </p>
                )}
              </Row>
            )}
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal>
            <ButtonLink href={site.links.directions}>Get directions</ButtonLink>
            <ButtonLink href={site.links.googleMaps} variant="outline">
              Google Maps
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-7">
          <div data-reveal>
            <Photo
              image={images.tribeca}
              sizes="(min-width: 1024px) 50vw, 100vw"
              aspect="aspect-[4/5] lg:aspect-[3/4]"
            />
            <p className="type-caption mt-3 text-muted">Staple Street, Tribeca</p>
          </div>

          <div
            className="mt-10 bg-paper sm:mx-auto sm:max-w-md lg:absolute lg:bottom-24 lg:-left-24 lg:mt-0 lg:w-[23rem] lg:p-5 lg:shadow-[0_1px_0_var(--color-line)]"
            data-reveal
            style={{ "--reveal-delay": 200 } as React.CSSProperties}
          >
            <StreetMap />
          </div>
        </div>
      </div>
    </section>
  );
}
