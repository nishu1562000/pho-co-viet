import Link from "next/link";

import { Hours } from "@/components/ui/Hours";
import { Wordmark } from "@/components/ui/Wordmark";
import { fullAddress, nav, site } from "@/content/site";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-underline">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="on-dark bg-phin text-rice">
      <div className="shell pt-(--section-sm) pb-10">
        <div className="grid gap-12 border-b border-line-dark pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.name}, home`} className="inline-block text-[1.35rem]">
              <Wordmark tone="phin" />
            </Link>
            <p className="type-small mt-6 max-w-xs text-muted-dark">
              Banh mi, pho and Vietnamese coffee on Mulberry Street, across from Columbus Park.
            </p>
          </div>

          <div className="type-small grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <h2 className="type-caption mb-4 text-lantern">Visit</h2>
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </address>
              <p className="mt-3">
                <ExternalLink href={site.links.directions}>Get directions</ExternalLink>
              </p>
            </div>
            <div>
              <h2 className="type-caption mb-4 text-lantern">Hours</h2>
              <Hours tone="phin" />
            </div>
            <div>
              <h2 className="type-caption mb-4 text-lantern">Contact</h2>
              <p>
                <a href={site.phoneHref} className="link-underline tabular-nums">
                  {site.phoneDisplay}
                </a>
              </p>
              {site.email && (
                <p className="mt-2">
                  <a href={`mailto:${site.email}`} className="link-underline">
                    {site.email}
                  </a>
                </p>
              )}
              <ul className="mt-3 space-y-2">
                <li>
                  <ExternalLink href={site.links.googleMaps}>Google Maps</ExternalLink>
                </li>
                <li>
                  <ExternalLink href={site.links.yelp}>Yelp</ExternalLink>
                </li>
                {site.social.map((s) => (
                  <li key={s.url}>
                    <ExternalLink href={s.url}>{s.label}</ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="type-caption mb-4 text-lantern">Order</h2>
              <ul className="space-y-2">
                {site.ordering.map((o) => (
                  <li key={o.name}>
                    <ExternalLink href={o.url}>{o.name}</ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="type-small flex flex-col gap-6 pt-8 text-muted-dark md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-rice">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-rice">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
          <p>
            &copy; {new Date().getFullYear()} {site.name} · {fullAddress}
          </p>
        </div>
      </div>
    </footer>
  );
}
