"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 'portfolio-live',
    title: "My Portfolio is Live: Here's What I Learned",
    excerpt: "From a sleek, minimal design to an integrated AI chatbot. It even got a live review from one of my favorite creators!",
    date: "March 8, 2025",
    category: "Web Development",
    content: `
      <p>Building a personal portfolio website is a journey that every developer should experience. It's not just about showcasing your work—it's about expressing your identity as a developer and creating a platform that represents your skills and values.</p>
      
      <h2>The Design Process</h2>
      <p>I started with a clear vision: create a clean, minimal design that puts the focus on my work while still expressing my personality. I drew inspiration from some of my favorite developer portfolios, particularly those with a focus on typography and whitespace.</p>
      
      <p>The color scheme was intentionally kept simple—primarily black and white with subtle accent colors that appear on interaction. This creates a professional look while allowing for moments of delight when users engage with the site.</p>
      
      <h2>Technical Implementation</h2>
      <p>For the tech stack, I chose Next.js for its excellent developer experience and performance benefits. The static generation capabilities make the site blazing fast, and the built-in routing simplified the architecture.</p>
      
      <p>I used Tailwind CSS for styling, which proved to be a game-changer for rapid development. The utility-first approach allowed me to create a consistent design system without writing custom CSS for every component.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Responsive design that works beautifully on all devices</li>
        <li>Dark/light mode toggle with smooth transitions</li>
        <li>Subtle animations that enhance the user experience without being distracting</li>
        <li>Integrated AI chatbot that can answer questions about my experience and projects</li>
        <li>Optimized performance with 100/100 Lighthouse scores</li>
      </ul>
      
      <h2>Challenges and Solutions</h2>
      <p>The biggest challenge was implementing the AI chatbot. I wanted it to feel natural and helpful without being intrusive. After several iterations, I settled on a minimalist chat interface that slides in from the corner when activated.</p>
      
      <p>Another challenge was optimizing images for performance while maintaining quality. I implemented a responsive image strategy using Next.js's Image component with careful attention to appropriate sizing and formats.</p>
      
      <h2>Feedback and Iterations</h2>
      <p>Once I had a working version, I shared it with fellow developers and even got a live review from one of my favorite content creators! Their feedback was invaluable and led to several improvements:</p>
      
      <ul>
        <li>Refined typography for better readability</li>
        <li>Enhanced keyboard navigation for accessibility</li>
        <li>Added more detailed project descriptions</li>
        <li>Improved mobile navigation</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>This project reinforced the importance of starting with a clear design vision before diving into code. It also highlighted how valuable user feedback is—several features I thought were intuitive needed refinement based on how real users interacted with the site.</p>
      
      <p>Most importantly, I learned that a portfolio is never truly finished. It's a living representation of your work and skills that will continue to evolve as you grow as a developer.</p>
      
      <h2>What's Next</h2>
      <p>I plan to continue refining the site based on feedback and adding new projects as they're completed. I'm also considering adding a more robust blog section to share my learning journey and technical insights.</p>
      
      <p>If you have any feedback or suggestions, I'd love to hear them! Feel free to reach out through the contact form or connect with me on social media.</p>
    `
  },
  {
    id: 'nextjs-web-app',
    title: "Building a Modern Web Application with Next.js",
    excerpt: "A deep dive into creating performant, accessible, and beautiful web applications using Next.js and React.",
    date: "February 15, 2025",
    category: "Tutorial",
    content: `
      <p>Next.js has become my go-to framework for building modern web applications. Its blend of developer experience, performance optimizations, and flexibility makes it an excellent choice for projects of all sizes.</p>
      
      <h2>Why Next.js?</h2>
      <p>Before diving into the how, let's talk about why Next.js stands out among React frameworks:</p>
      
      <ul>
        <li>Hybrid rendering options (static, server-side, and client-side)</li>
        <li>Built-in routing with support for dynamic routes</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>API routes for backend functionality</li>
        <li>Great developer experience with fast refresh</li>
      </ul>
      
      <h2>Setting Up a Next.js Project</h2>
      <p>Getting started with Next.js is straightforward. You can use the create-next-app command to bootstrap a new project with sensible defaults:</p>
      
      <pre><code>npx create-next-app my-next-app</code></pre>
      
      <p>This sets up a project with Next.js, React, and ESLint configured. You can also use the --typescript flag to add TypeScript support.</p>
      
      <h2>Project Structure</h2>
      <p>A typical Next.js project has the following structure:</p>
      
      <ul>
        <li>/pages - Contains your application's pages and API routes</li>
        <li>/public - Static assets like images and fonts</li>
        <li>/styles - CSS files (though you can organize styles however you prefer)</li>
        <li>/components - Reusable React components</li>
      </ul>
      
      <p>With Next.js 13, there's also the new /app directory for the App Router, which provides more advanced routing capabilities.</p>
      
      <h2>Building Pages and Components</h2>
      <p>Next.js uses a file-based routing system. Any file in the pages directory becomes a route in your application. For example, pages/about.js becomes the /about route.</p>
      
      <p>Components work just like they do in React, but Next.js provides additional features like the Image component for optimized images and the Link component for client-side navigation.</p>
      
      <h2>Data Fetching</h2>
      <p>Next.js offers several methods for fetching data:</p>
      
      <ul>
        <li>getStaticProps - Fetch data at build time</li>
        <li>getServerSideProps - Fetch data on each request</li>
        <li>getStaticPaths - Specify dynamic routes to pre-render</li>
        <li>Client-side fetching with SWR or React Query</li>
      </ul>
      
      <p>Each method has its use cases, and choosing the right one depends on your specific requirements.</p>
      
      <h2>Styling Options</h2>
      <p>Next.js supports various styling approaches:</p>
      
      <ul>
        <li>CSS Modules for component-scoped styles</li>
        <li>Sass for more powerful CSS</li>
        <li>CSS-in-JS libraries like styled-components or emotion</li>
        <li>Utility-first frameworks like Tailwind CSS</li>
      </ul>
      
      <p>I personally prefer Tailwind CSS for its productivity benefits and design consistency.</p>
      
      <h2>Deployment</h2>
      <p>Deploying a Next.js application is simple with platforms like Vercel (created by the same team behind Next.js) or Netlify. These platforms automatically detect Next.js projects and configure the build settings appropriately.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js provides an excellent foundation for building modern web applications. Its flexibility allows you to choose the right approach for each part of your application, whether that's static generation for marketing pages or server-side rendering for dynamic content.</p>
      
      <p>In future posts, I'll dive deeper into specific aspects of Next.js development, including authentication, API routes, and performance optimization techniques.</p>
    `
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id as string;
  
  const post = blogPosts.find(post => post.id === postId);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <article className="py-20">
          <div className="container-width">
            <ScrollReveal animation="fade">
              <div className="flex items-center justify-between mb-8">
                <Link href="/blog" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <svg className="w-4 h-4 mr-1.5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to all posts
                </Link>
                
                <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </Link>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-10">
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
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade" delay={0.1}>
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </ScrollReveal>
            
            <ScrollReveal animation="fade" delay={0.2}>
              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="text-xl font-bold mb-4">Share this post</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
} 