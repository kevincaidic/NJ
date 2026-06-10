import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_TAGLINES } from '../data';
import { ArrowUpRight, CheckCircle, Flame, Layers, Sparkles, MessageSquareCode } from 'lucide-react';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [activeFidelity, setActiveFidelity] = useState<'wireframe' | 'ui' | 'interactive'>('ui');

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % HERO_TAGLINES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden bg-luxury-cream"
    >
      {/* Editorial Decorative Coordinates */}
      <div className="absolute top-36 left-12 hidden xl:block font-mono text-[10px] text-luxury-gray/30 leading-relaxed tracking-wider">
        CORE LOCATION: REMOTE / GLOBAL // COORD: 50.1109° N, 8.6821° E<br />
        SPECIALTY: HIGH-CONVERSION STARTUP PRODUCT INFRASTRUCTURE
      </div>
      <div className="absolute bottom-12 left-12 hidden xl:block font-mono text-[10px] text-luxury-gray/30 tracking-wider">
        AUR-DX // VERSION S3.442 // © 2026 NIEL JHAN B. TAPINIT
      </div>

      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-violet/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-coral/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column Text Storytelling */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-luxury-paper rounded-full border border-luxury-dark/5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xxs font-extrabold uppercase tracking-widest text-luxury-dark/80">
              AVAILABLE FOR SELECT Q3 CLIENT SPRINTS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.85] tracking-tighter text-luxury-dark font-normal select-none"
          >
            building the <br />
            <span className="italic pl-2 sm:pl-6 md:pl-12 text-[#C5A27D]">interfaces</span> <br />
            that define tech success.
          </motion.h1>

          {/* Tagline slider */}
          <div className="h-16 mt-6 md:mt-8 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="font-sans text-lg md:text-xl text-luxury-gray font-medium max-w-xl leading-relaxed"
              >
                {HERO_TAGLINES[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-8 md:mt-10"
          >
            <a
              id="cta-primary-discovery"
              href="#contact"
              className="group relative flex items-center gap-2.5 bg-luxury-dark text-luxury-cream font-display text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full shadow-[0_12px_40px_rgba(10,10,14,0.12)] hover:shadow-[0_12px_45px_rgba(99,102,241,0.25)] transition-all duration-300"
            >
              Secure Free Product Audit
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-brand-coral" />
            </a>
            
            <a
              id="cta-secondary-projects"
              href="#services"
              className="group flex items-center gap-2.5 bg-luxury-paper hover:bg-luxury-paper/80 border border-luxury-dark/10 text-luxury-dark font-display text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full transition-all duration-300"
            >
              Explore Capabilities
            </a>
          </motion.div>

          {/* Core outcomes stats overview beneath CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 border-t border-luxury-dark/5 mt-12 md:mt-16 pt-8 w-full"
          >
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-luxury-dark">+140%</p>
              <p className="font-sans text-xxs font-medium uppercase tracking-wider text-luxury-gray/80 mt-1">
                fintech signup rate
              </p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-luxury-dark">$1.2B+</p>
              <p className="font-sans text-xxs font-medium uppercase tracking-wider text-luxury-gray/80 mt-1">
                seed/series-a raised
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="font-display text-2xl md:text-3xl font-bold text-luxury-dark">4.9/5</p>
              <p className="font-sans text-xxs font-medium uppercase tracking-wider text-luxury-gray/80 mt-1">
                app store satisfaction
              </p>
            </div>
          </motion.div>

        </div>

        {/* Right Column Interactive Fidelity Explorer Widget */}
        <div className="col-span-1 lg:col-span-5 flex flex-col items-center justify-center relative mt-10 lg:mt-0">
          
          {/* Selector tab switches */}
          <div className="flex bg-luxury-paper border border-luxury-dark/5 p-1 rounded-full mb-6 z-20 shadow-sm relative">
            <button
              onClick={() => setActiveFidelity('wireframe')}
              className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider transition-all duration-300 ${
                activeFidelity === 'wireframe' 
                  ? 'bg-luxury-dark text-luxury-cream shadow-sm' 
                  : 'text-luxury-gray hover:text-luxury-dark'
              }`}
            >
              01. Wireframe
            </button>
            <button
              onClick={() => setActiveFidelity('ui')}
              className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider transition-all duration-300 ${
                activeFidelity === 'ui' 
                  ? 'bg-luxury-dark text-luxury-cream shadow-sm' 
                  : 'text-luxury-gray hover:text-luxury-dark'
              }`}
            >
              02. Visual UI
            </button>
            <button
              onClick={() => setActiveFidelity('interactive')}
              className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider transition-all duration-300 ${
                activeFidelity === 'interactive' 
                  ? 'bg-luxury-dark text-luxury-cream shadow-sm' 
                  : 'text-luxury-gray hover:text-luxury-dark'
              }`}
            >
              03. Kinetic
            </button>
          </div>

          {/* Interactive Wireframe Screen */}
          <div className="relative w-full aspect-[4/3.2] max-w-[480px] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(10,10,14,0.06)] border border-luxury-dark/10 bg-white p-5 flex flex-col justify-between transition-all duration-500">
            
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-luxury-dark/[0.04] pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]"></span>
              </div>
              <span className="font-mono text-[9px] text-luxury-gray/50 uppercase tracking-widest font-semibold">
                {activeFidelity === 'wireframe' && 'Blueprinting IA Layout'}
                {activeFidelity === 'ui' && 'Elena design token library'}
                {activeFidelity === 'interactive' && 'Physics Spring Timings'}
              </span>
              <div className="h-2 w-10 rounded-full bg-luxury-dark/[0.05]"></div>
            </div>

            {/* Content dynamically shifting depending on interactive toggle */}
            <div className="relative flex-1 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                
                {/* WIREFRAME STATE */}
                {activeFidelity === 'wireframe' && (
                  <motion.div
                    key="wireframe-f"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-4 h-16 border border-dashed border-luxury-dark/15 rounded-xl flex items-center justify-center p-2 bg-luxury-cream/10">
                        <Layers className="h-4 w-4 text-luxury-dark/30" />
                      </div>
                      <div className="col-span-8 flex flex-col gap-2">
                        <div className="h-4 w-1/3 bg-luxury-dark/[0.07] rounded"></div>
                        <div className="h-3 w-5/6 bg-luxury-dark/[0.04] rounded"></div>
                        <div className="h-3 w-2/3 bg-luxury-dark/[0.04] rounded"></div>
                      </div>
                    </div>

                    <div className="border border-dashed border-luxury-dark/15 rounded-2xl p-4 my-3 bg-luxury-cream/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="h-3 w-1/4 bg-luxury-dark/[0.08] rounded"></div>
                        <div className="h-3 w-8 bg-luxury-dark/[0.08] rounded"></div>
                      </div>
                      <div className="h-[2px] w-full bg-luxury-dark/[0.04] mb-3"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-6 bg-luxury-dark/[0.03] border border-dashed border-luxury-dark/15 rounded flex items-center justify-center font-mono text-[8px] text-luxury-gray/60">COL_A</div>
                        <div className="h-6 bg-luxury-dark/[0.03] border border-dashed border-luxury-dark/15 rounded flex items-center justify-center font-mono text-[8px] text-luxury-gray/60">COL_B</div>
                        <div className="h-6 bg-luxury-dark/[0.03] border border-dashed border-luxury-dark/15 rounded flex items-center justify-center font-mono text-[8px] text-luxury-gray/60">COL_C</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-dashed border-luxury-dark/15 pt-3">
                      <span className="font-mono text-[8px] text-luxury-gray/70">W_SYS_v2.0</span>
                      <div className="h-5 w-24 border border-dashed border-luxury-dark/15 rounded-lg bg-luxury-cream/10"></div>
                    </div>
                  </motion.div>
                )}

                {/* VISUAL UI GRAPHICS STATE */}
                {activeFidelity === 'ui' && (
                  <motion.div
                    key="ui-f"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div className="relative">
                        <div className="h-14 w-14 rounded-2xl overflow-hidden border border-brand-violet/20 shadow-md">
                          <img 
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200" 
                            alt="Aether Client Lead" 
                            className="h-full w-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="absolute -bottom-1 -right-1 h-5 w-5 bg-brand-violet rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                          ★
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col justify-center">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-brand-violet font-bold">AETHER PLATFORM REDESIGN</span>
                        <h4 className="font-display text-base font-bold text-luxury-dark mt-0.5">Asset Allocation Tool</h4>
                        <div className="flex gap-2 mt-1.5">
                          <span className="text-[10px] px-2 py-0.5 bg-brand-violet/10 text-brand-violet rounded font-semibold">VC System</span>
                          <span className="text-[10px] px-2 py-0.5 bg-brand-cobalt/10 text-brand-cobalt rounded font-semibold">Figma Tokens</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-luxury-paper to-white border border-luxury-dark/5 rounded-2xl my-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-sans text-[10px] text-luxury-gray">Portfolio Valuation</p>
                          <p className="font-display text-xl font-bold mt-0.5 text-luxury-dark">$412,400.00</p>
                        </div>
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-[9px] font-bold rounded-lg flex items-center gap-1">
                          <CheckCircle className="h-2.5 w-2.5" /> +24% YoY
                        </span>
                      </div>

                      {/* Small visual line chart outline */}
                      <div className="h-10 mt-3 flex items-end gap-1.5">
                        <div className="w-full h-1/4 bg-brand-violet/10 hover:bg-brand-violet/30 rounded transition-all"></div>
                        <div className="w-full h-2/5 bg-brand-violet/20 hover:bg-brand-violet/40 rounded transition-all"></div>
                        <div className="w-full h-3/5 bg-brand-violet/30 hover:bg-brand-violet/50 rounded transition-all"></div>
                        <div className="w-full h-2/3 bg-brand-violet/40 hover:bg-brand-violet/60 rounded transition-all"></div>
                        <div className="w-full h-4/5 bg-brand-violet/55 hover:bg-brand-violet/75 rounded transition-all"></div>
                        <div className="w-full h-full bg-brand-violet hover:bg-brand-violet rounded transition-all"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[10px] font-semibold text-luxury-dark/60">Interactive components (OK)</span>
                      <button className="px-3 py-1.5 bg-luxury-dark text-white rounded-lg text-[9px] font-bold flex items-center gap-1 shadow-sm">
                        View Mockup <ArrowUpRight className="h-2.5 w-2.5 text-orange-400" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* KINETIC/INTERACTION STATE */}
                {activeFidelity === 'interactive' && (
                  <motion.div
                    key="interactive-f"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-brand-coral font-bold flex items-center gap-1">
                          <Flame className="h-3 w-3 animate-pulse" /> WAVE HARMONICS TIMING
                        </span>
                        <span className="font-mono text-[8px] text-luxury-gray">SPRING STATIC [K: 120]</span>
                      </div>
                      <div className="h-20 border border-brand-coral/20 rounded-xl relative overflow-hidden bg-brand-coral/[0.02] flex items-center justify-center">
                        
                        {/* Animated wave path simulation */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 40">
                          <path 
                            d="M 0,20 Q 25,5 50,20 T 100,20 T 150,20 T 200,20" 
                            fill="none" 
                            stroke="#F97316" 
                            strokeWidth="1.5" 
                            strokeDasharray="4,4"
                            className="animate-dash"
                            style={{ strokeDashoffset: 40 }}
                          />
                        </svg>
                        
                        <div className="absolute right-3 top-2 flex flex-col items-end">
                          <span className="font-mono text-[9px] font-bold text-brand-coral">0.42s</span>
                          <span className="text-[7px] text-luxury-gray/70">DAMPENING RATE</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-[10px] font-bold text-luxury-dark">Aesthetic Transition Speed</span>
                        <span className="font-mono text-[9px] text-luxury-gray">320ms</span>
                      </div>
                      <div className="w-full bg-luxury-paper rounded-full h-1.5 overflow-hidden">
                        <div className="bg-brand-coral h-full w-[85%] rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-luxury-dark/[0.04] pt-3 mt-3">
                      <span className="font-mono text-[8px] text-luxury-gray">KINETIC ENGINE V2</span>
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-coral animate-ping"></span>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>

          {/* Sparkly Floating Micro widgets */}
          <div className="absolute top-12 left-[-20px] md:left-[-40px] pointer-events-none glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg border border-luxury-dark/5">
            <Sparkles className="h-4 w-4 text-brand-violet" />
            <div>
              <p className="font-mono text-[9px] font-bold uppercase text-brand-violet">AWARDS JURY</p>
              <p className="font-display text-xxs tracking-tighter text-luxury-dark">AWWWARDS JURY MEMBER</p>
            </div>
          </div>

          <div className="absolute bottom-1 right-[-10px] md:right-[-30px] pointer-events-none glass-panel-dark px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl border border-white/5">
            <MessageSquareCode className="h-4 w-4 text-brand-coral" />
            <div>
              <p className="font-mono text-[9px] text-brand-coral font-bold uppercase">100% SECURE</p>
              <p className="font-display text-xxs text-white tracking-widest uppercase">UX FIDELITY DESIGN</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
