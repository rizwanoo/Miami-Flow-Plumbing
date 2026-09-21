import React, { useState } from 'react';
import {
  AlertTriangle,
  Phone,
  Droplets,
  Flame,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/plumbingData';
import { PrimaryCTA } from '../common/PrimaryCTA';

interface EmergencyCTAProps {
  onOpenEstimateModal: () => void;
}

export const EmergencyCTA: React.FC<EmergencyCTAProps> = ({
  onOpenEstimateModal
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const urgentIssues = [
    {
      title: 'Burst Pipes & Active Flooding',
      desc: 'Rapid water intrusion through ceilings, walls, or baseboards. Turn off main water immediately.',
      icon: <Droplets className="w-5 h-5 text-rose-500" />,
      actionTip: 'Main valve is usually outside near front meter.'
    },
    {
      title: 'Major Leaks & Slab Leaks',
      desc: 'High water bills, damp drywall, hot spots on floor tile, or loud running water sounds inside walls.',
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      actionTip: 'Non-invasive infrared leak detection available.'
    },
    {
      title: 'Severe Clogged Drains',
      desc: 'Multiple sinks or showers backing up with dirty water, soap scum, or grease scale.',
      icon: <Clock className="w-5 h-5 text-sky-500" />,
      actionTip: '4,000 PSI hydro-jetting ready to clear lines.'
    },
    {
      title: 'Water Heater Problems',
      desc: 'Ruptured tank flooding garage/closet, loud popping sounds, or complete loss of hot water.',
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      actionTip: 'Shut off heater circuit breaker & cold supply valve.'
    },
    {
      title: 'Overflowing Toilets & Sewer',
      desc: 'Raw sewage odors, gurgling drains, or wastewater backing up into showers and tubs.',
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
      actionTip: 'Priority emergency dispatch across Miami.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with bright plumbing-related background & glass card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-200/80 bg-gradient-to-br from-sky-900 via-slate-900 to-sky-950 p-6 sm:p-10 lg:p-14 text-white">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Urgent Headline & Description */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-extrabold uppercase tracking-wider mb-4 border border-rose-500/30">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                24/7 Rapid Emergency Response
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 font-outfit">
                Plumbing Trouble?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                  Don’t Let a Small Problem Become a Big One.
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Water damage multiplies in minutes. When an unexpected leak, backup, or water heater failure strikes your Miami property, our certified technicians are on standby for immediate containment and repair.
              </p>

              {/* Direct Hotline Box */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <a
                  href={COMPANY_INFO.rawPhone}
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-red-500 text-white font-extrabold text-base tracking-wide shadow-lg shadow-rose-500/25 btn-primary-micro"
                >
                  <Phone className="w-5 h-5 animate-bounce" />
                  <span>CALL DISPATCH: (305) 555-FLOW</span>
                </a>

                <PrimaryCTA
                  variant="glass"
                  size="md"
                  onClick={onOpenEstimateModal}
                  showArrow
                  className="bg-white/15 text-white hover:bg-white/25 border-white/20"
                >
                  REQUEST PLUMBING SERVICE
                </PrimaryCTA>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Under 45 Min Miami Arrival</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Licensed &amp; Insured</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Emergency Symptom Cards (Glass effect) */}
            <div className="lg:col-span-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-5 sm:p-7 shadow-2xl">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300 mb-4 font-outfit">
                  Common Urgent Plumbing Symptoms:
                </h3>

                <div className="space-y-3">
                  {urgentIssues.map((issue, idx) => (
                    <div
                      key={issue.title}
                      onClick={() => setActiveTab(idx)}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        activeTab === idx
                          ? 'bg-white/20 border-cyan-400/60 shadow-md'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-slate-900/60 shrink-0">
                          {issue.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-white mb-0.5">
                            {issue.title}
                          </h4>
                          <p className="text-xs text-slate-300 leading-normal">
                            {issue.desc}
                          </p>
                          {activeTab === idx && (
                            <div className="mt-2 text-[11px] font-semibold text-cyan-300 flex items-center gap-1.5 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/60">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span>Action: {issue.actionTip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
