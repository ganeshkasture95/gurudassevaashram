import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        tone === "light" && "text-cream-100",
        className,
      )}
    >
      {eyebrow && (
        <Reveal variant="fade">
          <span className={cn("eyebrow", tone === "light" && "text-saffron-300")}>
            <span className="h-px w-8 bg-current" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={80}>
        <h2
          className={cn(
            "mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.85rem]",
            tone === "light" && "text-cream-50",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed text-ink-500 sm:text-lg",
              tone === "light" && "text-cream-200/80",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}

      <Reveal delay={220} variant="fade">
        <span
          className={cn(
            "mt-7 block h-1 w-16 rounded-full bg-gradient-to-r from-saffron-500 to-saffron-300",
            centered && "mx-auto",
          )}
          aria-hidden
        />
      </Reveal>
    </div>
  );
}
