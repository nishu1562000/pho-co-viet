/**
 * Schematic plan of the blocks around 46 Mulberry St. Hand-drawn SVG, no map
 * scripts. Not to scale. Live directions are one tap away.
 */
export function StreetMap({ className }: { className?: string }) {
  const street = "stroke-phin/20";
  const label = "fill-muted text-[9px] font-semibold tracking-[0.12em] uppercase";

  return (
    <figure className={className}>
      <svg viewBox="0 -24 400 324" role="img" aria-labelledby="map-title map-desc" className="block h-auto w-full font-sans">
        <title id="map-title">Street plan around Banh Mi Cafe</title>
        <desc id="map-desc">
          Banh Mi Cafe is on the east side of Mulberry Street between Bayard Street and Worth
          Street, facing Columbus Park. The Foley Square courthouses are a short walk southwest.
        </desc>

        {/* Columbus Park: Baxter to Mulberry, Bayard to Worth */}
        <rect x="112" y="92" width="146" height="128" rx="4" className="fill-herb/25" />
        <text x="185" y="152" textAnchor="middle" className="fill-herb text-[10px] font-bold tracking-[0.14em] uppercase">
          <tspan x="185">Columbus</tspan>
          <tspan x="185" dy="13">Park</tspan>
        </text>

        {/* North–south */}
        <g className={street} strokeWidth="12">
          <line x1="100" y1="-24" x2="100" y2="300" />
          <line x1="270" y1="-24" x2="270" y2="300" />
          <line x1="370" y1="-24" x2="370" y2="300" />
        </g>
        {/* East–west */}
        <g className={street} strokeWidth="10">
          <line x1="0" y1="80" x2="400" y2="80" />
          <line x1="0" y1="232" x2="400" y2="232" />
        </g>

        <g className={label}>
          <text transform="translate(92 70) rotate(-90)">Baxter St</text>
          <text transform="translate(262 70) rotate(-90)" className="fill-phin">
            Mulberry St
          </text>
          <text transform="translate(362 70) rotate(-90)">Mott St</text>
          <text x="112" y="72">Bayard St</text>
          <text x="112" y="224">Worth St</text>
        </g>

        {/* Courthouses direction */}
        <g className="fill-muted">
          <path d="M60 262 L28 290" className="stroke-muted" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="66" y="262" className="text-[9px] font-semibold tracking-[0.1em] uppercase">
            Foley Sq courts
          </text>
        </g>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="fill-muted" />
          </marker>
        </defs>

        {/* Canal St direction */}
        <text x="356" y="-6" textAnchor="end" className="fill-muted text-[9px] font-semibold tracking-[0.1em] uppercase">
          ↑ Canal St
        </text>

        {/* Banh Mi Cafe */}
        <g>
          <circle cx="286" cy="160" r="16" className="fill-chili/20" />
          <circle cx="286" cy="160" r="6.5" className="fill-chili" />
          <text x="298" y="192" className="fill-chili text-[10px] font-bold tracking-[0.1em] uppercase">
            <tspan x="298">Banh Mi</tspan>
            <tspan x="298" dy="12">Cafe</tspan>
          </text>
        </g>
      </svg>
      <figcaption className="type-caption mt-3 flex justify-between text-muted">
        <span>Chinatown · 10013</span>
        <span>Not to scale</span>
      </figcaption>
    </figure>
  );
}
