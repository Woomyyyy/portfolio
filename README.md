# Developer Portfolio

A clean, modern, and responsive portfolio website built with Next.js and Tailwind CSS. This portfolio is designed to showcase your skills, projects, and professional background to potential employers.

## Features

- Responsive design that looks great on all devices
- Dark mode support
- Clean and intuitive user interface
- Optimized for performance and SEO
- Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone this repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

1. Update your name, title, and bio in the `Hero.tsx` and `About.tsx` components
2. Replace the placeholder profile image with your own in the `public` directory
3. Update your contact information in the `Contact.tsx` component
4. Add your social media links in the `Footer.tsx` component

### Projects

Edit the projects array in `Projects.tsx` to showcase your own work:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Description of your project',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    imageUrl: '/your-project-image.jpg',
    liveUrl: 'https://your-project-url.com',
    githubUrl: 'https://github.com/yourusername/your-project',
    featured: true,
  },
  // Add more projects...
];
```

### Skills

Modify the skills array in `Skills.tsx` to reflect your own skills and proficiency levels:

```typescript
const skills: Skill[] = [
  { name: 'Your Skill', level: 4, category: 'frontend' },
  // Add more skills...
];
```

### Resume

Replace the placeholder `resume.pdf` in the `public` directory with your own resume.

## Deployment

This portfolio can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign up/login
3. Click "New Project" and import your repository
4. Follow the prompts to deploy your site

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
