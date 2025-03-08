"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Saif is an exceptional developer with a keen eye for detail. His ability to solve complex problems while maintaining clean, efficient code is impressive.",
      author: "Ahmed Hassan",
      position: "Senior Developer at Tech Solutions",
      image: "/placeholder-avatar.png"
    },
    {
      quote: "Working with Saif was a pleasure. He consistently delivered high-quality work ahead of schedule and was always open to feedback and iteration.",
      author: "Layla Ibrahim",
      position: "Project Manager at Digital Innovations",
      image: "/placeholder-avatar.png"
    },
    {
      quote: "Saif's technical skills and creativity make him a valuable asset to any team. He approaches challenges with enthusiasm and always finds elegant solutions.",
      author: "Omar Mahmoud",
      position: "CTO at StartupX",
      image: "/placeholder-avatar.png"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container-width">
        <h2 className="text-2xl font-bold mb-8">what people say</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              initial={false}
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                          Photo
                        </div>
                      </div>
                      <div>
                        <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-between mt-6">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 