import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import RecentProjects from '@/components/RecentProjects';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Process />
      <RecentProjects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
