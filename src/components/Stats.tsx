"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      value: "10+",
      label: "Projects Completed",
      description: "Including web applications, mobile apps, and UI/UX designs"
    },
    {
      value: "5+",
      label: "Technologies Mastered",
      description: "Proficient in React, Next.js, TypeScript, Node.js, and TailwindCSS"
    },
    {
      value: "3+",
      label: "Years of Experience",
      description: "Working on various projects from concept to deployment"
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      description: "Committed to delivering high-quality solutions that exceed expectations"
    }
  ];

  return (
    <section className="py-16">
      <div className="container-width">
        <h2 className="text-2xl font-bold mb-8">by the numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="border border-border rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="font-medium mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 