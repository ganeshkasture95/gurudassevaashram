"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** A gentle floating donate prompt — hidden on the donate page itself. */
export default function StickyDonate() {
  const pathname = usePathname();
  const onDonatePage = pathname === "/donate";
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (onDonatePage) return null;

  return (
    <Link
      href="/donate"
      aria-label="Donate to Gurudas Seva Ashram"
      className={cn(
        "fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full px-5 py-3",
        "bg-saffron-600 text-sm font-semibold text-white shadow-glow",
        "transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-saffron-700",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Heart className="h-4 w-4" aria-hidden />
      <span className="hidden sm:inline">Donate</span>
    </Link>
  );
}
