'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

function useTextUnscramble(text: string) {
  const [display, setDisplay] = useState(text);

  const handleHover = () => {
    let iteration = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const interval = setInterval(() => {
      setDisplay((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3; // speed
    }, 30);
  };

  return [display, handleHover] as const;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoDisplay, logoHandleHover] = useTextUnscramble("Bhuvanesh");

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === '#') {
      // For home section, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Remove the # from the href to get the id
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            onMouseEnter={logoHandleHover}
            className="text-xl font-bold text-blue-600 dark:text-blue-400 font-mono"
            whileHover={{ scale: 1.05 }}
          >
            {logoDisplay}
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link, i) => {
              const [display, handleHover] = useTextUnscramble(link.name);
              return (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    onMouseEnter={handleHover}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-mono"
                    whileHover={{ 
                      y: -2,
                      textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {display}
                  </motion.button>
                </motion.li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"
              animate={{
                opacity: isOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg md:hidden"
            >
              <div className="flex flex-col items-center gap-6 py-6">
                {links.map((link, i) => {
                  const [display, handleHover] = useTextUnscramble(link.name);
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        onMouseEnter={handleHover}
                        className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-mono"
                        whileHover={{ 
                          scale: 1.05,
                          textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {display}
                      </motion.button>
                    </motion.li>
                  );
                })}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
