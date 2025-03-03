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
    <section className="relative flex flex-col items-center justify-center min-h-screen py-16 px-4 bg-black text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Accent color blobs */}
      <motion.div 
        className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
          className="mb-4"
        >
          <h1 className="font-['Playfair_Display',_serif] text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            hi saif here 
            <motion.span 
              className="text-yellow-400 inline-block ml-2"
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
        
        {/* Position and Location with Icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
          className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
        >
          <div className="flex items-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-['Montserrat',_sans-serif] text-md md:text-lg font-medium">Software Engineer</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-['Montserrat',_sans-serif] text-md md:text-lg font-medium">Cairo, Egypt 🇪🇬</span>
          </div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
          className="mb-8"
        >
          <h2 className="font-['Montserrat',_sans-serif] text-xl md:text-2xl font-light text-gray-300 tracking-wide">
            18-year-old aspiring software developer
          </h2>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
          className="mb-12"
        >
          <p className="font-['Inter',_sans-serif] text-base md:text-lg max-w-2xl mx-auto text-gray-400 leading-relaxed tracking-wide">
            I love building web applications with modern technologies. Currently exploring the world of full-stack development and always eager to learn new things. My passion lies in creating beautiful, functional, and user-friendly interfaces that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={textVariants}
          className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button 
            className="bg-white text-black px-8 py-4 rounded-lg font-medium transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ask me anything
          </motion.button>
          
          <motion.a
            href="#projects"
            className="px-8 py-4 rounded-lg font-medium border border-gray-700 hover:border-gray-400 transition-all hover:text-white text-gray-300"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            View my work
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={5}
          variants={textVariants}
          className="flex justify-center space-x-8"
        >
          {[
            {
              name: "Resume",
              href: "#resume",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )
            },
            {
              name: "LinkedIn",
              href: "https://linkedin.com",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              )
            },
            {
              name: "GitHub",
              href: "https://github.com",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              )
            },
            {
              name: "Email",
              href: "mailto:contact@example.com",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.a 
              key={item.name}
              href={item.href} 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 