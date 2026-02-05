'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0), // Honeypot field for spam protection
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  'Building & Remodeling',
  'Plumbing Services',
  'Electrical Services',
  'Carpentry',
  'Painting',
  'Roofing',
  'Other',
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(973)-934-2059',
    href: 'tel:+19739342059',
    description: 'Mon-Fri 9am-5pm, Sat 9am-5pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'bdgeneralcontractorllc@gmail.com',
    href: 'mailto:bdgeneralcontractorllc@gmail.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Franklin, New Jersey',
    href: '#',
    description: 'Serving all of NJ',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9am-5pm',
    href: '#',
    description: 'Sat: 9am-5pm, Sun: Closed',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.honeypot) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send to Web3Forms - emails go directly to bdgeneralcontractorllc@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          subject: `New Quote Request from ${data.name} - ${data.service}`,
          from_name: 'B&D General Contractor Website',
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
          // Additional formatting for the email
          botcheck: data.honeypot,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        console.error('Form submission error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-pattern" />
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
            Contact Us
          </span>
          <h2 className="heading-lg text-white mb-6">
            Ready to Start Your{' '}
            <span className="text-gradient">Project?</span>
          </h2>
          <p className="text-white/70 text-lg">
            Get in touch for a free consultation and quote. We&apos;re here to help 
            bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
              <p className="text-white/60">
                Have questions? Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                    <p className="text-white/50 text-sm">{item.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Google Maps Embed - Franklin Borough, NJ 07416 (Sussex County, near Sparta) */}
            <div className={cn(
              "aspect-video rounded-2xl overflow-hidden border",
              theme === 'dark' 
                ? "bg-white/5 border-white/10" 
                : "bg-gray-100 border-gray-200"
            )}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47683.38844373656!2d-74.59081565!3d41.1220536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c347a6ca5dd91d%3A0x5dc0e52db81b4b9b!2sFranklin%2C%20NJ%2007416!5e0!3m2!1sen!2sus!4v1707000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B&D General Contractor Location - Franklin, NJ 07416"
                className={cn(
                  "transition-all duration-500",
                  theme === 'dark' && "invert hue-rotate-180 brightness-90 contrast-90"
                )}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-secondary-500 rounded-3xl p-8 md:p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Request a Free Quote</h3>
              <p className="text-white/60 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/60 mb-6">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    {...register('honeypot')}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all',
                          errors.name ? 'border-red-500' : 'border-white/10'
                        )}
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all',
                          errors.email ? 'border-red-500' : 'border-white/10'
                        )}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all',
                          errors.phone ? 'border-red-500' : 'border-white/10'
                        )}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        {...register('service')}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all',
                          errors.service ? 'border-red-500' : 'border-white/10'
                        )}
                      >
                        <option value="" className="bg-secondary text-white">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-secondary text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.service.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={5}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none',
                        errors.message ? 'border-red-500' : 'border-white/10'
                      )}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta w-full disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-center flex items-center justify-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <p className="text-center text-white/50 text-sm">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
