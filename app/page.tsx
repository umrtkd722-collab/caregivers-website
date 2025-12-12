'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import AreasServed from '@/components/AreasServed';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <AreasServed />
      <Contact />
      <Footer />
    </main>
  );
}
