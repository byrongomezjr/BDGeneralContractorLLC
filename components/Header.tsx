'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const navigation = [
  {
    name: 'Services',
    href: '#services',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Building & Remodeling', href: '#services' },
      { name: 'Plumbing Services', href: '#services' },
      { name: 'Electrical Services', href: '#services' },
      { name: 'Painting', href: '#services' },
    ],
  },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-secondary/95 backdrop-blur-lg shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo + Company Name */}
          <motion.a
            href="#"
            className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/logo.png"
              alt="B&D General Contractor LLC"
              width={180}
              height={90}
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
              priority
            />
            <div className="flex flex-col justify-between h-6 sm:h-8 md:h-10 lg:h-12">
              <p className="text-white font-heading font-bold text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap leading-none">
                B&D General Contractor
              </p>
              <p className="text-primary text-[9px] sm:text-xs md:text-sm font-semibold leading-none">LLC</p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-300',
                        activeDropdown === item.name && 'rotate-180'
                      )}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-secondary-600 border border-white/10 rounded-xl overflow-hidden shadow-xl shadow-black/20"
                    >
                      {item.dropdownItems?.map((dropdownItem, i) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-white/70 hover:text-primary hover:bg-white/5 transition-all duration-300 border-b border-white/5 last:border-0"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-primary transition-all duration-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
            
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(973) 934-2059</span>
            </a>
            <a href="#contact" className="btn-cta text-base px-6 py-3">
              Get Free Quote
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-10 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-secondary border-t border-white/10"
          >
            <div className="container-custom py-6 space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    className="block py-2 text-lg text-white/80 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/30">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-1 text-white/60 hover:text-primary transition-colors duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-4 space-y-3"
              >
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 w-full py-2 text-white hover:text-primary transition-colors duration-300"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span className="font-semibold">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(973) 934-2059</span>
                </a>
                <a href="#contact" className="btn-cta w-full text-center">
                  Get Free Quote
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
