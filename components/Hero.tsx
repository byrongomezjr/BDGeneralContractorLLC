'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award, Star } from 'lucide-react';
import Image from 'next/image';

const trustBadges = [
  { icon: Clock, label: '15+ Years', sublabel: 'Experience' },
  { icon: Shield, label: 'Licensed', sublabel: '& Insured' },
  { icon: Award, label: '500+', sublabel: 'Projects' },
  { icon: Star, label: '5-Star', sublabel: 'Rated' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cta/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Decorative Lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#F2A900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Hero Content - Centered Layout */}
      <div className="container-custom relative z-10 pt-28 sm:pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Heading */}
          <motion.h1
            className="heading-xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            New Jersey&apos;s{' '}
            <span className="text-gradient">Most Trusted</span>
            <br />
            Contractor
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mt-4 sm:mt-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From building and remodeling to plumbing, electrical, and painting — 
            we bring quality craftsmanship and dedication to every project. 
            Your vision, our expertise.
          </motion.p>

          {/* Badge - Serving All of NJ */}
          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium text-sm sm:text-base">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Serving All of New Jersey
            </span>
          </motion.div>

          {/* Circular Image with Floating Badges */}
          <motion.div
            className="relative mt-8 sm:mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Glow Ring */}
            <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-primary via-primary-300 to-cta rounded-full blur-lg opacity-20" />
            
            {/* Outer Ring */}
            <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-primary to-cta rounded-full opacity-50" />
            
            {/* Image Container */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30">
              <Image
                src="/images/hero-project.jpg"
                alt="B&D General Contractor - Quality craftsmanship in New Jersey"
                fill
                className="object-cover"
                priority
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>

            {/* Floating Badge - Bottom Left (95% On-Time) */}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-12 md:-left-16 lg:-left-20 bg-secondary-600 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center">
                  <span className="text-base sm:text-xl font-bold text-secondary">95%</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">On-Time</p>
                  <p className="text-white/50 text-xs sm:text-sm">Completion</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge - Bottom Right (200+ Reviews) */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-12 md:-right-16 lg:-right-20 bg-secondary-600 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">200+</p>
                  <p className="text-white/50 text-xs sm:text-sm">Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-12 sm:mt-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#contact" className="btn-cta group text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Badges - Clean Grid Layout */}
          <motion.div
            className="w-full mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className="flex flex-col items-center text-center p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-3">
                    <badge.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <p className="text-white font-bold text-base sm:text-lg">{badge.label}</p>
                  <p className="text-white/50 text-xs sm:text-sm mt-0.5">{badge.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-white/50 hover:text-primary transition-colors">
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <motion.div
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-current rounded-full p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-current rounded-full mx-auto" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
