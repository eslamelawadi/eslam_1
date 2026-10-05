"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative z-20 bg-[#050505] py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.07] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Professional High-Tech Radar */}
        <div className="relative flex items-center justify-center select-none">
          <div className="relative w-80 h-80 md:w-[550px] md:h-[550px] flex items-center justify-center">
            
            {/* Grid Circles - High Precision SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="0.5 2" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="0.5 2" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="0.5 2" />
              <circle cx="50" cy="50" r="18" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="0.5 2" />
              
              {/* Radial Grid Lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line 
                  key={angle}
                  x1="50" y1="50" 
                  x2={50 + 48 * Math.cos((angle * Math.PI) / 180)} 
                  y2={50 + 48 * Math.sin((angle * Math.PI) / 180)} 
                  stroke="white" strokeWidth="0.05" opacity="0.5"
                />
              ))}
            </svg>

            {/* Glowing Rings */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute border border-white/[0.05] rounded-full"
                style={{ 
                  width: `${100 - (i - 1) * 25}%`, 
                  height: `${100 - (i - 1) * 25}%`,
                  boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.02)'
                }}
              />
            ))}
            
            {/* Conical Scanning Sweep - The "Professional" look */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 z-10 origin-center opacity-40 hover:opacity-60 transition-opacity"
            >
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.4) 0deg, rgba(59, 130, 246, 0.1) 20deg, transparent 45deg)'
                }}
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1/2 bg-blue-400/80 shadow-[0_0_15px_#3b82f6] blur-[0.5px]" />
            </motion.div>

            {/* Pulsing Data Coordinates */}
            {[
              { r: 42, a: 120, label: "0.84", color: "#60A5FA" },
              { r: 35, a: 300, label: "0.21", color: "#FFFFFF" },
              { r: 22, a: 45, label: "0.95", color: "#3B82F6" },
              { r: 15, a: 210, label: "0.12", color: "#FFFFFF" },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 0.3, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 + idx * 0.3 }}
                className="absolute z-20 flex flex-col items-center gap-1"
                style={{ 
                  top: `${50 + p.r * Math.sin((p.a * Math.PI) / 180)}%`, 
                  left: `${50 + p.r * Math.cos((p.a * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)' 
                }}
              >
                <div className="relative">
                  <div className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" style={{ color: p.color }} />
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: idx }}
                    className="absolute inset-0 rounded-full bg-current"
                    style={{ color: p.color }}
                  />
                </div>
                <span className="text-[7px] font-mono tracking-tighter text-white/40 tabular-nums">
                  {p.label}
                </span>
              </motion.div>
            ))}

            {/* Central PRISM Core */}
            <div className="absolute w-14 h-14 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.01] backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-pulse" />
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }} 
                transition={{ duration: 3, repeat: Infinity }}
                className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_25px_#3b82f6]" 
              />
              {/* Outer orbit dot */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/40" />
              </motion.div>
            </div>

            {/* Perimeter Degrees Label (Fixed positions) */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
               <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/50">000°</span>
               <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[8px] font-mono text-white/50">090°</span>
               <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/50">180°</span>
               <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[8px] font-mono text-white/50">270°</span>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-[12px] font-black tracking-[0.5em] text-blue-500 uppercase">Profile</span>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] max-w-4xl"
            >
              Building intelligent systems that feel alive<span className="text-blue-500">.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-8 text-white/50 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            <p className="font-medium text-white/80">
              I&apos;m <span className="text-white font-black underline decoration-blue-500 decoration-2 underline-offset-4">Eslam Mohamed</span> — a Software Engineer specializing in high-performance full-stack architectures.
            </p>
            <p>
              My focus lies in the intersection of <span className="text-white">Design Engineering</span> and <span className="text-white">Distributed Systems</span>. I don&apos;t just write code; I craft digital ecosystems that are scalable, accessible, and performant by default.
            </p>
            <p className="text-sm md:text-base border-l-2 border-white/10 pl-6 italic">
              Currently obsessing over motion design, real-time data visualization, and the next generation of web interfaces.
            </p>
          </motion.div>

          {/* Status Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-black tracking-widest text-white/70 uppercase hover:bg-white/[0.05] transition-colors cursor-default">
              <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
              Mansoura, Egypt
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-black tracking-widest text-white/70 uppercase hover:bg-white/[0.05] transition-colors cursor-default">
              <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
              Available for New Projects
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

