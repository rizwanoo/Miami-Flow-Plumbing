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
import { SkeletonCard } from './components/common/SkeletonCard';
import { Sparkles, X, CheckCircle2 } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [targetSection, setTargetSection] = useState<string | undefined>(undefined);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [showSkeletonDemo, setShowSkeletonDemo] = useState(false);

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

      {/* Floating Demo Preview Pill for Loading Skeleton */}
      <div className="fixed bottom-20 left-4 z-40 hidden md:block">
        {showSkeletonDemo ? (
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-slate-200 shadow-2xl w-80 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-500" />
                Live Shimmer Skeleton
              </span>
              <button
                onClick={() => setShowSkeletonDemo(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
                aria-label="Close skeleton preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">
              Horizontal linear gradient shimmer on 1.5s soft pulse loop:
            </p>
            <SkeletonCard />
          </div>
        ) : (
          <button
            onClick={() => setShowSkeletonDemo(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-[11px] font-bold shadow-lg backdrop-blur-md border border-white/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Inspect Micro-Skeleton</span>
          </button>
        )}
      </div>

    </div>
  );
}

export default App;
