'use client';

import React from 'react';
import { motion } from 'framer-motion';
import UnscrambleHeading from './common/UnscrambleHeading';

const skills = [
  {
    category: 'Development',
    items: [
      { name: 'Full Stack Development', icon: '💻' },
      { name: 'React, Next.js, Node.js', icon: '⚛️' },
      { name: 'Python, TypeScript, JavaScript', icon: '🐍' },
    ]
  },
  {
    category: 'AI & Cloud',
    items: [
      { name: 'Machine Learning & AI', icon: '🤖' },
      { name: 'Cloud & DevOps', icon: '☁️' },
      { name: 'Docker & Kubernetes', icon: '🐳' },
    ]
  },
  {
    category: 'Design & Systems',
    items: [
      { name: 'UI/UX Design', icon: '🎨' },
      { name: 'Real-time Systems', icon: '⚡' },
      { name: 'Database Management', icon: '🗄️' },
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="relative min-h-screen py-16">
      {/* Background Image - cy3d.gif */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: "url('/images/bg/cy3d.gif')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto px-4"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-shadow-strong"
            variants={itemVariants}
            style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}
          >
            <UnscrambleHeading
              text="My Skills"
              color="#1a7f37"
            />
          </motion.h2>          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="bg-white/20 backdrop-blur-lg rounded-xl p-8 hover:bg-black/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-white/20 hover:border-gray-400"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-yellow-300 text-center group-hover:text-white transition-colors text-shadow-strong">{skillGroup.category}</h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <motion.li
                      key={skill.name}
                      className="flex items-center text-gray-100 text-lg font-bold group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-3 text-2xl group-hover:scale-125 transition-transform">{skill.icon}</span>
                      <span className="group-hover:text-white transition-colors text-shadow-strong">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;