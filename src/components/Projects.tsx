import React from 'react';

const projects = [
  {
    name: 'Agrimetaverse-Intelligence',
    description: 'AI-powered platform for smart agriculture and metaverse integration.'
  },
  {
    name: 'RD-INFRO-TECHNOLOGY',
    description: 'Research-driven technology solutions for real-world challenges.'
  },
  {
    name: 'Real-time-insti-detect',
    description: 'Real-time institution detection system for enhanced security and automation.'
  }
];

const Projects = () => (
  <section className="py-12 px-4 max-w-4xl mx-auto animate-slide-up">
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map(project => (
        <div key={project.name} className="bg-white dark:bg-gray-800 shadow rounded p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.name}</h3>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
