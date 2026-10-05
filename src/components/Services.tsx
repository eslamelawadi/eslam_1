"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Frontend Architecture",
    description: "Crafting extremely performant, modern React and Next.js applications tailored for speed and SEO.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building robust, scalable, and secure APIs and microservices using Node.js, Express, and .NET.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Developing robust, scalable web applications from database architecture to responsive frontends.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Developing cross-platform, native-feeling mobile applications with seamless animations and intuitive UX.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function Services() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="relative z-20 bg-[#050505] text-white py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-sm font-bold tracking-[0.4em] text-[#a09e93] uppercase mb-8"
          >
            What I Do
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] text-white"
          >
            Capabilities.
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              key={service.id}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] p-10 md:p-14 transition-all duration-500 cursor-pointer",
                "bg-[#0f0f0f] border border-white/5",
                "hover:border-white/20 hover:bg-[#121212] hover:-translate-y-2"
              )}
            >
              {/* Spotlight Effect */}
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.15), transparent 80%)`,
                }}
              />
              <div className="relative z-10 bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                {service.icon}
              </div>
              <h3 className="relative z-10 text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                {service.title}
              </h3>
              <p className="relative z-10 text-white/50 text-base md:text-lg leading-relaxed max-w-sm group-hover:text-white/70 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
