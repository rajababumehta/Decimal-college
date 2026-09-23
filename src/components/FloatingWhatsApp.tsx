import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export const FloatingWhatsApp: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Mini preview popup */}
      {showPopup && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-[#0A2F5C] p-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h5 className="font-bold text-xs text-white">Decimal College Support</h5>
                <p className="text-[10px] text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Admissions Desk Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setShowPopup(false)}
              className="text-slate-300 hover:text-white p-1"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3.5 bg-slate-50 text-xs text-slate-700 space-y-2">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
              <p className="font-semibold text-slate-900 mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D4A017]" />
                Namaste! Welcome to Decimal College.
              </p>
              <p className="text-slate-600">
                Have questions regarding +2 admissions, subject combinations, or scholarships in Birgunj? Chat directly with our counseling team.
              </p>
            </div>
            <a
              href={COLLEGE_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2 rounded-lg font-bold text-xs shadow-md transition-colors"
              id="whatsapp-chat-direct-btn"
            >
              <span>Chat on WhatsApp</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="relative group">
        <a
          href={COLLEGE_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          id="floating-whatsapp-btn"
          onMouseEnter={() => setShowPopup(true)}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3 sm:pl-4 sm:pr-5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 border-2 border-white"
          title="Chat with Decimal College Admissions on WhatsApp"
        >
          <div className="relative">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-100"></span>
            </span>
          </div>
          <span className="font-bold text-sm tracking-wide hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};
