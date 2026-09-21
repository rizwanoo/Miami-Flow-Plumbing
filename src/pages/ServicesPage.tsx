import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  Search,
  RotateCcw,
  Flame,
  Zap,
  Activity,
  Wrench,
  Droplet,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Phone,
  Clock,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { PrimaryCTA } from '../components/common/PrimaryCTA';
import { SERVICES_DATA, COMPANY_INFO } from '../data/plumbingData';
import { ServiceItem, PageId } from '../types';

const serviceIcons: Record<string, React.ReactNode> = {
  AlertTriangle: <AlertTriangle className="w-5 h-5 text-rose-500" />,
  Search: <Search className="w-5 h-5 text-sky-600" />,
  RotateCcw: <RotateCcw className="w-5 h-5 text-cyan-600" />,
  Flame: <Flame className="w-5 h-5 text-amber-500" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Activity: <Activity className="w-5 h-5 text-emerald-600" />,
  Wrench: <Wrench className="w-5 h-5 text-sky-600" />,
  Droplet: <Droplet className="w-5 h-5 text-cyan-600" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-teal-600" />,
  Building2: <Building2 className="w-5 h-5 text-indigo-600" />
};

interface ServicesPageProps {
  onOpenEstimateModal: (serviceId?: string) => void;
  targetSection?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenEstimateModal,
  targetSection
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [targetSection]);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'emergency', label: 'Emergency Services' },
    { id: 'residential', label: 'Residential Plumbing' },
    { id: 'maintenance', label: 'Drains & Line Maint.' },
    { id: 'commercial', label: 'Commercial & Restaurant' }
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const scrollToService = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-slate-50">
      
      {/* Services Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 bg-gradient-to-b from-sky-50/70 via-slate-50 to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 shadow-sm text-xs font-bold text-sky-900 mb-6">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Full-Scope Plumbing &amp; Repiping Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-outfit">
              Master Plumbing Services for Miami Properties
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
              From emergency flood response to whole-home PEX reroutes and commercial code recertification, explore our complete lineup of professional plumbing solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
              {SERVICES_DATA.map((service) => (
                <button
                  key={service.slug}
                  onClick={() => scrollToService(service.slug)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/80 hover:bg-sky-50 text-slate-700 hover:text-sky-600 border border-slate-200 shadow-xs transition-colors cursor-pointer"
                >
                  {service.title}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 10 Detailed Service Sections */}
          <div className="space-y-16 sm:space-y-24">
            {filteredServices.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="scroll-mt-28 pt-4"
                >
                  <div className="bg-slate-50/70 rounded-3xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                        isEven ? 'lg:grid-flow-dense' : ''
                      }`}
                    >
                      
                      {/* Image Column */}
                      <div
                        className={`lg:col-span-5 ${
                          isEven ? 'lg:col-start-8' : ''
                        }`}
                      >
                        <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 group">
                          <img
                            src={service.imageUrl}
                            alt={service.title}
                            className="w-full h-72 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                          {/* Floating Price Range & Response Pill */}
                          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md flex items-center justify-between text-xs font-bold text-slate-900">
                            <div>
                              <span className="text-[10px] text-slate-500 uppercase block">Typical Pricing:</span>
                              <span className="text-sky-700 font-extrabold">{service.priceRange}</span>
                            </div>
                            <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-[11px]">
                              {service.responseTiming}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Column */}
                      <div
                        className={`lg:col-span-7 ${
                          isEven ? 'lg:col-start-1' : ''
                        }`}
                      >
                        {/* Header & Icon */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-2xl bg-white border border-sky-100 shadow-sm flex items-center justify-center shrink-0">
                            {serviceIcons[service.iconName] || <Wrench className="w-6 h-6 text-sky-600" />}
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                              {service.category} Solution
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit tracking-tight">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        {/* Full Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                          {service.fullDesc}
                        </p>

                        {/* Benefits & Common Situations Columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-4 border-t border-slate-200">
                          
                          {/* Benefits */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-emerald-600" />
                              <span>Key Benefits</span>
                            </h4>
                            <ul className="space-y-2">
                              {service.benefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Common Situations */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                              <AlertTriangle className="w-4 h-4 text-amber-500" />
                              <span>When to Call</span>
                            </h4>
                            <ul className="space-y-2">
                              {service.commonSituations.map((s, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                                  <span>{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                        {/* CTA Actions */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                          <PrimaryCTA
                            variant="primary"
                            size="md"
                            onClick={() => onOpenEstimateModal(service.id)}
                            showArrow
                          >
                            BOOK {service.title.toUpperCase()}
                          </PrimaryCTA>

                          <a
                            href={COMPANY_INFO.rawPhone}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-colors text-center"
                          >
                            <Phone className="w-4 h-4 text-emerald-600" />
                            <span>Ask a Master Plumber</span>
                          </a>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Mandatory Requested Final CTA: "NOT SURE WHAT YOU NEED?" */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
        {/* Subtle Ambient Light */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md text-cyan-400 flex items-center justify-center mx-auto mb-6 border border-white/20">
            <HelpCircle className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit tracking-tight mb-4">
            NOT SURE WHAT YOU NEED?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Tell us what’s happening and our team can help you determine the right next step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTA
              variant="primary"
              size="lg"
              onClick={() => onOpenEstimateModal()}
              showArrow
            >
              REQUEST A FREE ESTIMATE
            </PrimaryCTA>

            <a
              href={COMPANY_INFO.rawPhone}
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide transition-colors border border-white/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call (305) 555-FLOW</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            No pressure. No obligation. Just honest South Florida plumbing guidance.
          </p>
        </div>
      </section>

    </div>
  );
};
