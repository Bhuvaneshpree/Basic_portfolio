'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import UnscrambleHeading from './common/UnscrambleHeading';

const About = () => (
  <section className="py-20 relative overflow-hidden" id="about">
    {/* Background GIF */}
    <div 
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: 'url(/images/bg/cytt.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
    
    <Parallax translateY={[-15, 15]} className="relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}
        >
          <UnscrambleHeading
            text="About Me"
            color="#bc4c00"
          />
        </motion.h2>
        <motion.div
          className="bg-white/20 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/30 hover:bg-black/60 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-lg text-white font-medium leading-relaxed group-hover:text-gray-200 transition-colors">
            I hold a B.E. in Computer Science & Engineering. My passion lies in innovative coding, building impactful solutions, and exploring new technologies to solve real-world problems.
          </p>
        </motion.div>
      </div>
    </Parallax>
  </section>
);

export default About;
