import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col justify-center pt-(--header-h) pb-(--section-sm)">
      <p className="type-caption text-chili">404</p>
      <h1 className="type-h1 mt-5 max-w-[14ch]">
        This page is <span className="accent text-chili">sold out.</span>
      </h1>
      <p className="type-lead mt-6 max-w-md text-phin/80">
        The banh mi aren&rsquo;t. You&rsquo;ll find us at 46 Mulberry Street.
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
