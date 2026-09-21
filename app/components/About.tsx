import { images, site } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./ui/Reveal";
import SafeImage from "./ui/SafeImage";
import SectionHeading from "./ui/SectionHeading";

const chapters = [
  {
    title: "How the ashram began",
    image: images.founding,
    alt: "The first hall of the ashram",
    body: "On 1 August 1985, inspired by Rashtrasant Tukdoji Maharaj, P.P. Shri Gurudev Maharaj began this work on fourteen acres of barren land. There was no building, no funding and no guarantee — only the conviction that service to people is service to God.",
    caption: "1985 · The first prayer hall",
  },
  {
    title: "The man behind it",
    image: images.gurudev,
    alt: "The shrine of Shri Sant Gurudev Maharaj at the ashram",
    body: "Gurudev Maharaj spent his life among the people he served: sitting with elders, teaching children, walking village to village against untouchability and addiction. He left behind no wealth, only an institution that still runs on the habits he set.",
    caption: "The shrine of Shri Sant Gurudev Maharaj",
  },
  {
    title: "What we do today",
    image: images.mission,
    alt: "Meals being served at the ashram",
    body: "A hostel for rural students, a home for elders, livelihood training for women, a music school, and year-round health and environment work. Food, education and dignity — offered freely, to whoever needs them.",
    caption: "Annadan, served every single day",
  },
];

export default function About() {
  return (
    <section className="section relative overflow-hidden bg-cream-wash">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our story"
          title="Four decades of quiet, unbroken service"
          description={`${site.name} was never meant to be an institution. It was meant to be a home — and that is still how it is run.`}
        />

        <div className="mt-20 space-y-24 md:space-y-32">
          {chapters.map((chapter, index) => {
            const flipped = index % 2 === 1;
            return (
              <div
                key={chapter.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <Reveal
                  variant={flipped ? "right" : "left"}
                  className={flipped ? "md:order-2" : undefined}
                >
                  <figure className="group relative">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
                      <SafeImage
                        src={chapter.image}
                        alt={chapter.alt}
                        fill
                        className="object-cover object-center transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
                    </div>
                    <figcaption className="absolute bottom-5 left-5 right-5 text-xs font-medium uppercase tracking-[0.15em] text-cream-100">
                      {chapter.caption}
                    </figcaption>
                    <span
                      className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-600 font-display text-lg text-white shadow-glow"
                      aria-hidden
                    >
                      0{index + 1}
                    </span>
                  </figure>
                </Reveal>

                <Reveal
                  variant={flipped ? "left" : "right"}
                  delay={120}
                  className={flipped ? "md:order-1" : undefined}
                >
                  <h3 className="text-2xl sm:text-3xl">{chapter.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
                    {chapter.body}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>

        <Reveal variant="zoom" className="mt-24">
          <blockquote className="relative mx-auto max-w-4xl rounded-[2rem] border border-saffron-200/60 bg-white/70 px-8 py-12 text-center shadow-soft backdrop-blur-sm sm:px-14">
            <span
              className="absolute left-8 top-4 font-display text-7xl leading-none text-saffron-200"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="relative font-display text-xl leading-relaxed text-ink-800 sm:text-2xl">
              Service to humanity is the most divine form of worship. Let your heart be filled with
              compassion and love for all.
            </p>
            <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-saffron-700">
              Rashtrasant Tukdoji Maharaj
            </footer>
          </blockquote>
        </Reveal>

        <Reveal className="mt-14 text-center">
          <Link href="/about" className="btn-outline group">
            Read our full history
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
