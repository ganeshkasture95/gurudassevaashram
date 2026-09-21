import DonateCta from "@/app/components/DonateCta";
import Impact from "@/app/components/Impact";
import PageHero from "@/app/components/ui/PageHero";
import Reveal from "@/app/components/ui/Reveal";
import SafeImage from "@/app/components/ui/SafeImage";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { images, milestones, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our history",
  description: `The story of ${site.name} — founded in ${site.founded} on fourteen acres of barren land in Ghatnandur, Beed.`,
};

const principles = [
  {
    title: "Holistic development",
    body: "Education alone is not enough. We work on health, confidence, character and skill together, so a young person leaves here able to stand on their own.",
  },
  {
    title: "Community first",
    body: "Nothing here was built by outsiders. Villagers gave land, labour and grain, and they still decide what the ashram takes on next.",
  },
  {
    title: "Self-reliance",
    body: "Following the Gramgeeta, our aim is never permanent dependence. Every programme is designed to end with a person who no longer needs it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Fourteen acres, forty years, one idea"
        description={`${site.name} was founded on 1 August ${site.founded} under the inspiration of Rashtrasant Tukdoji Maharaj. This is how it grew.`}
        image={images.founding}
      />

      {/* Origin */}
      <section className="section bg-cream-wash">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <div className="relative overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream-100 shadow-lift">
                <SafeImage
                  src={images.gurudev}
                  alt="The shrine of Shri Sant Gurudev Maharaj, founder of the ashram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 right-4 max-w-[15rem] rounded-2xl bg-saffron-600 p-5 text-white shadow-glow sm:-bottom-7 sm:-right-7 sm:p-6">
                <span className="block font-display text-3xl">1 Aug {site.founded}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-saffron-100">
                  The day it all began
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <SectionHeading
              align="left"
              eyebrow="The founder"
              title="P.P. Shri Gurudev Maharaj"
              description="A disciple of Rashtrasant Tukdoji Maharaj who gave away what he had — including fourteen acres of his own land — to build something that would outlast him."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-500">
              <p>
                The land he chose was dry and treeless. For years, residents and villagers carried
                water by hand, planted saplings and lost many of them, and planted again. The shaded
                campus you can walk through today is the result of that stubbornness.
              </p>
              <p>
                He refused to run the ashram as a charity that keeps people dependent. Students were
                expected to study and to work; elders were given responsibility, not just care; women
                were trained to earn rather than to receive. That principle still governs the place.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-cream-100">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we stand on"
            title="Three principles, borrowed from the Gramgeeta"
            description="Rashtrasant Tukdoji Maharaj's message of village self-sufficiency, unity and dignity shapes how every programme here is designed."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 110} variant="blur">
                <article className="card-hover group h-full p-8">
                  <span
                    className="font-display text-5xl text-saffron-200 transition-colors duration-500 group-hover:text-saffron-400"
                    aria-hidden
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Journey of service"
            title={`${site.founded} to the present day`}
            description="Each step began the same way — someone needed something that did not exist yet."
          />

          <ol className="relative mx-auto mt-16 max-w-3xl">
            <span
              className="absolute left-[1.15rem] top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-saffron-400 via-saffron-200 to-transparent md:left-1/2"
              aria-hidden
            />

            {milestones.map((milestone, index) => {
              const onLeft = index % 2 === 0;
              return (
                <Reveal
                  key={milestone.year}
                  as="li"
                  variant={onLeft ? "left" : "right"}
                  delay={60}
                  className={cn(
                    "relative pb-12 pl-14 md:w-1/2 md:pl-0",
                    onLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-1.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-saffron-400 bg-cream-50",
                      onLeft ? "md:left-auto md:right-[-1.15rem]" : "md:left-[-1.15rem]",
                    )}
                    aria-hidden
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-saffron-500" />
                  </span>

                  <div className={cn("card p-7", onLeft && "md:text-right")}>
                    <span className="eyebrow">{milestone.year}</span>
                    <h3 className="mt-2.5 text-xl">{milestone.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {milestone.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <Impact />

      {/* Legacy */}
      <section className="section bg-cream-wash">
        <div className="container-page">
          <SectionHeading
            eyebrow="Legacy"
            title="Still running on the habits he set"
            description="Gurudev Maharaj is gone, but the kitchen still opens at five, the study hall still fills at seven, and the gate is still open to anyone who needs it."
          />
          <Reveal variant="zoom" className="mt-14">
            <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem] shadow-lift">
              <SafeImage
                src={images.campus}
                alt="The ashram campus today"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
