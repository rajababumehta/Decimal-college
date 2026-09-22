import React from 'react';
import { X, Calendar, Bell, ShieldCheck, Share2 } from 'lucide-react';
import { Notice } from '../types';
import { COLLEGE_INFO } from '../data/collegeData';
import { CollegeLogo } from './CollegeLogo';

interface NoticeDetailModalProps {
  notice: Notice | null;
  onClose: () => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({ notice, onClose }) => {
  if (!notice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        role="dialog"
      >
        <div className="bg-[#0A2F5C] p-4 text-white flex items-center justify-between border-b-2 border-[#D4A017]">
          <div className="flex items-center gap-2.5">
            <CollegeLogo size="xs" variant="white" />
            <div>
              <span className="font-bold text-sm block leading-tight">Official Circular</span>
              <span className="text-[10px] text-blue-200 block">Decimal College, Birgunj</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md"
            aria-label="Close Notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
            <span className="bg-blue-100 text-[#0A2F5C] font-bold px-2.5 py-0.5 rounded-full">
              {notice.category}
            </span>
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{notice.date}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 leading-snug">
            {notice.title}
          </h3>

          <div className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            {notice.description}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified by Decimal College Administration</span>
            </div>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: notice.title,
                    text: notice.description,
                    url: window.location.href
                  }).catch(() => {});
                }
              }}
              className="flex items-center gap-1 text-[#0A2F5C] font-semibold hover:underline"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="bg-slate-100 px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#0A2F5C] text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-[#082447] transition-colors"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};
