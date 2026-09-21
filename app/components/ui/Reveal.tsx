"use client";

import { cn } from "@/lib/utils";
import { type ElementType, type ReactNode, useEffect, useRef, useState } from "react";

type Variant = "up" | "down" | "left" | "right" | "zoom" | "fade" | "blur";

const variantClass: Record<Variant, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
  blur: "reveal-blur reveal-up",
  fade: "",
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Direction the element travels in from. */
  variant?: Variant;
  /** Stagger, in milliseconds. */
  delay?: number;
  /** Replay the animation every time the element re-enters the viewport. */
  repeat?: boolean;
  as?: ElementType;
}

export default function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  repeat = false,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.unobserve(entry.target);
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", variantClass[variant], visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
