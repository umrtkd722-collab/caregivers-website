'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Get all gallery images from public folder
const galleryImages = [
  '/WhatsApp Image 2025-11-29 at 1.40.31 PM (7).jpeg',
  '/WhatsApp Image 2025-11-29 at 1.40.31 PM (8).jpeg',
  '/WhatsApp Image 2025-11-29 at 1.40.31 PM (9).jpeg',
  '/WhatsApp Image 2025-11-29 at 1.40.31 PM (10).jpeg',
  '/WhatsApp Image 2025-11-29 at 1.40.31 PM (11).jpeg',
  '/WhatsApp Image 2025-11-29 at 1.40.31 PM (12).jpeg',
  '/WhatsApp Image 2025-11-29 at 1.40.31 PM (13).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.06 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.06 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.07 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.08 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.08 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.08 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.08 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.08 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.08 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.08 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (8).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (9).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.09 PM (10).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.10 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.15.10 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.41 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.41 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.41 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.41 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.41 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.41 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.42 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.42 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.42 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.42 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.42 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.42 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.42 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.42 PM (8).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.42 PM (9).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (8).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (9).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (10).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (11).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (12).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (13).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (14).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (15).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.43 PM (16).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.44 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.44 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.16.44 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.55 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.56 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.56 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.56 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.56 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.56 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.56 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.56 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.56 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM (8).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.57 PM (9).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.58 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.58 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.58 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.58 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.58 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.58 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.58 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.22.58 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.04 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.04 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.04 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.04 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.05 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.06 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.06 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.06 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.06 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (8).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (9).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (10).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.07 PM (11).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.08 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.36.08 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.20 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.20 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.21 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.21 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.21 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.21 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.21 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.21 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.21 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.22 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.22 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.22 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.22 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.22 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.23 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.23 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.23 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.23 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.23 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.23 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.23 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.23 PM (8).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.24 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.24 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.24 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.24 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.24 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.24 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.24 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.25 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.25 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.25 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.25 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.25 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.25 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.25 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.25 PM (8).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.25 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.26 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.26 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.26 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.26 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.26 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.26 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.26 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.26 PM (8).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.26 PM (9).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (5).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (6).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (7).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (8).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (9).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.27 PM (10).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.28 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.28 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.28 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.39.28 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.12 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.12 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.12 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.12 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.12 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.13 PM.jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.13 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.13 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.13 PM (3).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.13 PM (4).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.14 PM (1).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.14 PM (2).jpeg',
  '/WhatsApp Image 2025-11-30 at 1.52.14 PM (3).jpeg',
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            An impressive project could inspire you.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.03, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="text-white text-xl font-semibold"
                >
                  View
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close"
              >
                <X size={32} />
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next image"
              >
                <ChevronRight size={40} />
              </motion.button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-7xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImage]}
                  alt={`Project ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
