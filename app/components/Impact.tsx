import { fundAllocation, impactStats } from "@/lib/site";
import AnimatedBar from "./ui/AnimatedBar";
import Counter from "./ui/Counter";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Impact() {
  return (
    <section className="section relative overflow-hidden bg-ink-wash">
      <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay" aria-hidden />
      <div
        className="absolute -left-24 top-1/4 h-72 w-72 animate-float rounded-full bg-saffron-500/10 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative">
        <SectionHeading
          tone="light"
          eyebrow="Our impact"
          title="Numbers we are willing to be held to"
          description="We publish what we do and how we spend it. Ask for the annual accounts and we will send them."
        />

        <dl className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} variant="up">
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-saffron-400/40 hover:bg-white/[0.07]">
                <dd className="font-display text-4xl text-cream-50 sm:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-saffron-300">
                  {stat.label}
                </dt>
                <p className="mt-3 text-sm leading-relaxed text-cream-200/60">{stat.hint}</p>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal variant="zoom" delay={120} className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
            <h3 className="text-xl text-cream-50">Where every rupee goes</h3>
            <p className="mt-2 text-sm text-cream-200/60">
              Allocation of donations received in the last financial year.
            </p>

            <div className="mt-8 space-y-6">
              {fundAllocation.map((item, index) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium text-cream-100">{item.label}</span>
                    <span className="font-display text-lg text-saffron-300">{item.value}%</span>
                  </div>
                  <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-white/10">
                    <AnimatedBar value={item.value} delay={index * 140} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
