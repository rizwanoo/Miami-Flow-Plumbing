import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Sparkles,
  Award,
  Zap,
  Droplets,
  Star,
  Clock,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { PrimaryCTA } from '../common/PrimaryCTA';
import { TubesBackground } from '../common/TubesBackground';
import { COMPANY_INFO } from '../../data/plumbingData';
import { PageId } from '../../types';

interface HeroSectionProps {
  onOpenEstimateModal: () => void;
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEstimateModal,
  onNavigate
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 3D Interactive Neon Fluid Tubes Background */}
      <TubesBackground intensity={0.9} interactive={true} showControls={true}>
        <section className="relative pt-8 pb-16 sm:pb-24 lg:pt-14 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Content Column */}
              <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
                
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-sky-200 shadow-sm text-xs font-bold text-sky-900 mb-6 transition-transform hover:scale-105">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>Serving Miami, Florida &amp; Surrounding Areas</span>
                </div>

                {/* Hero Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-outfit">
                  Reliable Plumbing.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500">
                    Right When You Need It.
                  </span>
                </h1>

                {/* Supporting Message */}
                <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed mb-8 max-w-2xl bg-white/40 backdrop-blur-xs rounded-xl p-1">
                  When plumbing problems disrupt your home, our experienced team is ready to restore comfort, safety, and peace of mind with upfront flat rates and clean, respectful craftsmanship.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                  <PrimaryCTA
                    variant="primary"
                    size="lg"
                    onClick={onOpenEstimateModal}
                    showArrow
                    className="w-full sm:w-auto shadow-sky-500/25 shadow-lg"
                  >
                    GET A FREE ESTIMATE
                  </PrimaryCTA>

                  <PrimaryCTA
                    variant="outline"
                    size="lg"
                    onClick={() => onNavigate('services')}
                    className="w-full sm:w-auto bg-white/90 backdrop-blur-sm hover:bg-white"
                  >
                    VIEW OUR SERVICES
                  </PrimaryCTA>
                </div>

                {/* Live Master Plumber Dispatch Row */}
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/90 w-full bg-white/60 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80"
                        alt="Master Plumber David Garcia"
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80"
                        alt="Plumber Technician Robert"
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                        alt="Plumber Specialist Carlos"
                      />
                    </div>
                    <div className="text-xs">
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="font-bold text-slate-800">5.0 Star Rating</span>
                      <span className="text-slate-500 ml-1">in Miami-Dade</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/80 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>On-Call Units Available Now</span>
                  </div>
                </div>

              </div>

              {/* Right Hero Visual Column with Real Plumbing Work & Floating Glass Cards */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Main Authentic Plumbing Image Frame */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80"
                      alt="Professional licensed plumber performing precision copper pipe and valve repair in a residential home"
                      className="w-full h-[440px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                    
                    {/* Subtle soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Overlay Label */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-900 font-outfit">
                          <ShieldCheck className="w-4 h-4 text-sky-600" />
                          FL Certified Plumbing Contractor
                        </div>
                        <p className="text-[11px] text-slate-600">Clean uniforms, shoe covers &amp; floor protection</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Floating Glass Card 1: Fast Response */}
                  <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md border border-white/80 rounded-2xl p-3.5 shadow-xl shadow-sky-950/10 flex items-center gap-3 animate-in fade-in slide-in-from-left duration-700">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20 shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 font-outfit">Fast Response</div>
                      <div className="text-[11px] font-medium text-slate-600">&lt; 45 Min Miami Arrival</div>
                    </div>
                  </div>

                  {/* Floating Glass Card 2: Upfront Communication */}
                  <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md border border-white/80 rounded-2xl p-4 shadow-xl shadow-sky-950/10 flex items-center gap-3 animate-in fade-in slide-in-from-right duration-700">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 font-outfit">Upfront Communication</div>
                      <div className="text-[11px] font-medium text-slate-600">No Hidden Costs Guaranteed</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </TubesBackground>
    </div>
  );
};

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
