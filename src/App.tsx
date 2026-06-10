import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Sparkles, ArrowUp, AlertTriangle } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    // Check if pointer is fine (desktop with mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setHasPointer(mediaQuery.matches);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Detect clickable hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (mediaQuery.matches) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="app-root" className="relative min-h-screen bg-luxury-cream text-luxury-dark selection:bg-luxury-dark selection:text-luxury-cream">
      
      {/* Premium Custom Cursor Follower for Desktop */}
      {hasPointer && (
        <motion.div
          id="custom-cursor-follower"
          className="fixed top-0 left-0 h-6 w-6 rounded-full border border-brand-violet pointer-events-none z-100 hidden md:block"
          animate={{
            x: mousePos.x - 12,
            y: mousePos.y - 12,
            scale: isHovered ? 1.8 : 1,
            backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.08)' : 'rgba(0, 0, 0, 0)',
            borderColor: isHovered ? '#6366F1' : '#E5E2D9',
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
        />
      )}

      {/* Floating Sparkles decorative overlay background elements */}
      <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] left-[5%] text-[10vw] font-black text-luxury-dark/[0.01]">FIGMA</div>
        <div className="absolute top-[45%] right-[5%] text-[10vw] font-black text-luxury-dark/[0.01]">TOKEN.BUILD</div>
        <div className="absolute top-[75%] left-[8%] text-[10vw] font-black text-luxury-dark/[0.01]">SYSTEMS</div>
      </div>

      {/* Primary Sticky Header */}
      <Header />

      {/* Continuous Layout Segment Tracks */}
      <main id="app-main-content">
        <Hero />
        <TrustedBy />
        <AboutMe />
        <Services />
        <FeaturedProjects />
         <Process />
         <Testimonials />
         <Contact />
      </main>

      {/* Refined Modular Footer */}
      <footer id="app-footer" className="bg-luxury-dark text-luxury-cream overflow-hidden border-t border-white/5 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-16">
            
            {/* Column 1 Logo details */}
            <div className="md:col-span-5 space-y-5">
              <a href="#" className="flex items-center gap-2.5 font-display text-base font-bold uppercase tracking-widest text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-luxury-dark">
                  <Sparkles className="h-4 w-4 text-brand-coral" />
                </span>
                <span>NIEL JHAN B. TAPINIT</span>
              </a>
              <p className="font-sans text-xs text-luxury-cream/60 leading-relaxed max-w-sm">
                A leading freelance Senior UI/UX Designer & Product Strategy advisor. Shaping high-converting, tokenized engineering design repositories for seed and Series-A software companies worldwide.
              </p>
            </div>

            {/* Column 2 Quick links */}
            <div className="md:col-span-3 space-y-4">
              <p className="font-mono text-xxs font-bold text-brand-coral uppercase tracking-widest">
                CORE INDEX MAPS
              </p>
              <ul className="grid grid-cols-2 gap-3 font-sans text-xxs font-semibold text-luxury-cream/75">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Workflow</a></li>
              </ul>
            </div>

            {/* Column 3 Timezone indicators */}
            <div className="md:col-span-4 space-y-4">
              <p className="font-mono text-xxs font-bold text-brand-coral uppercase tracking-widest">
                GLOBAL COMMERCE OPERATIONS
              </p>
              <div>
                <p className="font-sans text-[11px] text-white">Main Remote Studio: Frankfurt, Germany</p>
                <p className="font-sans text-xxs text-luxury-cream/50 mt-1">Available for collaborative design sprints globally under automated billing agreements.</p>
              </div>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 font-mono text-[10px] text-luxury-cream/40">
            <div>
              © 2026 NIEL JHAN B. TAPINIT // ALL DESIGN PROTOCOLS PERSISTED.
            </div>
            
            <div className="flex items-center gap-4">
              <span className="hover:text-white cursor-pointer select-none">TERMS CONTRACTS</span>
              <span className="h-1 w-1 bg-white/20 rounded-full"></span>
              <span className="hover:text-white cursor-pointer select-none font-bold">STATED RATE CARD</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Sticky scroll back to top indicator */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-luxury-dark hover:bg-brand-violet text-white shadow-xl hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)] transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-4.5 w-4.5 text-brand-coral" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
