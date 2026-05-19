import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, quoteRequestUrl, siteContact } from '../data/siteContent';

function isNavActive(pathname: string, target: string) {
  if (target === '/') {
    return pathname === '/';
  }

  return pathname === target || pathname.startsWith(`${target}/`);
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solidNavbar = useMemo(() => !isHomePage || isScrolled, [isHomePage, isScrolled]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        solidNavbar ? 'top-3 px-3 sm:top-4 sm:px-4' : 'top-0 py-4 sm:py-6'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 flex justify-between items-center ${
          solidNavbar
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[28px] sm:rounded-full px-4 sm:px-8 py-2.5 sm:py-3 border border-slate-200/50'
            : 'px-3 sm:px-4'
        }`}
      >
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 cursor-pointer min-w-0 pr-3">
          <img
            src={siteContact.logo}
            alt="VP's Cleaning Logo"
            className="h-9 sm:h-10 md:h-12 w-auto object-contain rounded-2xl shrink-0"
          />
          <span
            className={`text-base min-[380px]:text-lg md:text-2xl font-display font-bold tracking-tight leading-tight ${
              solidNavbar ? 'text-primary' : 'text-primary md:text-white md:drop-shadow-md'
            }`}
          >
            VP's <span className="text-secondary">Cleaning</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isNavActive(location.pathname, item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2 font-bold text-sm transition-all duration-300 group ${
                  solidNavbar
                    ? active
                      ? 'text-primary'
                      : 'text-slate-600 hover:text-primary'
                    : active
                      ? 'text-secondary drop-shadow-md'
                      : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-secondary transition-all duration-300 rounded-full ${
                    active ? 'w-4' : 'w-0 group-hover:w-4'
                  }`}
                />
              </Link>
            );
          })}
          <div className="ml-4 pl-4 border-l border-slate-200/50 h-8 flex items-center">
            <button
              onClick={() => window.open(quoteRequestUrl, '_blank', 'noopener,noreferrer')}
              className="bg-primary hover:bg-slate-800 text-white text-xs font-black uppercase tracking-widest px-7 py-3 rounded-full transition-all shadow-xl hover:shadow-primary/20 transform hover:-translate-y-0.5 active:scale-95"
            >
              Get Free Quote
            </button>
          </div>
        </div>

        <button
          className={`md:hidden p-2.5 rounded-2xl transition-all duration-300 shrink-0 ${
            solidNavbar
              ? 'bg-primary/5 text-primary hover:bg-primary/10'
              : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
          }`}
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-4 right-4 mt-4 md:hidden"
            >
              <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden p-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => {
                    const active = isNavActive(location.pathname, item.path);
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between p-4 rounded-2xl font-bold transition-all ${
                            active ? 'bg-primary/5 text-primary' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span>{item.label}</span>
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-secondary transition-transform duration-300 ${
                              active ? 'scale-100' : 'scale-0'
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-4">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.open(quoteRequestUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="w-full bg-primary text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-primary/20"
                    >
                      Get Free Quote
                    </button>
                    <div className="space-y-3 text-sm font-semibold text-slate-600">
                      <a href={siteContact.phoneHrefs[0]} className="block hover:text-primary transition-colors">
                        {siteContact.phones[0]}
                      </a>
                      <a href={siteContact.emailHref} className="block hover:text-primary transition-colors">
                        {siteContact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
