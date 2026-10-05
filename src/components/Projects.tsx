"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Modern Furniture Store",
    category: "Web App",
    description: "A responsive and interactive e-commerce platform for furniture, built with Vue.js. Features a seamless shopping experience, elegant UI, and optimized performance.",
    link: "https://github.com/eslamelawadi11-glitch/Front-end-shop-Furniro"
  },
  {
    id: 2,
    title: "QuickScan POS",
    category: "MOBILE APP",
    description: "A cross-platform mobile point-of-sale system built with React Native. Features fast barcode and QR scanning, real-time inventory management, and seamless checkout processing.",
    link: "https://expo.dev/accounts/eslam_elawadi/projects/quickscan-pos/builds/75f1b921-8ccd-4e53-8f61-75ccacba780b"
  },
  {
    id: 3,
    title: "Nursery Management Dashboard",
    category: "MANAGEMENT SYSTEM",
    description: "A comprehensive administrative web application built with Vue.js to manage daily nursery operations. Features include student enrollment, attendance tracking, staff management, and an intuitive user interface.",
    link: "https://github.com/eslamelawadi11-glitch/Kindergarten-management"
  },
  {
    id: 4,
    title: "Wedding Services",
    category: "WEB PLATFORM",
    description: "An elegant and visually appealing web platform dedicated to wedding planning and services. Designed with a focus on a smooth user experience, showcasing services, and facilitating easy bookings.",
    link: "https://github.com/eslamelawadi11-glitch/wedding_services_project"
  },
];

export default function Projects() {
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
            Selected Works
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] text-white"
          >
            Pioneering digital frontiers.
          </motion.h2>
        </div>

        {/* Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] overflow-hidden cursor-pointer
                         backdrop-blur-md bg-white/[0.03] border border-white/10
                         p-10 md:p-14 min-h-[340px] flex flex-col justify-between
                         transition-all duration-500
                         hover:bg-white/[0.06] hover:border-white/[0.18]
                         hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.08)]"
            >
              {/* Subtle inner glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700
                              bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.05),transparent_60%)]" />

              {/* Top: category */}
              <div className="flex items-center gap-3 relative z-10">
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                  {project.category}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Bottom: title + description + link */}
              <div className="relative z-10 mt-16">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8 max-w-xs">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase group-hover:text-white transition-colors duration-300">
                  View Case Study
                  <span className="text-base transition-transform duration-400 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}

