"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream-wash px-5 py-24 text-center">
      <span className="font-display text-5xl text-saffron-200">Something went wrong</span>
      <h1 className="mt-4 text-2xl">We could not load this page</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
        Please try again. If the problem continues, refresh the page or return to
        the home page.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button type="button" onClick={reset} className="btn-primary btn-shine px-8 py-4">
          Try again
        </button>
        <Link href="/" className="btn-outline px-8 py-4">
          Back to home
        </Link>
      </div>
    </section>
  );
}
