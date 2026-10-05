"use client";

import { motion } from "framer-motion";

type Skill = { name: string; color: string; slug: string };

const topRow: Skill[] = [
  { name: "React",       color: "#61DAFB", slug: "react" },
  { name: "Next.js",    color: "#FFFFFF", slug: "nextdotjs" },
  { name: "TypeScript", color: "#3178C6", slug: "typescript" },
  { name: "Vue",         color: "#4FC08D", slug: "vuedotjs" },
  { name: "Tailwind",   color: "#06B6D4", slug: "tailwindcss" },
  { name: "Framer Motion", color: "#BB4B96", slug: "framer" },
  { name: "Figma",      color: "#F24E1E", slug: "figma" },
  { name: "JavaScript", color: "#F7DF1E", slug: "javascript" },
];

const bottomRow: Skill[] = [
  { name: ".NET",       color: "#512BD4", slug: "dotnet" },
  { name: "Node.js",   color: "#339933", slug: "nodedotjs" },
  { name: "Express",   color: "#FFFFFF", slug: "express" },
  { name: "MongoDB",   color: "#47A248", slug: "mongodb" },
  { name: "PostgreSQL",color: "#4169E1", slug: "postgresql" },
  { name: "Docker",    color: "#2496ED", slug: "docker" },
  { name: "Git",       color: "#F05032", slug: "git" },
  { name: "Firebase",  color: "#FFCA28", slug: "firebase" },
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#111111] border border-white/[0.08] mx-3 shrink-0 hover:border-white/20 transition-colors duration-300 cursor-default">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace("#", "")}`}
        alt={skill.name}
        width={20}
        height={20}
        className="w-[20px] h-[20px] object-contain"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
      <span
        className="text-sm font-semibold tracking-wide whitespace-nowrap"
        style={{ color: skill.color }}
      >
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({ skills, reverse = false }: { skills: Skill[]; reverse?: boolean }) {
  // Use 4 sets to ensure the track is long enough for wide screens and seamless looping
  const duplicated = [...skills, ...skills, ...skills, ...skills];
  
  return (
    <div className="relative overflow-hidden py-2 px-0">
      <div className="pointer-events-none absolute left-0 inset-y-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ["-25%", "0%"] : ["0%", "-25%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {duplicated.map((skill, i) => (
          <SkillPill key={`${skill.slug}-${i}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="relative z-20 bg-[#050505] text-white py-24 overflow-hidden">
      <div className="flex flex-col gap-3">
        <MarqueeRow skills={topRow} />
        <MarqueeRow skills={bottomRow} reverse />
      </div>
    </section>
  );
}

