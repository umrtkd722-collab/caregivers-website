'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { 
    name: 'Interior Painting', 
    slug: 'interior-exterior-painting',
    image: '/WhatsApp Image 2025-11-29 at 1.40.31 PM (7).jpeg'
  },
  { 
    name: 'Exterior Painting', 
    slug: 'interior-exterior-painting',
    image: '/WhatsApp Image 2025-11-29 at 1.40.31 PM (8).jpeg'
  },
  { 
    name: 'Pressure Washing', 
    slug: 'pressure-washing',
    image: '/WhatsApp Image 2025-11-29 at 1.40.31 PM (9).jpeg'
  },
  { 
    name: 'Floors', 
    slug: 'floors',
    image: '/WhatsApp Image 2025-11-29 at 1.40.31 PM (10).jpeg'
  },
  { 
    name: 'Porches', 
    slug: 'porches',
    image: '/WhatsApp Image 2025-11-29 at 1.40.31 PM (11).jpeg'
  },
  { 
    name: 'Roofing', 
    slug: 'roof-replacement',
    image: '/WhatsApp Image 2025-11-29 at 1.40.31 PM (12).jpeg'
  },
  { 
    name: 'Gutters', 
    slug: 'gutters',
    image: '/WhatsApp Image 2025-11-29 at 1.40.31 PM (13).jpeg'
  },
  { 
    name: 'Decks & Fences', 
    slug: 'decks',
    image: '/WhatsApp Image 2025-11-30 at 1.15.06 PM.jpeg'
  },
  { 
    name: 'Carpentry', 
    slug: 'remodeling-carpentry',
    image: '/WhatsApp Image 2025-11-30 at 1.15.06 PM (1).jpeg'
  },
  { 
    name: 'Cabinets', 
    slug: 'remodeling-carpentry',
    image: '/WhatsApp Image 2025-11-30 at 1.15.07 PM.jpeg'
  },
  { 
    name: 'Basements', 
    slug: 'remodeling-carpentry',
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (1).jpeg'
  },
  { 
    name: 'New construction painting', 
    slug: 'new-construction-painting',
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (2).jpeg'
  },
  { 
    name: 'Sheetrock', 
    slug: 'sheetrock',
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (3).jpeg'
  },
  { 
    name: 'Garage doors', 
    slug: 'garage-doors',
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (4).jpeg'
  },
  { 
    name: 'Front doors', 
    slug: 'front-doors',
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (5).jpeg'
  },
  { 
    name: 'Water heaters', 
    slug: 'water-heaters',
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (6).jpeg'
  },
  { 
    name: 'Siding replacement', 
    slug: 'siding-replacement',
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (7).jpeg'
  },
  { 
    name: 'Concrete', 
    slug: 'concrete',
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM.jpeg'
  },
  { 
    name: 'Retaining walls', 
    slug: 'retaining-walls',
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (1).jpeg'
  },
  { 
    name: 'Windows Installation', 
    slug: 'windows-installation',
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (2).jpeg'
  },
  { 
    name: 'Demolition', 
    slug: 'demolition',
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (3).jpeg'
  },
  { 
    name: 'Tree service', 
    slug: 'tree-service',
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (4).jpeg'
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive home improvement solutions for your every need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            return (
              <Link key={service.name} href={`/services/${service.slug}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-primary h-full flex flex-col"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 flex-1 flex items-center justify-center">
                    <h3 className="text-lg font-semibold text-gray-900 text-center">{service.name}</h3>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            View our project gallery on{' '}
            <a
              href="https://drive.google.com/drive/folders/1ywJDd1F05e3Eb5GT3q44wwaVmiEsvSuv?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Google Drive
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

