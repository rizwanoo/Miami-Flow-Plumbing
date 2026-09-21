import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Phone,
  ArrowRight,
  Search,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Filter,
  X
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { FAQS, COMPANY_INFO } from '../../data/plumbingData';
import { PrimaryCTA } from '../common/PrimaryCTA';

interface FAQSectionProps {
  onOpenEstimateModal: () => void;
}

const categoryLabels: Record<string, string> = {
  all: 'All FAQs',
  emergency: '24/7 Emergency',
  pricing: 'Pricing & Estimates',
  miami: 'Miami Water & Climate',
  heaters: 'Water Heaters',
  drains: 'Drains & Sewers',
  commercial: 'Commercial & Code',
  general: 'General & Warranty'
};

export const FAQSection: React.FC<FAQSectionProps> = ({
  onOpenEstimateModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  // Filter FAQs based on category and search text
  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const expandAll = () => {
    setOpenIndexes(filteredFaqs.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndexes([]);
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="faqs">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Clear Answers to Your Plumbing Questions"
          subheadline="Got questions about our arrival times, flat pricing guarantees, or Miami plumbing challenges? We believe in 100% upfront clarity."
        />

        {/* Search Bar & Category Filters Control Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Live Search Input */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., slab leak, pricing, tankless, permit, emergency)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {Object.entries(categoryLabels).map(([key, label]) => {
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveCategory(key)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Controls row: Result count + Expand/Collapse all */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-2 pt-2 border-b border-slate-100 pb-3">
            <span>
              Showing <strong className="text-slate-900 font-semibold">{filteredFaqs.length}</strong> {filteredFaqs.length === 1 ? 'question' : 'questions'}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={expandAll}
                className="text-sky-600 hover:text-sky-700 font-semibold hover:underline cursor-pointer"
              >
                Expand All
              </button>
              <span className="text-slate-300">•</span>
              <button
                type="button"
                onClick={collapseAll}
                className="text-slate-500 hover:text-slate-700 font-semibold hover:underline cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5 mb-14">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <div
                  key={`${faq.question}-${idx}`}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-sky-300 bg-white shadow-md ring-1 ring-sky-100'
                      : 'border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 shrink-0 mt-0.5 uppercase tracking-wide">
                        {categoryLabels[faq.category] || 'FAQ'}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-900 font-outfit">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-sky-500 text-white border-sky-500'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white">
                      <p className="mt-2">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-3xl bg-slate-50 border border-slate-200 mb-12">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800 font-outfit">
              No matching questions found
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We could not find an FAQ matching "{searchQuery}". Call our dispatch coordinator directly or reset the search.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
              >
                Clear Search &amp; Filters
              </button>
              <PrimaryCTA size="sm" variant="primary" onClick={onOpenEstimateModal}>
                Ask Our Plumber
              </PrimaryCTA>
            </div>
          </div>
        )}

        {/* Still Have Questions Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-50 via-slate-50 to-sky-50 border border-sky-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20 shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 font-outfit">
                Have a unique question about your plumbing system?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Speak directly with our Miami team or submit a free estimate request with no obligation.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={COMPANY_INFO.rawPhone}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide transition-colors text-center"
            >
              Call (305) 555-FLOW
            </a>
            <PrimaryCTA
              size="md"
              variant="primary"
              onClick={onOpenEstimateModal}
              className="w-full sm:w-auto"
            >
              Ask Plumber Online
            </PrimaryCTA>
          </div>
        </div>

      </div>
    </section>
  );
};
