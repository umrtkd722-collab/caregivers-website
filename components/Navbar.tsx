'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // ← Yeh add karo
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // ← Current route
  const isHomePage = pathname === '/'; // ← Sirf home page par transparent effect

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Yeh decide karega ki transparent mode on hai ya nahi
  const isTransparent = isHomePage && !isScrolled;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 as number }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? 'bg-white shadow-lg' : 'bg-white shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
           
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isTransparent
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Call Button */}
            <motion.a
              href="tel:4044075719"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              <span>404-407-5719</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors ${
              isTransparent ? 'text-white' : 'text-gray-700'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-primary transition-colors text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:4044075719"
                className="block bg-primary text-white px-6 py-3 rounded-full text-center flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                <span>404-407-5719</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}