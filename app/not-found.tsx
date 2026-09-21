import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream-wash px-5 py-24 text-center">
      <span className="font-display text-7xl text-saffron-200">404</span>
      <h1 className="mt-4 text-3xl">This page is not here</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
        The link may be old or mistyped. The ashram gate is still open — head back
        to the home page.
      </p>
      <Link href="/" className="btn-primary btn-shine mt-10 px-8 py-4">
        Back to home
      </Link>
    </section>
  );
}
