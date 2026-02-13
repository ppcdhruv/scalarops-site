import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Methodology from '@/components/Methodology';
import ResumeViewer from '@/components/ResumeViewer';
import ClientStrip from '@/components/ClientStrip';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <About />
      <CaseStudies />
      <Methodology />
      <ResumeViewer />
      <ClientStrip />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
