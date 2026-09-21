import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Send,
  Sparkles,
  Award
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { PrimaryCTA } from '../common/PrimaryCTA';
import { SkeletonCard } from '../common/SkeletonCard';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/plumbingData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyAddress: '',
    serviceNeeded: SERVICES_DATA[0].title,
    preferredDate: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTicketId('MIA-' + Math.floor(100000 + Math.random() * 900000));
      setSubmitted(true);
    }, 850);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden" id="contact">
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Direct Lead & Estimate Portal"
          title="Get in Touch with Miami’s Trusted Plumber"
          subheadline="Whether you are facing an urgent leak, planning a tankless upgrade, or simply need honest advice, our master plumbers are here to help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Reassurances */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24/7 Hotline Card */}
            <div className="p-7 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                24/7 Direct Dispatch
              </div>

              <h3 className="text-2xl font-extrabold font-outfit mb-2">
                Call Our Dispatch Team
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Speak directly with a knowledgeable plumbing coordinator. We diagnose the urgency and dispatch our closest mobile unit immediately.
              </p>

              <a
                href={COMPANY_INFO.rawPhone}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-lg border border-white/20 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-emerald-400" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400/30">
                  Call Now
                </span>
              </a>
            </div>

            {/* Business & Location Info */}
            <GlassCard variant="elevated" className="p-7 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-outfit mb-2">
                Miami Operations Office
              </h4>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">{COMPANY_INFO.address}</p>
                  <p className="text-xs text-slate-500">Centrally positioned for fast dispatch across Miami-Dade</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-sky-600 transition-colors font-semibold"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-700 pt-2 border-t border-slate-100">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Service Hours</p>
                  <p className="text-xs text-slate-600">24/7 Emergency Dispatch • Mon-Sat 7:00 AM - 7:00 PM</p>
                </div>
              </div>
            </GlassCard>

            {/* Trust Assurance Card */}
            <GlassCard variant="default" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-outfit">
                    Our 100% Upfront Guarantee
                  </h4>
                  <p className="text-xs text-slate-500">Florida Contractor #CFC1430922</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                You will always receive a transparent, guaranteed quote before any wrench touches a pipe. No hidden travel surcharges or surprise post-job fees.
              </p>
            </GlassCard>

          </div>

          {/* Right Column: Modern Glass Lead Form */}
          <div className="lg:col-span-7">
            <GlassCard
              variant="elevated"
              className="p-6 sm:p-10 border border-white/90 shadow-2xl relative"
            >
              {submitted ? (
                /* Success State */
                <div className="text-center py-10 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
                    Request Received #{ticketId}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit mb-3">
                    Thank You, {formData.fullName}!
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                    Our on-call master plumber has received your estimate request for <strong className="text-slate-900">{formData.serviceNeeded}</strong>. We will call you at <strong className="text-sky-700">{formData.phone}</strong> shortly with your free estimate options.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={COMPANY_INFO.rawPhone}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Call (305) 555-FLOW</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          propertyAddress: '',
                          serviceNeeded: SERVICES_DATA[0].title,
                          preferredDate: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 font-outfit tracking-tight">
                      Request Your Free Plumbing Estimate
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Fill out this quick form and our Miami team will respond in minutes.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white/90"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(305) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white/90"
                      />
                    </div>
                  </div>

                  {/* Email & Property Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="david@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white/90"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Property Address / City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Coral Gables / Brickell, FL"
                        value={formData.propertyAddress}
                        onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white/90"
                      />
                    </div>
                  </div>

                  {/* Service Needed & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white/90 text-slate-800"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Date / Timing
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white/90 text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Describe Your Plumbing Issue
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please let us know what's happening (e.g., active leak, slow shower drain, noisy water heater)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white/90 resize-none"
                    />
                  </div>

                  {/* Submit Button with exact requested micro-interaction */}
                  <div className="pt-2 flex flex-col items-center gap-3">
                    <PrimaryCTA
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={loading}
                      showArrow
                      className="w-full text-center"
                    >
                      REQUEST MY FREE ESTIMATE
                    </PrimaryCTA>

                    <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>No pressure. No obligation. Just professional plumbing guidance.</span>
                    </p>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
