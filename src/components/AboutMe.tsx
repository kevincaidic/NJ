import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CREDENTIALS } from '../data';
import { Award, Briefcase, Compass, FileText, Check, Trophy } from 'lucide-react';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'credentials' | 'background'>('philosophy');

  const profileTabs = [
    { id: 'philosophy', label: 'Design Philosophy' },
    { id: 'credentials', label: 'Certificates & Jury' },
    { id: 'background', label: 'Professional Path' },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-luxury-cream relative scroll-mt-20 overflow-hidden"
    >
      {/* Background vectors for depth */}
      <div className="absolute top-[10%] left-[5%] text-luxury-dark/[0.02] font-display text-[15vw] font-black pointer-events-none select-none">
        AESTHETICS
      </div>
      <div className="absolute bottom-[10%] right-[5%] text-luxury-dark/[0.02] font-display text-[15vw] font-black pointer-events-none select-none">
        UTILITY
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid containing editorial columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Profile Showcase with Visual Vector Element */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-8">
            
            <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-luxury-paper group shadow-[0_20px_50px_rgba(10,10,14,0.04)]">
              {/* Outer stroke effect */}
              <div className="absolute inset-4 rounded-[24px] border border-luxury-dark/5 z-20 pointer-events-none"></div>
              
              {/* Image with dark gradient overlays */}
              <img
                src="/profile/profile.jpg"
                alt="Niel Jhan B. Tapinit Lead Product Designer Profile"
                className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/10 to-transparent z-10"></div>
              
              {/* Visual Caption */}
              <div className="absolute bottom-6 left-8 right-8 z-20">
                <span className="font-mono text-xxs font-bold text-brand-coral uppercase tracking-widest">
                  PORTFOLIO CREATIVE DIRECTOR
                </span>
                <p className="font-display text-xl font-bold text-white mt-1">
                  Niel Jhan B. Tapinit
                </p>
                <p className="font-sans text-xs text-luxury-cream/80 mt-0.5">
                  Senior Interaction Designer
                </p>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-luxury-dark/5 rounded-2xl">
                <span className="font-mono text-[9px] text-brand-violet uppercase font-semibold">BASED</span>
                <p className="font-display text-sm font-bold text-luxury-dark mt-1">Panabo City</p>
              </div>
              <div className="p-4 bg-white border border-luxury-dark/5 rounded-2xl">
                <span className="font-mono text-[9px] text-brand-violet uppercase font-semibold">PARTNERS</span>
                <p className="font-display text-sm font-bold text-luxury-dark mt-1">Global Startups & VCs</p>
              </div>
            </div>

          </div>

          {/* Right Column Core Text and Tab Selector */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <span className="font-mono text-xxxs tracking-widest text-brand-violet uppercase font-extrabold px-3 py-1 bg-brand-violet/5 rounded-full mb-6">
              THE DESIGNER BEHIND THE METRICS
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-luxury-dark leading-tight">
              Bridging the Gap Between Artistic Precision and Business Economics.
            </h2>

            {/* Tab Controller Buttons */}
            <div className="flex border-b border-luxury-dark/5 w-full mt-10 mb-8 overflow-x-auto gap-2 md:gap-4 whitespace-nowrap scrollbar-none">
              {profileTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-4 px-1.5 font-display text-xs uppercase tracking-widest font-extrabold transition-all duration-300 relative ${
                    activeTab === tab.id
                      ? 'text-luxury-dark'
                      : 'text-luxury-gray/40 hover:text-luxury-dark'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-violet"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Container for Tab Content */}
            <div className="min-h-[280px] w-full">
              <AnimatePresence mode="wait">
                
                {/* DESIGN PHILOSOPHY TAB */}
                {activeTab === 'philosophy' && (
                  <motion.div
                    key="philosophy-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                      I operate on a fundamental principle: <span className="font-semibold text-luxury-dark">"Users do not look at layouts; they look through them to complete an action."</span> Every visual element on screen must solve a cognitive goal. Design without behavioral science is simply digital makeup.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      
                      {/* Sub card 1 */}
                      <div className="p-5 rounded-2xl bg-white border border-luxury-dark/5">
                        <div className="flex items-center gap-2.5 text-brand-violet mb-3">
                          <Check className="h-4 w-4 bg-brand-violet/10 p-0.5 rounded-full" />
                          <h4 className="font-display text-sm font-bold text-luxury-dark">High Contrast Aesthetics</h4>
                        </div>
                        <p className="font-sans text-xs text-luxury-gray leading-relaxed">
                          Clean dark text on paper-cream colors creates visual elegance that eliminates eye fatigue and commands premium user attention.
                        </p>
                      </div>

                      {/* Sub card 2 */}
                      <div className="p-5 rounded-2xl bg-white border border-luxury-dark/5">
                        <div className="flex items-center gap-2.5 text-brand-coral mb-3">
                          <Check className="h-4 w-4 bg-brand-coral/10 p-0.5 rounded-full" />
                          <h4 className="font-display text-sm font-bold text-luxury-dark">Conversion-Led Funnels</h4>
                        </div>
                        <p className="font-sans text-xs text-luxury-gray leading-relaxed">
                          Every step, hover, and button state is engineered to guide user intentions seamlessly, helping teams achieve ambitious KPI growth.
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* CERTIFICATES & JURY TAB */}
                {activeTab === 'credentials' && (
                  <motion.div
                    key="credentials-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {CREDENTIALS.map((cred) => (
                      <div
                        key={cred.id}
                        className="flex flex-col space-y-3"
                      >
                        {/* Certificate Image */}
                        {cred.image && (
                          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-luxury-dark/10 bg-luxury-paper shadow-md hover:shadow-lg transition-shadow">
                            <img
                              src={cred.image}
                              alt={cred.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        {/* Certificate Info Card */}
                        <div
                          className={`p-4 rounded-xl border ${cred.badgeColor} flex flex-col justify-between`}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-2 font-mono text-[9px] font-bold tracking-widest uppercase opacity-80">
                              <Trophy className="h-3 w-3" /> Certificate
                            </div>
                            <h4 className="font-display text-sm font-bold leading-snug">
                              {cred.title}
                            </h4>
                          </div>
                          <div className="flex items-center justify-between border-t border-current/10 pt-2 mt-3 text-[9px] font-semibold">
                            <span>{cred.issuer}</span>
                            <span className="font-mono">{cred.year}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* RETROSPECTIVE BUSINESS BACKGROUND */}
                {activeTab === 'background' && (
                  <motion.div
                    key="background-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                      With over eight years of digital product experience, I have partnered with startup founders across Silicon Valley, clinical biomedical teams in Germany, and institutional asset funds in London.
                    </p>

                    <div className="relative border-l border-luxury-dark/10 pl-6 ml-2 space-y-6 py-2">
                      <div className="relative">
                        {/* Dot marker */}
                        <span className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-brand-violet ring-4 ring-white"></span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-luxury-gray font-semibold">2024 - PRESENT</span>
                        <h4 className="font-display text-xs font-bold text-luxury-dark mt-0.5">Freelance Senior UX Consultant</h4>
                        <p className="font-sans text-xxs text-luxury-gray">Helping funded Series-A startups optimize and design scalable SaaS products.</p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-brand-coral ring-4 ring-white"></span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-luxury-gray font-semibold">2021 - 2024</span>
                        <h4 className="font-display text-xs font-bold text-luxury-dark mt-0.5">Lead Designer // Helix Biomedical Systems</h4>
                        <p className="font-sans text-xxs text-luxury-gray">Restructured clinical lab UI dashboards, scaling design quality to 42 bio-analytics screens.</p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-luxury-dark ring-4 ring-white"></span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-luxury-gray font-semibold">2018 - 2021</span>
                        <h4 className="font-display text-xs font-bold text-luxury-dark mt-0.5">UI/UX Designer // Aether Capital Group</h4>
                        <p className="font-sans text-xxs text-luxury-gray">Crafted VC client portfolios and user signup portals to simplify complex financial operations.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
