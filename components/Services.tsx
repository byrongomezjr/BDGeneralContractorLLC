'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Building2,
  Wrench,
  Zap,
  Paintbrush,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Building & Remodeling',
    description:
      'Complete home construction and renovation services. From new builds to total transformations, we bring your vision to life with precision and care.',
    features: ['New Construction', 'Kitchen Remodeling', 'Bathroom Renovation', 'Room Additions'],
    color: 'from-primary to-primary-400',
  },
  {
    icon: Wrench,
    title: 'Plumbing Services',
    description:
      'Professional plumbing installation, repair, and maintenance. We handle everything from leaks to complete system overhauls.',
    features: ['Pipe Installation', 'Leak Repair', 'Water Heaters', 'Drain Cleaning'],
    color: 'from-blue-500 to-blue-400',
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    description:
      'Safe and reliable electrical work for your home. Installations, upgrades, and repairs by licensed professionals.',
    features: ['Panel Upgrades', 'Wiring', 'Lighting', 'Outlet Installation'],
    color: 'from-yellow-500 to-yellow-400',
  },
  {
    icon: Paintbrush,
    title: 'Painting',
    description:
      'Interior and exterior painting services that transform spaces. Quality finishes that last with expert color consultation.',
    features: ['Interior Painting', 'Exterior Painting', 'Staining', 'Wallpaper Removal'],
    color: 'from-purple-500 to-purple-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="heading-lg text-white mb-6">
            Comprehensive Solutions for{' '}
            <span className="text-primary">Every Project</span>
          </h2>
          <p className="text-white/70 text-lg">
            From foundation to finish, we offer a full range of construction and renovation 
            services. Whatever your project needs, our skilled team delivers quality results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full bg-secondary-500 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-5 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div
                    className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 rotate-45`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/60 mb-4">
            Don&apos;t see what you need? We handle many more services.
          </p>
          <a href="#contact" className="btn-primary">
            Contact Us for Custom Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
