"use client";

import { useState, useEffect, useCallback } from "react";

interface UnscrambleHeadingProps {
  text: string;
  className?: string;
  color?: string;
  onceOnly?: boolean;
}

function useTextUnscramble(text: string, onceOnly: boolean = false) {
  const [display, setDisplay] = useState(text);
  const [hasRun, setHasRun] = useState(false);

  const runScramble = useCallback(() => {
    if (onceOnly && hasRun) return;
    
    let iteration = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const interval = setInterval(() => {
      setDisplay(() =>
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

      if (iteration >= text.length) {
        clearInterval(interval);
        if (onceOnly) setHasRun(true);
      }
      iteration += 1 / 3; // speed
    }, 30);
  }, [text, onceOnly, hasRun]);

  const handleHover = () => {
    if (!onceOnly) {
      runScramble();
    }
  };

  // Auto-run on mount if onceOnly is true
  useEffect(() => {
    if (onceOnly && !hasRun) {
      const timer = setTimeout(() => {
        runScramble();
      }, 500); // Small delay for dramatic effect
      
      return () => clearTimeout(timer);
    }
  }, [onceOnly, hasRun, runScramble]);

  return [display, handleHover] as const;
}

export default function UnscrambleHeading({ 
  text, 
  className = "",
  color = "#1a7f37",
  onceOnly = false
}: UnscrambleHeadingProps) {
  const [display, handleHover] = useTextUnscramble(text, onceOnly);

  return (
    <span 
      onMouseEnter={handleHover}
      style={{ color }}
      className={`font-mono ${onceOnly ? '' : 'cursor-pointer'} ${className}`}
    >
      {display}
    </span>
  );
}