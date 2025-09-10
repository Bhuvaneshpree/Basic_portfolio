import React from 'react';

const skills = [
  'Full Stack Development',
  'Machine Learning & AI',
  'Cloud & DevOps',
  'Real-time Systems',
  'UI/UX Design',
  'API Development',
  'Database Management',
  'CI/CD',
  'Docker & Kubernetes',
  'React, Next.js, Node.js',
  'Python, TypeScript, JavaScript',
  'Other technical skills from profile'
];

const Skills = () => (
  <section className="py-12 px-4 max-w-4xl mx-auto animate-fade-in">
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map(skill => (
        <li key={skill} className="bg-white dark:bg-gray-800 shadow rounded p-4 text-center font-medium text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform duration-300">
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
