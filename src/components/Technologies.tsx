"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", glow: "hover:shadow-[0_0_20px_rgba(97,218,251,0.7)]" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", glow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", glow: "hover:shadow-[0_0_20px_rgba(3,190,3,0.7)]" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", glow: "hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", glow: "hover:shadow-[0_0_20px_rgba(0,128,0,0.7)]" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", glow: "hover:shadow-[0_0_20px_rgba(51,103,145,0.7)]" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Technologies() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10 text-white">Technologies</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`p-6 bg-black/40 rounded-2xl shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 ${tech.glow}`}
            variants={item}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={tech.src}
              alt={tech.name}
              width={60}
              height={60}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
