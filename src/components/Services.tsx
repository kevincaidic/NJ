import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_DATA } from '../data';
import { Layout, Search, Layers, Zap, Grid, Cpu, ArrowRight, Sparkles, Check } from 'lucide-react';

const iconMap: Record<string, any> = {
  Layout: Layout,
  Search: Search,
  Layers: Layers,
  Zap: Zap,
  Grid: Grid,
  Cpu: Cpu
};

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ui-design');

  const selectedService = SERVICE_DATA.find(s => s.id === selectedServiceId) || SERVICE_DATA[0];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-luxury-paper/50 relative border-t border-luxury-dark/[0.04] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-mono text-xxxs tracking-widest text-brand-violet uppercase font-extrabold px-3 py-1 bg-brand-violet/5 rounded-full">
            EXPERTISE SCOPE & CORE PROTOCOLS
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-luxury-dark mt-4">
            A Complete Capability Engine Configured for Continuous Velocity.
          </h2>
          <p className="font-sans text-sm text-luxury-gray leading-relaxed mt-4">
            Unlike design agencies that stretch timelines with bloated team hierarchies, I offer specialized premium competencies driven directly by a senior practitioner.
          </p>
        </div>

        {/* Interactive Staggered Bento split-flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Feature Spec Sheet */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            <div className="p-8 rounded-3xl bg-luxury-dark text-luxury-cream shadow-[0_30px_60px_rgba(10,10,14,0.15)] relative overflow-hidden">
              {/* Abstract decorative graphic line */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-brand-violet/10 blur-[50px] pointer-events-none"></div>

              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xxs font-bold text-brand-coral uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 animate-spin-slow" /> STAGING SPECS
                </span>
                <span className="font-mono text-[9px] text-luxury-cream/40">SEC: S_CAP_71</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedServiceId}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-coral">
                      {iconMap[selectedService.iconName] && 
                       (() => {
                         const IconComp = iconMap[selectedService.iconName];
                         return <IconComp className="h-5 w-5" />;
                       })()
                      }
                    </div>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-widest">
                      {selectedService.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-luxury-cream/70 leading-relaxed min-h-[72px]">
                    {selectedService.fullDescription}
                  </p>

                  <div className="border-t border-white/10 pt-6">
                    <p className="font-mono text-[10px] text-brand-coral uppercase font-bold tracking-widest mb-4">
                      EXPECTED DELIVERABLES:
                    </p>
                    <ul className="space-y-2.5">
                      {selectedService.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xxs text-luxury-cream/90">
                          <Check className="h-3.5 w-3.5 mt-0.5 text-brand-violet shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="border-t border-white/10 pt-6 mt-8 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] text-luxury-cream/40 m-0">ENGAGEMENT PROTOCOL</p>
                  <p className="font-display text-xxs text-white font-bold tracking-wider mt-0.5 uppercase">Direct Senior Placement</p>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl font-display text-xxs text-white uppercase tracking-widest font-bold transition-all"
                >
                  Initiate Project
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interaction Service Cards Trigger */}
          <div className="lg:col-span-7 space-y-4">
            {SERVICE_DATA.map((srv) => {
              const IconComp = iconMap[srv.iconName];
              const isSelected = selectedServiceId === srv.id;

              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`w-full text-left p-6.5 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 border ${
                    isSelected 
                      ? 'bg-white border-brand-violet/25 shadow-[0_12px_30px_rgba(10,10,14,0.03)]' 
                      : 'bg-white/50 border-luxury-dark/[0.04] hover:bg-white hover:border-luxury-dark/15'
                  }`}
                >
                  <div className="flex gap-4.5 items-start">
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isSelected ? 'bg-brand-violet text-white' : 'bg-luxury-paper text-luxury-dark'
                    }`}>
                      {IconComp && <IconComp className="h-5 w-5" />}
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-display text-base font-bold text-luxury-dark">
                        {srv.title}
                      </h4>
                      <p className="font-sans text-xs text-luxury-gray leading-relaxed max-w-lg">
                        {srv.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end md:justify-center">
                    <span className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'translate-x-1 text-brand-coral bg-brand-coral/5' 
                        : 'text-luxury-gray/40 hover:text-luxury-dark'
                    }`}>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
