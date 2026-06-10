import { useState } from 'react';
import { motion } from 'motion/react';
import { TRUSTED_BRANDS, DESIGN_TOOLKIT } from '../data';
import { Figma, HelpCircle, Laptop, Settings, ToggleLeft, Layers, HeartHandshake } from 'lucide-react';

export default function TrustedBy() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'prototyping' | 'workflow'>('all');

  const filteredTools = DESIGN_TOOLKIT.filter(tool => {
    if (activeCategory === 'all') return true;
    return tool.category === activeCategory;
  });

  return (
    <section
      id="trusted-toolkit"
      className="py-20 bg-luxury-paper/40 border-y border-luxury-dark/[0.04] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xxxs tracking-widest text-brand-violet uppercase font-extrabold px-3 py-1 bg-brand-violet/5 rounded-full">
              PARTNERSHIPS & SYSTEMS
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-luxury-dark mt-4">
              Collaborating Internationally.
            </h2>
          </div>
          <p className="font-sans text-xs uppercase tracking-widest text-luxury-gray/80 max-w-sm md:text-right">
            Trusted by venture-backed startups, biomedical research hubs, and visual sound curators alike.
          </p>
        </div>
      </div>

      {/* Marquee 1: Brand Partnerships */}
      <div className="relative w-full py-4 bg-white/40 border-y border-luxury-dark/[0.03] flex overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-24 items-center">
          {TRUSTED_BRANDS.concat(TRUSTED_BRANDS).map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="flex items-center gap-4">
              <span className="font-display text-lg md:text-xl font-black tracking-widest text-luxury-dark">
                {brand.logoText}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-coral"></span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-luxury-gray/60 font-semibold">
                {brand.industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Toolkit Segment */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        
        {/* Layout details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Strategy Copy */}
          <div className="lg:col-span-4 space-y-5">
            <span className="font-mono text-xxs font-bold uppercase tracking-widest text-brand-coral">
              DESIGN TOOLKITS
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-luxury-dark">
              Software Architectures Grounded in Technical Rigor
            </h3>
            <p className="font-sans text-sm text-luxury-gray leading-relaxed">
              I don’t just sketch shapes. I master Figma, prototyping variables, design tokens, and kinetic engines to deliver design models that directly connect with React.js configurations.
            </p>

            {/* Category filter UI */}
            <div className="flex flex-wrap gap-2 pt-3">
              {(['all', 'design', 'prototyping', 'workflow'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full font-sans text-xxs uppercase font-bold tracking-wider transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-luxury-dark text-luxury-cream shadow-md' 
                      : 'bg-luxury-paper text-luxury-gray hover:text-luxury-dark border border-luxury-dark/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column Grid of Visual Skills Proficiencies */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTools.map((tool) => (
              <motion.div
                layout
                key={tool.name}
                className="p-5 rounded-2xl bg-white border border-luxury-dark/5 hover:border-brand-violet/25 hover:shadow-lg hover:shadow-brand-violet/[0.01] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brand-violet font-semibold">
                      {tool.category === 'design' && 'Design & Spatial System'}
                      {tool.category === 'prototyping' && 'Kinetic & Interaction Engine'}
                      {tool.category === 'workflow' && 'Workflow & Integration Tech'}
                    </span>
                    <h4 className="font-display text-base font-bold text-luxury-dark mt-1">
                      {tool.name}
                    </h4>
                  </div>
                  <span className="font-mono text-xxs text-luxury-gray bg-luxury-paper px-2 py-0.5 rounded-md font-semibold">
                    {tool.experienceYears} Years Exp
                  </span>
                </div>

                {/* Progress parameters */}
                <div className="space-y-1.5 mt-5">
                  <div className="flex justify-between items-center text-xxs font-bold text-luxury-gray">
                    <span>Advanced Competence Hierarchy</span>
                    <span className="font-mono text-luxury-dark">{tool.percentage}%</span>
                  </div>
                  <div className="w-full h-1 bg-luxury-paper rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tool.percentage}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-brand-violet to-brand-cobalt"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
