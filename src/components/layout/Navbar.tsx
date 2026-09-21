import React, { useState, useEffect } from 'react';
import {
  Phone,
  Menu,
  X,
  Droplets,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/plumbingData';
import { PrimaryCTA } from '../common/PrimaryCTA';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, sectionId?: string) => void;
  onOpenEstimateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEstimateModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId, sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  const navLinks: { id: PageId; label: string; sectionId?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'home', label: 'Contact', sectionId: 'contact' }
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              Live Emergency Dispatch
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">
              Serving Miami-Dade County • Avg. Arrival &lt; 45 Mins
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">24/7 Immediate Help</span>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md shadow-slate-900/5 py-3 border-b border-slate-200/80'
            : 'bg-white/75 backdrop-blur-sm py-4 border-b border-white/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo Wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 p-0.5 shadow-md shadow-sky-500/20 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-sky-600 to-cyan-500 rounded-[10px] flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none font-outfit">
                    MIAMI<span className="text-sky-600">FLOW</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-200">
                    PLUMBING
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                  Licensed & Insured #CFC1430922
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  currentPage === link.id && !link.sectionId;
                return (
                  <button
                    key={`${link.id}-${link.label}`}
                    onClick={() => handleNavClick(link.id, link.sectionId)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'text-sky-600 bg-sky-50 font-bold'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100/70'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={COMPANY_INFO.rawPhone}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/80 transition-colors border border-slate-200/80"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Call (305) 555-FLOW</span>
              </a>

              <PrimaryCTA
                size="sm"
                variant="primary"
                onClick={onOpenEstimateModal}
                showArrow
              >
                GET A FREE ESTIMATE
              </PrimaryCTA>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenEstimateModal}
                className="text-xs font-bold px-3 py-2 rounded-lg bg-sky-600 text-white shadow-sm"
              >
                Estimate
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 bg-white/80 border border-slate-200/80 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide / Fade Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl py-6 px-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={`mobile-${link.id}-${link.label}`}
                  onClick={() => handleNavClick(link.id, link.sectionId)}
                  className="w-full text-left py-3 px-4 rounded-xl text-base font-bold text-slate-800 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={COMPANY_INFO.rawPhone}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call (305) 555-FLOW</span>
                </a>

                <PrimaryCTA
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimateModal();
                  }}
                  showArrow
                  className="w-full"
                >
                  GET A FREE ESTIMATE
                </PrimaryCTA>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
