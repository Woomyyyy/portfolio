"use client";

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="mb-6">
                I'm currently open to new opportunities and collaborations. Feel free to reach out
                if you have a question or just want to connect.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg 
                    className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  <a href="mailto:your.email@example.com" className="hover:text-blue-600 transition-colors">
                    your.email@example.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <svg 
                    className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" 
                    />
                  </svg>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    github.com/yourusername
                  </a>
                </div>
                
                <div className="flex items-center">
                  <svg 
                    className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M2 9h4v12H2z" 
                    />
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth={2} />
                  </svg>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/resume.pdf" 
                  className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 