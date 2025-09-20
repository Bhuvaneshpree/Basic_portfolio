'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  mainText: string;
  subText?: string;
  className?: string;
  enableTyping?: boolean;
  typingSpeed?: number;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  mainText,
  subText,
  className = "",
  enableTyping = false,
  typingSpeed = 100
}) => {
  const [displayedSubText, setDisplayedSubText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typing animation effect
  useEffect(() => {
    if (!enableTyping || !subText) {
      setDisplayedSubText(subText || '');
      setIsTypingComplete(true);
      return;
    }

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < subText.length) {
        setDisplayedSubText(subText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [subText, enableTyping, typingSpeed]);

  // Animation variants
  const headingVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const subTextVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear" as const,
        times: [0, 0.5, 0.5, 1]
      }
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* Main Heading */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight"
      >
        {mainText}
      </motion.h1>

      {/* Subheading with optional typing effect */}
      {subText && (
        <motion.div
          variants={subTextVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent font-bold max-w-3xl"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          <span>{displayedSubText}</span>
          {enableTyping && !isTypingComplete && (
            <motion.span
              variants={cursorVariants}
              animate="blinking"
              className="inline-block w-0.5 h-6 bg-gradient-to-b from-orange-500 to-pink-500 ml-1"
            />
          )}
        </motion.div>
      )}

      {/* Decorative underline animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ duration: 1, delay: 0.8 }}
        className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-6 rounded-full"
      />
    </div>
  );
};

export default AnimatedHeading;