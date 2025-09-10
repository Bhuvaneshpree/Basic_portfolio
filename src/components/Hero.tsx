import React from 'react';

const Hero = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16 animate-fade-in">
    <h1 className="text-5xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Bhuvanesh
    </h1>
    <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300">
      Full Stack Developer & Innovator<br />
      <span className="font-semibold text-blue-600 dark:text-blue-400">Vibe Coding</span> — Crafting code with passion, creativity, and a focus on positive impact.
    </p>
  </section>
);

export default Hero;
