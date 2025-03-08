"use client";

import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

type Skill = {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'other';
  description: string;
  experience: string;
};

const skills: Skill[] = [
  // Frontend
  { 
    name: 'HTML/CSS', 
    level: 5, 
    category: 'frontend',
    description: 'Semantic HTML5, CSS3, Flexbox, Grid, Animations',
    experience: '5+ years of experience building responsive layouts'
  },
  { 
    name: 'JavaScript', 
    level: 5, 
    category: 'frontend',
    description: 'ES6+, DOM manipulation, Async/Await, Promises',
    experience: '5+ years of experience with modern JavaScript'
  },
  { 
    name: 'TypeScript', 
    level: 4, 
    category: 'frontend',
    description: 'Type safety, Interfaces, Generics, Advanced types',
    experience: '3+ years of experience with TypeScript in production'
  },
  { 
    name: 'React', 
    level: 5, 
    category: 'frontend',
    description: 'Hooks, Context API, Redux, React Query',
    experience: '4+ years building complex React applications'
  },
  { 
    name: 'Next.js', 
    level: 4, 
    category: 'frontend',
    description: 'SSR, SSG, ISR, API Routes, App Router',
    experience: '2+ years building production Next.js applications'
  },
  { 
    name: 'Tailwind CSS', 
    level: 4, 
    category: 'frontend',
    description: 'Utility-first CSS, Custom configurations, Responsive design',
    experience: '3+ years using Tailwind in production projects'
  },
  
  // Backend
  { 
    name: 'Node.js', 
    level: 4, 
    category: 'backend',
    description: 'Express, RESTful APIs, Authentication, File handling',
    experience: '3+ years building Node.js backend services'
  },
  { 
    name: 'Express', 
    level: 4, 
    category: 'backend',
    description: 'Middleware, Routing, Error handling, API design',
    experience: '3+ years creating Express APIs'
  },
  { 
    name: 'MongoDB', 
    level: 3, 
    category: 'backend',
    description: 'Schema design, Aggregation, Indexing, Mongoose ODM',
    experience: '2+ years working with MongoDB databases'
  },
  { 
    name: 'PostgreSQL', 
    level: 3, 
    category: 'backend',
    description: 'SQL, Relational database design, Indexing, Performance',
    experience: '2+ years working with PostgreSQL databases'
  },
  { 
    name: 'GraphQL', 
    level: 3, 
    category: 'backend',
    description: 'Schema definition, Resolvers, Apollo Server/Client',
    experience: '1+ year implementing GraphQL APIs'
  },
  
  // Tools
  { 
    name: 'Git', 
    level: 4, 
    category: 'tools',
    description: 'Version control, Branching strategies, Collaboration',
    experience: '4+ years using Git for team collaboration'
  },
  { 
    name: 'Docker', 
    level: 3, 
    category: 'tools',
    description: 'Containerization, Docker Compose, Deployment',
    experience: '2+ years containerizing applications'
  },
  { 
    name: 'Jest', 
    level: 3, 
    category: 'tools',
    description: 'Unit testing, Integration testing, Mocking',
    experience: '2+ years writing tests for frontend and backend'
  },
  { 
    name: 'CI/CD', 
    level: 3, 
    category: 'tools',
    description: 'GitHub Actions, Automated testing, Deployment pipelines',
    experience: '2+ years setting up CI/CD workflows'
  },
  
  // Other
  { 
    name: 'Agile/Scrum', 
    level: 4, 
    category: 'other',
    description: 'Sprint planning, Standups, Retrospectives, User stories',
    experience: '3+ years working in Agile teams'
  },
  { 
    name: 'UI/UX Design', 
    level: 3, 
    category: 'other',
    description: 'Wireframing, Prototyping, User research, Accessibility',
    experience: '2+ years collaborating with designers and implementing designs'
  },
  { 
    name: 'Responsive Design', 
    level: 5, 
    category: 'other',
    description: 'Mobile-first approach, Media queries, Fluid layouts',
    experience: '5+ years creating responsive web applications'
  },
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
    }
  }, []);

  // Set up intersection observer to trigger animation
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`skill-${skill.name}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [skill.name, prefersReducedMotion]);

  const tooltipContent = (
    <div className="p-2 max-w-xs">
      <p className="font-medium mb-1">{skill.name}</p>
      <p className="text-xs mb-2">{skill.description}</p>
      <p className="text-xs text-muted-foreground">{skill.experience}</p>
    </div>
  );

  return (
    <div 
      id={`skill-${skill.name}`}
      className="mb-4 cursor-pointer hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {skill.level}/5
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-800 ease-out"
          style={{ 
            width: isAnimated ? `${(skill.level / 5) * 100}%` : '0%',
          }}
        ></div>
      </div>
      
      {isHovered && (
        <div className="mt-2 p-2 bg-popover text-popover-foreground text-xs rounded-md border border-border shadow-sm fade-in">
          <p className="font-medium mb-1">{skill.description}</p>
          <p className="text-muted-foreground">{skill.experience}</p>
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal animation="slide-right" delay={0.1}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="stagger-list">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8">Backend</h3>
              <div className="stagger-list">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-left" delay={0.2}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="stagger-list">
                {toolsSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8">Other</h3>
              <div className="stagger-list">
                {otherSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills; 