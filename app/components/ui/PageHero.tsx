import SafeImage from "./SafeImage";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="absolute inset-0 -z-10">
        <SafeImage
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/60" />
        <div className="absolute inset-0 bg-grain opacity-[0.1] mix-blend-overlay" />
      </div>

      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow animate-fade-up text-saffron-300">
            <span className="h-px w-8 bg-current" aria-hidden />
            {eyebrow}
          </span>
          <h1
            className="mt-5 font-display text-4xl leading-[1.08] text-cream-50 sm:text-5xl lg:text-[3.6rem]"
            style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="mt-6 text-base leading-relaxed text-cream-200/75 sm:text-lg"
              style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
