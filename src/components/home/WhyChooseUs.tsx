import React from 'react';
import { Zap, CheckCircle2, BadgeCheck, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { WHY_CHOOSE_US } from '../../data/plumbingData';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-amber-500" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-sky-600" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6 text-emerald-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-600" />
};

interface WhyChooseUsProps {
  onOpenEstimateModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onOpenEstimateModal
}) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-50 relative overflow-hidden">
      {/* Background soft ambient orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Miami Flow Standard"
          title="Plumbing Service You Can Feel Good About."
          subheadline="When something goes wrong with your plumbing, you need someone you can trust — someone who arrives promptly, diagnoses accurately, fixes it properly, and leaves your home cleaner than they found it."
        />

        {/* 4 Premium Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {WHY_CHOOSE_US.map((item) => (
            <GlassCard
              key={item.number}
              variant="elevated"
              className="flex flex-col justify-between h-full border border-white/90 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-900/10"
            >
              <div>
                {/* Top Number & Badge Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/80">
                    {item.badge}
                  </span>
                </div>

                {/* Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md shadow-slate-200/60 border border-slate-100 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  {iconMap[item.iconName] || <Sparkles className="w-6 h-6 text-sky-600" />}
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-slate-900 font-outfit tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Trust Accent */}
              <div className="pt-6 mt-6 border-t border-slate-100/80 flex items-center gap-2 text-xs font-semibold text-sky-700">
                <Shield className="w-3.5 h-3.5" />
                <span>100% Guaranteed</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-white/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 font-outfit">
                The Clean Home Commitment
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Fresh shoe covers on every entry, heavy-duty floor runners laid down, and zero mess left behind.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenEstimateModal}
            className="shrink-0 text-xs font-bold uppercase tracking-wider text-sky-700 hover:text-sky-900 flex items-center gap-1.5 underline cursor-pointer"
          >
            <span>Learn about our upfront pricing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
