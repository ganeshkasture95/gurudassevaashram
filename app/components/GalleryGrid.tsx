"use client";

import { gallery } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./ui/Reveal";
import SafeImage from "./ui/SafeImage";

/** Larger tiles at positions 0 and 4 keep the mosaic from feeling uniform. */
const spanFor = (index: number) =>
  index % 4 === 0 ? "sm:col-span-2 sm:row-span-2" : "sm:col-span-1 sm:row-span-1";

export default function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const move = useCallback((step: number) => {
    setOpenIndex((current) =>
      current === null ? current : (current + step + gallery.length) % gallery.length,
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, move]);

  const active = openIndex === null ? null : gallery[openIndex];

  return (
    <>
      <div className="grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((item, index) => (
          <Reveal
            key={`${item.src}-${index}`}
            delay={(index % 4) * 90}
            variant="zoom"
            className={cn("h-full", spanFor(index))}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative h-full w-full overflow-hidden rounded-2xl text-left shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 focus-visible:ring-offset-2"
            >
              <SafeImage
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>

              <span className="absolute inset-x-0 bottom-0 p-5">
                <span className="block font-display text-lg text-white">{item.title}</span>
                <span className="mt-1 block max-h-0 overflow-hidden text-sm leading-relaxed text-cream-200/85 transition-all duration-500 ease-out-expo group-hover:max-h-24">
                  {item.description}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label="Photo viewer"
        className={cn(
          "fixed inset-0 z-[90] flex items-center justify-center bg-ink-900/95 p-4 backdrop-blur-sm transition-opacity duration-400",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpenIndex(null)}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpenIndex(null)}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Previous photo"
          onClick={(event) => {
            event.stopPropagation();
            move(-1);
          }}
          className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-x-0.5 hover:bg-white/20 sm:left-8"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          aria-label="Next photo"
          onClick={(event) => {
            event.stopPropagation();
            move(1);
          }}
          className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:translate-x-0.5 hover:bg-white/20 sm:right-8"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {active && (
          <figure
            key={openIndex}
            className="animate-fade-up w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-ink-800">
              <SafeImage
                src={active.src}
                alt={active.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-5 text-center">
              <span className="block font-display text-xl text-cream-50">{active.title}</span>
              <span className="mt-2 block text-sm text-cream-200/70">{active.description}</span>
              <span className="mt-4 block text-xs uppercase tracking-[0.18em] text-saffron-300">
                {(openIndex ?? 0) + 1} / {gallery.length}
              </span>
            </figcaption>
          </figure>
        )}
      </div>
    </>
  );
}
