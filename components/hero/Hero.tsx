"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import GlassGrowthIllustration from "@/components/hero/GlassGrowthIllustration";
import HeroMobile from "@/components/hero/HeroMobile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !heroRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      // ========================================================
      // DESKTOP HERO EXIT KINETICS (>= 768px)
      // As bottom of Hero leaves viewport:
      // Tablet drifts up (y: -50px), scales down (scale: 0.94), fades (opacity: 0)
      // Spheres disperse outward (y: -80px, x: ±30px)
      // Headline & CTAs soft fade out (opacity: 0.15, y: -30px)
      // ========================================================
      mm.add("(min-width: 768px)", () => {
        const animatedTargets = [
          ".hero-headline-block",
          ".hero-exit-tablet",
          ".hero-exit-pedestal",
          ".hero-exit-satellites",
          ".hero-exit-sphere-left",
          ".hero-exit-sphere-top",
          ".hero-exit-sphere-right",
          ".hero-exit-sphere-far-right",
          ".hero-exit-sphere-bottom",
          ".hero-ambient-glow-top",
          ".hero-ambient-glow-bottom",
        ];

        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
            onEnter: () =>
              gsap.set(animatedTargets, { willChange: "transform, opacity" }),
            onLeave: () =>
              gsap.set(animatedTargets, { willChange: "auto" }),
            onEnterBack: () =>
              gsap.set(animatedTargets, { willChange: "transform, opacity" }),
            onLeaveBack: () =>
              gsap.set(animatedTargets, { willChange: "auto" }),
          },
        });

        // 1. Hero Headline & CTAs: Soft fade out (opacity: 0.15, y: -30px)
        exitTl.to(
          ".hero-headline-block",
          {
            y: -30,
            opacity: 0.15,
            ease: "none",
          },
          0
        );

        // 2. 3D Glass Tablet & Growth Bars: Drift upward (y: -50px), scale down (scale: 0.94), fade to 0
        exitTl.to(
          ".hero-exit-tablet",
          {
            y: -50,
            scale: 0.94,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Pedestal & Satellite Cards fade and drift with the tablet
        exitTl.to(
          [".hero-exit-pedestal", ".hero-exit-satellites"],
          {
            y: -40,
            scale: 0.95,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // 3. Hero Floating Spheres: Disperse outward with gentle parallax drift (y: -80px, x: ±30px)
        exitTl.to(
          ".hero-exit-sphere-left",
          {
            x: -30,
            y: -80,
            opacity: 0,
            ease: "none",
          },
          0
        );

        exitTl.to(
          ".hero-exit-sphere-top",
          {
            x: -18,
            y: -80,
            opacity: 0,
            ease: "none",
          },
          0
        );

        exitTl.to(
          ".hero-exit-sphere-right",
          {
            x: 30,
            y: -80,
            opacity: 0,
            ease: "none",
          },
          0
        );

        exitTl.to(
          ".hero-exit-sphere-far-right",
          {
            x: 35,
            y: -75,
            opacity: 0,
            ease: "none",
          },
          0
        );

        exitTl.to(
          ".hero-exit-sphere-bottom",
          {
            x: -12,
            y: -60,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Ambient glow subtle vertical drift
        exitTl.to(
          ".hero-ambient-glow-top",
          {
            y: 70,
            opacity: 0.15,
            ease: "none",
          },
          0
        );
      });

      // ========================================================
      // MOBILE HERO EXIT KINETICS (< 768px)
      // 50% reduced translate distances for 60fps safety
      // ========================================================
      mm.add("(max-width: 767px)", () => {
        const animatedTargets = [
          ".hero-mobile-text",
          ".hero-exit-tablet",
          ".hero-exit-pedestal",
          ".hero-exit-sphere-left",
          ".hero-exit-sphere-right",
        ];

        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
            onEnter: () =>
              gsap.set(animatedTargets, { willChange: "transform, opacity" }),
            onLeave: () =>
              gsap.set(animatedTargets, { willChange: "auto" }),
            onEnterBack: () =>
              gsap.set(animatedTargets, { willChange: "transform, opacity" }),
            onLeaveBack: () =>
              gsap.set(animatedTargets, { willChange: "auto" }),
          },
        });

        exitTl
          .to(
            ".hero-mobile-text",
            {
              y: -15,
              opacity: 0.2,
              ease: "none",
            },
            0
          )
          .to(
            ".hero-exit-tablet",
            {
              y: -25,
              scale: 0.97,
              opacity: 0,
              ease: "none",
            },
            0
          )
          .to(
            ".hero-exit-pedestal",
            {
              y: -20,
              opacity: 0,
              ease: "none",
            },
            0
          )
          .to(
            ".hero-exit-sphere-left",
            {
              x: -15,
              y: -40,
              opacity: 0,
              ease: "none",
            },
            0
          )
          .to(
            ".hero-exit-sphere-right",
            {
              x: 15,
              y: -40,
              opacity: 0,
              ease: "none",
            },
            0
          );
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="min-h-[100dvh] md:min-h-screen w-full relative flex flex-col justify-between bg-[#F8F8F5] overflow-hidden px-5 md:px-0 pt-3 md:pt-0 pb-8 md:pb-16"
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
      <div className="flex md:hidden flex-1 min-h-0 w-full flex-col justify-between">
        <HeroMobile />
      </div>

      {/* ========================================================
          3. DESKTOP HERO (>= 768px): 2-Column Responsive Grid
          ======================================================== */}
      <div className="hidden md:grid flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 grid-cols-2 items-center gap-8 md:gap-16 z-10 py-12">
        {/* Left Column (Text & CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-headline-block flex flex-col items-start justify-center"
        >
          {/* Main Headline (Kicker badge completely deleted) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-bold text-[#121310] leading-[1.08] tracking-tight mb-4">
            <span className="block">Turning business</span>
            <span className="block">problems into</span>
            <span className="block text-[#CDF225] whitespace-nowrap drop-shadow-[0_2px_12px_rgba(205,242,37,0.35)]">
              growth strategies.
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-sm sm:text-base text-[#5A5C55] max-w-[460px] leading-relaxed mb-8 font-normal">
            I help businesses overcome complex challenges, unlock new
            opportunities, and build practical strategies for sustainable growth.
          </p>

          {/* CTA Group */}
          <div className="flex flex-row items-center gap-4">
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
          className="hero-illustration-block relative flex items-center justify-center w-full"
        >
          <GlassGrowthIllustration />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
