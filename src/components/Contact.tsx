"use client";

import React, { useState } from 'react';
import { Input, Textarea, Button } from './FormElements';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedText(label);
        setTimeout(() => setCopiedText(null), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      // You would typically show a success message here
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="slide-right" delay={0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <p className="mb-6">
                  I'm currently open to new opportunities and collaborations. Feel free to reach out
                  if you have a question or just want to connect.
                </p>
                
                <div className="space-y-4">
                  <div 
                    className="flex items-center group relative hover-lift"
                  >
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
                    <a 
                      href="mailto:your.email@example.com" 
                      className="hover:text-blue-600 transition-colors mr-2"
                    >
                      your.email@example.com
                    </a>
                    <button 
                      onClick={() => copyToClipboard('your.email@example.com', 'email')}
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover-scale"
                      aria-label="Copy email to clipboard"
                    >
                      <svg 
                        className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                        />
                      </svg>
                    </button>
                    {copiedText === 'email' && (
                      <span 
                        className="ml-2 text-xs text-green-600 dark:text-green-400 fade-in"
                      >
                        Copied!
                      </span>
                    )}
                  </div>
                  
                  <div 
                    className="flex items-center group relative hover-lift"
                  >
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
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-600 transition-colors mr-2"
                    >
                      github.com/yourusername
                    </a>
                    <button 
                      onClick={() => copyToClipboard('github.com/yourusername', 'github')}
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover-scale"
                      aria-label="Copy GitHub URL to clipboard"
                    >
                      <svg 
                        className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                        />
                      </svg>
                    </button>
                    {copiedText === 'github' && (
                      <span 
                        className="ml-2 text-xs text-green-600 dark:text-green-400 fade-in"
                      >
                        Copied!
                      </span>
                    )}
                  </div>
                  
                  <div 
                    className="flex items-center group relative hover-lift"
                  >
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
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-600 transition-colors mr-2"
                    >
                      linkedin.com/in/yourusername
                    </a>
                    <button 
                      onClick={() => copyToClipboard('linkedin.com/in/yourusername', 'linkedin')}
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover-scale"
                      aria-label="Copy LinkedIn URL to clipboard"
                    >
                      <svg 
                        className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                        />
                      </svg>
                    </button>
                    {copiedText === 'linkedin' && (
                      <span 
                        className="ml-2 text-xs text-green-600 dark:text-green-400 fade-in"
                      >
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/resume.pdf" 
                    className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover-lift"
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
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={0.2}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <Input
                    label="Name"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    required
                  />
                  
                  <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                  />
                  
                  <Textarea
                    label="Message"
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    error={errors.message}
                    required
                  />
                  
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className="w-full sm:w-auto pulse-on-hover"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 