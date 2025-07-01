import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { WalletConnect } from '@/components/WalletConnect';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <WalletConnect />
      <Footer />
    </>
  );
}
