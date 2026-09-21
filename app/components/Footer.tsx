import { navLinks, site } from "@/lib/site";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const programmeLinks = [
  { label: "Students' hostel", href: "/about" },
  { label: "Old age home", href: "/about" },
  { label: "Women's livelihoods", href: "/about" },
  { label: "Gallery", href: "/gall" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-cream-200/70">
      <div className="absolute inset-0 bg-grain opacity-[0.07] mix-blend-overlay" aria-hidden />

      <div className="container-page relative pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-saffron-600 font-display text-xl text-white transition-transform duration-500 ease-out-expo group-hover:rotate-6">
                ॐ
              </span>
              <span className="font-display text-lg text-cream-50">{site.name}</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              A spiritual and social welfare ashram serving rural Maharashtra since {site.founded}, in
              the tradition of Rashtrasant Tukdoji Maharaj.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-saffron-300">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Pages">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream-50">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline hover:text-saffron-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programmes">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream-50">
              Programmes
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {programmeLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="link-underline hover:text-saffron-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream-50">
              Reach us
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-300" aria-hidden />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.state}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-saffron-300" aria-hidden />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-saffron-300" aria-hidden />
                <a href={`mailto:${site.email}`} className="link-underline break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-saffron-300" aria-hidden />
                <span>{site.hours}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-saffron-400/50 hover:text-saffron-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Donations are tax exempt under {site.taxSection}. Registered charitable trust,
            Maharashtra.
          </p>
        </div>
      </div>
    </footer>
  );
}
