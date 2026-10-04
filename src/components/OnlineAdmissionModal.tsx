import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Send, 
  GraduationCap, 
  Sparkles, 
  Phone, 
  BookOpen, 
  FileText,
  Mail,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { AdmissionInquiry } from '../types';
import { COLLEGE_INFO, PROGRAMS } from '../data/collegeData';
import { CollegeLogo } from './CollegeLogo';
import { sendAdmissionInquiry, SendResult, TARGET_GMAIL } from '../services/emailService';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedProgramId?: string;
}

export const OnlineAdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  preSelectedProgramId
}) => {
  const [formData, setFormData] = useState<AdmissionInquiry>({
    fullName: '',
    phone: '',
    email: '',
    program: preSelectedProgramId ? (PROGRAMS.find(p => p.id === preSelectedProgramId)?.name || '+2 Law') : '+2 Law',
    seeGpa: '',
    schoolName: '',
    address: 'Birgunj, Parsa',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendResult, setSendResult] = useState<SendResult | null>(null);

  useEffect(() => {
    if (preSelectedProgramId) {
      const match = PROGRAMS.find(p => p.id === preSelectedProgramId);
      if (match) {
        setFormData(prev => ({ ...prev, program: match.name }));
      }
    }
  }, [preSelectedProgramId]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await sendAdmissionInquiry(formData);
      setSendResult(result);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSendResult(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      program: '+2 Law',
      seeGpa: '',
      schoolName: '',
      address: 'Birgunj, Parsa',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#0A2F5C] p-4 sm:p-5 text-white flex items-center justify-between sticky top-0 z-10 border-b-2 border-[#D4A017]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <CollegeLogo size="sm" variant="white" />
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">Online Admission & Inquiry</h3>
              <p className="text-[11px] sm:text-xs text-blue-200">Session 2082/83 B.S. • Decimal College, Birgunj</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            id="close-admission-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  <Mail className="w-3.5 h-3.5" />
                  Sent to {TARGET_GMAIL}
                </span>
                <h4 className="text-2xl font-bold text-slate-900">Application Submitted!</h4>
              </div>

              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your online admission inquiry for <strong className="text-[#0A2F5C]">{formData.program}</strong> has been successfully dispatched to Decimal College at <span className="font-bold text-[#0A2F5C] underline">{TARGET_GMAIL}</span>.
              </p>

              {/* Form Summary Details */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-left max-w-md mx-auto space-y-1.5">
                <p className="font-bold text-[#0A2F5C] text-xs border-b border-slate-200 pb-1 flex items-center justify-between">
                  <span>Dispatched Information Summary:</span>
                  <span className="text-[10px] text-slate-500 font-normal">To: {TARGET_GMAIL}</span>
                </p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-1 text-slate-700">
                  <div><strong>Student:</strong> {formData.fullName}</div>
                  <div><strong>Program:</strong> {formData.program}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>SEE GPA:</strong> {formData.seeGpa || 'N/A'}</div>
                  {formData.schoolName && <div className="col-span-2"><strong>School:</strong> {formData.schoolName}</div>}
                  {formData.email && <div className="col-span-2"><strong>Email:</strong> {formData.email}</div>}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-slate-700 text-left space-y-1 max-w-md mx-auto">
                <p className="font-semibold text-[#0A2F5C]">Next Steps:</p>
                <p>1. Our counseling department will review your form and phone you on <strong>{formData.phone}</strong>.</p>
                <p>2. For instant assistance, visit Panitanki-8, Birgunj or reach us via WhatsApp.</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                {sendResult?.gmailComposeUrl && (
                  <a
                    href={sendResult.gmailComposeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#EA4335] hover:bg-[#d63023] text-white px-4 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Copy via Gmail</span>
                  </a>
                )}
                <a
                  href={`https://wa.me/${COLLEGE_INFO.rawPhone}?text=Hello%20Decimal%20College,%20I%20have%20submitted%20my%20online%20admission%20inquiry%20to%20decimalcollege@gmail.com%20for%20${encodeURIComponent(formData.fullName)}%20(${encodeURIComponent(formData.program)}).`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                <span>
                  <strong>Limited Seats:</strong> Early bird scholarship schemes are awarded according to SEE Grade Point Average (GPA) & Entrance Performance.
                </span>
              </div>

              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name of Student *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter student's full name"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] focus:border-transparent"
                  id="modal-input-name"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9825223245"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] focus:border-transparent"
                    id="modal-input-phone"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. student@gmail.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] focus:border-transparent"
                    id="modal-input-email"
                  />
                </div>
              </div>

              {/* Program Choice & SEE GPA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Desired +2 Program *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.program}
                      onChange={e => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] focus:border-transparent appearance-none"
                      id="modal-select-program"
                    >
                      {PROGRAMS.map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                    <BookOpen className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    SEE GPA / Grade
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3.65 (or A+)"
                    value={formData.seeGpa}
                    onChange={e => setFormData({ ...formData, seeGpa: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] focus:border-transparent"
                    id="modal-input-gpa"
                  />
                </div>
              </div>

              {/* Previous School & Residential Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Previous School (SEE)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Birgunj Public Academy"
                    value={formData.schoolName}
                    onChange={e => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] focus:border-transparent"
                    id="modal-input-school"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Town / Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Panitanki-8, Birgunj"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] focus:border-transparent"
                    id="modal-input-address"
                  />
                </div>
              </div>

              {/* Inquiries / Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Questions or Special Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Need hostel information, transportation routes, or merit scholarship inquiry..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] focus:border-transparent resize-none"
                  id="modal-input-message"
                />
              </div>

              {/* Destination email info */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-between text-[11px] text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#0A2F5C]" />
                  <span>Submits directly to: <strong className="text-slate-900">{TARGET_GMAIL}</strong></span>
                </span>
                <span className="hidden sm:inline-block text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-semibold">
                  Official Admission Inbox
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-[#0A2F5C] hover:bg-[#082447] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                  id="modal-submit-inquiry-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#D4A017]" />
                      <span>Sending to {TARGET_GMAIL}...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-4 h-4 text-[#D4A017]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
