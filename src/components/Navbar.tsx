"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import ChatToggle from './ChatToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { name: 'home', href: '#' },
    { name: 'projects', href: '#projects' },
    { name: 'blog', href: '#blog' },
    { name: 'contact', href: '#contact' },
  ];
  
  return (
    <header className="py-6 w-full">
      <div className="container-width flex justify-between items-center">
        {/* Navigation */}
        <nav className="flex items-center space-x-1">
          {navItems.map((item, index) => (
            <React.Fragment key={item.name}>
              {index > 0 && <span className="text-muted-foreground mx-1">•</span>}
              <motion.a 
                href={item.href} 
                className="text-foreground hover:text-muted-foreground transition-colors px-1 py-1 text-sm"
                onClick={closeMenu}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            </React.Fragment>
          ))}
        </nav>
        
        {/* Right side - Theme toggle and Chat toggle */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <ChatToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar; 