"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingHeadingProps {
  text: string;
  speed?: number;
  className?: string;
  color?: string;
}

export default function TypingHeading({ 
  text, 
  speed = 100, 
  className = "",
  color = "#1a7f37"
}: TypingHeadingProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span style={{ color }}>{displayed}</span>
      <motion.span
        className="ml-1 inline-block"
        style={{ 
          width: "2px", 
          height: "1.2em",
          backgroundColor: color
        }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </div>
  );
}