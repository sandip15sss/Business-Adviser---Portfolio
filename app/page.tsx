import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#F8F8F5] text-[#121310] relative selection:bg-[#CDF225] selection:text-[#121310] overflow-x-clip">
      <Hero />
      <AboutSection />
    </main>
  );
}
