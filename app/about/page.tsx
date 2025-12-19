import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Home Caregivers Care - Professional Home Care Services | Home Caregivers GA LLC',
  description: 'Learn about Home Caregivers Care - 14 years of experience in professional home care and home improvement services. Our commitment to quality home care solutions, innovation, and customer satisfaction for your home.',
  keywords: 'Caregivers Care, home, Home Caregivers Care about, home care services, home improvement company, professional home care, home services, North Atlanta home care',
  openGraph: {
    title: 'About Us - Home Caregivers GA LLC',
    description: '14 years of experience in professional painting and home improvement services.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}

