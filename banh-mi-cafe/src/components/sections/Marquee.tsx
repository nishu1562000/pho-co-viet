import { tickerItems } from "@/content/menu";

/** Slow-moving strip of menu names. Pauses on hover; static under reduced motion. */
export function Marquee() {
  const row = () => (
    <ul className="flex shrink-0 items-center">
      {tickerItems.map((item) => (
        <li key={item} className="flex items-center">
          <span className="type-h3 accent px-6 whitespace-nowrap sm:px-8">{item}</span>
          <span aria-hidden className="text-lantern">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-hidden bg-chili py-5 text-white sm:py-6">
      <p className="sr-only">Some of the menu: {tickerItems.join(", ")}.</p>
      <div aria-hidden className="marquee-track flex w-max">
        {row()}
        {row()}
      </div>
    </div>
  );
}
