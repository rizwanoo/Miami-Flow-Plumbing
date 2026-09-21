import React from 'react';
import { PageId } from '../types';
import { HeroSection } from '../components/home/HeroSection';
import { TrustBar } from '../components/home/TrustBar';
import { EmergencyCTA } from '../components/home/EmergencyCTA';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { MiamiFloridaSection } from '../components/home/MiamiFloridaSection';
import { PlumbingProcess } from '../components/home/PlumbingProcess';
import { BeforeAfterSection } from '../components/home/BeforeAfterSection';
import { ProjectGallery } from '../components/home/ProjectGallery';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ContactSection } from '../components/home/ContactSection';
import { FAQSection } from '../components/home/FAQSection';

interface HomePageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
  onOpenEstimateModal: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEstimateModal
}) => {
  return (
    <div className="w-full">
      <HeroSection
        onOpenEstimateModal={() => onOpenEstimateModal()}
        onNavigate={onNavigate}
      />
      <TrustBar />
      <EmergencyCTA onOpenEstimateModal={() => onOpenEstimateModal()} />
      <WhyChooseUs onOpenEstimateModal={() => onOpenEstimateModal()} />
      <ServicesPreview
        onNavigate={onNavigate}
        onOpenEstimateModal={(serviceId) => onOpenEstimateModal(serviceId)}
      />
      <MiamiFloridaSection onOpenEstimateModal={() => onOpenEstimateModal()} />
      <PlumbingProcess />
      <BeforeAfterSection onOpenEstimateModal={() => onOpenEstimateModal()} />
      <ProjectGallery />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection onOpenEstimateModal={() => onOpenEstimateModal()} />
    </div>
  );
};
