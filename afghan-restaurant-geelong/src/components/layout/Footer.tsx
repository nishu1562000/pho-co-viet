import { Logo } from "@/components/ui/Logo";
import { imageCredits } from "@/content/images";
import { fullAddress, nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="on-dark bg-charcoal pb-24 text-cream md:pb-0">
      <div aria-hidden className="tile-band" />
      <div className="shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="type-small mt-4 max-w-xs text-muted-dark">
            Charcoal kebabs, slow-cooked lamb and Afghan rice dishes in the heart of Geelong.
          </p>
        </div>
        <div className="type-small">
          <h2 className="type-eyebrow text-saffron">Visit</h2>
          <address className="mt-3 not-italic">{fullAddress}</address>
          <p className="mt-2">
            <a href={site.phoneHref} className="link-underline tabular-nums">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-muted-dark">{site.hoursSummary} · Dine in &amp; takeaway</p>
        </div>
        <nav aria-label="Footer" className="type-small">
          <h2 className="type-eyebrow text-saffron">Explore</h2>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-underline">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={site.links.directions} target="_blank" rel="noopener noreferrer" className="link-underline">
                Directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line-dark">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-dark sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p>&copy; 2026. Food photos are placeholders.</p>
            <p className="mt-1 opacity-80">Placeholder photos via Unsplash: {imageCredits.join(", ")}.</p>
          </div>
          <p className="shrink-0">Demo website prepared by {site.preparedBy}</p>
        </div>
      </div>
    </footer>
  );
}
