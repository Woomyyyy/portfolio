import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

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

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20">
          <div className="container-width">
            <ScrollReveal animation="fade">
              <Link href="/" className="flex items-center text-sm text-muted-foreground mb-8 hover:text-foreground transition-colors group">
                <svg className="w-4 h-4 mr-1.5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
              
              <h1 className="text-4xl font-bold mb-10 flex items-center">
                <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5z" />
                </svg>
                Blog
              </h1>
            </ScrollReveal>
            
            <div className="space-y-12">
              {blogPosts.map((post, index) => (
                <ScrollReveal 
                  key={post.id}
                  animation="slide-up" 
                  delay={index * 0.1}
                  className="border-t border-border pt-8 group hover:bg-secondary/10 p-4 -mx-4 rounded-md transition-colors"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
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
      </main>
      <Footer />
    </div>
  );
} 