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

  // Scroll to top on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleOpenAdmission = (programId?: string) => {
    setPreSelectedProgramId(programId);
    setIsAdmissionModalOpen(true);
  };

  const handleCloseAdmission = () => {
    setIsAdmissionModalOpen(false);
    setPreSelectedProgramId(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenAdmission={handleOpenAdmission}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            setCurrentPage={setCurrentPage}
            onOpenAdmission={handleOpenAdmission}
            onSelectNotice={setActiveNotice}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            setCurrentPage={setCurrentPage}
            onOpenAdmission={() => handleOpenAdmission()}
          />
        )}

        {currentPage === 'programs' && (
          <ProgramsPage 
            setCurrentPage={setCurrentPage}
            onOpenAdmission={handleOpenAdmission}
          />
        )}

        {currentPage === 'admission' && (
          <AdmissionPage 
            setCurrentPage={setCurrentPage}
            onOpenAdmission={handleOpenAdmission}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
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
