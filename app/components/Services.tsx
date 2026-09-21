import { services } from "@/lib/site";
import Reveal from "./ui/Reveal";
import SafeImage from "./ui/SafeImage";
import SectionHeading from "./ui/SectionHeading";
import ServiceIcon from "./ui/ServiceIcon";

export default function Services() {
  return (
    <section className="section relative bg-cream-100">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we run"
          title="Six programmes, one purpose"
          description="Every programme began because someone turned up at the gate needing help that did not exist yet. None of them charge a rupee."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90} variant="blur">
              <article className="card-hover group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SafeImage
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-[1.1s] ease-out-expo group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-saffron-600 shadow-soft transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:bg-saffron-600 group-hover:text-white">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl leading-snug">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                    {service.description}
                  </p>
                  <p className="mt-6 flex items-center gap-2 border-t border-ink-100 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-saffron-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" aria-hidden />
                    {service.stat}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
