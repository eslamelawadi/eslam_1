"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface NanoBananaProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export function NanoBananaButton({ variant = "primary", className, children, ...props }: NanoBananaProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden rounded-full px-6 py-2 font-medium transition-colors",
        variant === "primary" ? "bg-yellow-400 text-black hover:bg-yellow-500" : "bg-white/10 text-white hover:bg-white/20",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {variant === "primary" && <span>🍌</span>}
        {children}
      </span>
    </motion.button>
  );
}

export function NanoBananaCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8 backdrop-blur-xl", className)}>
      {children}
    </div>
  );
}
