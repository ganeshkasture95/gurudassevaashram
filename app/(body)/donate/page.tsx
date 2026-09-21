import DonationCard from "@/app/components/DonationCard";
import Impact from "@/app/components/Impact";
import Testimonials from "@/app/components/Testimonials";
import CopyField from "@/app/components/ui/CopyField";
import Faq from "@/app/components/ui/Faq";
import PageHero from "@/app/components/ui/PageHero";
import Reveal from "@/app/components/ui/Reveal";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { faqs, images, site } from "@/lib/site";
import {
  BadgeCheck,
  Banknote,
  BookOpen,
  HandHeart,
  Landmark,
  Package,
  Smartphone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: `Support ${site.name} — fund a student's education, an elder's care or a woman's livelihood. Tax exempt under ${site.taxSection}.`,
};

const causes = [
  {
    icon: BookOpen,
    title: "A student's education",
    body: "Lodging, meals, books and tuition for rural students who would otherwise leave school after Class 8.",
  },
  {
    icon: HandHeart,
    title: "An elder's care",
    body: "Daily meals, medicines and companionship for residents of the Gurudas Old Age Home.",
  },
  {
    icon: Banknote,
    title: "A woman's livelihood",
    body: "Tailoring and handicraft training, plus the equipment to start earning independently.",
  },
];

const methods = [
  {
    icon: Smartphone,
    title: "UPI or online transfer",
    body: "The fastest route. Send to our UPI ID and message us the reference number so we can issue your receipt.",
    detail: site.bank.upi,
  },
  {
    icon: Package,
    title: "Donate goods instead",
    body: "Books and stationery, grains and food supplies, blankets and clothing, or medical equipment. Please call before sending so we can plan storage.",
    detail: site.phone,
  },
  {
    icon: Landmark,
    title: "Visit and give in person",
    body: `Come to the ashram, meet the students and elders, and contribute directly. ${site.hours}.`,
    detail: `${site.address.line1}, ${site.address.line2}`,
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Your contribution, our strength"
        description={`Every rupee given to ${site.name} goes into meals, classrooms, medicines and livelihoods. Nothing is spent on fundraising commissions.`}
        image={images.mission}
      />

      {/* Give */}
      <section className="section bg-cream-wash">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why it matters"
              title="What your gift actually pays for"
              description="We are a small trust with no corporate backing. Donations are the operating budget, not a bonus."
            />

            <div className="mt-10 space-y-5">
              {causes.map((cause, index) => (
                <Reveal key={cause.title} delay={index * 110} variant="left">
                  <article className="card-hover flex gap-5 p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-600">
                      <cause.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg">{cause.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{cause.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-8">
              <div className="flex items-start gap-3 rounded-2xl border border-moss-100 bg-moss-50 p-5">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-moss-600" aria-hidden />
                <p className="text-sm leading-relaxed text-moss-800">
                  All donations are eligible for tax exemption under {site.taxSection}. Send your PAN
                  and postal address along with the transfer and we will issue a stamped receipt
                  within seven working days.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" className="lg:sticky lg:top-28">
            <DonationCard />
          </Reveal>
        </div>
      </section>

      {/* Ways to give */}
      <section id="ways-to-give" className="section scroll-mt-28 bg-cream-100">
        <div className="container-page">
          <SectionHeading
            eyebrow="Ways to give"
            title="Four ways to contribute"
            description="Choose whichever is easiest for you. If anything is unclear, call us and we will walk you through it."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal variant="left">
              <div className="card p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-600 text-white shadow-glow">
                  <Landmark className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl">Bank transfer</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  Transfer directly to the trust account. Tap any field to copy it.
                </p>

                <dl className="mt-6">
                  <CopyField label="Account name" value={site.bank.accountName} />
                  <CopyField label="Bank" value={site.bank.bankName} />
                  <CopyField label="Account number" value={site.bank.accountNumber} />
                  <CopyField label="IFSC code" value={site.bank.ifsc} />
                  <CopyField label="UPI ID" value={site.bank.upi} />
                </dl>
              </div>
            </Reveal>

            <div className="space-y-6">
              {methods.map((method, index) => (
                <Reveal key={method.title} delay={index * 110} variant="right">
                  <article className="card-hover p-7">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-600">
                        <method.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-lg">{method.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-500">{method.body}</p>
                        <p className="mt-3 text-sm font-medium text-saffron-700">{method.detail}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Impact />
      <Testimonials />

      {/* FAQ */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Questions"
            title="Before you give"
            description="The things donors most often ask us."
          />
          <Reveal variant="up" className="mx-auto mt-14 max-w-3xl">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
