import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ArrowRight, Sparkles, Send, Calendar, Star, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });

  const [projectTypes, setProjectTypes] = useState<string[]>(['SaaS WebApp']);
  const [budgetTier, setBudgetTier] = useState<string>('$5k - $10k');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const availableProjectTypes = [
    'SaaS WebApp',
    'Mobile UX App',
    'Design Tokens/Systems',
    'High-Converting Funnel',
    'Biotech/Enterprise AI',
  ];

  const budgetTiers = [
    '<$5k Sprint',
    '$5k - $10k',
    '$10k - $20k',
    '$20k+ Enterprise',
  ];

  const handleTypeToggle = (pType: string) => {
    setProjectTypes((prev) =>
      prev.includes(pType)
        ? prev.filter((t) => t !== pType)
        : [...prev, pType]
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter both your name and email address so I can reply.');
      return;
    }
    setErrorMsg(null);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-luxury-paper relative scroll-mt-20 overflow-hidden"
    >
      {/* Decorative vectors top-right & bottom-left */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-violet/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main layout splitted column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Information pitches */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="font-mono text-xxs font-extrabold text-brand-violet uppercase tracking-widest px-3 py-1 bg-brand-violet/5 rounded-full inline-block">
                INITIATE THE PRODUCT DIAGNOSIS
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-luxury-dark mt-6 leading-none">
                Let's Form <br />
                Your Vision.
              </h2>
              <p className="font-sans text-xs md:text-sm text-luxury-gray leading-relaxed mt-4">
                Thank you for reviewing my core capabilities. I partner with founders around the globe. Complete the adjacent brief generator to secure your select Q3 sprint slots today.
              </p>
            </div>

            {/* Quick check achievements */}
            <div className="space-y-3.5 border-t border-luxury-dark/5 pt-8">
              <div className="flex items-center gap-3 text-xxs font-medium text-luxury-dark">
                <CheckCircle className="h-4.5 w-4.5 text-brand-violet shrink-0" />
                <span>100% Direct engagement with Elena (No outsourced junior designers)</span>
              </div>
              <div className="flex items-center gap-3 text-xxs font-medium text-luxury-dark">
                <CheckCircle className="h-4.5 w-4.5 text-brand-violet shrink-0" />
                <span>Meticulous Figma component librarygoverned by token schemes</span>
              </div>
              <div className="flex items-center gap-3 text-xxs font-medium text-luxury-dark">
                <CheckCircle className="h-4.5 w-4.5 text-brand-violet shrink-0" />
                <span>Daily review and walk-through support on Slack channels</span>
              </div>
            </div>

            {/* Email + Location timezone detail */}
            <div className="p-6 rounded-2xl bg-white border border-luxury-dark/5 space-y-4 shadow-sm">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-luxury-gray">DIRECT INBOX CONNECTION</p>
                <p className="font-display text-sm font-bold text-luxury-dark mt-0.5">elena@vancedesign.studio</p>
              </div>
              <div className="flex items-center justify-between text-xxs text-luxury-gray font-semibold border-t border-luxury-dark/5 pt-3">
                <span>TIMEZONE: FRANKFURT CET</span>
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span> ONLINE / GLOBAL
                </span>
              </div>
            </div>

            {/* Simple Social Handles */}
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" className="p-3 bg-white hover:bg-luxury-paper rounded-full text-luxury-dark hover:text-brand-violet border border-luxury-dark/5 shadow-sm transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com" target="_blank" className="p-3 bg-white hover:bg-luxury-paper rounded-full text-luxury-dark hover:text-brand-violet border border-luxury-dark/5 shadow-sm transition-all">
                <Github className="h-4 w-4" />
              </a>
              <span className="font-sans text-xxs text-luxury-gray/70">Connect on social channels</span>
            </div>

          </div>

          {/* Right Column Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-[32px] bg-white border border-luxury-dark/10 shadow-[0_25px_60px_rgba(10,10,14,0.03)] relative">
              
              <AnimatePresence mode="wait">
                
                {/* SUCCESS SCREEN */}
                {isSubmitted ? (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                      <CheckCircle className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-luxury-dark">
                        Inquiry Securely Configured!
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-luxury-gray max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold text-luxury-dark">{formData.name}</span>. I have received your product brief detailing: <span className="font-semibold text-brand-violet">{projectTypes.join(', ')}</span> within a budget bracket of <span className="font-semibold text-brand-coral">{budgetTier}</span>.
                      </p>
                    </div>

                    <div className="p-4 bg-brand-violet/5 border border-brand-violet/15 inline-block rounded-xl text-xxs text-brand-violet font-semibold">
                      I will respond with a custom Loom video assessment of your proposal within 12-hours.
                    </div>

                    <div>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', company: '', details: '' });
                          setProjectTypes(['SaaS WebApp']);
                        }}
                        className="px-6 py-2.5 bg-luxury-dark text-luxury-cream hover:bg-brand-violet rounded-full font-display text-xs font-bold uppercase tracking-widest transition-all"
                      >
                        Reset Brief configurator
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  
                  /* BRIEF SELECTOR FORM SCREEN */
                  <motion.form
                    key="active-form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    
                    {/* Project Types Selection */}
                    <div className="space-y-4">
                      <label className="font-mono text-xxxs text-brand-coral uppercase font-bold tracking-widest block">
                        STEP 01: SELECT TARGET PROJECT CHANNELS (MULTISELECT_BADGES)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {availableProjectTypes.map((pType) => {
                          const isSelected = projectTypes.includes(pType);
                          return (
                            <button
                              type="button"
                              key={pType}
                              onClick={() => handleTypeToggle(pType)}
                              className={`px-4 py-2.5 rounded-xl font-sans text-xxs font-bold transition-all border ${
                                isSelected
                                  ? 'bg-luxury-dark border-luxury-dark text-luxury-cream shadow-sm'
                                  : 'bg-luxury-paper border-luxury-dark/5 text-luxury-gray hover:text-luxury-dark'
                              }`}
                            >
                              {pType}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budgets Tier Selection */}
                    <div className="space-y-4">
                      <label className="font-mono text-xxxs text-brand-coral uppercase font-bold tracking-widest block">
                        STEP 02: SELECT FUNDING BUDGET BRACKET FOR MVP CORES
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetTiers.map((bTier) => {
                          const isSelected = budgetTier === bTier;
                          return (
                            <button
                              type="button"
                              key={bTier}
                              onClick={() => setBudgetTier(bTier)}
                              className={`py-2 text-center rounded-xl font-mono text-[10px] font-bold transition-all border ${
                                isSelected
                                  ? 'bg-brand-violet border-brand-violet text-white shadow-sm font-black'
                                  : 'bg-luxury-paper border-luxury-dark/5 text-luxury-gray hover:text-luxury-dark'
                              }`}
                            >
                              {bTier}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Standard Inputs */}
                    <div className="space-y-5 border-t border-luxury-dark/5 pt-8">
                      <label className="font-mono text-xxxs text-brand-coral uppercase font-bold tracking-widest block leading-none">
                        STEP 03: DEFINE PERSONAL DESIGN CRITERIA & ADDRESSES
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5 animate-fade-in">
                          <label htmlFor="name-input" className="font-sans text-[10px] font-bold text-luxury-gray uppercase">Your Name *</label>
                          <input
                            id="name-input"
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-luxury-dark/10 rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none font-sans text-xs"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="email-input" className="font-sans text-[10px] font-bold text-luxury-gray uppercase">Work Email *</label>
                          <input
                            id="email-input"
                            type="email"
                            name="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-luxury-dark/10 rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none font-sans text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="company-input" className="font-sans text-[10px] font-bold text-luxury-gray uppercase">Company Platform Name</label>
                          <input
                            id="company-input"
                            type="text"
                            name="company"
                            placeholder="Aether Finance Corp"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-luxury-dark/10 rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none font-sans text-xs"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="details-input" className="font-sans text-[10px] font-bold text-luxury-gray uppercase">Tell me about your product bottlenecks</label>
                          <textarea
                            id="details-input"
                            rows={3}
                            name="details"
                            placeholder="We currently observe a high customer dropout rate at step 3 of our credit transaction portal..."
                            value={formData.details}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-luxury-dark/10 rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none font-sans text-xs resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Errors messages */}
                    {errorMsg && (
                      <div className="p-3 bg-red-100 text-red-800 text-xxs font-semibold rounded-lg text-center">
                        {errorMsg}
                      </div>
                    )}

                    {/* Submit Trigger details */}
                    <div className="pt-4 border-t border-luxury-dark/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <span className="font-mono text-[9px] text-luxury-gray/40">
                        * REQ: NAME AND EMAIL PROTOCOL TO SUBMIT PROPOSAL
                      </span>

                      <button
                        id="submit-contact-brief"
                        type="submit"
                        className="group w-full sm:w-auto relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-luxury-dark text-luxury-cream text-xs font-bold font-display uppercase tracking-widest hover:bg-brand-violet hover:shadow-[0_8px_25px_rgba(99,102,241,0.25)] transition-all cursor-pointer"
                      >
                        Transmit Project Brief <Send className="h-3.5 w-3.5 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                  </motion.form>
                )}

              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
