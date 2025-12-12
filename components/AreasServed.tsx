'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const areas = [
  { 
    name: 'Lawrenceville', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (1).jpeg' 
  },
  { 
    name: 'Suwanee', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (2).jpeg' 
  },
  { 
    name: 'Sugar Hill', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (3).jpeg' 
  },
  { 
    name: 'Mountain Park', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (4).jpeg' 
  },
  { 
    name: 'Duluth', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (5).jpeg' 
  },
  { 
    name: 'Norcross', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (6).jpeg' 
  },
  { 
    name: 'Peachtree Corners', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.08 PM (7).jpeg' 
  },
  { 
    name: 'Centerville', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM.jpeg' 
  },
  { 
    name: 'Lilburn', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (1).jpeg' 
  },
  { 
    name: 'Grayson', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (2).jpeg' 
  },
  { 
    name: 'Snellville', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (3).jpeg' 
  },
  { 
    name: 'Dacula', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (4).jpeg' 
  },
  { 
    name: 'Berkeley Lake', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (5).jpeg' 
  },
  { 
    name: 'Buford', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (6).jpeg' 
  },
  { 
    name: 'Loganville', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (7).jpeg' 
  },
  { 
    name: 'Atlanta', 
    image: '/WhatsApp Image 2025-11-30 at 1.15.09 PM (8).jpeg' 
  },
];

export default function AreasServed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="areas" ref={ref} className="py-20 bg-gradient-to-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Areas Served
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-900 max-w-3xl mx-auto">
            We serve customers in Gwinnett County and the North Atlanta Metro Area
          </p>
        </motion.div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 font-heading text-center">
            Cities in Gwinnett County
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800 rounded-lg p-3 flex items-center gap-3 hover:bg-gray-700 transition-all cursor-pointer shadow-lg hover:shadow-xl border border-gray-700"
            >
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-base font-heading truncate">
                  {area.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-900">
            For years, we have been a leader in painting services in Gwinnett County and surrounding cities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

