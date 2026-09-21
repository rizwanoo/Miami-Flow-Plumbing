import React, { useState } from 'react';
import { MessageCircle, X, Send, Clock, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../../data/plumbingData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      customMsg.trim() || 'Hello Miami Flow Plumbing, I need a plumber quote.'
    );
    const url = `https://wa.me/13055553569?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end select-none">
      
      {/* Expanded WhatsApp Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-3xl bg-white border border-emerald-100 shadow-2xl shadow-emerald-950/20 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Card Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white font-bold font-outfit text-sm">
                    MF
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white ring-1 ring-emerald-500 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-extrabold font-outfit text-sm">
                    <span>Miami Flow Support</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
                  </div>
                  <p className="text-[11px] text-emerald-100 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-200" />
                    <span>Typically replies in &lt; 3 mins</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-emerald-100 hover:text-white transition-colors cursor-pointer"
                aria-label="Close WhatsApp chat popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Bubble Body */}
          <div className="p-4 bg-slate-50/80 space-y-3">
            <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 border border-slate-100 shadow-xs text-xs text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900 mb-1">
                👋 Need quick plumbing help in Miami?
              </p>
              <p>
                Send us a message or photo on WhatsApp for an immediate response and upfront estimate from our on-call master plumbers.
              </p>
              <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400">
                <span>Just now</span>
                <Check className="w-3 h-3 text-emerald-500" />
              </div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                Quick Options:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Emergency dispatch',
                  'Water heater repair',
                  'Drain / sewer backup',
                  'Get a free estimate'
                ].map((chip) => (
                  <a
                    key={chip}
                    href={`https://wa.me/13055553569?text=${encodeURIComponent(
                      `Hello Miami Flow Plumbing, I need help with: ${chip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-[11px] font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-xl border border-emerald-200/80 transition-colors"
                  >
                    {chip}
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Message Form */}
            <form onSubmit={handleSendCustomMessage} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-transform active:scale-95 cursor-pointer"
                title="Send message to WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Footer note */}
          <div className="bg-slate-100/80 px-4 py-2 text-center text-[10px] font-medium text-slate-500 border-t border-slate-200/60">
            Official WhatsApp • {COMPANY_INFO.phone}
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 hover:bg-white text-slate-800 text-xs font-bold shadow-xl border border-emerald-200 backdrop-blur-md transition-all hover:scale-105 cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-emerald-700">WhatsApp Dispatch</span>
            <span className="text-[11px] font-medium text-slate-400">Online</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'bg-slate-900 hover:bg-slate-800 rotate-90 scale-95 shadow-slate-900/30'
              : 'bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 hover:scale-110 shadow-emerald-500/40 hover:shadow-emerald-500/60 animate-bounce-gentle ring-4 ring-emerald-400/20'
          }`}
          aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
          title="Chat with Master Plumber on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-7 h-7 fill-white/10" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-emerald-600" />
            </div>
          )}
        </button>
      </div>

    </div>
  );
};
