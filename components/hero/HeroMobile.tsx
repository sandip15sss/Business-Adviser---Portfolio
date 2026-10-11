"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlassGrowthIllustration from "./GlassGrowthIllustration";

export function HeroMobile() {
  return (
    <div className="flex flex-col items-start w-full relative flex-1 min-h-0 justify-between">
      {/* 1 & 2 & 3. Top Text & Buttons Container with deliberate separation */}
      <div className="hero-mobile-text hero-headline-block flex flex-col items-start w-full shrink-0 pt-6 sm:pt-8">
        {/* 1. Main Headline (Bold, editorial scale) */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-[1.95rem] sm:text-[2.25rem] leading-[1.12] tracking-tight text-[#121310] mb-3 text-left"
        >
          <span className="block">Turning business</span>
          <span className="block">problems into</span>
          <span className="block text-[#CDF225] whitespace-nowrap drop-shadow-[0_2px_12px_rgba(205,242,37,0.35)]">
            growth strategies.
          </span>
        </motion.h1>

        {/* 2. Subhead / Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-xs sm:text-sm text-[#5A5C55] leading-relaxed mb-5 max-w-[330px] text-left"
        >
          I help businesses overcome complex challenges, unlock new
          opportunities, and build practical strategies for sustainable growth.
        </motion.p>

        {/* 3. Action Buttons: Side-by-Side with balanced height and padding */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-row items-center gap-3 w-full mb-6"
        >
          {/* Button 1 ("Work With Me →") */}
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.95 }}
            className="flex-1 h-11 px-4 rounded-full bg-[#CDF225] text-[#121310] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform shadow-sm cursor-pointer select-none"
          >
            <span>Work With Me</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] shrink-0" />
          </motion.a>

          {/* Button 2 ("Case Studies") */}
          <motion.a
            href="#case-studies"
            whileTap={{ scale: 0.95 }}
            className="flex-1 h-11 px-4 rounded-full bg-white/90 border border-[#DCD9CE] text-[#121310] font-semibold text-xs sm:text-sm flex items-center justify-center whitespace-nowrap active:scale-95 transition-transform shadow-sm cursor-pointer select-none"
          >
            Case Studies
          </motion.a>
        </motion.div>
      </div>

      {/* 4. Illustration Container & Calibrated Scale */}
      <div className="w-full relative flex-1 min-h-[260px] sm:min-h-[300px] flex items-center justify-center overflow-visible">
        <div className="scale-[0.82] sm:scale-[0.88] origin-center flex items-center justify-center">
          <GlassGrowthIllustration />
        </div>
      </div>
    </div>
  );
}

export default HeroMobile;
