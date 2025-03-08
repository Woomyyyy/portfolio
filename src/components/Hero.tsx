"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  const [isWaving, setIsWaving] = useState(false);

  // Animation variants for the wave emoji
  const waveAnimation: Variants = {
    initial: { rotate: 0 },
    wave: {
      rotate: [0, 15, -10, 15, 0],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      }
    }
  };

  // Text animation variants
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Subtle background animation
  const backgroundVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.03,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  // Info items with icons
  const infoItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "Software Engineer"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      text: "Computer Science Student"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "Cairo, Egypt 🇪🇬"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary opacity-0"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          style={{ filter: 'blur(80px)' }}
        />
      </div>

      <div className="container-width relative z-10">
        {/* Intro heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
          className="mb-5"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            hi, saif here 
            <motion.span 
              className="inline-block ml-2"
              initial="initial"
              animate={isWaving ? "wave" : "initial"}
              variants={waveAnimation}
              onHoverStart={() => setIsWaving(true)}
              onHoverEnd={() => setTimeout(() => setIsWaving(false), 1000)}
              whileHover={{ scale: 1.1 }}
            >
              👋
            </motion.span>
          </h1>
        </motion.div>
        
        {/* Info items with icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
          className="mb-8 space-y-3"
        >
          {infoItems.map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center space-x-2 hover-lift"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <span className="text-md text-muted-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Description */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
          className="mb-10"
        >
          <p className="text-muted-foreground max-w-md">
          I design digital experiences, obsess over color palettes, and write documentation at 3 AM when my best ideas mysteriously appear.
          </p>
        </motion.div>
        
        {/* Social links */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
          className="flex space-x-6"
        >
          <a href="#resume" className="animated-underline text-foreground hover:text-foreground transition-colors">Resume</a>
          <a href="https://linkedin.com" className="animated-underline text-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://github.com" className="animated-underline text-foreground hover:text-foreground transition-colors">GitHub</a>
          <a href="mailto:contact@example.com" className="animated-underline text-foreground hover:text-foreground transition-colors">Email</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 