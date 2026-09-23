import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Award, 
  Calendar, 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle, 
  ExternalLink,
  Users,
  FlaskConical,
  ShieldCheck,
  Trophy,
  Bell,
  Scale,
  Atom,
  TrendingUp,
  UtensilsCrossed
} from 'lucide-react';
import { PageId, Notice } from '../types';
import { COLLEGE_INFO, PROGRAMS, WHY_CHOOSE_US, NOTICES } from '../data/collegeData';
import { CollegeLogo } from '../components/CollegeLogo';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
  onOpenAdmission: (programId?: string) => void;
  onSelectNotice: (notice: Notice) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  setCurrentPage, 
  onOpenAdmission,
  onSelectNotice
}) => {
  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return <Atom className="w-6 h-6 text-[#D4A017]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#D4A017]" />;
      case 'Scale': return <Scale className="w-6 h-6 text-[#D4A017]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-[#D4A017]" />;
      default: return <GraduationCap className="w-6 h-6 text-[#D4A017]" />;
    }
  };

  const getWhyIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-6 h-6 text-[#0A2F5C]" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-[#0A2F5C]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#0A2F5C]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#0A2F5C]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#0A2F5C]" />;
      default: return <Trophy className="w-6 h-6 text-[#0A2F5C]" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0A2F5C] via-[#0D386D] to-[#0A2F5C] text-white pt-16 pb-24 overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4A017_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Tagline, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Institution badge with Official Logo */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 border border-[#D4A017]/60 rounded-full py-1 pl-1.5 pr-4 text-xs font-semibold text-[#D4A017] shadow-xs backdrop-blur-xs">
                <CollegeLogo size="xs" variant="white" />
                <span>Panitanki-8, Birgunj, Nepal • Estd. 2072 B.S.</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-serif">
                Shaping the Next Generation at <span className="text-[#D4A017]">Decimal College</span>
              </h1>

              <p className="text-base sm:text-xl text-blue-100 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {COLLEGE_INFO.tagline}. A premier +2 academic sanctuary offering world-class learning in Science, Management, Law, Hotel Management, and Education.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const el = document.getElementById('admission');
                    if (el) {
                      const navHeight = 70;
                      window.scrollTo({
                        top: el.getBoundingClientRect().top + window.pageYOffset - navHeight,
                        behavior: 'smooth'
                      });
                    } else {
                      onOpenAdmission();
                    }
                  }}
                  id="hero-apply-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#b88912] text-[#0A2F5C] font-extrabold text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Admission Open 2082/83</span>
                  <ArrowRight className="w-5 h-5 text-[#0A2F5C]" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      const navHeight = 70;
                      window.scrollTo({
                        top: el.getBoundingClientRect().top + window.pageYOffset - navHeight,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  id="hero-contact-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all backdrop-blur-xs cursor-pointer"
                >
                  <span>Contact & Visit Us</span>
                  <MapPin className="w-4 h-4 text-[#D4A017]" />
                </button>
              </div>

              {/* Affiliation Callout */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-blue-200">
                <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
                <span>{COLLEGE_INFO.affiliationFull}</span>
              </div>
            </div>

            {/* Right Column: Visual Academic Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl space-y-5">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 h-56 group">
                  <div className="absolute top-3 right-3 z-10">
                    <CollegeLogo size="xs" variant="white" />
                  </div>
                  <img 
                    src={COLLEGE_INFO.campusPhotoUrl} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = COLLEGE_INFO.campusPhotoDirect;
                    }}
                    alt="Decimal College Campus and Scholars in Birgunj" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest bg-[#D4A017] text-[#0A2F5C] px-2 py-0.5 rounded-sm">
                        Birgunj Academic Hub
                      </span>
                      <p className="text-white font-bold text-sm mt-1">
                        Cultivating intellectual depth & ethical values
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stream Badges */}
                <div>
                  <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2.5">
                    Programs Available at +2 Level:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {PROGRAMS.map(prog => (
                      <button
                        key={prog.id}
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent('decimal-show-program', { detail: prog.id }));
                          const el = document.getElementById('programs');
                          if (el) {
                            const navHeight = 70;
                            window.scrollTo({
                              top: el.getBoundingClientRect().top + window.pageYOffset - navHeight,
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className="text-xs bg-white/20 hover:bg-[#D4A017] hover:text-[#0A2F5C] text-white px-2.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer"
                      >
                        {prog.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-blue-200">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4A017]" />
                    <span>Sunday - Friday Classes</span>
                  </div>
                  <a 
                    href={`tel:${COLLEGE_INFO.phone}`} 
                    className="text-[#D4A017] hover:underline font-bold"
                  >
                    Direct Helpline: {COLLEGE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-blue-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            {COLLEGE_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-xl sm:text-3xl font-black text-[#D4A017] font-serif">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-sm text-slate-200 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Decimal College Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
            The Decimal Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Why Choose Decimal College, Birgunj?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We merge rigorous academic benchmarks with modern experiential learning, ensuring our +2 graduates excel in entrance exams, professional degrees, and societal leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#D4A017] shadow-xs hover:shadow-md transition-all duration-200 space-y-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#0A2F5C] text-[#0A2F5C] group-hover:text-[#D4A017] flex items-center justify-center transition-colors">
                {getWhyIcon(item.icon)}
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#0A2F5C] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Notices & Announcements Section */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-md">
                Official Updates
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-serif mt-2">
                Latest Notices & Academic News
              </h2>
            </div>
            <button
              onClick={() => onSelectNotice(NOTICES[0])}
              className="text-sm font-bold text-[#0A2F5C] hover:text-[#D4A017] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Bell className="w-4 h-4 text-[#D4A017]" />
              <span>View Top Announcement</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NOTICES.map((notice) => (
              <div 
                key={notice.id}
                onClick={() => onSelectNotice(notice)}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0A2F5C] shadow-xs hover:shadow-md cursor-pointer transition-all duration-150 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0A2F5C] bg-blue-50 px-2.5 py-1 rounded-md">
                      {notice.category}
                    </span>
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {notice.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#0A2F5C] transition-colors leading-snug">
                    {notice.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {notice.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A2F5C]">
                  <span>Click to view notice circular</span>
                  <ArrowRight className="w-4 h-4 text-[#D4A017] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
