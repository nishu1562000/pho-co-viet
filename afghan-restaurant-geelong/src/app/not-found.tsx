import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <main className="on-dark grid min-h-dvh place-items-center bg-charcoal px-6 text-center text-cream">
      <div>
        <p className="type-eyebrow text-saffron">Page not found</p>
        <h1 className="type-h2 mt-3">This page has gone off the grill.</h1>
        <div className="mt-8">
          <ButtonLink href="/">Back to the homepage</ButtonLink>
        </div>
      </div>
    </main>
  );
}
