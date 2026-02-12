'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const categories = ['All', 'Remodeling', 'Plumbing', 'Electrical', 'Painting'];

// Project data - update image paths as you add real images to /public/projects/
const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'Remodeling',
    description: 'Complete kitchen transformation with custom cabinetry and modern appliances.',
    location: 'Franklin, NJ',
    image: '/projects/project-1.jpg',
    hasImage: true,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Modern Backyard Deck',
    category: 'Remodeling',
    description: 'Modern backyard deck with custom railing and pergola.',
    location: 'Franklin, NJ',
    image: '/projects/deck.jpg',
    hasImage: true,
    color: 'from-amber-600 to-yellow-600',
  },
  {
    id: 3,
    title: 'Bathroom Renovation',
    category: 'Remodeling',
    description: 'Complete bathroom renovation with new fixtures and tile work.',
    location: 'Nutley, NJ',
    image: '/projects/bathroom.jpg',
    hasImage: true,
    color: 'from-amber-600 to-yellow-600',
  },
  {
    id: 4,
    title: 'Bathroom Extension and Remodeling Project',
    category: 'Remodeling',
    description: 'Modern bathroom upgrade with premium finishes and elegant design.',
    location: 'Franklin Lakes, NJ',
    image: '/projects/bathroom-2.jpg',
    hasImage: true,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Bathroom Extension',
    category: 'Remodeling',
    description: 'Spacious master bathroom transformation with contemporary styling.',
    location: 'Franklin Lakes, NJ',
    image: '/projects/bathroom-3.jpg',
    hasImage: true,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 6,
    title: 'Guest Bathroom Extension',
    category: 'Remodeling',
    description: 'Complete guest bathroom refresh with modern fixtures and tile work.',
    location: 'Franklin Lakes, NJ',
    image: '/projects/bathroom-4.jpg',
    hasImage: true,
    color: 'from-emerald-500 to-green-500',
  },
  {
    id: 7,
    title: 'Interior Home Painting',
    category: 'Painting',
    description: 'Full interior repaint with premium interior paint finishes.',
    location: 'Nutley, NJ',
    image: '/projects/painting-1.jpg',
    hasImage: true,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 8,
    title: 'Exterior Home Painting',
    category: 'Painting',
    description: 'Professional exterior painting with premium weather-resistant finishes.',
    location: 'Nutley, NJ',
    image: '/projects/painting.jpg',
    hasImage: true,
    color: 'from-purple-500 to-pink-500',
  },
];

export default function RecentProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="section-padding bg-secondary relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-pattern" />
        
        <div className="container-custom relative z-10" ref={ref}>
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
              Our Work
            </span>
            <h2 className="heading-lg text-white mb-6">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-white/70 text-lg">
              Browse through our portfolio of completed projects. Each one represents 
              our commitment to quality craftsmanship and customer satisfaction.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-5 py-2 rounded-full font-medium transition-all duration-300',
                  activeCategory === category
                    ? 'bg-primary text-secondary'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                    {/* Image or Placeholder */}
                    {project.hasImage ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <span className="text-white text-2xl font-bold">{project.id}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <span className="text-primary text-sm font-medium mb-1">
                          {project.category}
                        </span>
                        <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                        <p className="text-white/60 text-sm">{project.location}</p>
                      </div>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#contact" className="btn-primary">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-secondary rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className={`relative aspect-square ${!selectedProject.hasImage ? `bg-gradient-to-br ${selectedProject.color}` : ''}`}>
                  {selectedProject.hasImage ? (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white text-4xl font-bold">{selectedProject.id}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{selectedProject.location}</p>
                  <p className="text-white/70 mb-6">{selectedProject.description}</p>
                  
                  <a href="#contact" className="btn-cta">
                    Get Similar Project Quote
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1;
                setSelectedProject(filteredProjects[prevIndex]);
              }}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
                const nextIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0;
                setSelectedProject(filteredProjects[nextIndex]);
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
