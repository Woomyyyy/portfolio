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

  return (
    <section className="py-16 md:py-24">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="md:w-2/3">
            {/* Intro heading */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
              className="mb-4"
            >
              <h1 className="text-4xl font-bold tracking-tight">
                hi saif here 
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
            
            {/* Description */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
              className="mb-6"
            >
              <p className="text-xl text-muted-foreground">
                18-year-old <span className="line-through">game</span> software developer from Cairo, Egypt 🇪🇬
              </p>
              <p className="mt-4 text-muted-foreground">
                I specialize in building modern web applications with React, Next.js, and TypeScript. My passion lies in creating beautiful, functional, and user-friendly interfaces that solve real-world problems.
              </p>
              <p className="mt-4 text-muted-foreground">
                Currently exploring the world of full-stack development and always eager to learn new technologies and frameworks.
              </p>
            </motion.div>
            
            {/* Call to action */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
              className="mb-6"
            >
              <motion.button 
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ask the chatbot anything about me
              </motion.button>
            </motion.div>
            
            {/* Social links */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={textVariants}
              className="flex space-x-4"
            >
              <a href="#resume" className="text-foreground hover:text-muted-foreground transition-colors">Resume</a>
              <a href="https://linkedin.com" className="text-foreground hover:text-muted-foreground transition-colors">LinkedIn</a>
              <a href="https://github.com" className="text-foreground hover:text-muted-foreground transition-colors">GitHub</a>
              <a href="mailto:contact@example.com" className="text-foreground hover:text-muted-foreground transition-colors">Email</a>
            </motion.div>
          </div>
          
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/3 flex justify-center md:justify-end"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary relative">
              {/* Replace with your photo */}
              <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/70"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 