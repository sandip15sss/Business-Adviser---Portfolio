"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import GlassGrowthIllustration from "@/components/hero/GlassGrowthIllustration";
import HeroMobile from "@/components/hero/HeroMobile";

export const Hero = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(function Hero(props, ref) {
  return (
    <section
      ref={ref}
      className="min-h-[100dvh] md:min-h-screen w-full relative flex flex-col justify-between bg-[#F8F8F5] overflow-hidden px-5 md:px-0 pt-3 md:pt-0 pb-8 md:pb-16"
      {...props}
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="hero-ambient-glow-top absolute top-0 right-0 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] bg-gradient-to-b from-[#EFF3D8]/35 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="hero-ambient-glow-bottom absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-t from-[#EFF3D8]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ========================================================
          1. TOP ZONE (Navbar)
          ======================================================== */}
      <Navbar />

      {/* ========================================================
          2. MOBILE HERO (< 768px): Strict 100dvh Constrained Layout
          ======================================================== */}
      <div className="flex md:hidden flex-1 min-h-0 w-full flex-col justify-between relative z-10">
        <HeroMobile />
      </div>

      {/* ========================================================
          3. DESKTOP HERO (>= 768px): 2-Column Responsive Grid
          ======================================================== */}
      <div className="hidden md:grid flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 grid-cols-2 items-center gap-8 md:gap-16 z-10 py-12 relative">
        {/* Left Column (Text & CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-headline-block flex flex-col items-start justify-center relative z-10"
        >
          {/* Main Headline */}
          <h1 className="hero-fade-out text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-bold text-[#121310] leading-[1.08] tracking-tight mb-4">
            <span className="block">Turning business</span>
            <span className="block">problems into</span>
            <span className="block text-[#CDF225] whitespace-nowrap drop-shadow-[0_2px_12px_rgba(205,242,37,0.35)]">
              growth strategies.
            </span>
          </h1>

          {/* Subhead */}
          <p className="hero-fade-out text-sm sm:text-base text-[#5A5C55] max-w-[460px] leading-relaxed mb-8 font-normal">
            I help businesses overcome complex challenges, unlock new
            opportunities, and build practical strategies for sustainable growth.
          </p>

          {/* CTA Group */}
          <div className="hero-fade-out flex flex-row items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-[#CDF225] text-[#121310] font-semibold text-xs sm:text-sm px-6 py-3 shadow-[0_4px_16px_rgba(205,242,37,0.35)] hover:shadow-[0_8px_24px_rgba(205,242,37,0.5)] transition-all inline-flex items-center gap-2 cursor-pointer select-none"
            >
              <span>Work With Me</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </motion.a>

            <motion.a
              href="#case-studies"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-white/80 border border-[#DCD9CE] hover:border-[#121310]/30 text-[#121310] font-semibold text-xs sm:text-sm px-6 py-3 shadow-sm hover:shadow transition-all inline-flex items-center justify-center cursor-pointer select-none"
            >
              Case Studies
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column (3D Glass Illustration) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-illustration-group hero-illustration-block relative flex items-center justify-center w-full z-10"
        >
          <GlassGrowthIllustration />
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
