"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLinkItem {
  label: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Success Stories", href: "#success-stories" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-14 sm:h-16 md:h-20 px-0 md:px-12 flex items-center justify-between shrink-0 z-30 relative backdrop-blur-md bg-[#F8F8F5]/80 border-b border-black/[0.04] transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className="w-full max-w-7xl mx-auto flex items-center justify-between"
      >
        {/* Brand / Logo (Far Left) */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#121310] rounded-lg"
          aria-label="Arhaan Shaikh Home"
        >
          {/* Geometric Monogram matching AS branding */}
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#121310]"
            >
              <path
                d="M7 23L15 7L21 7L13 23H7Z"
                fill="currentColor"
              />
              <path
                d="M11 25L19 9L25 9L17 25H11Z"
                fill="currentColor"
              />
              <path
                d="M17 17L21 9L25 9L21 17H17Z"
                fill="#CDF225"
              />
            </svg>
          </div>

          {/* Wordmark */}
          <span className="font-heading font-extrabold tracking-[0.12em] sm:tracking-[0.14em] text-[14px] sm:text-[16px] text-[#121310] uppercase select-none">
            Arhaan Shaikh
          </span>
        </Link>

        {/* Desktop Navigation Links (Left to Right / Centered) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-[15px] font-medium text-[#5A5C55] hover:text-[#121310] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#121310] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action CTA Button (Far Right) */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, opacity: 0.95 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="rounded-full bg-[#CDF225] text-[#121310] font-heading font-semibold text-[14px] sm:text-[15px] px-6 py-2.5 shadow-[0_4px_16px_rgba(205,242,37,0.35)] hover:shadow-[0_8px_24px_rgba(205,242,37,0.5)] transition-all duration-200 inline-flex items-center justify-center cursor-pointer select-none"
          >
            {"Let’s talk"}
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle (Far Right on mobile) */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#121310] hover:bg-black/5 rounded-xl focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.2]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.2]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay / Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full inset-x-0 md:hidden px-6 pt-4 pb-6 mx-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/[0.08] shadow-[0_16px_36px_-8px_rgba(18,19,16,0.12)] z-50"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-body text-base font-medium text-[#5A5C55] hover:text-[#121310] py-2.5 px-3 rounded-xl hover:bg-black/[0.04] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Full-width #CDF225 Let’s talk Button */}
              <div className="pt-2">
                <motion.a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-full bg-[#CDF225] text-[#121310] font-heading font-semibold text-base text-center shadow-[0_4px_16px_rgba(205,242,37,0.35)] hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer select-none"
                >
                  {"Let’s talk"}
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
