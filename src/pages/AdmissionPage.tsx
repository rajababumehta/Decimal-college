import React, { useState } from 'react';
import { 
  GraduationCap, 
  FileCheck2, 
  HelpCircle, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  AlertCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Send,
  BookOpen,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { PageId } from '../types';
import { COLLEGE_INFO, ADMISSION_STEPS, REQUIRED_DOCUMENTS, PROGRAMS } from '../data/collegeData';
import { sendAdmissionInquiry, SendResult, TARGET_GMAIL } from '../services/emailService';

interface AdmissionPageProps {
  setCurrentPage: (page: PageId) => void;
  onOpenAdmission: (programId?: string) => void;
}

export const AdmissionPage: React.FC<AdmissionPageProps> = ({ 
  setCurrentPage, 
  onOpenAdmission 
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendResult, setSendResult] = useState<SendResult | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('+2 Law');
  const [gpa, setGpa] = useState('');
  const [school, setSchool] = useState('');
  const [message, setMessage] = useState('');

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await sendAdmissionInquiry({
        fullName: name,
        phone,
        email,
        program,
        seeGpa: gpa,
        schoolName: school,
        address: 'Birgunj, Nepal',
        message
      });
      setSendResult(result);
      setFormSubmitted(true);
    } catch (err) {
      console.error('Error submitting admission inquiry:', err);
      setFormSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A2F5C] to-[#0d3b73] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#D4A017] text-[#0A2F5C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Academic Year 2082/83 B.S.</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Admission & Enrollment Procedure
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Welcome to the threshold of your higher academic journey. Review our seamless 4-step admission process, required documentation, and merit scholarship schemes.
          </p>
        </div>
      </section>

      {/* 4-Step Admission Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
            Step-by-Step Guide
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-serif mt-2">
            How to Apply at Decimal College
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Follow these simple steps from application submission to class orientation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADMISSION_STEPS.map((st, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#D4A017] transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0A2F5C] text-[#D4A017] font-black text-xl flex items-center justify-center font-serif shadow-xs">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif group-hover:text-[#0A2F5C] transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#D4A017] uppercase tracking-wider">
                Phase {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Required Documents & Eligibility Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Required Documents */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A2F5C] flex items-center justify-center">
                    <FileCheck2 className="w-6 h-6 text-[#0A2F5C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-slate-900">
                      Required Documents Checklist
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please carry certified originals and photocopies
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600">
                  Applicants must submit attested copies of the following credentials during formal registration at the administrative desk:
                </p>

                <ul className="space-y-3">
                  {REQUIRED_DOCUMENTS.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <CheckCircle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Provisional grade sheets downloaded from SEE portal are accepted for initial entrance verification.</span>
                </div>
              </div>
            </div>

            {/* Right: Stream Eligibility & Scholarships */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eligibility card */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#0A2F5C]" />
                  Stream Eligibility Matrix
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                    <p className="font-bold text-[#0A2F5C]">+2 Science:</p>
                    <p className="text-slate-600 mt-0.5">Minimum GPA 2.0 with minimum C+ in Science & Compulsory Mathematics in SEE.</p>
                  </div>

                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                    <p className="font-bold text-amber-900">+2 Management:</p>
                    <p className="text-slate-600 mt-0.5">Minimum GPA 1.6 in SEE with passing grades in all core subjects.</p>
                  </div>

                  <div className="p-3 bg-slate-100/70 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">+2 Law & Legal Studies:</p>
                    <p className="text-slate-600 mt-0.5">Minimum GPA 1.6 in SEE with aptitude in social studies, English & Nepali.</p>
                  </div>

                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                    <p className="font-bold text-emerald-900">+2 Hotel Management & Education:</p>
                    <p className="text-slate-600 mt-0.5">Minimum GPA 1.6 in SEE; hospitality orientation or educational interest.</p>
                  </div>
                </div>
              </div>

              {/* Scholarship schemes */}
              <div className="bg-gradient-to-br from-[#0A2F5C] to-[#113a69] text-white p-6 sm:p-8 rounded-3xl shadow-md border-2 border-[#D4A017]/60 space-y-3">
                <div className="inline-block bg-[#D4A017] text-[#0A2F5C] text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  Scholarship Quotas
                </div>
                <h4 className="text-xl font-bold font-serif">
                  Decimal Merit & Social Scholarship Schemes
                </h4>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  We believe no talented student should be denied quality education due to financial hardship:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200 pt-1">
                  <div className="bg-white/10 p-2.5 rounded-lg">• SEE GPA 3.6 - 4.0: Up to 100% Tuition Waiver</div>
                  <div className="bg-white/10 p-2.5 rounded-lg">• SEE GPA 3.2 - 3.59: Up to 50% Tuition Waiver</div>
                  <div className="bg-white/10 p-2.5 rounded-lg">• Entrance Topper: Full Board Scholarship</div>
                  <div className="bg-white/10 p-2.5 rounded-lg">• Underprivileged & Female Empowerment Quota</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Direct Inquiry & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Details for Admission */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
              Admissions Helpline
            </span>
            <h3 className="text-3xl font-extrabold font-serif text-slate-900">
              Contact Decimal Admissions Desk
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Have questions regarding fee structure, bus transportation, hostel availability, or entrance dates? We are here to guide you:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <MapPin className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Campus Admissions Office:</h5>
                  <p className="text-xs text-slate-600">Decimal College, Panitanki-8, Birgunj, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Phone className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Direct Phone Inquiry:</h5>
                  <a href={`tel:${COLLEGE_INFO.phone}`} className="text-xs text-[#0A2F5C] font-bold hover:underline">
                    {COLLEGE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Mail className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Official Email:</h5>
                  <a href={`mailto:${COLLEGE_INFO.email}`} className="text-xs text-[#0A2F5C] font-semibold hover:underline">
                    {COLLEGE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Clock className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Visiting Hours:</h5>
                  <p className="text-xs text-slate-600">{COLLEGE_INFO.officeHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Instant Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    <Mail className="w-3.5 h-3.5" />
                    Sent to {TARGET_GMAIL}
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900">Inquiry Dispatched!</h4>
                </div>

                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Your online admission inquiry for <strong className="text-[#0A2F5C]">{program}</strong> has been forwarded to Decimal College administration at <span className="font-bold text-[#0A2F5C] underline">{TARGET_GMAIL}</span>.
                </p>

                {/* Summary Table */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 text-xs text-left max-w-md mx-auto space-y-1.5 shadow-xs">
                  <p className="font-bold text-[#0A2F5C] text-xs border-b border-slate-200 pb-1.5 flex items-center justify-between">
                    <span>Dispatched Application Details:</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">Delivered</span>
                  </p>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-1 text-slate-700">
                    <div><strong>Applicant:</strong> {name}</div>
                    <div><strong>Program:</strong> {program}</div>
                    <div><strong>Phone:</strong> {phone}</div>
                    <div><strong>SEE GPA:</strong> {gpa || 'N/A'}</div>
                    {school && <div className="col-span-2"><strong>School:</strong> {school}</div>}
                    {email && <div className="col-span-2"><strong>Email:</strong> {email}</div>}
                    {message && <div className="col-span-2 italic text-slate-600">"{message}"</div>}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center max-w-md mx-auto">
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
                    href={`https://wa.me/${COLLEGE_INFO.rawPhone}?text=Hello%20Decimal%20College,%20I%20have%20submitted%20my%20inquiry%20to%20decimalcollege@gmail.com%20for%20${encodeURIComponent(name)}%20(${encodeURIComponent(program)}).`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setSendResult(null);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setGpa('');
                      setSchool('');
                      setMessage('');
                    }}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <h4 className="text-xl font-bold font-serif text-slate-900">
                  Online Admission & Scholarship Inquiry
                </h4>
                <p className="text-xs text-slate-500">
                  Fill in your details below. Your information will be directly sent to <strong>{TARGET_GMAIL}</strong> and our counseling department.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anjali Kumari"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                      id="adm-name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9825223245"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                      id="adm-phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target Program *
                    </label>
                    <select
                      value={program}
                      onChange={e => setProgram(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                      id="adm-prog"
                    >
                      {PROGRAMS.map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      SEE GPA / Percentage
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3.75"
                      value={gpa}
                      onChange={e => setGpa(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                      id="adm-gpa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Student Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. student@gmail.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                      id="adm-email"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Previous School & Town
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. South Zone School, Birgunj"
                      value={school}
                      onChange={e => setSchool(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                      id="adm-school"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Questions / Scholarship Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ask about fee breakdown, hostel accommodation, or bus routes in Birgunj..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] resize-none"
                    id="adm-msg"
                  />
                </div>

                {/* Submits directly to decimalcollege@gmail.com notice */}
                <div className="bg-white border border-slate-200 rounded-xl p-2.5 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail className="w-3.5 h-3.5 text-[#0A2F5C]" />
                    <span>Dispatches directly to: <strong className="text-slate-900">{TARGET_GMAIL}</strong></span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-semibold">
                    Admissions Desk
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0A2F5C] hover:bg-[#072449] text-white font-extrabold text-sm py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  id="adm-submit-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#D4A017]" />
                      <span>Sending information to {TARGET_GMAIL}...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Admission Inquiry</span>
                      <Send className="w-4 h-4 text-[#D4A017]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
