import { StreetMap } from "@/components/location/StreetMap";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Hours } from "@/components/ui/Hours";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TransitLines } from "@/components/ui/TransitLines";
import { site } from "@/content/site";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-5">
      <h3 className="type-caption text-muted">{label}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="section-y bg-rice-2">
      <div className="shell">
        <SectionHeading id="visit-title" kicker="Visit">
          46 Mulberry <span className="accent text-chili">Street.</span>
        </SectionHeading>

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="grid content-start gap-8 sm:grid-cols-2 lg:col-span-6" data-reveal>
            <Block label="Address">
              <address className="type-lead not-italic">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </address>
              <p className="type-small mt-1 text-muted">{site.address.landmark}</p>
            </Block>
            <Block label="Hours">
              <Hours className="type-lead" />
            </Block>
            <Block label="Phone">
              <a href={site.phoneHref} className="type-lead link-underline tabular-nums">
                {site.phoneDisplay}
              </a>
              <p className="type-small mt-1 text-muted">Call ahead for pickup</p>
            </Block>
            <Block label="Subway">
              <ul className="space-y-2.5">
                {site.transit.map((t) => (
                  <li key={t.station} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <TransitLines lines={t.lines} />
                    <span>{t.station}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
              <ButtonLink href={site.links.directions}>Get directions</ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline">
                Call {site.phoneDisplay}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8" data-reveal style={{ "--reveal-delay": 150 } as React.CSSProperties}>
            <div className="rounded-card bg-rice p-5 sm:p-7">
              <StreetMap />
            </div>
            <p className="type-small mt-4 text-muted">
              <a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" className="link-underline">
                Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
