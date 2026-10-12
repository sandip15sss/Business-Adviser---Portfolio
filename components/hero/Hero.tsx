"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import GlassGrowthIllustration from "@/components/hero/GlassGrowthIllustration";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-start lg:justify-center bg-[#F8F8F5] pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-14 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      {/* Navigation Clearance / Top Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-[#CDF225]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-[#A3E635]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Hero Viewport Content */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex items-start lg:items-center pt-2 sm:pt-4 lg:pt-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Fluid Typography Scaled for 100vh */}
          <div className="flex flex-col justify-center w-full lg:col-span-6 z-10">
            {/* Viewport-Safe Scaled Headline */}
            <h1 className="text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-[#121310] leading-[1.04] tracking-tight">
              Turning business{" "}
              <span className="block sm:inline">problems into</span>{" "}
              <span className="text-[#84B800] sm:text-[#CDF225] block sm:inline">
                growth strategies.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[15px] sm:text-base md:text-lg text-[#5A5C55] leading-relaxed max-w-lg mt-3 sm:mt-5 mb-5 sm:mb-7 font-normal">
              I help businesses overcome complex challenges, unlock new
              opportunities, and build practical strategies for sustainable growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 lg:mb-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#CDF225] text-[#121310] font-semibold text-sm sm:text-base transition-transform active:scale-[0.98] shadow-sm"
              >
                Work With Me <span>→</span>
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#121310] font-medium text-sm sm:text-base border border-[#E3E2DA] transition-colors hover:bg-[#F0EFE9]"
              >
                Case Studies
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Growth Dashboard Constrained to Viewport Height */}
          <div className="relative w-full lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[440px] lg:max-w-[520px] max-h-[52vh] aspect-[4/3] flex items-center justify-center">
              {/* Existing 3D Glass Tablet / Visual Assets */}
              <div className="relative w-full h-full flex items-center justify-center max-h-[50vh]">
                <GlassGrowthIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
