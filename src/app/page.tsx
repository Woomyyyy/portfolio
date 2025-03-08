import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkEducation from '@/components/WorkEducation';
import FeaturedProjects from '@/components/FeaturedProjects';
import RecentPosts from '@/components/RecentPosts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WorkEducation />
        <FeaturedProjects />
        <RecentPosts />
      </main>
      <Footer />
    </div>
  );
}
