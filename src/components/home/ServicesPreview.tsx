import React, { useState } from 'react';
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
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { PrimaryCTA } from '../common/PrimaryCTA';
import { SERVICES_DATA } from '../../data/plumbingData';
import { ServiceItem, PageId } from '../../types';

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

interface ServicesPreviewProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
  onOpenEstimateModal: (serviceId?: string) => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  onNavigate,
  onOpenEstimateModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'emergency', label: 'Emergency' },
    { id: 'residential', label: 'Residential' },
    { id: 'maintenance', label: 'Drains & Maint.' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden" id="services-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Complete Service Capabilities"
          title="Master Plumbing Solutions for Miami Homes &amp; Businesses"
          subheadline="From urgent middle-of-the-night emergency pipe repairs to precision tankless water heater conversions, our Florida-certified master plumbers have you covered."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15 scale-105'
                  : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-sky-950/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with zoom and category badge */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-900 border border-white/80 shadow-sm">
                    {service.category}
                  </span>
                </div>

                {/* Response Timing Badge */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="flex items-center gap-1 text-cyan-300 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    FL Code Compliant
                  </span>
                  <span className="text-[11px] bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded text-slate-200">
                    {service.responseTiming}
                  </span>
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                      {serviceIcons[service.iconName] || <Wrench className="w-5 h-5 text-sky-600" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-outfit tracking-tight group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate('services', service.slug)}
                    className="text-xs font-bold text-slate-700 hover:text-sky-600 flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <PrimaryCTA
                    size="sm"
                    variant="primary"
                    onClick={() => onOpenEstimateModal(service.id)}
                  >
                    Book Service
                  </PrimaryCTA>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center">
          <PrimaryCTA
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('services')}
            showArrow
          >
            EXPLORE FULL SERVICES DIRECTORY
          </PrimaryCTA>
        </div>

      </div>
    </section>
  );
};
