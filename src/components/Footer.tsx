"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 md:mb-0">
            <motion.a 
              href="https://linkedin.com" 
              className="text-foreground hover:text-foreground transition-colors animated-underline"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com" 
              className="text-foreground hover:text-foreground transition-colors animated-underline"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="mailto:contact@example.com" 
              className="text-foreground hover:text-foreground transition-colors animated-underline"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Email
            </motion.a>
          </div>
          
          <div className="text-sm text-muted-foreground flex items-center space-x-2">
            <span>© {new Date().getFullYear()} saif.dev</span>
            <span className="text-xs">•</span>
            <motion.a 
              href="#privacy" 
              className="hover:text-foreground transition-colors animated-underline"
              whileHover={{ y: -1 }}
            >
              privacy?
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 