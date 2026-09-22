import React from 'react';
import { Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface MobileBottomBarProps {
  onOpenAdmission: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAdmission }) => {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(10,47,92,0.1)] sm:hidden px-2 py-1.5 flex items-center justify-around gap-1"
      id="mobile-bottom-quick-bar"
    >
      {/* 1. Direct Call Action */}
      <a
        href={`tel:${COLLEGE_INFO.phone}`}
        className="flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl text-slate-700 hover:text-[#0A2F5C] active:bg-slate-100 transition-colors"
        id="mobile-bottom-call-btn"
      >
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0A2F5C] mb-0.5">
          <Phone className="w-4 h-4 text-[#0A2F5C]" />
        </div>
        <span className="text-[10px] font-bold text-slate-700">Call</span>
      </a>

      {/* 2. Direct WhatsApp Action */}
      <a
        href={COLLEGE_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl text-emerald-600 hover:text-emerald-700 active:bg-emerald-50 transition-colors"
        id="mobile-bottom-whatsapp-btn"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#25D366] mb-0.5">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
        <span className="text-[10px] font-bold text-emerald-700">WhatsApp</span>
      </a>

      {/* 3. Apply Online Primary Action */}
      <button
        onClick={onOpenAdmission}
        className="flex items-center justify-center gap-1.5 flex-[1.6] py-2.5 px-3 bg-gradient-to-r from-[#0A2F5C] to-[#12427a] text-white rounded-xl text-xs font-extrabold shadow-md active:scale-95 transition-all border border-[#D4A017]/40"
        id="mobile-bottom-apply-btn"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#D4A017] shrink-0" />
        <span className="tracking-tight whitespace-nowrap">Apply Online</span>
      </button>

      {/* 4. Google Maps Directions Action */}
      <a
        href={COLLEGE_INFO.googleMapsUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl text-slate-700 hover:text-[#0A2F5C] active:bg-slate-100 transition-colors"
        id="mobile-bottom-map-btn"
      >
        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-[#D4A017] mb-0.5">
          <MapPin className="w-4 h-4 text-[#D4A017]" />
        </div>
        <span className="text-[10px] font-bold text-slate-700">Visit Us</span>
      </a>
    </div>
  );
};
