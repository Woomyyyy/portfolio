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

  // Info items with emojis
  const infoItems = [
    {
      emoji: "💻",
      text: "Software Engineer"
    },
    {
      emoji: "🎓",
      text: "Computer Science Student"
    },
    {
      emoji: "📍",
      text: "Cairo, Egypt 🇪🇬"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        {/* Decorative dots pattern */}
        <div className="absolute top-20 right-8 md:top-24 md:right-12 hidden sm:block">
          <svg width="75" height="75" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
              <circle cx="4" cy="4" r="1.5" fill="currentColor" />
              <circle cx="20" cy="4" r="1.5" fill="currentColor" />
              <circle cx="36" cy="4" r="1.5" fill="currentColor" />
              <circle cx="52" cy="4" r="1.5" fill="currentColor" />
              <circle cx="68" cy="4" r="1.5" fill="currentColor" />
              <circle cx="4" cy="20" r="1.5" fill="currentColor" />
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              <circle cx="36" cy="20" r="1.5" fill="currentColor" />
              <circle cx="52" cy="20" r="1.5" fill="currentColor" />
              <circle cx="68" cy="20" r="1.5" fill="currentColor" />
              <circle cx="4" cy="36" r="1.5" fill="currentColor" />
              <circle cx="20" cy="36" r="1.5" fill="currentColor" />
              <circle cx="36" cy="36" r="1.5" fill="currentColor" />
              <circle cx="52" cy="36" r="1.5" fill="currentColor" />
              <circle cx="68" cy="36" r="1.5" fill="currentColor" />
              <circle cx="4" cy="52" r="1.5" fill="currentColor" />
              <circle cx="20" cy="52" r="1.5" fill="currentColor" />
              <circle cx="36" cy="52" r="1.5" fill="currentColor" />
              <circle cx="52" cy="52" r="1.5" fill="currentColor" />
              <circle cx="68" cy="52" r="1.5" fill="currentColor" />
              <circle cx="4" cy="68" r="1.5" fill="currentColor" />
              <circle cx="20" cy="68" r="1.5" fill="currentColor" />
              <circle cx="36" cy="68" r="1.5" fill="currentColor" />
              <circle cx="52" cy="68" r="1.5" fill="currentColor" />
              <circle cx="68" cy="68" r="1.5" fill="currentColor" />
            </g>
          </svg>
        </div>
        
        {/* Soft shapes */}
        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 md:w-72 md:h-72 rounded-full bg-primary opacity-0"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          style={{ filter: 'blur(100px)' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-48 h-48 md:w-56 md:h-56 rounded-full bg-accent opacity-0"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 0.03,
              transition: { 
                delay: 0.3,
                duration: 2,
                ease: "easeInOut"
              }
            }
          }}
          initial="hidden"
          animate="visible"
          style={{ filter: 'blur(80px)' }}
        />
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-16 left-4 md:bottom-20 md:left-8 hidden sm:block">
          <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="59.5" stroke="currentColor" strokeOpacity="0.1" />
            <circle cx="60" cy="60" r="40" stroke="currentColor" strokeOpacity="0.1" />
            <circle cx="60" cy="60" r="20" stroke="currentColor" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>

      {/* Content container */}
      <div className="container-width relative z-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:space-x-8">
          <div className="md:max-w-xl relative">
            {/* Small visual accent shape */}
            <div className="absolute -left-6 top-12 w-2.5 h-18 md:w-3 md:h-20 bg-primary opacity-20 rounded-full hidden md:block"></div>
            
            {/* Name and title section - new structure */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
              className="mb-8 md:mb-6"
            >
              <h1 className="text-3xl md:text-3xl font-bold tracking-tight mb-5 md:mb-5">hi, i'm saif</h1>
              
              {/* Professional details with refined styling and icons */}
              <div className="space-y-3 md:space-y-3 mb-6 md:mb-8">
                <div className="text-sm md:text-sm text-muted-foreground flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-primary/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-foreground font-medium">Frontend Engineer</span>
                  <span className="mx-2 text-primary/20">·</span>
                  <span className="group-hover:text-foreground transition-colors duration-200">Building digital products</span>
                </div>
                
                <div className="text-sm md:text-sm text-muted-foreground flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-primary/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-foreground font-medium">Computer Science</span>
                  <span className="mx-2 text-primary/20">·</span>
                  <span className="group-hover:text-foreground transition-colors duration-200">Student</span>
                </div>
                
                <div className="text-sm md:text-sm text-muted-foreground flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-primary/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-foreground font-medium">Cairo, Egypt</span>
                  <span className="mx-2 text-primary/20">·</span>
                  <span className="group-hover:text-foreground transition-colors duration-200">GMT+2</span>
                </div>
              </div>
              
              {/* Remove additional info section as it's now incorporated in each line */}
              
              
              {/* Greeting with wave emoji */}
              <div className="text-xl md:text-xl font-medium max-w-3xl text-balance">
                Hey! <motion.span 
                  className="inline-block"
                  initial="initial"
                  animate={isWaving ? "wave" : "initial"}
                  variants={waveAnimation}
                  onHoverStart={() => setIsWaving(true)}
                  onHoverEnd={() => setTimeout(() => setIsWaving(false), 1000)}
                  whileHover={{ scale: 1.1 }}
                >
                  👋
                </motion.span> — Coding my way to solutions. No capes, just commits.
              </div>
            </motion.div>
          </div>
          
          {/* Right side - social links and resume */}
          <motion.div 
            initial="hidden"
            animate="visible"
            custom={3}
            variants={textVariants}
            className="mt-10 md:mt-0 flex flex-col space-y-6 md:space-y-7 items-start md:items-end"
          >
            {/* Resume - with enhanced styling for better visual hierarchy */}
            <motion.a 
              href="#resume" 
              className="group relative inline-flex items-center justify-center rounded-[8px] 
                        bg-white/10 backdrop-blur-sm border border-white/10
                        px-5 py-2.5 md:px-6 md:py-3 font-medium text-base md:text-base
                        transition-all duration-300 hover:bg-white/15 w-auto
                        shadow-sm shadow-primary/5 hover:shadow-primary/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-5 h-5 mr-2.5 opacity-70 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="relative z-10 text-white/90 group-hover:text-white transition-colors tracking-wide">
                Resume
              </span>
            </motion.a>
            
            {/* Social links with improved visual hierarchy */}
            <div className="flex items-center space-x-7 md:space-x-8 w-auto">
              <motion.a 
                href="https://linkedin.com" 
                className="text-foreground/90 hover:text-primary transition-colors flex items-center relative group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
              </motion.a>
              
              <motion.a 
                href="https://github.com" 
                className="text-foreground/90 hover:text-primary transition-colors flex items-center relative group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
              </motion.a>
              
              <motion.a 
                href="mailto:contact@example.com" 
                className="text-foreground/90 hover:text-primary transition-colors flex items-center relative group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
              </motion.a>
            </div>
            
            {/* Enhanced status indicator with better visual hierarchy */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex flex-col items-start md:items-end space-y-2 md:mt-1"
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center space-x-2 bg-emerald-500/5
                          border border-emerald-500/10 rounded-full
                          px-3 py-1 transition-all duration-300
                          hover:bg-emerald-500/10 hover:border-emerald-500/20"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="relative flex-shrink-0">
                  <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" 
                        style={{ animationDuration: '2s' }} />
                  <span className="relative block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-medium text-emerald-500">Available for Work</span>
              </motion.a>
              
              {/* Additional context with improved typography and organization */}
              <motion.div 
                className="flex flex-col items-end text-[13px] text-muted-foreground/70 space-y-1.5 mt-2 overflow-visible"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="grid grid-cols-[24px_auto] items-center w-full whitespace-nowrap overflow-visible">
                  <svg
                    className="w-3 h-3 text-muted-foreground/50 flex-shrink-0 justify-self-center"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium whitespace-nowrap">Quick response time</span>
                </div>
                <div className="grid grid-cols-[24px_auto] items-center w-full whitespace-nowrap overflow-visible">
                  <svg
                    className="w-3 h-3 text-muted-foreground/50 flex-shrink-0 justify-self-center"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium whitespace-nowrap">Open to remote work</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;