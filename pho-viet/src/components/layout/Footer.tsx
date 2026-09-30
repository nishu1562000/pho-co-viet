import { Logo } from "@/components/ui/Logo";
import { fullAddress, nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="on-dark bg-wood text-cream">
      <div className="shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo tone="wood" />
          <p className="type-small mt-4 max-w-xs text-muted-dark">
            Pho, rice vermicelli bowls and rice plates in Wichita Falls, Texas.
          </p>
        </div>
        <div className="type-small">
          <h2 className="type-eyebrow text-gold">Visit</h2>
          <address className="mt-3 not-italic">{fullAddress}</address>
          <p className="mt-2">
            <a href={site.phoneHref} className="link-underline tabular-nums">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-muted-dark">Tue–Sat 11am–9pm · Sun 11am–3pm · Mon closed</p>
        </div>
        <nav aria-label="Footer" className="type-small">
          <h2 className="type-eyebrow text-gold">Explore</h2>
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
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Food photos are placeholders.
          </p>
          <p>Demo website prepared by {site.preparedBy}</p>
        </div>
      </div>
    </footer>
  );
}
