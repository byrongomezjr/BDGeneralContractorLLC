'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ClipboardList, PenTool, Hammer, CheckCircle, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Initial Consultation',
    description:
      'We start with a free consultation to understand your needs, vision, and budget. Call us or fill out our quote form.',
    duration: 'Same Day Response',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'On-Site Assessment',
    description:
      'Our experts visit your property to evaluate the project scope, take measurements, and identify any potential challenges.',
    duration: '1-2 Days',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Detailed Proposal',
    description:
      'You receive a comprehensive proposal including detailed scope, timeline, materials, and transparent pricing.',
    duration: '2-3 Days',
  },
  {
    icon: Hammer,
    number: '04',
    title: 'Project Execution',
    description:
      'Our skilled team gets to work, keeping you informed at every stage. We maintain a clean, safe work environment.',
    duration: 'Per Project',
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Quality Inspection',
    description:
      'We conduct thorough quality checks throughout and upon completion to ensure every detail meets our high standards.',
    duration: 'Continuous',
  },
  {
    icon: ThumbsUp,
    number: '06',
    title: 'Final Walkthrough',
    description:
      'We walk through the completed project together, address any concerns, and ensure your complete satisfaction.',
    duration: 'Project End',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-secondary-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
            Our Process
          </span>
          <h2 className="heading-lg text-white mb-6">
            How We Bring Your{' '}
            <span className="text-primary">Vision to Life</span>
          </h2>
          <p className="text-white/70 text-lg">
            From initial contact to final walkthrough, we&apos;ve streamlined our process 
            to ensure clear communication, quality work, and your complete satisfaction.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/20 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative lg:flex lg:items-center lg:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="bg-secondary-500 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-500">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <span className="text-primary font-bold text-sm">{step.number}</span>
                          <span className="text-xs text-white/50 px-2 py-0.5 bg-white/5 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-white/60">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary font-bold text-lg shadow-lg shadow-primary/30"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-white/60 mb-4">Ready to start your project?</p>
          <a href="#contact" className="btn-cta">
            Get Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
