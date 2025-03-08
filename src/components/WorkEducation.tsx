"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const WorkEducation = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const experiences = [
    {
      letter: "S",
      period: "Jan 2023 - Present",
      company: "Software Company",
      position: "Software Engineer",
      description: [
        "Developed and maintained web applications using React, Next.js, and TypeScript",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized performance for better user experience"
      ],
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Git"],
      achievements: [
        "Reduced page load time by 40% through code optimization",
        "Implemented CI/CD pipeline that reduced deployment time by 60%",
        "Mentored 2 junior developers"
      ]
    },
    {
      letter: "I",
      period: "Jun 2022 - Dec 2022",
      company: "Tech Internship",
      position: "Frontend Developer Intern",
      description: [
        "Built user interfaces using React and styled-components",
        "Participated in code reviews and implemented feedback from senior developers",
        "Worked on optimizing website performance and accessibility"
      ],
      skills: ["React", "Styled Components", "JavaScript", "HTML/CSS"],
      achievements: [
        "Implemented a feature that increased user engagement by 25%",
        "Received recognition for exceptional problem-solving skills"
      ]
    },
    {
      letter: "U",
      period: "Sep 2020 - Present",
      company: "University",
      position: "Computer Science Student",
      description: [
        "Studying Computer Science with focus on web development and software engineering",
        "Participated in hackathons and coding competitions",
        "Maintained a high GPA while working on personal projects"
      ],
      skills: ["Algorithms", "Data Structures", "System Design", "Database Management"],
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Won 2nd place in university hackathon",
        "Published research paper on web performance optimization"
      ]
    }
  ];

  return (
    <section className="py-20" id="experience">
      <div className="container-width">
        <ScrollReveal animation="fade">
          <h2 className="text-2xl font-bold mb-10 flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Work & Education
          </h2>
        </ScrollReveal>
        
        <div className="space-y-12 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-border z-0 timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <ScrollReveal 
              key={index}
              animation="slide-right" 
              delay={index * 0.1}
              className="timeline-item group relative z-10"
            >
              <div 
                className="flex gap-5 cursor-pointer"
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
              >
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold shadow-sm group-hover:shadow-md transition-all hover-scale"
                >
                  {exp.letter}
                </div>
                <div className="w-full">
                  <div className="text-sm text-muted-foreground mb-1 font-light flex items-center">
                    <svg 
                      className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    {exp.period}
                  </div>
                  <h3 
                    className="text-lg font-bold group-hover:text-primary transition-colors"
                  >
                    {exp.company}
                  </h3>
                  <div className="text-muted-foreground mb-3 font-medium">
                    {exp.position}
                  </div>
                  <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1.5 stagger-list">
                    {exp.description.map((item, i) => (
                      <li 
                        key={i} 
                        className="group-hover:text-foreground/80 transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <AnimatePresence>
                    {expandedItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden"
                      >
                        <div className="bg-secondary/50 p-4 rounded-md">
                          <div className="mb-3">
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
                              Skills Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, i) => (
                                <span 
                                  key={i} 
                                  className="tag text-xs hover-lift"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
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
                                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
                                />
                              </svg>
                              Key Achievements
                            </h4>
                            <ul className="list-disc list-outside ml-4 text-xs text-muted-foreground space-y-1 stagger-list">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div 
                          className="flex justify-center mt-2"
                        >
                          <span className="text-xs text-muted-foreground">Click to collapse</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {expandedItem !== index && (
                    <div 
                      className="mt-2 text-xs text-primary cursor-pointer inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity hover-lift"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedItem(index);
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
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkEducation; 