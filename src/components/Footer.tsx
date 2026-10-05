"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "WhatsApp",  href: "https://wa.me/201145292973" },
  { label: "Instagram", href: "https://www.instagram.com/eslam_elawadi/" },
  { label: "Github",    href: "https://github.com/eslamelawadi11-glitch" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/eslammohamed12/" },
];

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#050505] pt-32 pb-12 overflow-hidden">

      {/* CTA — constrained */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 mb-40 text-center">
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-white/30 uppercase mb-8"
        >
          Have a project in mind?
        </motion.h4>
        <motion.a
          href="mailto:contact@eslam.dev"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative inline-block"
        >
          <h2 className="text-7xl md:text-[10rem] lg:text-[14rem] font-black tracking-tighter text-white leading-none transition-transform duration-700 group-hover:scale-[1.02]">
            Let&apos;s Talk<span className="text-blue-500">.</span>
          </h2>
          <div className="absolute -bottom-4 left-0 w-0 h-1 bg-blue-500 transition-all duration-700 group-hover:w-full" />
        </motion.a>
      </div>

      {/* Full-width divider */}
      <div className="w-full border-t border-white/10" />

      {/* Bottom bar — constrained */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p>© 2026 ESLAM MOHAMED</p>
          <p className="text-white/20">SOFTWARE ENGINEER / FULL STACK ENGINEER</p>
        </div>
        <div className="flex gap-10 mt-10 md:mt-0">
          {socialLinks.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
               className="relative group overflow-hidden py-1">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">{label}</span>
              <span className="absolute top-0 left-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-white">{label}</span>
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}

