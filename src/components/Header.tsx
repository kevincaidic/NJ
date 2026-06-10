import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight, ArrowRightCircle } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'py-4 bg-luxury-cream/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.02)] border-b border-luxury-dark/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Title */}
          <a href="#" className="group flex items-center gap-3 text-luxury-dark select-none">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-luxury-dark text-luxury-cream transition-transform duration-500 group-hover:rotate-180">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.3em] font-extrabold opacity-40 leading-none mb-0.5">Interaction Architect</span>
              <span className="font-display text-2xl italic lowercase tracking-tight leading-none">
                Niel.Jhan
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-luxury-paper/50 rounded-full border border-luxury-dark/[0.04]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-semibold text-luxury-gray hover:text-luxury-dark transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-luxury-dark px-6 py-2.5 font-display text-xs font-semibold uppercase tracking-widest text-luxury-cream transition-transform duration-300 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Let's Design <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute top-0 left-0 -z-10 h-full w-full bg-brand-violet py-[200px] transition-transform duration-500 [transform:translateY(100%)] group-hover:[transform:translateY(0)]"></span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-luxury-dark hover:bg-luxury-paper rounded-full transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-screen bg-luxury-cream z-45 pt-28 px-8 flex flex-col justify-between pb-12 lg:hidden border-b border-luxury-dark/10"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xxs tracking-widest text-brand-violet uppercase">INDEX</span>
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-2xl font-bold uppercase tracking-wider text-luxury-dark hover:text-brand-violet transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 border-t border-luxury-dark/10 pt-8">
              <div>
                <p className="font-sans text-xs text-luxury-gray">Based remotely worldwide</p>
                <p className="font-mono text-xs text-luxury-dark font-medium mt-1">elena@vancedesign.studio</p>
              </div>
              
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full rounded-xl bg-luxury-dark p-4 font-display text-sm font-semibold uppercase tracking-wider text-luxury-cream"
              >
                <span>Initiate Product Audit</span>
                <ArrowRightCircle className="h-5 w-5 text-brand-violet" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
