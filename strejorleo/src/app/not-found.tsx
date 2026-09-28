import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col justify-center pt-(--header-h) pb-(--section-sm)">
      <p className="type-caption text-brick">404</p>
      <h1 className="type-h1 mt-6 max-w-[14ch]">
        This page has <em>moved on.</em>
      </h1>
      <p className="type-lead mt-6 max-w-md text-ink/80">
        The restaurant hasn&rsquo;t. You&rsquo;ll still find us at 76 Reade Street.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/menu" variant="outline">
          See the menu
        </ButtonLink>
      </div>
    </section>
  );
}
