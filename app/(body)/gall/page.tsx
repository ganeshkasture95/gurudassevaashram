import DonateCta from "@/app/components/DonateCta";
import GalleryGrid from "@/app/components/GalleryGrid";
import PageHero from "@/app/components/ui/PageHero";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { images, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photographs from daily life at ${site.name} — the hostel, the old age home, the campus and our community programmes.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Daily life, as it actually looks"
        description="No staged photographs. Study hours, meals, mornings on the veranda, and the trees we planted ourselves."
        image={images.campus}
      />

      <section className="section bg-cream-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Moments"
            title="From the ashram archives"
            description="Select any photograph to view it larger. Use the arrow keys to move through the set."
          />
          <div className="mt-16">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
