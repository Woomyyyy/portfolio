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
        {/* Profile photo */}
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-secondary">
            {/* Replace with your photo */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Photo
            </div>
          </div>
        </div>
        
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
          className="mb-8"
        >
          <p className="text-xl text-muted-foreground">
            18-year-old <span className="line-through">game</span> software developer from Cairo, Egypt 🇪🇬
          </p>
          <p className="mt-4 text-muted-foreground">
            I love building web applications with modern technologies. Currently exploring the world of full-stack development and always eager to learn new things.
          </p>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
          className="mb-8"
        >
          <motion.button 
            className="px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
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
    </section>
  );
};

export default Hero; 