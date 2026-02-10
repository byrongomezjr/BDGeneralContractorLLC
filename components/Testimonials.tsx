'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Richardson',
    location: 'Franklin, NJ',
    rating: 5,
    text: 'B&D completely transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible, and they finished on time and within budget. Couldn\'t be happier!',
    project: 'Kitchen Remodel',
    initials: 'MR',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Sarah & David Martinez',
    location: 'Edison, NJ',
    rating: 5,
    text: 'Professional from start to finish. They handled our entire bathroom renovation including all the plumbing work. The team was respectful of our home and cleaned up every day.',
    project: 'Bathroom Renovation',
    initials: 'SM',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 3,
    name: 'Robert Thompson',
    location: 'Princeton, NJ',
    rating: 5,
    text: 'We\'ve used B&D for multiple projects over the years - painting, plumbing, and electrical work. They\'re our go-to contractor. Reliable, skilled, and always fair pricing.',
    project: 'Multiple Services',
    initials: 'RT',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 4,
    name: 'Jennifer & Mark Wilson',
    location: 'New Brunswick, NJ',
    rating: 5,
    text: 'Our plumbing was in bad shape and B&D not only fixed it but also discovered and repaired underlying issues. They went above and beyond. True professionals!',
    project: 'Plumbing Repair',
    initials: 'JW',
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 5,
    name: 'Anthony Garcia',
    location: 'Somerset, NJ',
    rating: 5,
    text: 'The electrical upgrade they did for our home office is outstanding. New lighting, additional outlets, and smart switches - all exactly as we needed. Quality craftsmanship at its best.',
    project: 'Electrical Upgrade',
    initials: 'AG',
    color: 'from-rose-500 to-rose-600',
  },
  {
    id: 6,
    name: 'Lisa Chen',
    location: 'Bridgewater, NJ',
    rating: 5,
    text: 'Had B&D paint our entire home interior and exterior. The preparation work was thorough, the finish is flawless, and the color consultation was so helpful. Highly recommend!',
    project: 'Full Home Painting',
    initials: 'LC',
    color: 'from-teal-500 to-teal-600',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary-600 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="heading-lg text-white mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-white/70 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what homeowners across 
            New Jersey have to say about working with B&D General Contractor.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-secondary-500 rounded-3xl p-8 md:p-12 border border-white/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
              <Quote className="w-6 h-6 text-secondary" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center`}>
                  <span className="text-3xl font-bold text-white">
                    {testimonials[currentIndex].initials}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                <div>
                  <p className="font-bold text-white">{testimonials[currentIndex].name}</p>
                  <p className="text-white/60 text-sm">
                    {testimonials[currentIndex].project} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center md:justify-end gap-2 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-primary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-secondary-500 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-white/70 mb-4 line-clamp-4">&ldquo;{testimonial.text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
                  <span className="text-sm font-bold text-white">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="text-white/50 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews Badge */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="inline-flex items-center gap-4 bg-secondary-500 rounded-full px-6 py-3 border border-white/10">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="text-left">
              <p className="font-bold text-white text-sm">5.0 Rating</p>
              <p className="text-white/50 text-xs">200+ Google Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
