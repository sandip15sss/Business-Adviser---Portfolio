"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import VerticalTilesPreloader from "@/components/ui/VerticalTilesPreloader";

export default function HomePage() {
  return (
    <>
      {/* Editorial Vertical Tile Reveal */}
      <VerticalTilesPreloader
        tileClassName="bg-[#121310]"
        minTileWidth={72}
        animationDuration={0.85}
        animationDelay={0.3}
        stagger={0.035}
      />

      <main className="min-h-screen bg-[#F8F8F5] text-[#121310] selection:bg-[#CDF225]">
        <Hero />
        <AboutSection />
      </main>
    </>
  );
}
