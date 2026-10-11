"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tile {
  id: number;
  width: number;
  order: number;
}

interface VerticalTilesPreloaderProps {
  tileClassName?: string;
  minTileWidth?: number;
  animationDuration?: number;
  animationDelay?: number;
  stagger?: number;
  onComplete?: () => void;
}

export default function VerticalTilesPreloader({
  tileClassName,
  minTileWidth = 64, // Wider tiles give an editorial, architectural curtain feel
  animationDuration = 0.8,
  animationDelay = 0.4,
  stagger = 0.04,
  onComplete,
}: VerticalTilesPreloaderProps) {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateTiles = useCallback(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    const width = window.innerWidth;
    const tileCount = Math.max(4, Math.floor(width / minTileWidth));
    const tileWidth = width / tileCount + 1;

    // Center-outward stagger calculation
    const centerIndex = Math.floor((tileCount - 1) / 2);
    const newTiles = Array.from({ length: tileCount }, (_, index) => ({
      id: index,
      width: tileWidth,
      order: Math.abs(index - centerIndex),
    }));

    setTiles(newTiles);
  }, [minTileWidth, onComplete]);

  useEffect(() => {
    calculateTiles();
    window.addEventListener("resize", calculateTiles);
    return () => window.removeEventListener("resize", calculateTiles);
  }, [calculateTiles]);

  // Total time until curtain completely clears
  useEffect(() => {
    if (!tiles.length) return;
    const maxOrder = Math.max(...tiles.map((t) => t.order), 0);
    const totalDuration =
      (animationDelay + maxOrder * stagger + animationDuration) * 1000;

    const timer = setTimeout(() => {
      setIsFinished(true);
      onComplete?.();
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [tiles, animationDelay, stagger, animationDuration, onComplete]);

  if (isFinished) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="relative w-full h-full flex">
        {tiles.map((tile) => (
          <motion.div
            key={tile.id}
            className={cn(
              "bg-[#121310] border-r border-white/5", // Obsidian charcoal matching the editorial palette
              tileClassName
            )}
            style={{
              width: tile.width,
              position: "absolute",
              left: `${(tile.id * 100) / tiles.length}%`,
              top: 0,
              height: "100%",
            }}
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{
              duration: animationDuration,
              delay: animationDelay + tile.order * stagger,
              ease: [0.76, 0, 0.24, 1], // Studio-grade cubic bezier for snappy curtain drop
            }}
          />
        ))}
      </div>
    </div>
  );
}
