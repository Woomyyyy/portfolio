"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Project One",
      description: "A web application built with React, Next.js, and TypeScript that allows users to manage their tasks and projects efficiently.",
      longDescription: "This project was built to solve the problem of task management for remote teams. It features real-time updates, collaborative editing, and integrations with popular productivity tools. The application was designed with a focus on performance and user experience.",
      tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vercel"],
      links: [
        { label: "Website", url: "#", icon: (
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        ) },
        { label: "Source", url: "#", icon: (
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ) }
      ],
      stats: [
        { label: "Development Time", value: "3 months" },
        { label: "Team Size", value: "2 developers" },
        { label: "Role", value: "Lead Developer" }
      ],
      challenges: [
        "Implementing real-time collaboration with minimal latency",
        "Designing an intuitive UI for complex task relationships",
        "Optimizing performance for large project hierarchies"
      ]
    },
    {
      title: "Project Two",
      description: "A mobile-responsive e-commerce platform with user authentication, product catalog, and payment processing integration.",
      longDescription: "This e-commerce platform was built for a small business looking to expand their online presence. It includes features like inventory management, secure payment processing, and a custom CMS for easy product updates. The site was optimized for both desktop and mobile users.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      links: [
        { label: "Website", url: "#", icon: (
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        ) },
        { label: "Source", url: "#", icon: (
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ) }
      ],
      stats: [
        { label: "Development Time", value: "4 months" },
        { label: "Team Size", value: "3 developers" },
        { label: "Role", value: "Backend Developer" }
      ],
      challenges: [
        "Implementing secure payment processing with Stripe",
        "Building a scalable inventory management system",
        "Optimizing database queries for product search and filtering"
      ]
    }
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container-width">
        <ScrollReveal animation="fade">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              featured projects
            </h2>
            <a 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline flex items-center"
            >
              view more
              <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={index}
              animation="slide-up" 
              delay={index * 0.1}
              className="border-t border-border pt-10 group relative"
            >
              <div
                className="transition-all duration-200 cursor-pointer"
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <h3 
                  className="text-xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center"
                >
                  <span className="mr-2">{project.title}</span>
                  {expandedProject === index && (
                    <svg 
                      className="w-4 h-4 text-primary transition-transform duration-300 transform rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  )}
                </h3>
                <p className="text-muted-foreground mb-5 max-w-xl">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="tag hover-lift"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-5 mb-4">
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      className="text-foreground hover:text-foreground transition-colors animated-underline flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
                
                {expandedProject !== index && (
                  <div 
                    className="mt-2 text-xs text-primary cursor-pointer inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity hover-lift"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedProject(index);
                    }}
                  >
                    <span>Show more</span>
                    <svg 
                      className="w-3 h-3 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </div>
                )}
                
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div 
                      className="mt-6 mb-4 overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-secondary/50 p-5 rounded-md">
                        <div className="mb-5">
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <svg 
                              className="w-3.5 h-3.5 mr-1.5 text-primary" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1.5} 
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                              />
                            </svg>
                            Project Overview
                          </h4>
                          <p className="text-sm text-foreground">{project.longDescription}</p>
                        </div>
                        
                        <div className="mb-5">
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <svg 
                              className="w-3.5 h-3.5 mr-1.5 text-primary" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1.5} 
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                              />
                            </svg>
                            Key Challenges
                          </h4>
                          <ul className="list-disc list-outside ml-4 text-xs text-muted-foreground space-y-1 stagger-list">
                            {project.challenges?.map((challenge, i) => (
                              <li key={i} className="text-sm">
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <svg 
                              className="w-3.5 h-3.5 mr-1.5 text-primary" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1.5} 
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                              />
                            </svg>
                            Project Details
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {project.stats.map((stat, i) => (
                              <div key={i} className="text-sm">
                                <span className="text-muted-foreground text-xs">{stat.label}: </span>
                                <span className="font-medium">{stat.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div 
                        className="flex justify-center mt-3 cursor-pointer"
                        onClick={() => setExpandedProject(null)}
                      >
                        <span className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center">
                          <svg 
                            className="w-3.5 h-3.5 mr-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={1.5} 
                              d="M5 15l7-7 7 7" 
                            />
                          </svg>
                          Collapse details
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 