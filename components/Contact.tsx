'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import Image from 'next/image';

const allServices = [
  'Interior and Exterior Painting',
  'New construction painting',
  'Porches',
  'Floors',
  'Gutter Install and cover',
  'Remodeling carpentry',
  'Sheetrock',
  'Installation and repair of garage doors',
  'Front doors',
  'Water heaters',
  'Fences',
  'Decks',
  'Pressure washing',
  'Roof replacement',
  'Siding replacement',
  'Concrete',
  'Retaining walls',
  'Debris Removal',
  'Windows Installation',
  'Demolition',
  'Tree service',
];

const hearAboutUsOptions = [
  'Google Search',
  'Facebook',
  'Instagram',
  'Referral',
  'Previous Customer',
  'Drive By',
  'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    hearAboutUs: '',
    selectedServices: [] as string[],
    projectDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          zipCode: '',
          hearAboutUs: '',
          selectedServices: [],
          projectDetails: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Talk to our professional painters. For impeccable Home Caregivers GA LLC solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      1775 Gleneden Ct<br />
                      Grayson, GA 30017
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:gomezhomeservice23@gmail.com" className="text-primary hover:underline">
                      gomezhomeservice23@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:4044075719" className="text-primary hover:underline">
                      Office: 404-407-5719
                    </a>
                    <br />
                    <a href="tel:6786086545" className="text-primary hover:underline">
                      Text: 678-608-6545
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours of Operation</h4>
                    <p className="text-gray-600">
                      Monday to Saturday<br />
                      8:00 am - 5:00 pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                  Get A Quote
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Use this short form to tell us how we can help you.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Phone size={20} />
                  <span>CALL US: 404-407-5719</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* How Did You Hear About Us */}
                <div>
                  <label htmlFor="hearAboutUs" className="block text-gray-700 font-medium mb-2">
                    How Did You Hear About Us?
                  </label>
                  <select
                    id="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    {hearAboutUsOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* City and ZIP Code in a row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Services Checklist */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    What services do you need a quote for? <span className="text-red-500">*</span>
                  </label>
                  <div className="border border-gray-300 rounded-lg p-4 max-h-64 overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {allServices.map((service) => (
                        <label
                          key={service}
                          className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                        >
                          <input
                            type="checkbox"
                            checked={formData.selectedServices.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {formData.selectedServices.length === 0 && (
                    <p className="text-red-500 text-sm mt-1">Please select at least one service</p>
                  )}
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-gray-700 font-medium mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    required
                    rows={5}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 text-green-700 p-4 rounded-lg"
                  >
                    Thank you! We'll be in touch shortly. Your information has been sent to gomezhomeservice23@gmail.com
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 text-red-700 p-4 rounded-lg"
                  >
                    Something went wrong. Please try again or call us directly at 404-407-5719
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || formData.selectedServices.length === 0}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </motion.button>
                <p className="text-xs text-gray-500 text-center">
                  Send button to receive the client's information and it is received to our email, gomezhomeservice23@gmail.com
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

