'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Grayson, GA',
    rating: 5,
    text: 'Home Caregivers GA LLC transformed our entire house! The exterior painting was flawless and they completed it on time. Professional, courteous, and the quality is outstanding. Highly recommend!',
    service: 'Exterior Painting',
  },
  {
    name: 'Michael Chen',
    location: 'Lawrenceville, GA',
    rating: 5,
    text: 'We needed our deck and fence redone, and they exceeded our expectations. The team was clean, efficient, and the results are beautiful. Great communication throughout the project.',
    service: 'Decks & Fences',
  },
  {
    name: 'Emily Rodriguez',
    location: 'Snellville, GA',
    rating: 5,
    text: 'Best painting company we\'ve ever worked with! They painted our entire interior and the attention to detail was incredible. Our home looks brand new. Worth every penny!',
    service: 'Interior Painting',
  },
  {
    name: 'David Thompson',
    location: 'Lilburn, GA',
    rating: 5,
    text: 'Had our roof replaced and gutters installed. The work was done professionally and they cleaned up everything perfectly. The team was respectful of our property. Excellent service!',
    service: 'Roofing & Gutters',
  },
  {
    name: 'Jennifer Williams',
    location: 'Duluth, GA',
    rating: 5,
    text: 'Remodeled our kitchen and installed new cabinets. The carpentry work is top-notch and they finished ahead of schedule. Couldn\'t be happier with the results!',
    service: 'Carpentry & Cabinets',
  },
  {
    name: 'Robert Martinez',
    location: 'Buford, GA',
    rating: 5,
    text: 'Pressure washed our entire property and it looks amazing! They also did some concrete work on our driveway. Professional, affordable, and great quality work. Will definitely use them again.',
    service: 'Pressure Washing & Concrete',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Customer Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What our happy customers are talking about
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all relative"
            >
              <Quote className="absolute top-4 right-4 text-primary opacity-20 w-12 h-12" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900 font-heading">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-sm text-primary font-medium mt-1">
                  {testimonial.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

