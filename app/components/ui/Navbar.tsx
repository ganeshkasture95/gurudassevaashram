"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navbarRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling Down
        gsap.to(navbarRef.current, {
          y: "-100%",
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // Scrolling Up
        gsap.to(navbarRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power3.out",
        });
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 w-full bg-ter-200 text-white z-50 shadow-lg transform transition-all duration-300 ease-in-out"
      style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Link href="/" className="text-md  md:text-2xl font-bold text-white hover:text-orange-100">
              Gurudev Seva Ashram
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-ter-50 transition duration-100">
              Home
            </Link>
            <Link href="/about" className="hover:text-ter-50 transition duration-100">
              About
            </Link>
            <Link href="/gall" className="hover:text-ter-50 transition duration-100">
              Gallery
            </Link>
            <Link href="/donate" className="hover:text-ter-50 transition duration-100">
              Donate
            </Link>
            <Link href="/contact" className="hover:text-ter-50 transition duration-100">
              Contact
            </Link>
          </div>

          {/* Donate Button (Desktop) */}
          <div className="md:flex hidden  items-center space-x-4">
            <Link
              href="/donate"
              className="bg-[#EAE4DD] text-black font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full bg-ter-200 text-white p-6 space-y-4">
            <Link
              href="/"
              className="block hover:text-ter-50 transition duration-100"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:text-ter-50 transition duration-100"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/gall"
              className="block hover:text-ter-50 transition duration-100"
              onClick={toggleMobileMenu}
            >
              Gallery
            </Link>
            <Link
              href="/donate"
              className="block hover:text-ter-50 transition duration-100"
              onClick={toggleMobileMenu}
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className="block hover:text-ter-50 transition duration-100"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>

            {/* Donate Button (Mobile) */}
            <div className="mt-6">
              <Link
                href="/donate"
                className="block text-center bg-[#EAE4DD] text-black font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
                onClick={toggleMobileMenu}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
