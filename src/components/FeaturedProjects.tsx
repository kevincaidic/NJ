import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECT_DATA } from '../data';
import { ArrowUpRight, CheckCircle, Calendar, Users, Trophy, ExternalLink } from 'lucide-react';

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'SaaS' | 'Fintech'>('all');

  const filteredProjects = PROJECT_DATA.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'SaaS') return proj.category.includes('SaaS') || proj.category.includes('Biotech');
    if (activeFilter === 'Fintech') return proj.category.includes('Fintech');
    return true;
  });

  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-luxury-cream relative scroll-mt-20 border-t border-luxury-dark/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="font-mono text-xxxs tracking-widest text-brand-violet uppercase font-extrabold px-3 py-1 bg-brand-violet/5 rounded-full">
              CASE HISTORIES & MEASURED OUTCOMES
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-luxury-dark mt-4">
              Designing Business Outcomes, <br />Not Just Layouts.
            </h2>
          </div>
        </div>

        {/* Dynamic Project Stacks - Staggered Row Structure */}
        <div className="space-y-16 md:space-y-24">
          <AnimatePresence mode="wait">
            {filteredProjects.map((proj, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  key={proj.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Visual Image Presentation (Figma Mockup representation) */}
                  <div className={`col-span-1 lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative group overflow-hidden rounded-[32px] border border-luxury-dark/10 bg-luxury-paper shadow-[0_20px_50px_rgba(10,10,14,0.05)] aspect-[4/3] flex items-center justify-center p-3 sm:p-5">
                      
                      {/* Inner border margin outline */}
                      <div className="absolute inset-5 rounded-[22px] border border-white/20 z-10 pointer-events-none"></div>

                      {/* Accent color glow block in background */}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-gradient-to-br ${proj.color} blur-[80px] opacity-40 transition-transform duration-700 group-hover:scale-110 pointer-events-none`}></div>

                      {/* Image Frame Container */}
                      <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-lg border border-luxury-dark/5 bg-white z-20">
                        <img 
                          src={proj.image} 
                          alt={proj.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Dynamic hover metric tag */}
                      <div className="absolute bottom-10 right-10 bg-luxury-dark text-luxury-cream px-4 py-2.5 rounded-xl z-30 shadow-2xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2">
                        <span className="font-mono text-xxs font-bold text-brand-coral uppercase tracking-widest">VIEW SPEC</span>
                        <ArrowUpRight className="h-3 w-3 text-brand-violet" />
                      </div>

                    </div>
                  </div>

                  {/* Copy Storytelling content */}
                  <div className={`col-span-1 lg:col-span-5 ${!isEven ? 'lg:order-1' : ''} space-y-6`}>
                    
                    {/* Metadata indicators */}
                    <div className="flex items-center gap-3 font-mono text-xxs font-semibold text-luxury-gray">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-brand-violet" /> {proj.year}
                      </span>
                      <span className="h-1 w-1 bg-luxury-dark/20 rounded-full"></span>
                      <span>{proj.category}</span>
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-xxxs tracking-widest text-brand-coral uppercase font-bold">
                        CLIENT WORK: {proj.client.toUpperCase()}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-luxury-dark leading-tight">
                        {proj.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-luxury-gray leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Massive ROI metrics badge */}
                    <div className={`p-5 rounded-2xl border border-luxury-dark/5 bg-luxury-paper flex items-center gap-4.5`}>
                      <span className="font-display text-3xl md:text-4xl font-extrabold text-luxury-dark tracking-tighter shrink-0 select-none">
                        {proj.impactResult}
                      </span>
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-brand-violet font-extrabold">MEASURABLE IMPACT</p>
                        <p className="font-sans text-xxs text-luxury-dark font-semibold mt-0.5 leading-relaxed">
                          {proj.impactLabel}
                        </p>
                      </div>
                    </div>

                    {/* Technology scope highlights */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.scope.map((tag, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 bg-luxury-paper text-luxury-gray rounded-md border border-luxury-dark/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
