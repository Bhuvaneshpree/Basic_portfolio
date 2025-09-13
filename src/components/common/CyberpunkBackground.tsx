'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CyberpunkBackground = () => {
  return (
    <div className="cyberpunk-background-container fixed inset-0 z-0">
      <motion.div 
        className="cyberpunk-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="cyberpunk-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </div>
  );
};

export default CyberpunkBackground;
