import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORK_PROCESS_STEPS } from '../data';
import { Compass, CheckCircle, ArrowRight, Clipboard, Calendar, Coffee, FileSpreadsheet, Award, Trophy } from 'lucide-react';

export default function Process() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const activeStep = WORK_PROCESS_STEPS[activeStepIdx];

  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-luxury-paper/30 relative border-t border-luxury-dark/[0.04] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-mono text-xxxs tracking-widest text-brand-violet uppercase font-extrabold px-3 py-1 bg-brand-violet/5 rounded-full">
            THE SYSTEMATIC LIFECYCLE
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-luxury-dark mt-4">
            How Elite Software Products are Formed.
          </h2>
          <p className="font-sans text-sm text-luxury-gray leading-relaxed mt-4">
            We don't trust sudden brainstorms. I deploy a rigorous, iterative interaction process that leaves zero space for architectural guesswork.
          </p>
        </div>

        {/* Visual Workflow Steps Interactive Train */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Flow List Toggles */}
          <div className="lg:col-span-5 space-y-3">
            {WORK_PROCESS_STEPS.map((pStep, idx) => {
              const isActive = activeStepIdx === idx;

              return (
                <button
                  key={pStep.step}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isActive 
                      ? 'bg-luxury-dark border-luxury-dark text-luxury-cream shadow-xl shadow-luxury-dark/10' 
                      : 'bg-white border-luxury-dark/[0.04] text-luxury-dark hover:border-luxury-dark/15 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Big Step Number */}
                    <span className={`font-mono text-sm font-extrabold pb-0.5 border-b-2 ${
                      isActive ? 'text-brand-coral border-brand-coral' : 'text-luxury-gray/40 border-transparent'
                    }`}>
                      {pStep.step}
                    </span>
                    <div>
                      <p className={`font-mono text-[9px] uppercase tracking-wider font-extrabold ${
                        isActive ? 'text-brand-violet' : 'text-luxury-gray/60'
                      }`}>
                        {pStep.phase}
                      </p>
                      <h4 className="font-display text-sm font-bold mt-0.5">
                        {pStep.title}
                      </h4>
                    </div>
                  </div>

                  <span className={`h-8 w-8 rounded-full flex items-center justify-center transition-all ${
                    isActive ? 'bg-white/10 text-brand-coral scale-110' : 'text-luxury-gray/30'
                  }`}>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Process Blueprint Detail Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIdx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-10 rounded-[32px] bg-white border border-luxury-dark/10 shadow-[0_20px_50px_rgba(10,10,14,0.03)] space-y-8"
              >
                {/* Meta details header of the process item */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-luxury-dark/5 pb-6">
                  <div>
                    <span className="font-mono text-xxs text-brand-violet uppercase font-extrabold tracking-widest">
                      CHRONOLOGICAL PHASE {activeStep.step} / 05
                    </span>
                    <p className="font-display text-[11px] font-black uppercase tracking-wider text-luxury-dark mt-1">
                      {activeStep.phase}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-luxury-paper border border-luxury-dark/5 px-3 py-1.5 rounded-xl text-xxs font-semibold text-luxury-dark">
                    <Calendar className="h-3.5 w-3.5 text-brand-coral" />
                    <span>TIMEFRAME: {activeStep.duration}</span>
                  </div>
                </div>

                {/* Scope Description */}
                <div className="space-y-4">
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-luxury-dark">
                    {activeStep.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-luxury-gray leading-relaxed">
                    {activeStep.description}
                  </p>
                </div>

                {/* Deliverables lists */}
                <div className="space-y-4 border-t border-luxury-dark/5 pt-6">
                  <h4 className="font-mono text-xxxs text-brand-coral uppercase font-bold tracking-widest">
                    CRITICAL ENGAGEMENT OUTPUTS:
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {activeStep.deliverables.map((deliv, dix) => (
                      <div
                        key={dix}
                        className="p-3.5 rounded-xl bg-luxury-cream/50 border border-luxury-dark/[0.04] hover:border-brand-violet/20 hover:bg-white transition-all duration-300 flex items-start gap-3"
                      >
                        <CheckCircle className="h-4 w-4 text-brand-violet mt-0.5 shrink-0" />
                        <span className="font-sans text-xxs font-semibold text-luxury-dark leading-snug">
                          {deliv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outro summary statement */}
                <div className="flex items-center gap-3 bg-brand-violet/5 p-4 rounded-xl text-xxs text-brand-violet font-semibold leading-relaxed">
                  <Compass className="h-4 w-4 text-brand-violet shrink-0" />
                  <span>Approving outputs from Stage {activeStep.step} is mandatory to unlock downstream design sprint sequences.</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Certificates & Achievements Section */}
        <div className="mt-32 border-t border-luxury-dark/[0.04] pt-16">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xxxs tracking-widest text-brand-coral uppercase font-extrabold px-3 py-1 bg-brand-coral/5 rounded-full">
              PROFESSIONAL CREDENTIALS & ACHIEVEMENTS
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-luxury-dark mt-4">
              Certified Excellence in Design.
            </h2>
            <p className="font-sans text-sm text-luxury-gray leading-relaxed mt-4">
              Industry-recognized certifications and achievements that validate my expertise in UX design, product strategy, and digital innovation.
            </p>
          </div>

          {/* Certificate Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Certificate 1: Exhibit */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-luxury-dark/5 hover:border-brand-violet/20 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/cert/exhibit.webp" 
                  alt="Design Exhibit Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-brand-violet">
                  <Trophy className="h-4 w-4" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Certificate</span>
                </div>
                <h3 className="font-display text-sm font-bold text-luxury-dark">Design Exhibition Participant</h3>
                <p className="font-sans text-xxs text-luxury-gray">Showcased innovative design work at professional exhibition</p>
              </div>
            </div>

            {/* Certificate 2: HealthCardGo */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-luxury-dark/5 hover:border-brand-violet/20 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/cert/healthcardgo cert.webp" 
                  alt="HealthCardGo Project Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-brand-violet">
                  <Trophy className="h-4 w-4" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Project Completion</span>
                </div>
                <h3 className="font-display text-sm font-bold text-luxury-dark">HealthCardGo Platform Design</h3>
                <p className="font-sans text-xxs text-luxury-gray">Successfully completed UX/UI design for healthcare platform</p>
              </div>
            </div>

            {/* Certificate 3: OJT */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-luxury-dark/5 hover:border-brand-violet/20 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/cert/OJT.jpg" 
                  alt="On-the-Job Training Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-brand-violet">
                  <Trophy className="h-4 w-4" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Training</span>
                </div>
                <h3 className="font-display text-sm font-bold text-luxury-dark">Professional Training Completion</h3>
                <p className="font-sans text-xxs text-luxury-gray">Completed intensive on-the-job training program in design</p>
              </div>
            </div>

            {/* Certificate 4: Pasinati Day 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-luxury-dark/5 hover:border-brand-violet/20 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/cert/pasinati day 1.webp" 
                  alt="Pasinati Workshop Day 1 Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-brand-coral">
                  <Award className="h-4 w-4" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Workshop</span>
                </div>
                <h3 className="font-display text-sm font-bold text-luxury-dark">Pasinati Design Workshop - Day 1</h3>
                <p className="font-sans text-xxs text-luxury-gray">Participated in intensive design thinking and innovation workshop</p>
              </div>
            </div>

            {/* Certificate 5: Pasinati Day 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-luxury-dark/5 hover:border-brand-violet/20 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/cert/pasinati day 3.webp" 
                  alt="Pasinati Workshop Day 3 Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-brand-coral">
                  <Award className="h-4 w-4" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Workshop</span>
                </div>
                <h3 className="font-display text-sm font-bold text-luxury-dark">Pasinati Design Workshop - Day 3</h3>
                <p className="font-sans text-xxs text-luxury-gray">Completed advanced design collaboration and prototyping session</p>
              </div>
            </div>

            {/* Certificate 6: Binhi */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-luxury-dark/5 hover:border-brand-violet/20 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/cert/binhi.jpg" 
                  alt="Binhi Professional Development Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-brand-coral">
                  <Award className="h-4 w-4" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Workshop</span>
                </div>
                <h3 className="font-display text-sm font-bold text-luxury-dark">Binhi Professional Development</h3>
                <p className="font-sans text-xxs text-luxury-gray">Completed specialized professional development program</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
