"use client";

import React from "react";
import Image from "next/image";

export const AboutSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(function AboutSection(props, ref) {
  return (
    <section
      ref={ref}
      id="about"
      className="w-full relative bg-[#F8F8F5] pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-24 md:pb-32 px-5 sm:px-8 md:px-12 overflow-hidden"
      {...props}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Flex/Grid Container */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column Wrapper: Flattens to 'contents' on mobile for custom ordering, turns into flex-col on desktop */}
          <div className="contents lg:flex lg:flex-col lg:col-span-7">
            {/* 1. TITLE BLOCK (Mobile: Order 1 | Desktop: Top Left) */}
            <div className="about-title-reveal order-1 w-full flex flex-col items-start mb-2 lg:mb-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF3D8] text-[11px] font-semibold text-[#5A5C55] uppercase tracking-wider mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-[#CDF225]" />
                ABOUT US
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-[#121310] leading-[1.1] tracking-tight max-w-xl">
                Strategy, execution and real business{" "}
                <span className="text-[#84B800] sm:text-[#CDF225]">growth.</span>
              </h2>
            </div>

            {/* 3. NARRATIVE COPY (Mobile: Order 3 | Desktop: Below Title) */}
            <div className="order-3 w-full flex flex-col space-y-5 text-sm sm:text-base text-[#5A5C55] leading-[1.65] max-w-xl mt-4 lg:mt-0">
              <p className="about-text-reveal">
                I’ve spent the last decade moving between strategy rooms and
                delivery calendars building positioning for founders, running
                campaigns, shaping brands, and sitting with teams on the days the
                plan meets reality.
              </p>

              <p className="about-text-reveal">
                That mix is the point. I’ve consulted for businesses across
                categories and markets, and I’ve also built and led the teams
                that execute: brand, content, digital, performance and
                production.
              </p>

              <p className="about-text-reveal font-medium text-[#121310] pt-1">
                So my advice doesn’t stay on paper. It’s shaped by years of
                building the teams that make growth happen.
              </p>
            </div>
          </div>

          {/* 2. 3D PORTRAIT PLINTH (Mobile: Order 2 | Desktop: Right Column, col-span-5) */}
          <div className="about-portrait-plinth order-2 lg:order-none lg:col-span-5 w-full flex justify-center my-6 lg:my-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {/* Ambient Green Radial Glow */}
              <div className="absolute inset-0 bg-[#CDF225]/20 blur-3xl rounded-full scale-90 pointer-events-none" />

              {/* Luminous Orbital Ring */}
              <div className="about-orbit-ring absolute w-[115%] h-[115%] rounded-full border border-[#CDF225]/40 -rotate-12 pointer-events-none" />

              {/* Volumetric 3D Accent Spheres */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#A3E635] to-[#CDF225] absolute -left-4 bottom-1/4 shadow-lg pointer-events-none z-20" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#CDF225] absolute -right-2 bottom-12 shadow-md pointer-events-none z-20" />
              <div className="w-4 h-4 rounded-full bg-[#CDF225] absolute right-6 top-8 shadow-md pointer-events-none z-20" />

              {/* Card Container & Portrait Frame */}
              <div className="about-plinth-frame relative w-[86%] h-[92%] rounded-[32px] bg-white border border-[#DCD9CE]/70 shadow-xl overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full bg-[#EAE8DF]">
                  <Image
                    alt="Arhaan Shaikh"
                    className="object-cover object-top"
                    fill
                    priority
                    src="/images/arhaan-portrait.jpg"
                  />
                  {/* Subtle lower gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Glass Telemetry Badges */}
              {/* Badge 1: Top-Left */}
              <div className="about-badge-reveal absolute top-[8%] -left-3 sm:-left-6 bg-white/90 backdrop-blur-md border border-white/80 py-2 px-3 rounded-2xl flex items-center gap-2 shadow-md z-30">
                <div className="w-6 h-6 rounded-lg bg-[#EFF3D8] flex items-center justify-center text-[#7BA600] text-xs">
                  ◎
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#121310] leading-tight">
                  <p>Strategy</p>
                  <p className="text-[10px] text-[#5A5C55] font-normal">
                    & Positioning
                  </p>
                </div>
              </div>

              {/* Badge 2: Top-Right */}
              <div className="about-badge-reveal absolute top-[16%] -right-3 sm:-right-6 bg-white/90 backdrop-blur-md border border-white/80 py-2 px-3 rounded-2xl flex items-center gap-2 shadow-md z-30">
                <div className="w-6 h-6 rounded-lg bg-[#EFF3D8] flex items-center justify-center text-[#7BA600] text-xs">
                  ılı
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#121310] leading-tight">
                  <p>Brands</p>
                  <p className="text-[10px] text-[#5A5C55] font-normal">
                    & Growth
                  </p>
                </div>
              </div>

              {/* Badge 3: Bottom-Right */}
              <div className="about-badge-reveal absolute bottom-[14%] -right-2 sm:-right-4 bg-white/90 backdrop-blur-md border border-white/80 py-2 px-3 rounded-2xl flex items-center gap-2 shadow-md z-30">
                <div className="w-6 h-6 rounded-lg bg-[#EFF3D8] flex items-center justify-center text-[#7BA600] text-xs">
                  👥
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#121310] leading-tight">
                  <p>Teams</p>
                  <p className="text-[10px] text-[#5A5C55] font-normal">
                    & Execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
