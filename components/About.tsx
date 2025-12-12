'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Palette, Sparkles, Handshake } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: '14 Years of Experience',
    description: 'Guaranteeing reliable and long-lasting results for your home.',
    icon: Trophy,
  },
  {
    title: 'Innovation in Home Painting',
    description: 'Our passion for excellence is reflected in every project we tackle.',
    icon: Palette,
  },
  {
    title: 'Unwavering Commitment',
    description: 'Home Caregivers GA where perfection is the norm, not the exception.',
    icon: Sparkles,
  },
  {
    title: 'Transparency & Communication',
    description: 'Building solid relationships based on trust and integrity.',
    icon: Handshake,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Home Caregivers GA LLC® began with the vision of making residential and commercial painting services easier and more convenient for home and business owners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From the beginning, our promise has been that of certainty, with the aim of guaranteeing customers our quality and experience. Our team is made up of passionate and dedicated professionals who are committed to excellence every step of the way, using high quality materials, and always treating your home with respect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are proud to offer a wide range of services, covering each phase of the process with mastery and precision. From initial planning to flawless execution and finishing touches, each project is treated with the highest level of attention and care.
              </p>
            </div>
            <div className="relative w-full md:w-96 h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
                alt="Professional painting team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4 font-heading">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Our painting company's mission is simple: We want to provide you with the highest quality finish and the best painting experience possible. We strive to complete every project to our customer's exact specifications, and we will ensure professional, accountable, and reliable service from the first brushstroke to the last.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

