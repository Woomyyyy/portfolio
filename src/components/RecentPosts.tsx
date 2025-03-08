"use client";

import React from 'react';
import { motion } from 'framer-motion';

const RecentPosts = () => {
  const posts = [
    {
      title: "My Portfolio is Live: Here's What I Learned",
      excerpt: "From a sleek, minimal design to an integrated AI chatbot. It even got a live review from one of my favorite creators!",
      date: "March 8, 2025"
    },
    {
      title: "Building a Modern Web Application with Next.js",
      excerpt: "A deep dive into creating performant, accessible, and beautiful web applications using Next.js and React.",
      date: "February 15, 2025"
    }
  ];

  return (
    <section className="py-16" id="blog">
      <div className="container-width">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">recent posts</h2>
          <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            view more
          </a>
        </div>
        
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              className="border-t border-border pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <span className="text-muted-foreground mr-2">•</span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                  <p className="text-muted-foreground mb-1">{post.excerpt}</p>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts; 