import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ServiceDetailContent from './ServiceDetailContent';

const serviceDetails: Record<string, {
  title: string;
  description: string;
  image: string;
  features: string[];
}> = {
  'interior-exterior-painting': {
    title: 'Interior and Exterior Painting',
    description: 'Transform your home with our professional painting services. We provide high-quality interior and exterior painting solutions using premium materials and expert techniques.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
    features: [
      'Expert color consultation',
      'Surface preparation and priming',
      'Premium paint application',
      'Clean-up and protection',
      'Interior and exterior services',
    ],
  },
  'new-construction-painting': {
    title: 'New Construction Painting',
    description: 'Complete painting solutions for new construction projects. We work with builders and contractors to deliver timely, professional results.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    features: [
      'New build painting',
      'Primer application',
      'Multiple coat systems',
      'Timeline coordination',
      'Quality assurance',
    ],
  },
  'remodeling-carpentry': {
    title: 'Remodeling Carpentry',
    description: 'Expert carpentry services for your remodeling projects. Custom workmanship and attention to detail in every project.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
    features: [
      'Custom cabinetry',
      'Trim and molding',
      'Built-in features',
      'Finish carpentry',
      'Custom woodwork',
    ],
  },
  'sheetrock': {
    title: 'Sheetrock Installation & Repair',
    description: 'Professional sheetrock installation, repair, and finishing services. We ensure smooth, seamless walls and ceilings.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80',
    features: [
      'Sheetrock installation',
      'Drywall repair',
      'Taping and mudding',
      'Texture application',
      'Sanding and finishing',
    ],
  },
  'garage-doors': {
    title: 'Garage Door Installation & Repair',
    description: 'Complete garage door services including installation, repair, and maintenance for all door types.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    features: [
      'New garage door installation',
      'Garage door repair',
      'Opener installation',
      'Spring replacement',
      'Maintenance services',
    ],
  },
  'front-doors': {
    title: 'Front Door Installation & Repair',
    description: 'Enhance your home\'s curb appeal with our professional front door installation and repair services.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    features: [
      'Front door installation',
      'Door repair',
      'Hardware installation',
      'Weatherproofing',
      'Custom doors',
    ],
  },
  'water-heaters': {
    title: 'Water Heater Services',
    description: 'Professional water heater installation, repair, and maintenance services for all types of water heaters.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    features: [
      'Water heater installation',
      'Repair and maintenance',
      'Tankless systems',
      'Energy-efficient options',
      'Emergency services',
    ],
  },
  'fences': {
    title: 'Fence Installation & Repair',
    description: 'Quality fence installation and repair services. We work with various materials including wood, vinyl, and metal.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: [
      'Fence installation',
      'Fence repair',
      'Gate installation',
      'Various materials',
      'Custom designs',
    ],
  },
  'decks': {
    title: 'Deck Construction & Repair',
    description: 'Build or repair your deck with our expert carpentry services. We create beautiful, durable outdoor living spaces.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    features: [
      'Deck construction',
      'Deck repair',
      'Staining and sealing',
      'Railings and stairs',
      'Custom designs',
    ],
  },
  'porches': {
    title: 'Porch Construction & Repair',
    description: 'Professional porch construction and repair services. Enhance your home\'s entrance with a beautiful porch.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
    features: [
      'Porch construction',
      'Porch repair',
      'Screening services',
      'Roofing and columns',
      'Custom designs',
    ],
  },
  'floors': {
    title: 'Flooring Services',
    description: 'Complete flooring solutions including installation, repair, and refinishing for various floor types.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    features: [
      'Floor installation',
      'Floor repair',
      'Refinishing',
      'Various materials',
      'Professional finishing',
    ],
  },
  'gutters': {
    title: 'Gutter Installation & Cover',
    description: 'Professional gutter installation, repair, and gutter guard services to protect your home from water damage.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80',
    features: [
      'Gutter installation',
      'Gutter repair',
      'Gutter guards',
      'Downspout installation',
      'Cleaning services',
    ],
  },
  'pressure-washing': {
    title: 'Pressure Washing',
    description: 'Professional pressure washing services to clean and restore the appearance of your home\'s exterior surfaces.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: [
      'House washing',
      'Driveway cleaning',
      'Deck cleaning',
      'Roof cleaning',
      'Commercial services',
    ],
  },
  'roof-replacement': {
    title: 'Roof Replacement',
    description: 'Complete roof replacement services using quality materials and expert installation techniques.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    features: [
      'Full roof replacement',
      'Material selection',
      'Expert installation',
      'Warranty coverage',
      'Emergency repairs',
    ],
  },
  'siding-replacement': {
    title: 'Siding Replacement',
    description: 'Professional siding replacement services to improve your home\'s appearance and energy efficiency.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    features: [
      'Siding installation',
      'Siding repair',
      'Various materials',
      'Energy-efficient options',
      'Color consultation',
    ],
  },
  'concrete': {
    title: 'Concrete Services',
    description: 'Professional concrete installation, repair, and finishing services for driveways, patios, and more.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80',
    features: [
      'Concrete installation',
      'Concrete repair',
      'Stamped concrete',
      'Sealing and finishing',
      'Custom designs',
    ],
  },
  'retaining-walls': {
    title: 'Retaining Walls',
    description: 'Professional retaining wall construction using various materials to enhance your landscape and prevent erosion.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: [
      'Wall construction',
      'Various materials',
      'Drainage solutions',
      'Landscape integration',
      'Custom designs',
    ],
  },
  'debris-removal': {
    title: 'Debris Removal',
    description: 'Professional debris removal services for construction sites, yard cleanups, and renovation projects.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    features: [
      'Construction debris',
      'Yard waste removal',
      'Dumpster services',
      'Recycling options',
      'Quick cleanup',
    ],
  },
  'windows-installation': {
    title: 'Window Installation',
    description: 'Professional window installation and replacement services to improve energy efficiency and aesthetics.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    features: [
      'Window installation',
      'Window replacement',
      'Energy-efficient windows',
      'Custom sizing',
      'Warranty coverage',
    ],
  },
  'demolition': {
    title: 'Demolition Services',
    description: 'Safe and efficient demolition services for structures, walls, and renovation projects.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    features: [
      'Structure demolition',
      'Interior demolition',
      'Selective demolition',
      'Debris removal',
      'Safety compliance',
    ],
  },
  'tree-service': {
    title: 'Tree Service',
    description: 'Professional tree services including removal, trimming, and maintenance to keep your property safe and beautiful.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: [
      'Tree removal',
      'Tree trimming',
      'Stump grinding',
      'Emergency services',
      'Landscape cleanup',
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug] || {
    title: 'Service',
    description: 'Professional home care service for your home improvement needs.',
  };

  return {
    title: `${service.title} - Home Caregivers Care | Home Care Services`,
    description: `Home Caregivers Care provides ${service.title.toLowerCase()} - ${service.description} Professional home care and home improvement services for your home.`,
    keywords: `Caregivers Care, home, ${service.title.toLowerCase()}, home care, home improvement, home services, home care services, North Atlanta home care`,
    openGraph: {
      title: `${service.title} - Home Caregivers Care`,
      description: `Professional home care service: ${service.description}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug] || {
    title: 'Service',
    description: 'Professional service for your home improvement needs.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
    features: ['Professional service', 'Quality workmanship', 'Expert team'],
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>

            <ServiceDetailContent service={service} />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
