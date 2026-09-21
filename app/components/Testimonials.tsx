"use client";

import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setActive((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section bg-cream-100">
      <div className="container-page">
        <SectionHeading
          eyebrow="In their words"
          title="The people this is actually for"
          description="Three of the hundreds who have passed through these gates."
        />

        <Reveal variant="zoom" className="mt-16">
          <div
            className="relative mx-auto max-w-3xl"
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
          >
            <span
              className="absolute -top-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-saffron-600 text-white shadow-glow"
              aria-hidden
            >
              <Quote className="h-6 w-6" />
            </span>

            <div className="card relative grid px-7 pb-8 pt-14 sm:px-12 sm:pt-16">
              {testimonials.map((item, index) => (
                <figure
                  key={item.name}
                  aria-hidden={active !== index}
                  className={cn(
                    "col-start-1 row-start-1 text-center transition-all duration-700 ease-out-expo",
                    active === index
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0",
                  )}
                >
                  <blockquote className="font-display text-lg leading-relaxed text-ink-800 sm:text-2xl sm:leading-[1.5]">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-7">
                    <span className="block font-semibold text-ink-900">{item.name}</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-saffron-700">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2.5">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={active === index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500 ease-out-expo",
                    active === index
                      ? "w-9 bg-saffron-600"
                      : "w-2 bg-ink-300/50 hover:bg-ink-300",
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
