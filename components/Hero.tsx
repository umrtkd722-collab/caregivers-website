'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen py-12 flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ paddingTop: '80px' }} // ← Yeh sabse important fix hai (navbar ki height ke barabar)
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />
      
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply opacity-30 blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply opacity-30 blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content Container - Two Column Layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center lg:text-left space-y-6 md:space-y-8"
          >
            {/* Heading - Mobile par chhota, Desktop par bada */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white leading-tight">
              Home Caregivers GA LLC
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl lg:max-w-none">
              14 Years of Excellence in Professional Painting & Home Improvement Services
            </p>

            <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-2xl lg:max-w-none">
              From initial planning to flawless execution, we guarantee quality and experience for your home or business.
            </p>

            {/* Buttons - Mobile par full width ya better spacing */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8 sm:mt-10">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl transition-all"
              >
                Get A Free Quote
              </motion.a>

              <motion.a
                href="tel:4044075719"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-4 rounded-full text-lg shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.77 15.77 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.22 11.11 11.11 0 003.45.55 1 1 0 011 1v3.45a1 1 0 01-1 1h-3.45a1 1 0 01-1-1v-.5a13.21 13.21 0 01-13-13h.5a1 1 0 011-1h3.45a1 1 0 011 1 11.11 11.11 0 00.55 3.45 1 1 0 01-.22 1.11l-2.2 2.2z"/>
                </svg>
                Call: 404-407-5719
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/Video Publicitario Home Caregivers GA LLC.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </motion.div>
    </section>
  );
}