import React, { useState, useEffect } from 'react';
import { PageId, Notice } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OnlineAdmissionModal } from './components/OnlineAdmissionModal';
import { NoticeDetailModal } from './components/NoticeDetailModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [preSelectedProgramId, setPreSelectedProgramId] = useState<string | undefined>(undefined);
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const sections: PageId[] = ['home', 'about', 'programs', 'admission', 'contact'];
    
    const handleScroll = () => {
      // If user is scrolled almost to the very bottom, highlight contact
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60) {
        setCurrentPage('contact');
        return;
      }

      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setCurrentPage(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle direct hash navigation if URL has #section
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (['home', 'about', 'programs', 'admission', 'contact'].includes(hash)) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navHeight = 70;
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.pageYOffset - navHeight,
            behavior: 'smooth'
          });
          setCurrentPage(hash);
        }
      }, 100);
    }
  }, []);

  const handleOpenAdmission = (programId?: string) => {
    setPreSelectedProgramId(programId);
    setIsAdmissionModalOpen(true);
  };

  const handleCloseAdmission = () => {
    setIsAdmissionModalOpen(false);
    setPreSelectedProgramId(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans scroll-smooth">
      {/* Sticky Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenAdmission={handleOpenAdmission}
      />

      {/* Main Single-Page Content: All sections stacked seamlessly */}
      <main className="flex-grow space-y-16">
        {/* 1. Home Section: Hero, Stats, Why Decimal & Latest Notices */}
        <section id="home" className="scroll-mt-20">
          <HomePage 
            setCurrentPage={setCurrentPage}
            onOpenAdmission={handleOpenAdmission}
            onSelectNotice={setActiveNotice}
          />
        </section>

        {/* 2. About Us Section: Heritage, Affiliation, Mission & Facilities */}
        <section id="about" className="scroll-mt-20">
          <AboutPage 
            setCurrentPage={setCurrentPage}
            onOpenAdmission={() => handleOpenAdmission()}
          />
        </section>

        {/* 3. Programs Section: All 5 Streams & Disciplines with filter reset */}
        <section id="programs" className="scroll-mt-20">
          <ProgramsPage 
            setCurrentPage={setCurrentPage}
            onOpenAdmission={handleOpenAdmission}
          />
        </section>

        {/* 4. Admission Section: Procedures, Eligibility, Scholarships & Application Form */}
        <section id="admission" className="scroll-mt-20">
          <AdmissionPage 
            setCurrentPage={setCurrentPage}
            onOpenAdmission={handleOpenAdmission}
          />
        </section>

        {/* 5. Contact Us Section: Campus Info, Map & Direct Message Form */}
        <section id="contact" className="scroll-mt-20">
          <ContactPage />
        </section>
      </main>

      {/* Universal Footer */}
      <Footer 
        setCurrentPage={setCurrentPage}
        onOpenAdmission={handleOpenAdmission}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Online Admission & Application Modal */}
      <OnlineAdmissionModal 
        isOpen={isAdmissionModalOpen}
        onClose={handleCloseAdmission}
        preSelectedProgramId={preSelectedProgramId}
      />

      {/* Official Notice Circular Modal */}
      <NoticeDetailModal 
        notice={activeNotice}
        onClose={() => setActiveNotice(null)}
      />
    </div>
  );
}
