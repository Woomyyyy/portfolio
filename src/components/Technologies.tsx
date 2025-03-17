"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Technologies = () => {
  // Animation variants for the tech items
  const techItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  // Technology categories with their items
  const techCategories = [
    {
      name: "Frontend",
      items: [
        { name: "Next.js", featured: true },
        { name: "React" },
        { name: "TypeScript" },
        { name: "TailwindCSS" }
      ]
    },
    {
      name: "Tools & Other",
      items: [
        { name: "Git" },
        { name: "VSCode" },
        { name: "Figma" },
        { name: "Vercel" }
      ]
    }
  ];

  return (
    <section className="py-12" id="technologies">
      <div className="container-width">
        <ScrollReveal animation="fade">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            technologies
          </h2>
        </ScrollReveal>
        
        <div className="space-y-6">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                {category.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, techIndex) => (
                  <ScrollReveal 
                    key={techIndex}
                    animation="fade" 
                    delay={techIndex * 0.1}
                    className="inline-block"
                  >
                    <motion.div
                      variants={techItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={techIndex}
                      className={`tag hover-lift ${tech.featured ? 'bg-primary/10 text-primary border-primary/30' : ''}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tech.featured && (
                        <svg 
                          className="w-3 h-3 mr-1 inline-block" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      )}
                      {tech.name}
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <ScrollReveal animation="fade" delay={0.2}>
          <p className="text-xs text-muted-foreground mt-4">
            Always learning and exploring new technologies to build better experiences.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Technologies; 