import { events } from "@/lib/site";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Events() {
  return (
    <section className="section bg-cream-50">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              align="left"
              eyebrow="Come and see"
              title="Upcoming events at the ashram"
              description="The best way to understand this place is to spend a morning here. You are welcome at any of these — no registration, no fee."
            />
            <Reveal delay={260} className="mt-9">
              <Link href="/contact" className="btn-dark group">
                Plan a visit
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <ol className="relative space-y-5 before:absolute before:left-[1.35rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-saffron-300 before:via-ink-100 before:to-transparent">
            {events.map((event, index) => (
              <Reveal key={event.title} delay={index * 120} variant="right" as="li">
                <div className="relative pl-16">
                  <span
                    className="absolute left-0 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-saffron-200 bg-cream-50 text-saffron-600"
                    aria-hidden
                  >
                    <CalendarDays className="h-5 w-5" />
                  </span>
                  <article className="card-hover group p-7">
                    <span className="eyebrow">{event.date}</span>
                    <h3 className="mt-3 text-xl">{event.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">{event.description}</p>
                    <p className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-300">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {event.venue}
                    </p>
                  </article>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
