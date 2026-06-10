import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Quote, Sparkles, Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[activeIdx];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-luxury-cream text-luxury-dark relative border-t border-luxury-dark/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="font-mono text-xxxs tracking-widest text-brand-violet uppercase font-extrabold px-3 py-1 bg-brand-violet/5 rounded-full">
            FOUNDERS REVIEWS & ENDORSEMENTS
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-luxury-dark mt-4">
            Validated by Product Leaders Worldwide.
          </h2>
        </div>

        {/* Highlighted Testimonial Row Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Slide Showcase */}
          <div className="lg:col-span-8">
            <div className="relative min-h-[350px] p-8 md:p-12 rounded-[32px] bg-white border border-luxury-dark/10 shadow-[0_20px_50px_rgba(10,10,14,0.02)] flex flex-col justify-between">
              
              {/* Quote icon banner overlay */}
              <div className="absolute top-8 right-8 text-brand-violet/10">
                <Quote className="h-16 w-16 rotate-180" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-brand-coral text-brand-coral" />
                ))}
              </div>

              {/* Slider quote copy animated */}
              <div className="relative flex-1 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="font-sans text-base md:text-lg text-luxury-dark font-medium italic leading-relaxed">
                      "{activeTestimonial.quote}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Profile Bio Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-luxury-dark/5 pt-8 mt-8">
                
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl overflow-hidden border border-luxury-dark/10 bg-luxury-paper shrink-0 shadow-sm">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.author}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-luxury-dark leading-tight">
                      {activeTestimonial.author}
                    </h4>
                    <p className="font-sans text-xxs text-luxury-gray mt-0.5 leading-none">
                      {activeTestimonial.role} — <span className="font-bold text-luxury-dark">{activeTestimonial.company}</span>
                    </p>
                  </div>
                </div>

                {/* Measurable ROI flag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100/50 border border-emerald-200 rounded-xl text-emerald-800 text-xxs font-bold">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{activeTestimonial.results}</span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column Grid Navigator Panel */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            
            <p className="font-sans text-xs text-luxury-gray leading-relaxed">
              I partner deeply to align client visuals with specific metrics. Check out how these founders drove user signup growth and slashed front-end design iterations in half.
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full border border-luxury-dark/10 hover:border-luxury-dark/30 flex items-center justify-center text-luxury-dark hover:bg-luxury-paper transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <span className="font-mono text-xs text-luxury-gray">
                {String(activeIdx + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
              </span>

              <button
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full border border-luxury-dark/10 hover:border-luxury-dark/30 flex items-center justify-center text-luxury-dark hover:bg-luxury-paper transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Quick indicators */}
            <div className="flex gap-2 border-t border-luxury-dark/5 pt-6 mt-2">
              {TESTIMONIALS.map((test, index) => (
                <button
                  key={test.id}
                  onClick={() => setActiveIdx(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIdx === index ? 'w-8 bg-brand-violet' : 'w-2.5 bg-luxury-dark/10 hover:bg-luxury-dark/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
