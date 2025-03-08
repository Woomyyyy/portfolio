"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a small delay before showing the cursor to prevent initial animation from wrong position
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.classList.contains('hover-lift') ||
        target.classList.contains('tag') ||
        target.classList.contains('animated-underline');
      
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Hide the cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
            animate={{
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
              scale: isClicking ? 0.5 : 1,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              mass: 0.5
            }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          />

          {/* Cursor ring - appears when hovering interactive elements */}
          <motion.div
            className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary pointer-events-none z-50 mix-blend-difference"
            animate={{
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 1 : 0,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              mass: 0.8
            }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor; 