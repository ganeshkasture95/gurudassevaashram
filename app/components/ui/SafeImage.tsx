"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Fills its (positioned) parent instead of using intrinsic dimensions. */
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders a photograph, falling back to a branded placeholder when the file is
 * not in /public/assets yet. Keeps layouts intact while photos are still being
 * collected, instead of showing a broken image.
 */
export default function SafeImage({
  src,
  alt,
  className,
  fill = false,
  width = 1200,
  height = 900,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex-center relative overflow-hidden bg-gradient-to-br from-saffron-100 via-cream-200 to-moss-100",
          fill ? "absolute inset-0 h-full w-full" : "h-full w-full",
          className,
        )}
      >
        <div className="absolute inset-0 bg-grain opacity-[0.15] mix-blend-multiply" />
        <div className="relative flex flex-col items-center gap-2 px-6 text-center">
          <span className="font-display text-4xl text-saffron-700/70">ॐ</span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-500/80">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div
          aria-hidden
          className={cn(
            "animate-pulse bg-gradient-to-br from-cream-200 to-cream-100",
            fill ? "absolute inset-0" : "absolute inset-0",
          )}
        />
      )}
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : { width, height })}
        sizes={sizes}
        priority={priority}
        onError={() => setFailed(true)}
        onLoad={() => setLoaded(true)}
        className={cn(
          "transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </>
  );
}
