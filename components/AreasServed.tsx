'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const areas = [
  'Atlanta',
  'Grayson',
  'Gwinnett County',
  'North Atlanta Metro Area',
  'Lawrenceville',
  'Snellville',
  'Lilburn',
  'Loganville',
  'Dacula',
  'Buford',
  'Suwanee',
  'Duluth',
  'Norcross',
];

export default function AreasServed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="areas" ref={ref} className="py-20 bg-white">
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We serve customers in the North Atlanta Metro Area, including:
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4 text-center font-semibold shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              {area}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            For years, we have been a leader in painting services in Gwinnett County and surrounding cities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

