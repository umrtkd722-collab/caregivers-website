'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceDetailContentProps {
  service: {
    title: string;
    description: string;
    image: string;
    features: string[];
  };
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
          {service.title}
        </h1>
        <div className="w-24 h-1 bg-primary mb-8"></div>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-4 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark transition-colors"
        >
          Get A Free Quote
        </motion.a>
      </div>
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

