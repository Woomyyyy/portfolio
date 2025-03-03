"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  const [isWaving, setIsWaving] = useState(false);

  // Animation variants for the wave emoji
  const waveAnimation: Variants = {
    initial: { rotate: 0 },
    wave: {
      rotate: [0, 14, -8, 14, 0],
      transition: {
        duration: 1.5,
        repeat: 0,
        ease: "easeInOut",
      }
    },
    hover: {
      rotate: [0, 14, -8, 14, 0],
      transition: {
        duration: 1.5,
        repeat: 0,
        ease: "easeInOut",
      }
    }
  };

  // Decorative elements animation
  const decorativeAnimation: Variants = {
    initial: { opacity: 0, scale: 0 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: 1.2
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-[10%] w-24 h-24 rounded-full bg-yellow-100 dark:bg-yellow-900/20 blur-xl"
        variants={decorativeAnimation}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 left-[15%] w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-xl"
        variants={decorativeAnimation}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.4 }}
      />
      <motion.div 
        className="absolute top-1/3 left-[5%] w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/20 blur-xl"
        variants={decorativeAnimation}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.6 }}
      />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-['Playfair_Display',_serif] text-5xl md:text-7xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            hi saif here 
            <motion.span 
              className="text-yellow-400 inline-block ml-2"
              variants={waveAnimation}
              initial="initial"
              animate="wave"
              whileHover="hover"
              onHoverStart={() => setIsWaving(true)}
              onHoverEnd={() => setIsWaving(false)}
              onAnimationComplete={() => setIsWaving(false)}
            >
              👋
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-['Montserrat',_sans-serif] text-xl md:text-2xl mb-6 font-light text-gray-600 dark:text-gray-300 tracking-wide">
            18-year-old aspiring software developer from Egypt 🇪🇬
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-['Inter',_sans-serif] text-lg mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            I love building web applications with modern technologies. Currently exploring the world of full-stack development and always eager to learn new things.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <motion.button 
            className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ask me anything
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center space-x-8"
        >
          {[
            {
              name: "Resume",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )
            },
            {
              name: "LinkedIn",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              )
            },
            {
              name: "GitHub",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              )
            },
            {
              name: "Email",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.a 
              key={item.name}
              href="#" 
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.8 + (index * 0.1) } 
              }}
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero; 