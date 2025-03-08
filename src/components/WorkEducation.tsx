"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WorkEducation = () => {
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
      ]
    }
  ];

  return (
    <section className="py-20" id="experience">
      <div className="container-width">
        <h2 className="text-2xl font-bold mb-10">Work & Education</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex gap-5">
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold shadow-sm group-hover:shadow-md transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  {exp.letter}
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1 font-light">
                    {exp.period}
                  </div>
                  <motion.h3 
                    className="text-lg font-bold group-hover:text-primary transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {exp.company}
                  </motion.h3>
                  <div className="text-muted-foreground mb-3 font-medium">
                    {exp.position}
                  </div>
                  <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="group-hover:text-foreground/80 transition-colors">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkEducation; 