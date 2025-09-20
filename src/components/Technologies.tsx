"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import UnscrambleHeading from './common/UnscrambleHeading';

const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    glow: "hover:shadow-[0_0_20px_rgba(97,218,251,0.7)]"
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    glow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    glow: "hover:shadow-[0_0_20px_rgba(3,190,3,0.7)]"
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    glow: "hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    glow: "hover:shadow-[0_0_20px_rgba(0,128,0,0.7)]"
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    glow: "hover:shadow-[0_0_20px_rgba(51,103,145,0.7)]"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    glow: "hover:shadow-[0_0_20px_rgba(49,120,198,0.7)]"
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]"
  }
];

const iconVariants = (duration: number) => ({
  animate: {
    y: [0, -20, 0], // bounce up and down without hiding
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut" as const,
    },
  },
});

const Technologies = () => {
  return (
    <div className="relative border-b border-neutral-800 pb-24 overflow-hidden">
      {/* Background GIF */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'url(/images/bg/technoo.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          <UnscrambleHeading
            text="Technologies"
            color="#00ff88"
          />
        </motion.h1>      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={iconVariants(2.5 + index * 0.1)}
            animate="animate"
            whileHover={{ scale: 1.1 }}
            className={`p-4 bg-neutral-900 rounded-2xl text-white flex flex-col items-center justify-center 
                       min-w-[120px] min-h-[120px] cursor-pointer transition-all duration-300 
                       border border-neutral-700 hover:border-neutral-500 ${tech.glow}`}
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={40}
              height={40}
              className="object-contain mb-2"
              unoptimized
            />
            <p className="text-sm text-center">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </div>
  );
};

export default Technologies;

