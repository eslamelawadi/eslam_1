"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  
  // Use a ref instead of state so closures always get the latest images without re-renders
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameCount = 120;
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  // Format: /sequence/frame_000_delay-0.066s.png to frame_119
  const currentFrame = (index: number) => {
    const frameNum = (index - 1).toString().padStart(3, "0");
    return `/sequence/frame_${frameNum}_delay-0.066s.png`;
  };

  const renderFrame = (index: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index - 1]; // 0-indexed
    if (!img) return;

    // Handle high-DPI displays safely
    let dpr = 1;
    if (typeof window !== "undefined") {
      dpr = window.devicePixelRatio || 1;
    }

    // Set unscaled dimensions
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (!rect) return;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Scale for CSS
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // Scale drawing context so we don't have to multiply every coordinate by dpr
    ctx.scale(dpr, dpr);

    // object-fit: cover logic
    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.width / img.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawHeight = rect.width / imgRatio;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image
      drawWidth = rect.height * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        count++;
        // Update state to trigger percentage update
        setLoadedCount(count);
        // Render the very first frame immediately once it loads so the screen isn't blank
        if (i === 1) renderFrame(1);
        if (count === frameCount) {
          setTimeout(() => setIsReady(true), 500); // Small delay for polish
        }
      };
      // If an image fails to load, still increment so we don't break logic
      img.onerror = () => {
        count++;
        setLoadedCount(count);
        console.warn(`Failed to load frame ${i}`);
        if (count === frameCount) setIsReady(true);
      };
      loadedImages.push(img);
    }
    
    // Sync array to ref synchronously so renderFrame can use it in onload closure right away
    imagesRef.current = loadedImages;

    const handleResize = () => {
      renderFrame(Math.round(frameIndex.get()));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Run once on mount

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isReady) renderFrame(Math.round(latest));
  });

  const progress = Math.round((loadedCount / frameCount) * 100);

  return (
    <>
      {/* High-End Global Preloader */}
      <AnimatePresence>
        {!isReady && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center gap-8"
          >
            <div className="relative flex flex-col items-center">
               <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-8xl md:text-[12rem] font-black tracking-tighter text-white tabular-nums"
               >
                 {progress}%
               </motion.span>
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${progress}%` }}
                 className="absolute bottom-0 h-1 bg-blue-500 shadow-[0_0_20px_#3b82f6]"
               />
            </div>
            <span className="text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase">
              Initializing Engine...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={containerRef} className="relative h-[500vh] w-full bg-[#050505]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
      </div>
    </>
  );
}

