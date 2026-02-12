'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Building & Remodeling',
  'Plumbing Services',
  'Electrical Services',
  'Painting',
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/bdgeneralcontractor' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/bdgeneralcontractor' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/bdgeneralcontractor' },
];

export default function Footer() {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={cn(
      "relative overflow-hidden transition-colors duration-300",
      theme === 'dark' ? "bg-secondary-700" : "bg-gray-100"
    )}>
      {/* Background Pattern */}
      <div className={cn(
        "absolute inset-0 grid-pattern",
        theme === 'dark' ? "opacity-10" : "opacity-5"
      )} />

      {/* Main Footer Content */}
      <div className="container-custom relative z-10 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="B&D General Contractor LLC"
                width={160}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className={cn(
              "mb-6 leading-relaxed transition-colors duration-300",
              theme === 'dark' ? "text-white/60" : "text-gray-600"
            )}>
              Your trusted partner for quality construction and renovation services 
              across New Jersey since 2009.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                    theme === 'dark' 
                      ? "bg-white/5 border border-white/10 text-white/60 hover:bg-primary hover:text-secondary hover:border-primary" 
                      : "bg-gray-200 border border-gray-300 text-gray-600 hover:bg-primary hover:text-secondary hover:border-primary"
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={cn(
              "font-bold text-lg mb-6 transition-colors duration-300",
              theme === 'dark' ? "text-white" : "text-gray-900"
            )}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      "hover:text-primary transition-colors duration-300",
                      theme === 'dark' ? "text-white/60" : "text-gray-600"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={cn(
              "font-bold text-lg mb-6 transition-colors duration-300",
              theme === 'dark' ? "text-white" : "text-gray-900"
            )}>Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className={cn(
                      "hover:text-primary transition-colors duration-300",
                      theme === 'dark' ? "text-white/60" : "text-gray-600"
                    )}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={cn(
              "font-bold text-lg mb-6 transition-colors duration-300",
              theme === 'dark' ? "text-white" : "text-gray-900"
            )}>Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+19739342059"
                  className={cn(
                    "flex items-center gap-3 hover:text-primary transition-colors duration-300",
                    theme === 'dark' ? "text-white/60" : "text-gray-600"
                  )}
                >
                  <Phone className="w-5 h-5 text-primary" />
                  (973)-934-2059
                </a>
              </li>
              <li>
                <a
                  href="mailto:bdgeneralcontractorllc@gmail.com"
                  className={cn(
                    "flex items-center gap-3 hover:text-primary transition-colors duration-300",
                    theme === 'dark' ? "text-white/60" : "text-gray-600"
                  )}
                >
                  <Mail className="w-5 h-5 text-primary" />
                  bdgeneralcontractorllc@gmail.com
                </a>
              </li>
              <li className={cn(
                "flex items-start gap-3",
                theme === 'dark' ? "text-white/60" : "text-gray-600"
              )}>
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Franklin, New Jersey<br />
                  Serving All of NJ
                </span>
              </li>
            </ul>

            {/* Business Hours */}
            <div className={cn(
              "mt-6 p-4 rounded-xl transition-colors duration-300",
              theme === 'dark' 
                ? "bg-white/5 border border-white/10" 
                : "bg-white border border-gray-200 shadow-sm"
            )}>
              <p className={cn(
                "font-semibold mb-2 transition-colors duration-300",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>Business Hours</p>
              <div className={cn(
                "text-sm space-y-1 transition-colors duration-300",
                theme === 'dark' ? "text-white/60" : "text-gray-600"
              )}>
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={cn(
          "border-t pt-8 transition-colors duration-300",
          theme === 'dark' ? "border-white/10" : "border-gray-300"
        )}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className={cn(
              "text-sm text-center md:text-left transition-colors duration-300",
              theme === 'dark' ? "text-white/50" : "text-gray-500"
            )}>
              © {new Date().getFullYear()} B&D General Contractor LLC. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className={cn(
                "hover:text-primary transition-colors",
                theme === 'dark' ? "text-white/50" : "text-gray-500"
              )}>
                Privacy Policy
              </a>
              <a href="#" className={cn(
                "hover:text-primary transition-colors",
                theme === 'dark' ? "text-white/50" : "text-gray-500"
              )}>
                Terms of Service
              </a>
              <a href="#" className={cn(
                "hover:text-primary transition-colors",
                theme === 'dark' ? "text-white/50" : "text-gray-500"
              )}>
                Sitemap
              </a>
            </div>
          </div>

          {/* Credentials */}
          <div className={cn(
            "flex flex-wrap justify-center gap-4 mt-6 text-xs transition-colors duration-300",
            theme === 'dark' ? "text-white/40" : "text-gray-400"
          )}>
            <span>NJ Licensed Contractor</span>
            <span>•</span>
            <span>Fully Insured</span>
            <span>•</span>
            <span>NJ Contractors Association</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary shadow-lg shadow-primary/30 hover:bg-primary-400 hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
