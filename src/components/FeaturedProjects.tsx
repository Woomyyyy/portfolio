"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A web application built with React, Next.js, and TypeScript that allows users to manage their tasks and projects efficiently.",
      tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vercel"],
      links: [
        { label: "Website", url: "#" },
        { label: "Source", url: "#" }
      ]
    },
    {
      title: "Project Two",
      description: "A mobile-responsive e-commerce platform with user authentication, product catalog, and payment processing integration.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      links: [
        { label: "Website", url: "#" },
        { label: "Source", url: "#" }
      ]
    }
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container-width">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">featured projects</h2>
          <motion.a 
            href="#projects" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline"
            whileHover={{ x: 2 }}
          >
            view more
          </motion.a>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="border-t border-border pt-10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3 
                className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                whileHover={{ x: 2 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-muted-foreground mb-5 max-w-xl">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="flex gap-5">
                {project.links.map((link, i) => (
                  <motion.a 
                    key={i} 
                    href={link.url} 
                    className="text-foreground hover:text-foreground transition-colors animated-underline"
                    whileHover={{ y: -1 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 