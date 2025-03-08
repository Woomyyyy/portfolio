"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

const RecentPosts = () => {
  const posts = [
    {
      id: 'portfolio-live',
      title: "My Portfolio is Live: Here's What I Learned",
      excerpt: "From a sleek, minimal design to an integrated AI chatbot. It even got a live review from one of my favorite creators!",
      date: "March 8, 2025",
      category: "Web Development"
    },
    {
      id: 'nextjs-web-app',
      title: "Building a Modern Web Application with Next.js",
      excerpt: "A deep dive into creating performant, accessible, and beautiful web applications using Next.js and React.",
      date: "February 15, 2025",
      category: "Tutorial"
    }
  ];

  return (
    <section className="py-20" id="blog">
      <div className="container-width">
        <ScrollReveal animation="fade">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5z" />
              </svg>
              recent posts
            </h2>
            <Link 
              href="/blog" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline flex items-center"
            >
              view more
              <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
        
        <div className="space-y-10">
          {posts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              animation="slide-up"
              delay={index * 0.1}
              className="border-t border-border pt-8 group hover:bg-secondary/10 p-4 -mx-4 rounded-md transition-colors"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <h3 
                  className="text-lg font-bold mb-2 group-hover:text-primary transition-colors"
                >
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {post.category}
                  </div>
                  <div className="flex items-center text-primary ml-auto">
                    <span>Read more</span>
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts; 