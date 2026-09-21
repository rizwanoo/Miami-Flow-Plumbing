import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../../data/plumbingData';
import { PrimaryCTA } from '../common/PrimaryCTA';
import { SkeletonCard } from '../common/SkeletonCard';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  initialServiceId?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  initialServiceId
}) => {
  const [step, setStep] = useState<number>(1);
  const effectiveInitialService = initialServiceId || preselectedServiceId || SERVICES_DATA[0].id;
  const [serviceId, setServiceId] = useState<string>(effectiveInitialService);
  const [urgency, setUrgency] = useState<'emergency' | 'today' | 'flexible'>('today');
  const [propertyType, setPropertyType] = useState<'single-family' | 'condo' | 'commercial'>('single-family');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyAddress: '',
    preferredDate: '',
    message: ''
  });

  const [calculating, setCalculating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const selectedService = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  const handleServiceSelect = (id: string) => {
    setServiceId(id);
    setCalculating(true);
    setTimeout(() => {
      setCalculating(false);
    }, 750);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculating(true);
    setTimeout(() => {
      setCalculating(false);
      const code = 'MFP-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
      setSubmitted(true);
    }, 900);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Miami Estimate Request</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
            {submitted ? 'Estimate Request Received' : 'Get Your Free Plumbing Estimate'}
          </h3>

          <p className="text-slate-300 text-sm mt-1">
            {submitted
              ? 'Our master plumber on duty is reviewing your details right now.'
              : 'Upfront flat-rate pricing. No surprise fees. Zero obligation.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            /* Confirmation State */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-inner">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
                Confirmation #{confirmationCode}
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-2">
                Thank You, {formData.fullName || 'Neighbor'}!
              </h4>

              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                We have assigned your estimate request for{' '}
                <strong className="text-slate-900">{selectedService.title}</strong> to our Miami dispatch team. We will call you at{' '}
                <strong className="text-sky-700">{formData.phone || COMPANY_INFO.phone}</strong> shortly to confirm arrival timing.
              </p>

              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/80 text-left mb-6 max-w-md mx-auto text-xs text-slate-700 space-y-2">
                <div className="flex items-center justify-between font-semibold text-sky-900 pb-2 border-b border-sky-200">
                  <span>Selected Service:</span>
                  <span>{selectedService.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated Pricing:</span>
                  <span className="font-bold text-slate-900">{selectedService.priceRange}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dispatch Window:</span>
                  <span className="text-emerald-700 font-bold">
                    {urgency === 'emergency' ? 'Under 45 Minutes' : 'Same-Day Window'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={COMPANY_INFO.rawPhone}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Dispatch (305) 555-FLOW</span>
                </a>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form State */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Service & Urgency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Plumbing Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {SERVICES_DATA.slice(0, 6).map((service) => {
                    const isSelected = service.id === serviceId;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.id)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all duration-150 ${
                          isSelected
                            ? 'bg-sky-50 text-sky-900 border-sky-500 shadow-sm ring-1 ring-sky-500'
                            : 'bg-slate-50/80 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <div className="font-bold truncate">{service.title}</div>
                        <div className="text-[10px] text-slate-500 truncate mt-0.5">
                          {service.category}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Urgency Selector */}
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. How quickly do you need assistance?
                </label>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setUrgency('emergency')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                      urgency === 'emergency'
                        ? 'bg-rose-50 text-rose-700 border-rose-400 ring-1 ring-rose-400'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    🚨 Emergency (45 Min)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('today')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                      urgency === 'today'
                        ? 'bg-sky-50 text-sky-700 border-sky-500 ring-1 ring-sky-500'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    ⚡ Today / Tomorrow
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('flexible')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                      urgency === 'flexible'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-500 ring-1 ring-emerald-500'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    📅 Flexible Date
                  </button>
                </div>
              </div>

              {/* Real-time Dynamic Estimate Preview Skeleton & Calculation */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Live Pricing Estimate Guide
                  </span>
                  <span className="text-[11px] font-semibold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                    Miami-Dade Standard
                  </span>
                </div>

                {calculating ? (
                  <div className="py-2">
                    <SkeletonCard lines={2} hasImage={false} hasButton={false} hasBadge={false} />
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                    <div>
                      <p className="font-bold text-slate-900 text-sm">
                        {selectedService.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {selectedService.shortDesc}
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <span className="text-xs text-slate-400 block">Typical Range:</span>
                      <span className="text-sm font-extrabold text-sky-700">
                        {selectedService.priceRange}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Contact Details */}
              <div className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Fernandez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(305) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maria@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Miami Property Address / Neighborhood *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1420 Brickell Ave, Miami"
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Describe the Issue (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what is leaking, draining slow, or acting up..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col items-center gap-3">
                <PrimaryCTA
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={calculating}
                  showArrow
                  className="w-full"
                >
                  REQUEST MY FREE ESTIMATE
                </PrimaryCTA>

                <p className="text-xs text-slate-500 text-center flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No pressure. No obligation. Just professional plumbing guidance.</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
