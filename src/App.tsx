import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { EstimateModal } from './components/modals/EstimateModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [targetSection, setTargetSection] = useState<string | undefined>(undefined);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Handle navigation
  const handleNavigate = (page: PageId, sectionId?: string) => {
    setCurrentPage(page);
    setTargetSection(sectionId);

    if (sectionId && page === currentPage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEstimateModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsEstimateModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-sky-500 selection:text-white relative">
      
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEstimateModal={() => handleOpenEstimateModal()}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEstimateModal={handleOpenEstimateModal}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEstimateModal={() => handleOpenEstimateModal()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            targetSection={targetSection}
            onOpenEstimateModal={handleOpenEstimateModal}
          />
        )}

        {currentPage === 'privacy' && <PrivacyPolicyPage />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEstimateModal={() => handleOpenEstimateModal()}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenEstimateModal={() => handleOpenEstimateModal()} />

      {/* Interactive Free Estimate Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => {
          setIsEstimateModalOpen(false);
          setSelectedServiceId(undefined);
        }}
        initialServiceId={selectedServiceId}
      />

      {/* Floating WhatsApp Quick Dispatch Button */}
      <WhatsAppFloatingButton />

    </div>
  );
}

export default App;
