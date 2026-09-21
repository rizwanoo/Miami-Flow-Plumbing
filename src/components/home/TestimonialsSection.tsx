import React, { useState } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { TESTIMONIALS } from '../../data/plumbingData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3 border border-sky-200">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>Customer Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit tracking-tight">
              Peace of Mind Delivered to Miami Homes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Read how our plumbers resolved stressful leaks, drain clogs, and water heater breakdowns for your neighbors.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <GlassCard
              key={t.id}
              variant="elevated"
              className="flex flex-col justify-between h-full border border-white/90 p-7 sm:p-8"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {t.date}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="inline-block text-xs font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 mb-4">
                  Service: {t.service}
                </div>

                {/* Content */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{t.content}”
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {t.avatarUrl ? (
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-100"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-outfit">
                      {t.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3 h-3 text-sky-500" />
                      <span>{t.neighborhood}, Miami, FL</span>
                    </div>
                  </div>
                </div>

                {t.verified && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Customer
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
