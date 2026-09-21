"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-100 overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-soft">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : index)}
              className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left transition-colors duration-300 hover:bg-cream-50"
            >
              <span className="font-display text-lg text-ink-900">{item.q}</span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-out-expo",
                  expanded
                    ? "rotate-45 bg-saffron-600 text-white"
                    : "bg-ink-900/5 text-ink-500",
                )}
                aria-hidden
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out-expo",
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <p className="overflow-hidden px-7 text-sm leading-relaxed text-ink-500">
                <span className="block pb-6">{item.a}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
