import { site } from "@/lib/site";
import { BadgeCheck, Heart, Shield, TreePine, Users } from "lucide-react";

const items = [
  { icon: BadgeCheck, text: `${site.taxSection.split(" ")[0]} tax exempt donations` },
  { icon: Shield, text: "60% of funds go directly to welfare" },
  { icon: TreePine, text: "14-acre self-sustaining campus" },
  { icon: Users, text: "150+ active volunteers" },
  { icon: Heart, text: `Serving since ${site.founded}` },
  { icon: BadgeCheck, text: "Receipt issued within 7 days" },
];

export default function TrustStrip() {
  const loop = [...items, ...items];

  return (
    <section
      className="relative max-w-full overflow-x-clip border-y border-ink-900/5 bg-cream-50 py-4"
      aria-label="Trust indicators"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream-50 to-transparent" />

      <div className="overflow-x-clip">
      <div className="flex w-max max-w-none animate-marquee will-change-transform">
        {loop.map((item, index) => (
          <span
            key={`${item.text}-${index}`}
            className="mx-8 inline-flex shrink-0 items-center gap-2.5 text-sm font-medium text-ink-500"
          >
            <item.icon className="h-4 w-4 text-saffron-500" aria-hidden />
            {item.text}
          </span>
        ))}
      </div>
      </div>
    </section>
  );
}
