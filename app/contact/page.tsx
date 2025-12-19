import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Home Caregivers Care - Get a Free Home Care Quote | Home Caregivers GA LLC',
  description: 'Contact Home Caregivers Care for professional home care and home improvement services. Call 404-407-5719 or request a free quote for your home. Serving North Atlanta Metro Area.',
  keywords: 'Caregivers Care contact, home care quote, contact home caregivers, home improvement quote, home services contact, North Atlanta home care',
  openGraph: {
    title: 'Contact Us - Home Caregivers GA LLC',
    description: 'Get a free quote for professional painting and home improvement services. Call 404-407-5719.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

