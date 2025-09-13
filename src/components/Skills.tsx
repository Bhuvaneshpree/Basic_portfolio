'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg/pb.gif')"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

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
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            variants={itemVariants}
          >
            My Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-400 text-center">{skillGroup.category}</h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <motion.li
                      key={skill.name}
                      className="flex items-center text-white text-lg group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-3 text-2xl group-hover:scale-125 transition-transform">{skill.icon}</span>
                      <span className="group-hover:text-blue-300 transition-colors">{skill.name}</span>
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