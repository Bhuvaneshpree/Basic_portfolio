import React from 'react';

const Contact = () => (
  <section className="py-12 px-4 max-w-3xl mx-auto animate-fade-in">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <div className="space-y-4">
      <a
        href="https://github.com/bhuvaneshxyz"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline"
      >
        GitHub: bhuvaneshxyz
      </a>
      <div className="text-gray-700 dark:text-gray-300">
        Email: <a href="mailto:bhuvanesh@email.com" className="hover:underline">bhuvanesh@email.com</a>
      </div>
      {/* Add other preferred contact methods below */}
      <div className="text-gray-700 dark:text-gray-300">
        LinkedIn: <a href="https://linkedin.com/in/bhuvaneshxyz" target="_blank" rel="noopener noreferrer" className="hover:underline">bhuvaneshxyz</a>
      </div>
    </div>
  </section>
);

export default Contact;
