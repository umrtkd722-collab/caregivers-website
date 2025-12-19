import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Home Care Services - Home Caregivers Care | Professional Home Improvement',
  description: 'Home Caregivers Care offers comprehensive home care and home improvement services including home painting, home renovation, carpentry, sheetrock, garage doors, and more. Professional home services in North Atlanta.',
  keywords: 'Caregivers Care, home, home care services, home improvement, home painting, home renovation, home maintenance, home repair, home services, North Atlanta home care',
  openGraph: {
    title: 'Our Services - Home Caregivers GA LLC',
    description: 'Professional home improvement services including painting, carpentry, and more.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
}

