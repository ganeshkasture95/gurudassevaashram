"use client";

import { images, site } from "@/lib/site";
import { ArrowRight, BadgeCheck, HeartHandshake, Sprout } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SafeImage from "./ui/SafeImage";

const headline = ["Seva", "that", "outlives", "us", "all"];

const trustMarkers = [
  { icon: BadgeCheck, label: `${site.taxSection.split(" ")[0]} tax exempt` },
  { icon: Sprout, label: "14-acre green campus" },
  { icon: HeartHandshake, label: `Serving since ${site.founded}` },
];

export default function Hero() {
  const layerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const layer = layerRef.current;
      if (!layer) return;
      // Image drifts slower than the page for a sense of depth.
      layer.style.transform = `translate3d(0, ${window.scrollY * 0.28}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-900">
      <div ref={layerRef} className="absolute inset-0 -top-16 will-change-transform">
        <div className="absolute inset-0 animate-ken-burns">
          <SafeImage
            src={images.hero}
            alt="Gurudas Seva Ashram campus at dawn"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/55 to-ink-900/70" />
        <div className="absolute inset-0 bg-grain opacity-[0.12] mix-blend-overlay" />
      </div>

      <div className="container-page relative z-10 pb-24 pt-40 md:pb-32">
        <div className="max-w-4xl">
          <span
            className="eyebrow border border-white/20 bg-white/10 px-4 py-2 !text-cream-100 backdrop-blur-md"
            style={{ borderRadius: 999, animation: mounted ? "fade-up 0.8s ease-out both" : undefined }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-saffron-400" />
              <span className="relative h-2 w-2 rounded-full bg-saffron-400" />
            </span>
            {site.tagline}
          </span>

          <h1 className="mt-7 font-display text-[2.7rem] leading-[1.02] text-white sm:text-6xl lg:text-[5.2rem]">
            {headline.map((word, index) => (
              <span key={word} className="inline-block overflow-hidden pb-1 pr-[0.28em] align-bottom">
                <span
                  className="inline-block"
                  style={{
                    animation: mounted
                      ? `fade-up 1s cubic-bezier(0.16,1,0.3,1) ${0.15 + index * 0.1}s both`
                      : undefined,
                    opacity: mounted ? undefined : 0,
                  }}
                >
                  {index === headline.length - 1 ? (
                    <em className="not-italic text-gradient-warm">{word}</em>
                  ) : (
                    word
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-7 max-w-2xl text-base leading-relaxed text-cream-200/85 sm:text-lg"
            style={{ animation: mounted ? "fade-up 1s ease-out 0.7s both" : undefined }}
          >
            For four decades, {site.name} has given rural students a place to study, elders a
            family, and women a livelihood of their own — on land we planted tree by tree in
            Ghatnandur, Beed.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            style={{ animation: mounted ? "fade-up 1s ease-out 0.85s both" : undefined }}
          >
            <Link href="/donate" className="btn-primary btn-shine group px-8 py-4 text-base">
              Donate now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/about" className="btn-ghost-light px-8 py-4 text-base">
              Our story
            </Link>
          </div>

          <ul
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
            style={{ animation: mounted ? "fade-up 1s ease-out 1s both" : undefined }}
          >
            {trustMarkers.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-cream-200/80">
                <Icon className="h-4 w-4 text-saffron-300" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden
      >
        <span className="text-[0.62rem] uppercase tracking-[0.25em] text-cream-200/60">Scroll</span>
        <span className="h-12 w-px overflow-hidden bg-white/20">
          <span className="block h-full w-px animate-scroll-cue bg-saffron-300" />
        </span>
      </div>
    </section>
  );
}
