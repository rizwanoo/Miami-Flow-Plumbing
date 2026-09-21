import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronsLeftRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { BEFORE_AFTER_PROJECTS } from '../../data/plumbingData';
import { PrimaryCTA } from '../common/PrimaryCTA';

interface BeforeAfterSectionProps {
  onOpenEstimateModal: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  onOpenEstimateModal
}) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentProject = BEFORE_AFTER_PROJECTS[activeProjectIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/20 to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Real Transformations"
          title="See The Difference Quality Craftsmanship Makes"
          subheadline="Drag the interactive slider below to examine actual before &amp; after plumbing repairs completed across Miami neighborhoods."
        />

        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {BEFORE_AFTER_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveProjectIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeProjectIndex === idx
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20 scale-105'
                  : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Comparison Showcase Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/90 shadow-2xl p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Image Slider */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-200 shadow-inner bg-slate-900"
              >
                {/* AFTER IMAGE (Bottom/Base Layer) */}
                <img
                  src={currentProject.afterImage}
                  alt={currentProject.afterLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* BEFORE IMAGE (Top Layer with Clip Path) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentProject.beforeImage}
                    alt={currentProject.beforeLabel}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{
                      width: containerRef.current
                        ? `${containerRef.current.clientWidth}px`
                        : '100%',
                      height: '100%'
                    }}
                  />
                </div>

                {/* Dividing Vertical Line & Drag Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-sky-700 shadow-2xl flex items-center justify-center border-2 border-sky-500 cursor-grab active:cursor-grabbing">
                    <ChevronsLeftRight className="w-5 h-5 animate-pulse" />
                  </div>
                </div>

                {/* Before / After Floating Badges */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-rose-600/90 text-white backdrop-blur-md shadow-md uppercase tracking-wide">
                    Before: {currentProject.beforeLabel}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-600/90 text-white backdrop-blur-md shadow-md uppercase tracking-wide">
                    After: {currentProject.afterLabel}
                  </span>
                </div>

                {/* Bottom Instruction */}
                <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none z-20">
                  <span className="text-[11px] font-semibold text-white bg-slate-900/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    Drag slider left or right to inspect work
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Project Context & Solution */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentProject.location}</span>
                <span>•</span>
                <span>{currentProject.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit tracking-tight mb-4">
                {currentProject.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {currentProject.description}
              </p>

              {/* Solution Box */}
              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-100 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-900 uppercase tracking-wide mb-1.5">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>Miami Flow Solution:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentProject.solution}
                </p>
              </div>

              <div className="space-y-2 mb-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Installed strictly to Miami-Dade plumbing code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Backed by full parts &amp; labor guarantee</span>
                </div>
              </div>

              <PrimaryCTA
                variant="primary"
                size="md"
                onClick={onOpenEstimateModal}
                showArrow
              >
                REQUEST SIMILAR PROJECT ESTIMATE
              </PrimaryCTA>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
