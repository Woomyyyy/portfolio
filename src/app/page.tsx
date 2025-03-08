import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkEducation from '@/components/WorkEducation';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import FeaturedProjects from '@/components/FeaturedProjects';
import Testimonials from '@/components/Testimonials';
import RecentPosts from '@/components/RecentPosts';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WorkEducation />
        <Skills />
        <FeaturedProjects />
        <Testimonials />
        <RecentPosts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
