import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Home Care Gallery - Home Caregivers Care | Our Home Improvement Portfolio',
  description: 'View our portfolio of completed home care and home improvement projects. See examples of our professional home painting and home renovation work in the North Atlanta Metro Area.',
  keywords: 'Caregivers Care gallery, home care portfolio, home improvement gallery, home painting examples, home renovation projects, North Atlanta home care',
  openGraph: {
    title: 'Gallery - Home Caregivers GA LLC',
    description: 'View our portfolio of professional painting and home improvement projects.',
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}

