"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  // Canvas is always 500vh at the top of the page.
  // Effective scroll inside the canvas zone = (500 - 100)vh = 4 * viewportHeight.
  // We map window scrollY [0 → 4vh] to progress [0 → 1].
  const [canvasMax, setCanvasMax] = useState(3200); // fallback 800*4

  useEffect(() => {
    setCanvasMax(window.innerHeight * 4);
    const onResize = () => setCanvasMax(window.innerHeight * 4);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollY } = useScroll(); // tracks window scroll precisely
  const scrollYProgress = useTransform(scrollY, [0, canvasMax], [0, 1], { clamp: true });

  // ── Section 1 · 0 % ──────────────────────────────────────────────────────
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [0, 1, 1, 0]);
  const y1       = useTransform(scrollYProgress, [0, 0.28], [0, -80]);

  // ── Section 2 · 30 % ─────────────────────────────────────────────────────
  const opacity2 = useTransform(scrollYProgress, [0.28, 0.38, 0.52, 0.60], [0, 1, 1, 0]);
  const x2       = useTransform(scrollYProgress, [0.28, 0.60], [-60, 60]);

  // ── Section 3 · 60 % · no fade-out ──────────────────────────────────────
  const opacity3 = useTransform(scrollYProgress, [0.60, 0.72], [0, 1]);
  const x3       = useTransform(scrollYProgress, [0.60, 0.80], [60, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* 0 % → Center */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-x-0 top-[40%] flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black tracking-tighter leading-none text-white drop-shadow-2xl whitespace-nowrap">
            Eslam Mohamed<span className="text-white">.</span>
          </h1>
          <p className="mt-4 md:mt-6 text-[8px] sm:text-[10px] md:text-sm font-bold tracking-[0.4em] text-white/60 uppercase">
            SOFTWARE ENGINEER
          </p>
        </motion.div>

        {/* 30 % → Left */}
        <motion.div
          style={{ opacity: opacity2, x: x2 }}
          className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 max-w-4xl"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] drop-shadow-2xl">
            I build digital <br />
            experiences.
          </h2>
        </motion.div>

        {/* 60 % → Right */}
        <motion.div
          style={{ opacity: opacity3, x: x3 }}
          className="absolute right-6 md:right-24 top-1/2 -translate-y-1/2 max-w-2xl text-right flex flex-col items-end"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] drop-shadow-2xl">
            Bridging design &amp;<br /> engineering.
          </h2>
          <div className="w-24 md:w-32 h-px bg-white/30 my-6 md:my-8" />
          <p className="text-white/70 text-sm md:text-base font-medium max-w-[280px] md:max-w-md leading-relaxed tracking-wide">
            Crafting interactions that feel native, responsive, and tell compelling stories through motion.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
