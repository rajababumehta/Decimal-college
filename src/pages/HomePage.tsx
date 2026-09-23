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
                  onClick={() => onOpenAdmission()}
                  id="hero-apply-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#b88912] text-[#0A2F5C] font-extrabold text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Admission Open 2082/83</span>
                  <ArrowRight className="w-5 h-5 text-[#0A2F5C]" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id="hero-contact-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all backdrop-blur-xs"
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
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" 
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
                          setCurrentPage('programs');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs bg-white/20 hover:bg-[#D4A017] hover:text-[#0A2F5C] text-white px-2.5 py-1.5 rounded-lg font-medium transition-colors"
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

      {/* Short About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image & Crest Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80" 
                alt="Students studying at Decimal College" 
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
            {/* Overlay Milestone badge */}
            <div className="relative mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-6 bg-[#0A2F5C] text-white p-4 sm:p-5 rounded-xl shadow-xl border-2 border-[#D4A017] max-w-sm sm:max-w-xs mx-auto sm:mx-0">
              <div className="flex items-center gap-3 mb-1.5">
                <CollegeLogo size="sm" variant="white" />
                <div className="text-[#D4A017] font-black text-2xl font-serif">2072 B.S.</div>
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                Over a decade of academic distinction serving Birgunj, Parsa & Madhesh Province.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
              <Award className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>Welcome to Decimal College</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              An Academic Foundation Tailored for Higher Ambitions
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Situated in the heart of Birgunj at <strong className="text-slate-900">Panitanki-8</strong>, Decimal College was founded in <strong className="text-slate-900">2072 B.S.</strong> with an unwavering commitment to provide top-tier +2 secondary education. Under the affiliation of <strong className="text-slate-900">Far Western University</strong> and NEB, we empower students to discover their latent capabilities and thrive in modern competitive spheres.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Dedicated, student-centered professorial faculty</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#D4A017]" />
                <span className="text-sm font-medium text-slate-700">Equipped Physics, Chemistry & Biology laboratories</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#D4A017]" />
                <span className="text-sm font-medium text-slate-700">Practical commercial kitchen for Hotel Management</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#D4A017]" />
                <span className="text-sm font-medium text-slate-700">Moot court and law legal advocacy mentorship</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                id="home-about-readmore-btn"
                className="inline-flex items-center gap-2 bg-[#0A2F5C] hover:bg-[#072449] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span>Discover Our History & Vision</span>
                <ArrowRight className="w-4 h-4 text-[#D4A017]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-md">
              Academic Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              Our +2 Programs & Specialized Disciplines
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Choose from five nationally accredited secondary streams structured to deliver solid academic competence, entrance exam readiness, and career advancement.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => (
              <div 
                key={prog.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-200 border border-slate-200 overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={prog.image} 
                    alt={`${prog.name} at Decimal College`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0A2F5C] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {prog.duration}
                  </div>
                  {prog.badge && (
                    <div className="absolute top-3 left-3 bg-[#D4A017] text-[#0A2F5C] text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-xs">
                      {prog.badge}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-lg bg-blue-50 text-[#0A2F5C]">
                        {getProgramIcon(prog.icon)}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0A2F5C] transition-colors">
                        {prog.name}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {prog.shortDesc}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Key Highlights:
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {prog.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#D4A017] font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex items-center justify-between gap-2 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setCurrentPage('programs');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-[#0A2F5C] hover:text-[#D4A017] flex items-center gap-1 transition-colors"
                      id={`prog-detail-btn-${prog.id}`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenAdmission(prog.id)}
                      className="bg-[#0A2F5C] hover:bg-[#D4A017] text-white hover:text-[#0A2F5C] text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                      id={`prog-apply-btn-${prog.id}`}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Sixth Card: Online Admission Assistance Box */}
            <div className="bg-gradient-to-br from-[#0A2F5C] to-[#124177] text-white rounded-2xl p-6 shadow-md border-2 border-[#D4A017]/80 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block bg-[#D4A017] text-[#0A2F5C] text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  Admissions Open
                </span>
                <h3 className="text-2xl font-bold font-serif">
                  Need Help Choosing the Right Stream?
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Our academic counselors at Panitanki-8, Birgunj provide free career orientation sessions to match your SEE results with future career paths in Nepal or abroad.
                </p>
                <div className="bg-white/10 p-3 rounded-lg text-xs space-y-1">
                  <p className="font-semibold text-[#D4A017]">Direct Admissions Desk:</p>
                  <p className="text-slate-200">Call: {COLLEGE_INFO.phone}</p>
                  <p className="text-slate-200">Email: {COLLEGE_INFO.email}</p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenAdmission()}
                  className="w-full bg-[#D4A017] hover:bg-[#b88912] text-[#0A2F5C] font-extrabold text-sm py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Admission Process</span>
                </button>
              </div>
            </div>
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
              className="text-sm font-bold text-[#0A2F5C] hover:text-[#D4A017] flex items-center gap-1.5 transition-colors"
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

      {/* Contact & Location Preview Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A2F5C] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl border-2 sm:border-4 border-[#D4A017]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-[#D4A017] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md">
              Visit Decimal College
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif">
              Ready to Secure Your Academic Future in Birgunj?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              Our campus doors at <strong className="text-white">Panitanki-8, Birgunj</strong> are open for student tours, faculty interaction, and admission inquiries. Reach out today to receive the official syllabus prospectus and scholarship forms.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href={`tel:${COLLEGE_INFO.phone}`} className="hover:text-white font-semibold">
                  {COLLEGE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href={`mailto:${COLLEGE_INFO.email}`} className="hover:text-white font-semibold break-all sm:break-normal">
                  {COLLEGE_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span>Panitanki-8, Birgunj, Nepal</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => onOpenAdmission()}
              className="w-full bg-[#D4A017] hover:bg-[#b88912] text-[#0A2F5C] font-extrabold text-base py-3.5 px-6 rounded-xl shadow-md transition-colors text-center"
            >
              Enroll for 2082/83
            </button>
            <a
              href={COLLEGE_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm py-3 px-6 rounded-xl border border-white/20 transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <span>Locate on Google Maps</span>
              <ExternalLink className="w-4 h-4 text-[#D4A017]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
