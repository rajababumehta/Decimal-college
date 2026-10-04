import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  ExternalLink, 
  Clock, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { PageId } from '../types';
import { COLLEGE_INFO, PROGRAMS } from '../data/collegeData';
import { CollegeLogo } from './CollegeLogo';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  onOpenAdmission: (programId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onOpenAdmission }) => {
  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2F5C] text-slate-300 pt-16 pb-12 sm:pb-8 border-t-4 border-[#D4A017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Column 1: College Intro & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CollegeLogo size="sm" variant="white" />
              <div>
                <h3 className="text-white font-extrabold text-xl tracking-tight font-serif">
                  DECIMAL <span className="text-[#D4A017]">COLLEGE</span>
                </h3>
                <p className="text-xs text-blue-200 uppercase tracking-wider font-medium">
                  +2 Higher Education • Birgunj
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Established in <strong className="text-white">2072 B.S.</strong>, Decimal College is dedicated to delivering exemplary academic rigor, ethical values, and holistic career leadership in Parsa, Nepal.
            </p>

            <div className="flex items-center gap-2 text-xs bg-blue-900/50 p-2.5 rounded-lg border border-blue-800/60 text-blue-200">
              <ShieldCheck className="w-4 h-4 text-[#D4A017] shrink-0" />
              <span>Affiliated with <strong>Far Western University</strong></span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {/* Facebook */}
              <a 
                href={COLLEGE_INFO.facebookUrl} 
                target="_blank" 
                rel="noreferrer"
                id="footer-facebook-link"
                className="w-9 h-9 rounded-lg bg-blue-900/70 hover:bg-[#D4A017] hover:text-[#0A2F5C] text-white flex items-center justify-center transition-all duration-150"
                title="Follow on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href={COLLEGE_INFO.whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                id="footer-whatsapp-link"
                className="w-9 h-9 rounded-lg bg-blue-900/70 hover:bg-[#25D366] hover:text-white text-white flex items-center justify-center transition-all duration-150"
                title="Message on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Google Maps */}
              <a 
                href={COLLEGE_INFO.googleMapsUrl} 
                target="_blank" 
                rel="noreferrer"
                id="footer-maps-link"
                className="w-9 h-9 rounded-lg bg-blue-900/70 hover:bg-[#D4A017] hover:text-[#0A2F5C] text-white flex items-center justify-center transition-all duration-150"
                title="Find us on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')}
                  className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors"
                  id="footer-nav-home"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')}
                  className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors"
                  id="footer-nav-about"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>About Decimal College</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('programs')}
                  className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors"
                  id="footer-nav-programs"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>+2 Programs & Streams</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('admission')}
                  className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors"
                  id="footer-nav-admission"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Admission Procedure</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')}
                  className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors"
                  id="footer-nav-contact"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Contact & Location</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenAdmission()}
                  className="flex items-center gap-1.5 text-[#D4A017] font-semibold hover:underline"
                  id="footer-nav-apply"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Apply for 2082/83 Session</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: +2 Academic Programs */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
              +2 Programs Offered
            </h4>
            <ul className="space-y-2 text-sm">
              {PROGRAMS.map((prog) => (
                <li key={prog.id}>
                  <button
                    onClick={() => {
                      handleNav('programs');
                    }}
                    className="flex items-center justify-between w-full text-left hover:text-[#D4A017] transition-colors group"
                    id={`footer-prog-${prog.id}`}
                  >
                    <span className="flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4A017] group-hover:translate-x-0.5 transition-transform" />
                      <span>{prog.name}</span>
                    </span>
                    <span className="text-[11px] text-slate-400 bg-blue-900/60 px-1.5 py-0.5 rounded">
                      2 Yrs
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: College Contact Desk */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
              Campus Info
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">{COLLEGE_INFO.location}</span>
                  <a 
                    href={COLLEGE_INFO.googleMapsUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-[#D4A017] hover:underline inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href={`tel:${COLLEGE_INFO.phone}`} className="hover:text-white transition-colors">
                  {COLLEGE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href={`mailto:${COLLEGE_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {COLLEGE_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                <span>{COLLEGE_INFO.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright & Developer Credit */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Decimal College. All rights reserved. Panitanki-8, Birgunj, Nepal.</p>

          {/* Developer Credit */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Developed by</span>
            <a 
              href={COLLEGE_INFO.developerUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-[#D4A017] hover:text-[#f7cb46] font-semibold transition-all duration-200 group shadow-xs"
              title={`Visit developer portfolio: ${COLLEGE_INFO.developerName}`}
            >
              <span>{COLLEGE_INFO.developerName}</span>
              <ExternalLink className="w-3 h-3 text-[#D4A017] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Affiliation: Far Western University</span>
            <span>•</span>
            <span className="text-[#D4A017]">Estd. 2072 B.S.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
