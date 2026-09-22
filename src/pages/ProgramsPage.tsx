import React, { useState } from 'react';
import { 
  Atom, 
  TrendingUp, 
  Scale, 
  UtensilsCrossed, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Briefcase, 
  BookOpen, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PageId, Program } from '../types';
import { PROGRAMS, COLLEGE_INFO } from '../data/collegeData';

interface ProgramsPageProps {
  setCurrentPage: (page: PageId) => void;
  onOpenAdmission: (programId?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ 
  setCurrentPage, 
  onOpenAdmission 
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredPrograms = selectedFilter === 'all' 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.id === selectedFilter);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return <Atom className="w-6 h-6 text-[#D4A017]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#D4A017]" />;
      case 'Scale': return <Scale className="w-6 h-6 text-[#D4A017]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-[#D4A017]" />;
      default: return <GraduationCap className="w-6 h-6 text-[#D4A017]" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0A2F5C] to-[#0d3b73] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#D4A017] text-[#0A2F5C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>+2 Secondary Education Programs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Academic Programs & Streams
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Decimal College offers five specialized +2 courses affiliated with Far Western University (FWU) and NEB, delivering practical competence, research fundamentals, and board examination excellence.
          </p>

          {/* Stream Selector Filter */}
          <div className="pt-4 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#D4A017] text-[#0A2F5C] shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              All Programs ({PROGRAMS.length})
            </button>
            {PROGRAMS.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedFilter(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === p.id
                    ? 'bg-[#D4A017] text-[#0A2F5C] shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredPrograms.map((prog, idx) => (
          <div 
            key={prog.id}
            id={`program-section-${prog.id}`}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img 
                src={prog.image} 
                alt={`${prog.name} laboratory and classroom at Decimal College`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                {prog.badge && (
                  <span className="self-start bg-[#D4A017] text-[#0A2F5C] text-xs font-black px-2.5 py-1 rounded-sm uppercase tracking-wider mb-2">
                    {prog.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold font-serif text-white">
                  {prog.name}
                </h3>
                <p className="text-xs text-blue-100 flex items-center gap-1.5 mt-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>{prog.duration}</span>
                  <span>•</span>
                  <span>Panitanki-8, Birgunj</span>
                </p>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A2F5C] flex items-center justify-center">
                      {getProgramIcon(prog.icon)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 font-serif">
                        {prog.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {prog.affiliation}
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    Admissions Open 2082/83
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {prog.fullDesc}
                </p>

                {/* Eligibility Notice */}
                <div className="bg-blue-50/70 border-l-4 border-[#0A2F5C] p-3 rounded-r-lg text-xs text-slate-700">
                  <span className="font-bold text-[#0A2F5C]">SEE Eligibility Requirement: </span>
                  {prog.eligibility}
                </div>

                {/* Key Subjects & Career Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Subjects */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#D4A017]" />
                      Core Subjects / Curriculum:
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {prog.keySubjects.map((sub, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#D4A017] font-bold">✓</span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Horizons */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#0A2F5C]" />
                      Higher Study & Career Paths:
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {prog.careerProspects.map((car, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-600 font-bold">→</span>
                          <span>{car}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-2">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Stream Highlights & Practical Facilities:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {prog.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 bg-slate-50 p-2 rounded-md border border-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Affiliated with Far Western University & NEB
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${COLLEGE_INFO.rawPhone}?text=Hello%20Decimal%20College,%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(prog.name)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none text-center px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Ask on WhatsApp
                  </a>

                  <button
                    onClick={() => onOpenAdmission(prog.id)}
                    className="flex-1 sm:flex-none bg-[#0A2F5C] hover:bg-[#D4A017] text-white hover:text-[#0A2F5C] px-5 py-2.5 rounded-lg text-xs font-extrabold shadow-sm transition-all flex items-center justify-center gap-1.5"
                    id={`apply-stream-btn-${prog.id}`}
                  >
                    <span>Apply for {prog.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Course Counseling Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border-2 border-dashed border-blue-200 rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <Sparkles className="w-8 h-8 text-[#D4A017] mx-auto" />
          <h3 className="text-2xl font-bold font-serif text-slate-900">
            Unsure between Science, Management, Law or Hospitality?
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
            Every scholar has unique intellectual strengths. Walk into our Panitanki-8 campus with your SEE score-card for a complimentary psychometric and academic counseling session with our senior faculty.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenAdmission()}
              className="bg-[#0A2F5C] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-[#072449] transition-colors"
            >
              Book Counseling Session
            </button>
            <a
              href={`tel:${COLLEGE_INFO.phone}`}
              className="bg-white border border-slate-300 text-slate-800 text-xs font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Call Admissions: {COLLEGE_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
