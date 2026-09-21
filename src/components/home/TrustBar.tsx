import React from 'react';
import {
  ShieldCheck,
  Award,
  Building2,
  Wrench,
  MessageSquareText
} from 'lucide-react';
import { TRUST_ITEMS } from '../../data/plumbingData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-sky-600" />,
  Award: <Award className="w-5 h-5 text-amber-500" />,
  Building2: <Building2 className="w-5 h-5 text-cyan-600" />,
  Wrench: <Wrench className="w-5 h-5 text-sky-600" />,
  MessageSquareText: <MessageSquareText className="w-5 h-5 text-emerald-600" />
};

export const TrustBar: React.FC = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/80 shadow-xl shadow-slate-900/5 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3.5 group cursor-default p-2 rounded-xl transition-all duration-200 hover:bg-sky-50/50"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md">
                {iconMap[item.iconName] || <ShieldCheck className="w-5 h-5 text-sky-600" />}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-outfit leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
