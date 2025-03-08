import React from 'react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    imageUrl: '/placeholder-project.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material UI'],
    imageUrl: '/placeholder-project.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current conditions and forecasts for any location using weather API data.',
    technologies: ['JavaScript', 'HTML/CSS', 'OpenWeather API', 'Chart.js'],
    imageUrl: '/placeholder-project.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/placeholder-project.jpg',
    githubUrl: 'https://github.com/yourusername/project',
    featured: false,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
        {/* Replace with actual project images */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
          <span className="text-xl">Project Image</span>
          {/* Uncomment when you have actual images
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          */}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 