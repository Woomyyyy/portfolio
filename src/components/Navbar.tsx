"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll to update active section
  useEffect(() => {
    if (!isHomePage) return;
    
    const handleScroll = () => {
      const sections = ['home', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Navigation items
  const navItems = [
    { name: 'home', href: '/' },
    { name: 'projects', href: isHomePage ? '#projects' : '/#projects' },
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: isHomePage ? '#contact' : '/#contact' },
  ];
  
  return (
    <header className="py-6 w-full backdrop-blur-sm sticky top-0 z-50">
      <div className="container-width flex justify-between items-center">
        {/* Navigation */}
        <nav className="flex items-center space-x-1">
          {navItems.map((item, index) => {
            const isActive = isHomePage 
              ? activeSection === item.name 
              : (item.href === '/blog' && pathname.startsWith('/blog'));
              
            return (
              <React.Fragment key={item.name}>
                {index > 0 && <span className="text-muted-foreground mx-1.5 text-xs">•</span>}
                <Link 
                  href={item.href}
                  className={`text-sm px-1 py-1 transition-colors relative ${
                    isActive
                      ? 'text-foreground font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={closeMenu}
                >
                  <motion.span
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    {item.name}
                    {isActive && (
                      <motion.div 
                        className="absolute -bottom-0.5 left-1/2 w-1 h-1 bg-foreground rounded-full"
                        layoutId="navIndicator"
                        initial={{ x: '-50%' }}
                        animate={{ x: '-50%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.span>
                </Link>
              </React.Fragment>
            );
          })}
        </nav>
        
        {/* Right side - Theme toggle only */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar; 