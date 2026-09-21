import React from 'react';
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HeartHandshake
} from 'lucide-react';
import { PageId } from '../../types';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/plumbingData';
import { PrimaryCTA } from '../common/PrimaryCTA';

interface FooterProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
  onOpenEstimateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenEstimateModal
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background ambient blue glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-footer High-Converting CTA frosted banner */}
        <div className="bg-gradient-to-r from-sky-900/90 via-slate-800/90 to-sky-950/90 border border-sky-500/30 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                South Florida Certified Plumbers
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
                Need a Trusted Miami Plumber Today?
              </h3>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Upfront flat pricing. Zero surprise overtime fees. Honest recommendations and clean, respectful technicians.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <PrimaryCTA
                variant="primary"
                size="lg"
                onClick={onOpenEstimateModal}
                showArrow
                className="w-full"
              >
                GET A FREE ESTIMATE
              </PrimaryCTA>
              <a
                href={COMPANY_INFO.rawPhone}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide transition-colors border border-white/20 text-center"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call (305) 555-FLOW</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight leading-none font-outfit">
                  MIAMI<span className="text-cyan-400">FLOW</span>
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Plumbing Services
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Miami Flow Plumbing provides premier residential and commercial plumbing services with honest communication, transparent flat rates, and respectful clean workmanship.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.license}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fully Insured &amp; Bonded ($2M Liability)</span>
              </div>
            </div>
          </div>

          {/* Major Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-outfit">
              Plumbing Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services', service.slug)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-cyan-400 hover:underline font-semibold text-xs pt-1 flex items-center gap-1"
                >
                  <span>View All 10 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Areas Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-outfit">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact &amp; Estimates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-outfit">
              Get In Touch
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={COMPANY_INFO.rawPhone}
                  className="text-white font-bold hover:text-cyan-400 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">24/7 Emergency Dispatch</p>
                  <p className="text-xs text-slate-400">Mon-Sat: 7:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Miami Service Area Badges */}
        <div className="py-6 border-b border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-2">Service Areas:</span>
          {COMPANY_INFO.areasServed.map((area) => (
            <span
              key={area}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Miami Flow Plumbing. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-slate-400 transition-colors underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <span className="text-slate-400 font-medium">
              Made for South Florida Homes &amp; Businesses
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
