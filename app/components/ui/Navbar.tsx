"use client";

import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const onHero = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Tuck the bar away while reading downwards, bring it back on the way up.
      setHidden(y > 240 && y > lastScroll.current);
      lastScroll.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || !onHero || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] max-w-full overflow-x-clip transition-all duration-500 ease-out-expo",
        hidden && !menuOpen ? "-translate-y-full" : "translate-y-0",
        solid
          ? "border-b border-ink-900/5 bg-cream-50/85 backdrop-blur-xl shadow-soft"
          : "bg-gradient-to-b from-ink-900/50 to-transparent",
      )}
    >
      <nav className="container-page flex items-center justify-between py-4" aria-label="Main">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-2xl font-display text-xl transition-all duration-500 ease-out-expo group-hover:rotate-6",
              solid ? "bg-saffron-600 text-white" : "bg-white/15 text-white backdrop-blur-md",
            )}
          >
            ॐ
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-base font-semibold sm:text-lg",
                solid ? "text-ink-900" : "text-white",
              )}
            >
              {site.name}
            </span>
            <span
              className={cn(
                "hidden text-[0.62rem] uppercase tracking-[0.2em] sm:block",
                solid ? "text-saffron-700" : "text-cream-200/90",
              )}
            >
              Since {site.founded} · Ghatnandur
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  solid
                    ? active
                      ? "text-saffron-700"
                      : "text-ink-700 hover:text-saffron-700"
                    : active
                      ? "text-white"
                      : "text-cream-100/80 hover:text-white",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-saffron-500 transition-transform duration-300 ease-out-expo",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className={cn(
              "btn-shine px-5 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm",
              solid ? "btn-primary" : "btn-ghost-light",
            )}
          >
            <Heart className="h-4 w-4" />
            Donate
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-2xl transition-colors duration-300 lg:hidden",
              solid ? "bg-ink-900/5 text-ink-900" : "bg-white/15 text-white backdrop-blur-md",
            )}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-ink-900/5 bg-cream-50 transition-[max-height,opacity] duration-500 ease-out-expo lg:hidden",
          menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container-page flex flex-col gap-1 py-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg transition-all duration-500 ease-out-expo",
                pathname === link.href
                  ? "bg-saffron-50 text-saffron-700"
                  : "text-ink-800 hover:bg-ink-900/5",
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
              )}
              style={{ transitionDelay: menuOpen ? `${index * 60 + 80}ms` : "0ms" }}
            >
              {link.label}
              <span className="text-xs text-ink-300">0{index + 1}</span>
            </Link>
          ))}

          <Link href="/donate" className="btn-primary btn-shine mt-4 w-full">
            <Heart className="h-4 w-4" />
            Donate now
          </Link>
        </div>
      </div>
    </header>
  );
}
