import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  Target, 
  Eye, 
  HeartHandshake, 
  Award, 
  CheckCircle, 
  Presentation, 
  Microscope, 
  MonitorCheck, 
  Utensils, 
  BookOpenCheck, 
  Activity, 
  ArrowRight,
  Quote
} from 'lucide-react';
import { PageId } from '../types';
import { COLLEGE_INFO, CAMPUS_FACILITIES } from '../data/collegeData';
import { CollegeLogo } from '../components/CollegeLogo';

interface AboutPageProps {
  setCurrentPage: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage, onOpenAdmission }) => {
  const getFacilityIcon = (icon: string) => {
    switch (icon) {
      case 'Presentation': return <Presentation className="w-6 h-6 text-[#0A2F5C]" />;
      case 'Microscope': return <Microscope className="w-6 h-6 text-[#0A2F5C]" />;
      case 'MonitorCheck': return <MonitorCheck className="w-6 h-6 text-[#0A2F5C]" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-[#0A2F5C]" />;
      case 'BookOpenCheck': return <BookOpenCheck className="w-6 h-6 text-[#0A2F5C]" />;
      default: return <Activity className="w-6 h-6 text-[#0A2F5C]" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#0A2F5C] to-[#0d3b73] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#D4A017] text-[#0A2F5C] py-1 pl-1.5 pr-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <CollegeLogo size="xs" variant="navy" />
            <span>Decimal College, Birgunj</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            About Decimal College
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Founded in 2072 B.S. in Panitanki-8, Birgunj, we are committed to intellectual curiosity, moral responsibility, and career preparation under Far Western University affiliation.
          </p>
        </div>
      </section>

      {/* College Introduction & Affiliation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
              Our Academic Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              A Decade of Educational Excellence in Parsa
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong className="text-slate-900">Decimal College</strong> was established in the Bikram Sambat year <strong className="text-slate-900">2072 B.S.</strong> by an enthusiastic team of veteran educators, academic researchers, and social visionaries in Birgunj. Our prime objective was to bridge the educational quality divide in Madhesh Province by providing high-standard +2 schooling right here in Panitanki.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With full academic recognition and affiliation with <strong className="text-slate-900">Far Western University (FWU)</strong> and the National Examinations Board (NEB), Decimal College offers accredited streams in <span className="font-semibold text-[#0A2F5C]">Science, Management, Law, Hotel Management, and Education</span>.
            </p>

            <div className="bg-slate-50 border-l-4 border-[#D4A017] p-4 rounded-r-xl space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">Key Facts:</h4>
              <p className="text-xs text-slate-600">• Established Year: <strong>2072 B.S.</strong></p>
              <p className="text-xs text-slate-600">• Location: <strong>Panitanki-8, Birgunj, Nepal</strong></p>
              <p className="text-xs text-slate-600">• University Affiliation: <strong>Far Western University (FWU)</strong></p>
              <p className="text-xs text-slate-600">• Regulatory Oversight: <strong>National Examinations Board (NEB)</strong></p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md h-48 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" 
                    alt="Classroom lecture at Decimal College" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-64 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80" 
                    alt="Decimal College library" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-md h-64 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80" 
                    alt="Science laboratory practicals at Decimal College" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-48 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" 
                    alt="Decimal College students group study" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Official Centerpiece Crest Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border-2 border-[#D4A017] flex flex-col items-center justify-center text-center">
              <CollegeLogo size="lg" />
              <span className="text-[10px] font-black text-[#0A2F5C] uppercase tracking-wider mt-1 font-serif">
                Estd. 2072 B.S.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-md">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-serif mt-2">
              Vision, Mission & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A2F5C] flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#0A2F5C]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To become the leading pre-university academic institution in Madhesh Province and Nepal, acclaimed for producing compassionate thinkers, innovative professionals, and ethically grounded national contributors.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
                Excellence • Wisdom • Impact
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4A017] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#D4A017]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide disciplined, affordable, and holistic higher secondary education through cutting-edge laboratories, experiential pedagogy, competitive examination grooming, and value-based student counseling.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#0A2F5C] uppercase tracking-wider">
                Practical Competence • Accessibility
              </div>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Core Values</h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A017]" />
                    <span><strong>Academic Integrity</strong> in examination & research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A017]" />
                    <span><strong>Equal Opportunity</strong> & merit scholarships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A017]" />
                    <span><strong>Innovation</strong> in laboratory & digital practice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A017]" />
                    <span><strong>Community Service</strong> and civic responsibility</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Character & Professional Ethics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Message Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A2F5C] text-white rounded-3xl p-8 sm:p-12 shadow-xl border-4 border-[#D4A017]/40 relative overflow-hidden">
          <Quote className="absolute -top-6 -right-6 w-48 h-48 text-white/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Institutional Seal Card (No fake personnel/photos) */}
            <div className="lg:col-span-4 text-center">
              <div className="p-6 rounded-2xl bg-white/10 border-2 border-[#D4A017] shadow-xl backdrop-blur-xs flex flex-col items-center justify-center">
                <CollegeLogo size="xl" variant="white" />
                <h4 className="text-lg font-bold font-serif text-white mt-4">
                  Decimal College
                </h4>
                <p className="text-xs text-[#D4A017] font-semibold uppercase tracking-wider mt-1">
                  Panitanki-8, Birgunj, Nepal
                </p>
                <div className="mt-3 pt-3 border-t border-white/15 w-full text-[11px] text-blue-200 space-y-1">
                  <p>Estd. 2072 B.S.</p>
                  <p>Affiliated with Far Western University</p>
                </div>
              </div>
            </div>

            {/* Institutional Message text */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#D4A017] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md">
                Message from College Administration
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                "Education is not merely acquiring facts, but training the mind to think with clarity, discipline, and purpose."
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Dear Parents, Guardians, and Aspiring Scholars,
              </p>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                We warmly welcome you to Decimal College at Panitanki-8, Birgunj. Since its establishment in 2072 B.S., the institution has remained dedicated to providing quality, accessible higher secondary (+2) education in Parsa and Madhesh Province.
              </p>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Our programs across Science, Management, Law, Hotel Management, and Education focus on practical skill acquisition, discipline, and strong academic preparation under Far Western University affiliation. We invite you to visit our campus in Panitanki to explore our facilities and begin your +2 academic journey.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/20">
                <span className="text-xs text-blue-200">
                  Decimal College Administration • Panitanki-8, Birgunj
                </span>
                <button
                  onClick={() => onOpenAdmission()}
                  className="w-full sm:w-auto bg-[#D4A017] hover:bg-[#b88912] text-[#0A2F5C] font-bold text-xs px-5 py-2.5 rounded-lg transition-colors text-center"
                >
                  Inquire for Admission
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
            World-Class Infrastructure
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-serif mt-2">
            Campus Facilities at Panitanki-8
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Engineered to support comprehensive practical learning, physical health, and intellectual exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAMPUS_FACILITIES.map((fac, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0A2F5C] shadow-xs hover:shadow-md transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A2F5C] flex items-center justify-center">
                {getFacilityIcon(fac.icon)}
              </div>
              <h3 className="font-bold text-lg text-slate-900 font-serif">
                {fac.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="pt-6 text-center">
          <button
            onClick={() => onOpenAdmission()}
            className="inline-flex items-center gap-2 bg-[#0A2F5C] hover:bg-[#072449] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all"
          >
            <span>Apply for Academic Year 2082/83</span>
            <ArrowRight className="w-4 h-4 text-[#D4A017]" />
          </button>
        </div>
      </section>
    </div>
  );
};
