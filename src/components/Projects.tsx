'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import UnscrambleHeading from './common/UnscrambleHeading';

const projects = [
  {
    name: 'AgriMetaverse Intelligence',
    description: 'Next-generation AI platform for agricultural market prediction featuring 4 advanced AI models (SARIMAX, Prophet, XGBoost, Ensemble), real-time analytics, and comprehensive forecasting for 22 commodities.',
    tech: ['AI/ML', 'SARIMAX', 'Prophet', 'XGBoost', 'Streamlit', 'Python'],
    link: 'https://github.com/Bhuvaneshpree/Agrimetaverse-Intelligence',
    demoLink: 'https://agrimetaverse-predictor.streamlit.app/',
    image: '/images/projects/ai-agriculture.jpg'
  },
  {
    name: 'Bhuvanesh Portfolio',
    description: 'Modern development environment with integrated AI assistance, real-time collaboration features, and advanced code analysis tools.',
    tech: ['VS Code', 'AI Integration', 'GitHub', 'TypeScript', 'DevOps'],
    link: 'https://github.com/Bhuvaneshpree/Basic_portfolio.git',
    demoLink: 'https://basic-portfolio-woad.vercel.app',
    image: '/images/projects/dev-workspace.jpg'
  }
];

const Projects = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/10 dark:to-blue-950/10" />
      
      <Parallax translateY={[-15, 15]} className="relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <UnscrambleHeading
              text="Featured Projects"
              color="inherit"
            />
          </motion.h2>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(131, 58, 180, 0.2)" }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                  <Image 
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 heading-primary">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                        />
                      </svg>
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Parallax>
    </section>
  );
};

export default Projects;
