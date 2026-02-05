'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, MapPin, Calendar, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const credentials = [
  'New Jersey State Licensed Contractor',
  'Fully Insured & Bonded',
  'EPA Lead-Safe Certified',
  'OSHA Safety Certified',
  'Member: NJ Contractors Association',
];

const stats = [
  { icon: Calendar, value: '2009', label: 'Founded' },
  { icon: Users, value: '15+', label: 'Team Members' },
  { icon: Award, value: '500+', label: 'Projects' },
  { icon: MapPin, value: 'All NJ', label: 'Service Area' },
];

// Set to true once you add the image to /public/aboutus/family.jpg
const hasImage = true; // Set to true when image is present

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-secondary-700 relative overflow-hidden">
      {/* Geometric Pattern Background - Top */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <polygon points="400,0 400,200 200,200" fill="currentColor" className="text-primary" />
          <polygon points="400,200 400,400 200,200" fill="currentColor" className="text-white/20" />
          <polygon points="200,200 400,200 300,100" fill="currentColor" className="text-primary/50" />
        </svg>
      </div>

      {/* Geometric Triangle Patterns - Bottom Left (like screenshot) */}
      <div className="absolute bottom-0 left-0 w-96 h-96">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Large dark triangle */}
          <polygon points="0,400 200,400 0,200" fill="currentColor" className="text-secondary-800" />
          {/* Medium triangle */}
          <polygon points="0,200 100,400 0,400" fill="currentColor" className="text-secondary-600" />
          {/* Small accent triangle */}
          <polygon points="100,400 200,400 150,300" fill="currentColor" className="text-primary/30" />
          {/* Additional triangles for depth */}
          <polygon points="200,400 300,400 200,300" fill="currentColor" className="text-secondary-500" />
          <polygon points="200,300 250,400 200,400" fill="currentColor" className="text-white/5" />
          {/* Top floating triangles */}
          <polygon points="50,150 100,250 0,250" fill="currentColor" className="text-secondary-600/80" />
          <polygon points="150,200 200,300 100,300" fill="currentColor" className="text-secondary-500/60" />
        </svg>
      </div>

      {/* Additional geometric accents - right side */}
      <div className="absolute bottom-20 right-10 w-48 h-48 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="100,0 200,100 100,200 0,100" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image Area - Hexagonal Shape */}
            <div className="relative flex justify-center">
              {/* Hexagonal Image Container */}
              <div 
                className="relative w-80 h-80 md:w-96 md:h-96"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                {hasImage ? (
                  <Image
                    src="/aboutus/paint.jpg"
                    alt="B&D General Contractor"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary">B&D</span>
                      </div>
                      <p className="text-white/70 text-lg font-medium">Family-Owned</p>
                      <p className="text-primary font-bold text-xl">Since 2009</p>
                    </div>
                  </div>
                )}
                
                {/* Hexagon border glow */}
                <div 
                  className="absolute inset-0 border-4 border-primary/30"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                />
              </div>

              {/* Decorative hexagons behind */}
              <div 
                className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              />
              <div 
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary-500"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              />
              <div 
                className="absolute top-1/2 -right-10 w-12 h-12 bg-primary/40"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              />

              {/* Floating Badge - bottom right */}
              <motion.div
                className="absolute -bottom-8 right-0 bg-secondary-500 rounded-2xl p-4 shadow-2xl border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">15+</p>
                    <p className="text-white/60 text-xs">Years of Excellence</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge - top left */}
              <motion.div
                className="absolute -top-6 left-4 bg-primary rounded-xl p-3 shadow-lg shadow-primary/30"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-secondary font-bold text-sm">Licensed</p>
                <p className="text-secondary/70 text-xs">& Insured</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="heading-lg text-white mb-6">
              Building Dreams,{' '}
              <span className="text-primary">One Project at a Time</span>
            </h2>

            <div className="space-y-4 text-white/70 text-lg leading-relaxed mb-8">
              <p>
                B&D General Contractor LLC was founded in 2009 with a simple mission: 
                to provide New Jersey homeowners with reliable, quality construction 
                services at fair prices.
              </p>
              <p>
                What started as a two-person operation has grown into a trusted team 
                of skilled professionals. But our values remain the same — integrity, 
                craftsmanship, and putting our customers first.
              </p>
              <p>
                We&apos;re not just contractors; we&apos;re your neighbors. We live and work 
                in the communities we serve, and we take pride in every project we 
                complete.
              </p>
            </div>

            {/* Credentials */}
            <div className="mb-8">
              <h3 className="font-bold text-white mb-4">Our Credentials</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={credential}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/60 text-sm">{credential}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <a href="#contact" className="btn-cta">
              Work With Us
            </a>
          </motion.div>
        </div>

        {/* Stats Bar with geometric accents */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative text-center p-6 bg-secondary-500 rounded-2xl border border-white/10 overflow-hidden group hover:border-primary/30 transition-colors"
            >
              {/* Decorative corner triangle */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rotate-45 group-hover:bg-primary/20 transition-colors" />
              </div>
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Service Area Map */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="relative bg-secondary-500 rounded-2xl p-8 text-center border border-white/10 overflow-hidden">
            {/* Geometric accents */}
            <div className="absolute top-0 left-0 w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                <polygon points="0,0 100,0 0,100" fill="currentColor" className="text-primary" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                <polygon points="100,100 100,0 0,100" fill="currentColor" className="text-primary" />
              </svg>
            </div>

            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Serving All of New Jersey</h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              From North Jersey to South Jersey, we proudly serve homeowners across 
              the entire state. Contact us to confirm service in your area.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Somerset County', 'Middlesex County', 'Mercer County', 'Union County', 'Morris County', 'And More'].map((county) => (
                <span
                  key={county}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm text-white/70 border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default"
                >
                  {county}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
