import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/plumbingData';

interface MobileStickyBarProps {
  onOpenEstimateModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenEstimateModal
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 p-3 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={COMPANY_INFO.rawPhone}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-slate-800 transition-transform active:scale-95 text-center"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="truncate">CALL NOW</span>
        </a>

        <button
          type="button"
          onClick={onOpenEstimateModal}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-500/20 btn-primary-micro active:scale-95 text-center"
        >
          <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">FREE ESTIMATE</span>
        </button>
      </div>
    </div>
  );
};
