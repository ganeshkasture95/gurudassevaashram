"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface AnimatedBarProps {
  value: number;
  className?: string;
  delay?: number;
}

/** Fills from 0 → value% the first time it scrolls into view. */
export default function AnimatedBar({ value, className, delay = 0 }: AnimatedBarProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      setWidth(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setWidth(value), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <span
      ref={ref}
      className={cn(
        "block h-2 origin-left rounded-full bg-gradient-to-r from-saffron-600 to-saffron-300 transition-[width] duration-[1.4s] ease-out-expo",
        className,
      )}
      style={{ width: `${width}%` }}
    />
  );
}
