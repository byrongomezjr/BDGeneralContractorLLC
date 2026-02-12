'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Award, DollarSign, MapPin, CheckCircle, Building2, Wrench, Zap, Paintbrush, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Building & Remodeling',
    description: 'Complete home construction and renovation services. From new builds to total transformations.',
    color: 'from-primary to-primary-400',
  },
  {
    icon: Wrench,
    title: 'Plumbing Services',
    description: 'Professional plumbing installation, repair, and maintenance for your home.',
    color: 'from-blue-500 to-blue-400',
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    description: 'Safe and reliable electrical work. Installations, upgrades, and repairs.',
    color: 'from-yellow-500 to-yellow-400',
  },
  {
    icon: Paintbrush,
    title: 'Painting',
    description: 'Interior and exterior painting services that transform spaces with quality finishes.',
    color: 'from-purple-500 to-purple-400',
  },
];

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'Fully licensed and insured for your protection. We meet all New Jersey requirements and carry comprehensive coverage.',
    stat: '100%',
    statLabel: 'Compliant',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'We respect your time and schedule. Our team is committed to meeting deadlines without compromising quality.',
    stat: '97%',
    statLabel: 'On-Time Rate',
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description:
      'Every detail matters. We take pride in our work and use premium materials to ensure lasting results.',
    stat: '15+',
    statLabel: 'Years Experience',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description:
      'Fair, transparent pricing with no hidden costs. We provide detailed estimates so you know exactly what to expect.',
    stat: '$0',
    statLabel: 'Hidden Fees',
  },
  {
    icon: MapPin,
    title: 'Local NJ Expertise',
    description:
      'We know New Jersey. From building codes to local suppliers, our expertise ensures smooth project execution.',
    stat: 'All NJ',
    statLabel: 'Coverage',
  },
  {
    icon: CheckCircle,
    title: 'Customer Satisfaction',
    description:
      'Your satisfaction is our priority. We work closely with you throughout the project and stand behind our work.',
    stat: '500+',
    statLabel: 'Happy Clients',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-pattern" />
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-lg text-white mb-6">
              Building Trust Through{' '}
              <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              For over 15 years, B&D General Contractor has been the trusted choice for 
              homeowners across New Jersey. Our commitment to quality, reliability, and 
              customer satisfaction sets us apart.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Completed' },
                { value: '97%', label: 'On-Time Delivery' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn-cta mt-8 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.slice(0, 4).map((reason, index) => (
              <motion.div
                key={reason.title}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-2xl font-bold text-primary">{reason.stat}</p>
                  <p className="text-white/40 text-xs">{reason.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Features - Local NJ Expertise & Customer Satisfaction */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {reasons.slice(4).map((reason, index) => (
            <div
              key={reason.title}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">{reason.title}</h3>
                <p className="text-white/60 text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Our Services Grid */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              What We <span className="text-primary">Offer</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold group/link"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
