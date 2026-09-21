import { donationTiers, site } from "@/lib/site";
import { ArrowRight, BadgeCheck, Phone } from "lucide-react";
import Link from "next/link";
import Reveal from "./ui/Reveal";

export default function DonateCta() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 md:py-28">
      <div className="absolute inset-0 bg-ink-wash" aria-hidden />
      <div className="absolute inset-0 bg-grain opacity-[0.1] mix-blend-overlay" aria-hidden />
      <div
        className="absolute -bottom-32 right-0 h-80 w-80 animate-float rounded-full bg-saffron-600/20 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <Reveal variant="fade">
            <span className="eyebrow text-saffron-300">
              <span className="h-px w-8 bg-current" aria-hidden />
              Support the ashram
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl leading-[1.15] text-cream-50 sm:text-4xl lg:text-[2.9rem]">
              A small, steady gift keeps a child in school
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-200/75 sm:text-lg">
              We have no corporate funding and no endowment. Every meal served, every notebook
              bought and every medicine given comes from people who decided to help. Choose an
              amount and see exactly what it does.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/donate" className="btn-primary btn-shine group px-8 py-4 text-base">
                Donate now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn-ghost-light px-7 py-4">
                <Phone className="h-4 w-4" />
                Talk to us first
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-7 flex items-center gap-2 text-xs text-cream-200/60">
              <BadgeCheck className="h-4 w-4 text-moss-400" aria-hidden />
              Eligible for tax exemption under {site.taxSection}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {donationTiers.map((tier, index) => (
            <Reveal key={tier.amount} delay={index * 90} variant="zoom">
              <Link
                href="/donate"
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-saffron-400/50 hover:bg-white/[0.08]"
              >
                <span className="font-display text-3xl text-cream-50">
                  ₹{tier.amount.toLocaleString("en-IN")}
                </span>
                <span className="mt-4 text-sm leading-relaxed text-cream-200/70">{tier.impact}</span>
                <span className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-saffron-300">
                  Give this
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
