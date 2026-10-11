"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroContent() {
  return (
    <div className="flex flex-col items-start justify-center w-full max-w-xl lg:max-w-[580px]">
      {/* Kicker Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EFF3D8] text-[#363A26] border border-[#E2EBBF] mb-6 select-none shadow-[0_2px_8px_rgba(205,242,37,0.12)]"
      >
        <span className="w-2 h-2 rounded-full bg-[#8EB800] animate-pulse" />
        <span className="font-heading font-bold text-[11px] sm:text-[11.5px] tracking-[0.1em] uppercase text-[#3E4525]">
          BUSINESS STRATEGY &bull; GROWTH ADVISORY
        </span>
      </motion.div>

      {/* Primary Headline (Exactly 3 lines on desktop) */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading font-black text-4xl sm:text-6xl lg:text-[66px] xl:text-[72px] tracking-[-0.038em] leading-[1.03] text-[#121310] mb-6"
      >
        <span className="block">Turning business</span>
        <span className="block">problems into</span>
        <span className="block text-[#a3e635] whitespace-nowrap drop-shadow-[0_2px_14px_rgba(163,230,53,0.3)]">
          growth strategies.
        </span>
      </motion.h1>

      {/* Supporting Subhead */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="font-body text-[#5A5C55] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[490px] mb-8 font-normal"
      >
        I help businesses overcome complex challenges, unlock new
        opportunities, and build practical strategies for sustainable growth.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
      >
        {/* Primary CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="group relative inline-flex items-center justify-center gap-2.5 bg-[#CDF225] text-[#121310] font-heading font-bold text-[15px] sm:text-[16px] px-8 py-3.5 sm:py-4 rounded-full shadow-[0_6px_22px_rgba(205,242,37,0.45)] hover:shadow-[0_10px_32px_rgba(205,242,37,0.7)] transition-all cursor-pointer select-none"
        >
          <span>Work With Me</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>

        {/* Secondary CTA */}
        <motion.a
          href="#case-studies"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="inline-flex items-center justify-center bg-white/75 backdrop-blur-md border border-[#121310]/20 text-[#121310] font-heading font-semibold text-[15px] sm:text-[16px] px-8 py-3.5 sm:py-4 rounded-full hover:bg-white hover:border-[#121310]/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all cursor-pointer select-none"
        >
          Case Studies
        </motion.a>
      </motion.div>
    </div>
  );
}

export default HeroContent;
