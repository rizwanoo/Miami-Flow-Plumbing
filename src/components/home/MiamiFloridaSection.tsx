import React from 'react';
import {
  Droplets,
  Wind,
  CloudRain,
  ShieldCheck,
  CheckCircle2,
  AlertOctagon,
  ArrowRight,
  Sun
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { PrimaryCTA } from '../common/PrimaryCTA';
import { MIAMI_ENVIRONMENT_FACTS } from '../../data/plumbingData';

interface MiamiFloridaSectionProps {
  onOpenEstimateModal: () => void;
}

export const MiamiFloridaSection: React.FC<MiamiFloridaSectionProps> = ({
  onOpenEstimateModal
}) => {
  const localChallenges = [
    {
      title: 'Biscayne Aquifer Hard Water Scaling',
      desc: 'Miami water contains heavy dissolved limestone minerals that deposit dense calcium scale inside water heaters and valve cartridges, cutting system lifespan by up to 50% without regular maintenance.',
      tag: 'Mineral Scale'
    },
    {
      title: 'Pre-1980s Cast Iron Sewer Degradation',
      desc: 'Tens of thousands of homes in Coral Gables, Coconut Grove, and Miami have underground cast iron drain lines whose bottom channels have rotted away due to Florida coastal soil moisture.',
      tag: 'Sewer Decay'
    },
    {
      title: 'Tropical Storm Flooding & Hydrostatic Pressure',
      desc: 'Heavy South Florida rainy seasons and hurricane storm surges saturate ground water tables, creating intense reverse hydrostatic pressure against residential sewer cleanouts and foundation traps.',
      tag: 'Storm Prep'
    },
    {
      title: 'Coastal Salt Air Corrosion',
      desc: 'High humidity combined with marine salt vapor accelerates oxidation on outdoor shutoff valves, exterior hose spigots, gas regulators, and water filtration manifolds.',
      tag: 'Salt Corrosion'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-sky-50/50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle Background Art */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="South Florida Localization"
          title="Plumbing Expertise Built for South Florida."
          subheadline="Miami’s unique subtropical climate, coastal salt air, and porous limestone geography require specialized plumbing techniques designed specifically for local conditions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Miami Residential Architecture & Plumber in Action */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1000&q=80"
                alt="South Florida residential plumbing and modern water distribution system"
                className="w-full h-[400px] sm:h-[460px] object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

              {/* Glass Info Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg text-slate-900">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-1">
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>Miami-Dade County Certified</span>
                </div>
                <h4 className="text-base font-bold font-outfit text-slate-900">
                  Hurricane-Ready Plumbing Standards
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Every water heater installation includes Florida-mandated seismic &amp; hurricane strapping and emergency shutoff valves.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Local Plumbing Factors */}
          <div className="lg:col-span-6 space-y-4">
            {localChallenges.map((item, idx) => (
              <GlassCard
                key={idx}
                variant="default"
                className="p-5 sm:p-6 border border-white/90 hover:border-sky-300 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="text-base font-bold text-slate-900 font-outfit flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200 shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-sky-100">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Miami Home Protection CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 text-white shadow-xl shadow-sky-500/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit tracking-tight mb-2">
              Protect Your Miami Home From Hidden Water Hazards
            </h3>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              Schedule a comprehensive 24-point plumbing health inspection including thermal leak detection and camera line check.
            </p>
          </div>

          <PrimaryCTA
            variant="secondary"
            size="lg"
            onClick={onOpenEstimateModal}
            showArrow
            className="shrink-0 shadow-xl bg-slate-950 hover:bg-slate-900"
          >
            PROTECT YOUR HOME — GET AN ESTIMATE
          </PrimaryCTA>
        </div>

      </div>
    </section>
  );
};
