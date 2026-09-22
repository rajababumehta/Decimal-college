import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ExternalLink,
  MessageCircle,
  Sparkles,
  Building2
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admission Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A2F5C] to-[#0d3b73] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#D4A017] text-[#0A2F5C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Panitanki-8, Birgunj, Nepal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Contact Decimal College
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base font-light">
            We welcome parents, prospective students, and education enthusiasts to reach out. Our admissions and administrative teams are here to assist you.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold font-serif text-slate-900">
                Campus Information
              </h3>
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0A2F5C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4A017]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">College Address</h4>
                  <p className="text-sm text-slate-600 mt-0.5">{COLLEGE_INFO.location}</p>
                  <a
                    href={COLLEGE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#0A2F5C] font-bold hover:underline mt-1"
                    id="contact-page-maps-link"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0A2F5C] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#D4A017]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Phone Numbers</h4>
                  <a 
                    href={`tel:${COLLEGE_INFO.phone}`}
                    className="text-sm text-slate-700 font-semibold hover:text-[#0A2F5C] block mt-0.5"
                    id="contact-page-phone-link"
                  >
                    {COLLEGE_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Admissions & Counseling Helpline</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0A2F5C] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#D4A017]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Email Address</h4>
                  <a 
                    href={`mailto:${COLLEGE_INFO.email}`}
                    className="text-sm text-slate-700 hover:text-[#0A2F5C] block mt-0.5 truncate"
                    id="contact-page-email-link"
                  >
                    {COLLEGE_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Formal correspondence & inquiries</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0A2F5C] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#D4A017]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Administrative Hours</h4>
                  <p className="text-sm text-slate-600 mt-0.5">{COLLEGE_INFO.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Social Connect Card */}
            <div className="bg-[#0A2F5C] text-white p-6 sm:p-8 rounded-3xl shadow-sm border border-blue-900 space-y-4">
              <h4 className="text-lg font-bold font-serif text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4A017]" />
                Connect With Us Online
              </h4>
              <p className="text-xs text-blue-100 leading-relaxed">
                Stay updated with ongoing college activities, sports events, cultural programs, and NEB results on our official channels:
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                {/* Facebook Button */}
                <a
                  href={COLLEGE_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-facebook-btn"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Official Facebook</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={COLLEGE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-whatsapp-btn"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold font-serif text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Please complete the form below. We respond to all inquiries within 24 operational hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Message Dispatched!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <em>"{formData.subject}"</em> has been received by Decimal College administration. We will reply to <strong>{formData.email || formData.phone}</strong> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Admission Inquiry',
                        message: ''
                      });
                    }}
                    className="bg-[#0A2F5C] text-white text-xs font-bold px-6 py-2.5 rounded-lg mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                        id="contact-form-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98XXXXXXXX"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                        id="contact-form-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                        id="contact-form-email"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Subject / Query Type
                      </label>
                      <select
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C]"
                        id="contact-form-subject"
                      >
                        <option value="Admission Inquiry">+2 Admission Inquiry</option>
                        <option value="Fee Structure & Scholarships">Fee Structure & Scholarships</option>
                        <option value="Science / Management Curriculum">Science / Management Curriculum</option>
                        <option value="Law Stream Inquiries">Law Stream Inquiries</option>
                        <option value="Hotel Management Labs">Hotel Management Labs</option>
                        <option value="General Administration">General Administration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please write your questions or the specific assistance you require..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0A2F5C] resize-none"
                      id="contact-form-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0A2F5C] hover:bg-[#072449] text-white py-3 px-6 rounded-xl font-extrabold text-sm shadow-md transition-all duration-150 disabled:opacity-50"
                    id="contact-form-submit-btn"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message to Decimal College</span>
                        <Send className="w-4 h-4 text-[#D4A017]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
              Interactive Location
            </span>
            <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">
              Find Us at Panitanki-8, Birgunj
            </h3>
          </div>
          <a
            href={COLLEGE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2F5C] hover:text-[#D4A017] bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-2xs hover:shadow-xs transition-colors self-start sm:self-auto"
            id="open-maps-app-link"
          >
            <span>Open in Google Maps App</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4A017]" />
          </a>
        </div>

        {/* Map Container */}
        <div className="w-full h-96 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md relative bg-slate-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14217.995508112595!2d84.865!3d27.014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb0032e54db9%3A0xc3e658ec2d48c8b4!2sBirgunj%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Decimal College Panitanki-8, Birgunj Location Map"
            className="w-full h-full"
          />

          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl shadow-lg border border-slate-200 max-w-xs text-xs pointer-events-none">
            <p className="font-bold text-[#0A2F5C] flex items-center gap-1">
              <Building2 className="w-4 h-4 text-[#D4A017]" />
              Decimal College Campus
            </p>
            <p className="text-slate-600 mt-0.5">
              Panitanki-8, Birgunj, Nepal • Accessible from Clock Tower & Ghantaghar
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
