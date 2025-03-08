"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Skip the initial animation on first mount
    const timer = setTimeout(() => {
      setIsFirstMount(false);
    }, 500);

    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      // Add listener for changes
      const handleMotionPreferenceChange = () => {
        setPrefersReducedMotion(mediaQuery.matches);
      };

      mediaQuery.addEventListener('change', handleMotionPreferenceChange);
      
      return () => {
        clearTimeout(timer);
        mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstMount ? { opacity: 1 } : { opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 