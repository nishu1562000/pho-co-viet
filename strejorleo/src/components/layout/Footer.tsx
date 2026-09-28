import Link from "next/link";

import { Hours } from "@/components/ui/Hours";
import { Wordmark } from "@/components/ui/Wordmark";
import { fullAddress, nav, site } from "@/content/site";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-reveal">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="shell pt-(--section-sm) pb-10">
        <div className="grid gap-12 border-b border-line-dark pb-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" aria-label={`${site.name}, home`} className="inline-block text-[1.75rem]">
              <Wordmark />
            </Link>
            <p className="type-small mt-5 max-w-xs text-muted-dark">
              {site.tagline}. {site.address.street}, {site.address.locality}.
            </p>
          </div>

          <div className="type-small grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            <div>
              <h2 className="type-caption mb-4 text-muted-dark">Visit</h2>
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </address>
              <p className="mt-3">
                <ExternalLink href={site.links.googleMaps}>Google Maps</ExternalLink>
              </p>
            </div>

            <div>
              <h2 className="type-caption mb-4 text-muted-dark">Hours</h2>
              <Hours tone="ink" />
            </div>

            <div>
              <h2 className="type-caption mb-4 text-muted-dark">Contact</h2>
              <ul className="space-y-2">
                {site.phone && (
                  <li>
                    <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="link-reveal">
                      {site.phone}
                    </a>
                  </li>
                )}
                {site.email && (
                  <li>
                    <a href={`mailto:${site.email}`} className="link-reveal">
                      {site.email}
                    </a>
                  </li>
                )}
                {site.social.map((s) => (
                  <li key={s.url}>
                    <ExternalLink href={s.url}>{s.label}</ExternalLink>
                  </li>
                ))}
                {!site.phone && !site.email && (
                  <li>
                    <ExternalLink href={site.links.googleMaps}>Message on Google</ExternalLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="type-small flex flex-col gap-6 pt-8 text-muted-dark md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-reveal hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="link-reveal hover:text-paper">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
          <p>
            &copy; {year} {site.name} &middot; <span className="sr-only">Address: </span>
            {fullAddress}
          </p>
        </div>
      </div>
    </footer>
  );
}
