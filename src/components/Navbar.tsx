import React, { useState } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { PageId } from '../types';
import { COLLEGE_INFO } from '../data/collegeData';
import { CollegeLogo } from './CollegeLogo';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onOpenAdmission: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  setCurrentPage, 
  onOpenAdmission 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Programs' },
    { id: 'admission', label: 'Admission' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-white">
      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo & College Identity */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none min-w-0"
            id="logo-brand-btn"
          >
            {/* Official College Logo */}
            <CollegeLogo size="md" variant="navy" />

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0A2F5C] font-serif">
                  DECIMAL
                </span>
                <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#D4A017] font-serif">
                  COLLEGE
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider sm:tracking-widest mt-1 truncate">
                Panitanki-8, Birgunj • Estd. 2072 B.S.
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-150 relative ${
                    isActive 
                      ? 'text-[#0A2F5C] font-semibold bg-blue-50' 
                      : 'text-slate-600 hover:text-[#0A2F5C] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4A017] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Buttons & Social */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COLLEGE_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Official Facebook Page"
              id="header-facebook-btn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <button
              onClick={() => onOpenAdmission()}
              id="header-apply-cta-btn"
              className="inline-flex items-center gap-2 bg-[#D4A017] hover:bg-[#b88912] text-[#0A2F5C] font-bold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 active:scale-95"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-4 h-4 text-[#0A2F5C]" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenAdmission()}
              className="sm:hidden bg-[#D4A017] hover:bg-[#b88912] text-[#0A2F5C] text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-xs active:scale-95 transition-transform shrink-0"
              id="mobile-quick-apply-btn"
            >
              Apply
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0A2F5C] hover:bg-slate-100 rounded-lg transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl font-medium text-sm text-left transition-colors min-h-[44px] ${
                      isActive 
                        ? 'bg-blue-50 text-[#0A2F5C] font-bold' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#D4A017]" />}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmission();
                  }}
                  id="mobile-drawer-apply-btn"
                  className="w-full flex items-center justify-center gap-2 bg-[#0A2F5C] active:bg-[#072449] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-colors min-h-[44px]"
                >
                  <Sparkles className="w-4 h-4 text-[#D4A017]" />
                  <span>Start Online Admission</span>
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1 px-1">
                  <a href={`tel:${COLLEGE_INFO.phone}`} className="flex items-center gap-1 hover:text-[#0A2F5C] py-1">
                    <Phone className="w-3.5 h-3.5 text-[#D4A017]" />
                    <span>{COLLEGE_INFO.phone}</span>
                  </a>
                  <a href={COLLEGE_INFO.facebookUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-600 font-medium py-1">
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
