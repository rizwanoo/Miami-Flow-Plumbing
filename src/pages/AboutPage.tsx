import React from 'react';
import {
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  Compass,
  ArrowRight,
  Phone,
  Clock,
  Wrench,
  ThumbsUp
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { PrimaryCTA } from '../components/common/PrimaryCTA';
import { TEAM_MEMBERS, COMPANY_INFO } from '../data/plumbingData';
import { PageId } from '../types';

interface AboutPageProps {
  onOpenEstimateModal: () => void;
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenEstimateModal,
  onNavigate
}) => {
  const storyTimeline = [
    {
      year: '2004',
      title: 'Founded in Miami with a Single Truck',
      description: 'Master plumber David Garcia began with a simple vision: replace pushy sales tactics with genuine diagnostic craftsmanship and spotless cleanliness.'
    },
    {
      year: '2012',
      title: 'Trenchless Pipe Relining Pioneer',
      description: 'Became one of the first South Florida contractors to deploy non-invasive CIPP epoxy lining, protecting Miami homeowners from destructive slab jackhammering.'
    },
    {
      year: '2018',
      title: 'Commercial & High-Rise Division',
      description: 'Expanded specialized high-capacity boiler and restaurant grease management services to Brickell, Wynwood, and Miami Beach commercial properties.'
    },
    {
      year: '2026',
      title: '20+ Master Techs & 24/7 Rapid Fleet',
      description: 'Today, Miami Flow Plumbing operates a modern fleet across Miami-Dade while maintaining our foundational commitment to treating every client like family.'
    }
  ];

  const coreValues = [
    {
      title: 'Someone Who Listens',
      desc: 'We never rush through a diagnosis. We take the time to understand your concerns and explain exactly what is causing the issue in plain, simple terms.',
      icon: <HeartHandshake className="w-6 h-6 text-sky-600" />
    },
    {
      title: 'Someone Who Explains',
      desc: 'No vague jargon or hidden costs. We present clear options with guaranteed flat-rate quotes so you remain in complete control of your home decisions.',
      icon: <Compass className="w-6 h-6 text-cyan-600" />
    },
    {
      title: 'Someone Who Works Carefully',
      desc: 'Plumbing should last decades. We use commercial-grade brass, schedule-80 fittings, and strict Florida building code methods on every single joint.',
      icon: <Wrench className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Someone Who Respects Your Home',
      desc: 'We treat your property like our own. Fresh shoe covers before entering, heavy canvas floor runners, and leaving your space cleaner than we found it.',
      icon: <Sparkles className="w-6 h-6 text-amber-500" />
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      
      {/* About Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-sky-50/70 via-slate-50 to-slate-50 overflow-hidden">
        {/* Ambient Blur */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 shadow-sm text-xs font-bold text-sky-900 mb-6">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Florida Certified Master Plumbing Contractor #CFC1430922</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-outfit">
              Good Plumbing Is About More Than Pipes.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500">
                It’s About Peace of Mind.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
              When a plumbing problem happens, homeowners need more than someone with tools. They need someone who listens, explains, works carefully, and respects their home.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryCTA
                variant="primary"
                size="lg"
                onClick={onOpenEstimateModal}
                showArrow
              >
                REQUEST A FREE ESTIMATE
              </PrimaryCTA>

              <a
                href={COMPANY_INFO.rawPhone}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call (305) 555-FLOW</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Our Philosophy Grid */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="The Miami Flow Philosophy"
            title="The Four Standards We Bring into Every Home"
            subheadline="We built our reputation on doing what is right for the homeowner, even when it takes a little extra time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((val, idx) => (
              <GlassCard
                key={idx}
                variant="elevated"
                className="p-7 sm:p-8 flex flex-col justify-between h-full border border-slate-100"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-outfit mb-3">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Practice</span>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </section>

      {/* Our Story & History Section */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Story Text */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5 text-sky-600" />
                <span>Our Story &amp; Roots</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit tracking-tight mb-6">
                Rooted in South Florida Since 2004
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Miami Flow Plumbing was established with a singular mission: to provide Miami homeowners and business owners with high-caliber technical plumbing services delivered with absolute integrity.
                </p>
                <p>
                  Having grown up in South Florida, our founders saw firsthand the damage caused by unpermitted plumbing work, inflated emergency rates, and subcontractors who vanished when warranties were called upon.
                </p>
                <p>
                  We invested heavily in state-of-the-art non-invasive diagnostics—such as thermal imaging and trenchless epoxy sewer lining—to spare our clients from unnecessary property destruction.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-6">
                <div>
                  <span className="text-3xl font-extrabold font-outfit text-slate-900">22+</span>
                  <p className="text-xs text-slate-500 font-semibold">Years Master Exp.</p>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <span className="text-3xl font-extrabold font-outfit text-slate-900">100%</span>
                  <p className="text-xs text-slate-500 font-semibold">Upfront Flat Rates</p>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <span className="text-3xl font-extrabold font-outfit text-slate-900">FL #CFC</span>
                  <p className="text-xs text-slate-500 font-semibold">1430922 Certified</p>
                </div>
              </div>
            </div>

            {/* Story Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="Miami Flow master plumbers team collaborating on plumbing repair"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg text-slate-900 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold font-outfit text-sm">Miami-Dade On-Call Fleet</h4>
                    <p className="text-xs text-slate-500">Fully equipped mobile diagnostic units</p>
                  </div>
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                    24/7 Active
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Timeline Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {storyTimeline.map((item) => (
              <div
                key={item.year}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
              >
                <div className="text-2xl font-extrabold text-sky-600 font-outfit mb-2">
                  {item.year}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-outfit">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership & Master Plumber Profiles */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Leadership & Master Plumbers"
            title="Meet the Craftsmen Who Care for Your Property"
            subheadline="Every technician on our team is Florida-licensed, background-checked, and committed to honest communication."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-64 overflow-hidden bg-slate-200 relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900/90 text-white backdrop-blur-sm">
                      {member.experience}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-outfit mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-sky-600 mb-3">
                      {member.role}
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 text-[11px] text-slate-500 font-medium">
                    <strong className="text-slate-700 block mb-0.5">Certifications:</strong>
                    <span>{member.certifications}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit mb-4">
            Experience the Miami Flow Difference Today
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Let us inspect your plumbing, explain your options clearly, and give you the peace of mind you deserve.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTA
              variant="primary"
              size="lg"
              onClick={onOpenEstimateModal}
              showArrow
            >
              REQUEST A FREE ESTIMATE
            </PrimaryCTA>
            <a
              href={COMPANY_INFO.rawPhone}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors border border-white/20"
            >
              Call (305) 555-FLOW
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
