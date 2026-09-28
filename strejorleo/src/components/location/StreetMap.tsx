/**
 * Schematic street plan of the block around 76 Reade St. Hand-drawn SVG, so
 * there's no third-party map script or iframe. Not to scale. The live map is
 * one click away via the Google Maps CTA.
 */
export function StreetMap({ className }: { className?: string }) {
  const street = "stroke-ink/25";
  const label = "fill-muted text-[9px] font-semibold tracking-[0.14em] uppercase";

  return (
    <figure className={className}>
      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-labelledby="map-title map-desc"
        className="block h-auto w-full font-sans"
      >
        <title id="map-title">Street plan around Strejorleo</title>
        <desc id="map-desc">
          Strejorleo is on the south side of Reade Street between Church Street and Broadway, one
          block north of Chambers Street and City Hall Park. Chambers Street stations for the A, C,
          1, 2 and 3 trains are close by.
        </desc>

        {/* City Hall Park */}
        <rect x="344" y="244" width="56" height="56" className="fill-[#c9d0bf]" />
        <text x="372" y="276" textAnchor="middle" className={label}>
          <tspan x="372">City Hall</tspan>
          <tspan x="372" dy="11">Park</tspan>
        </text>

        {/* Avenues (north–south) */}
        <g className={street} strokeWidth="14" strokeLinecap="square">
          <line x1="64" y1="0" x2="64" y2="300" />
          <line x1="194" y1="0" x2="194" y2="300" />
          <line x1="330" y1="0" x2="330" y2="300" />
        </g>
        {/* Streets (east–west) */}
        <g className={street} strokeWidth="10">
          <line x1="0" y1="70" x2="400" y2="70" />
          <line x1="0" y1="232" x2="400" y2="232" />
        </g>
        <line x1="0" y1="150" x2="400" y2="150" strokeWidth="12" className="stroke-ink/45" />

        {/* Street names, set between the avenues so nothing collides */}
        <g className={label}>
          <text x="78" y="62">Duane St</text>
          <text x="78" y="140" className="fill-ink">
            Reade St
          </text>
          <text x="78" y="224">Chambers St</text>
          <text transform="translate(52 298) rotate(-90)">W Broadway</text>
          <text transform="translate(182 58) rotate(-90)">Church St</text>
          <text transform="translate(318 58) rotate(-90)">Broadway</text>
        </g>

        {/* Subway */}
        <g>
          <circle cx="64" cy="232" r="7" className="fill-paper stroke-ink" strokeWidth="1.25" />
          <text x="64" y="235" textAnchor="middle" className="fill-ink text-[7px] font-bold">
            M
          </text>
          <circle cx="194" cy="232" r="7" className="fill-paper stroke-ink" strokeWidth="1.25" />
          <text x="194" y="235" textAnchor="middle" className="fill-ink text-[7px] font-bold">
            M
          </text>
          <text x="76" y="252" className="fill-muted text-[8px] font-semibold tracking-[0.08em]">
            1 2 3
          </text>
          <text x="206" y="252" className="fill-muted text-[8px] font-semibold tracking-[0.08em]">
            A C
          </text>
        </g>

        {/* Strejorleo */}
        <g>
          <circle cx="248" cy="163" r="16" className="fill-brick/15" />
          <circle cx="248" cy="163" r="6" className="fill-brick" />
          <text x="248" y="196" textAnchor="middle" className="fill-brick text-[10px] font-bold tracking-[0.16em] uppercase">
            Strejorleo
          </text>
        </g>

        {/* North */}
        <g transform="translate(372 26)" className="fill-ink">
          <path d="M0 -14 L6 6 L0 2 L-6 6 Z" />
          <text y="20" textAnchor="middle" className="text-[8px] font-bold">
            N
          </text>
        </g>
      </svg>
      <figcaption className="type-caption mt-3 flex justify-between text-muted">
        <span>{`Tribeca · 10007`}</span>
        <span>Not to scale</span>
      </figcaption>
    </figure>
  );
}
