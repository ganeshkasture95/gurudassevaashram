import ContactForm from "@/app/components/ContactForm";
import DonateCta from "@/app/components/DonateCta";
import PageHero from "@/app/components/ui/PageHero";
import Reveal from "@/app/components/ui/Reveal";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { images, site } from "@/lib/site";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & visit",
  description: `Visit ${site.name} in Ghatnandur, Tal. Ambajogai, Dist. Beed, or reach us by phone and email.`,
};

const mapQuery = encodeURIComponent("Ghatnandur, Ambajogai, Beed, Maharashtra 431519");

const details = [
  {
    icon: MapPin,
    label: "Address",
    lines: [site.address.line1, site.address.line2, site.address.state],
  },
  { icon: Phone, label: "Phone", lines: [site.phone], href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", lines: [site.email], href: `mailto:${site.email}` },
  { icon: Clock, label: "Visiting hours", lines: [site.hours] },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come and see it for yourself"
        description="The gate is open every day. Walk through the hostel, sit with our elders, eat with us — then decide how you would like to help."
        image={images.campus}
      />

      <section className="section bg-cream-wash">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Reach us"
              title="Where to find the ashram"
              description="We are in Gurudas Nagar, just outside Ghatnandur in Ambajogai taluka. The nearest railhead is Parli Vaijnath."
            />

            <dl className="mt-10 space-y-4">
              {details.map((item, index) => (
                <Reveal key={item.label} delay={index * 90} variant="left">
                  <div className="card flex gap-5 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-600">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
                        {item.label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-ink-700">
                        {item.href ? (
                          <a href={item.href} className="link-underline font-medium">
                            {item.lines[0]}
                          </a>
                        ) : (
                          item.lines.map((line) => <span key={line} className="block">{line}</span>)
                        )}
                      </dd>
                    </div>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={200} className="mt-8">
              <div className="overflow-hidden rounded-3xl border border-ink-900/5 shadow-soft">
                <iframe
                  title="Map showing the location of the ashram"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" className="lg:sticky lg:top-28">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
