'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const About = () => (
  <section className="py-20 relative overflow-hidden" id="about">
    <Parallax translateY={[-15, 15]} className="relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I hold a B.E. in Computer Science & Engineering. My passion lies in innovative coding, building impactful solutions, and exploring new technologies to solve real-world problems.
          </p>
        </motion.div>
      </div>
    </Parallax>
  </section>
);

export default About;
