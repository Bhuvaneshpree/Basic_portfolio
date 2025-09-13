'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Check if we're in dark mode
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
    
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    // Add scroll event listener only on client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Remove event listener on cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Server-side or initial render
  if (!mounted) {
    return (
      <div className="background-container fixed inset-0 z-0">
        <div 
          className="parallax-bg"
          style={{
            backgroundImage: isDarkMode 
              ? "url('/images/bg/pb.gif')"
              : "url('/images/cyberpunk/xK.gif')",
            transform: 'none'
          }}
        />
      </div>
    );
  }

  // Client-side render
  return (
    <div className="background-container fixed inset-0 z-0">
      <motion.div 
        className="parallax-bg"
        style={{
          y: -scrollY * 0.1,
          backgroundImage: isDarkMode 
            ? "url('/images/bg/pb.gif')"
            : "url('/images/cyberpunk/xK.gif')",
        }}
      />
      <motion.div 
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          opacity: Math.min(0.6, 0.4 + scrollY * 0.0005), // Darken slightly as user scrolls
        }}
      />
      <motion.div
        className="grid-effect"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </div>
  );
};

export default BackgroundEffect;
