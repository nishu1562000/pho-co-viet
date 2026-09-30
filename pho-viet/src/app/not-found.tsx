import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell flex min-h-svh flex-col items-start justify-center py-20">
      <p className="type-eyebrow text-red">404</p>
      <h1 className="type-h2 mt-4">This page isn’t on the menu.</h1>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-red px-6 font-semibold text-white hover:bg-red-hover">
        Back to Pho Viet
      </Link>
    </main>
  );
}
