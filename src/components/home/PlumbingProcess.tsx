import React, { useRef, useState, useEffect } from 'react';
import {
  PhoneCall,
  CalendarClock,
  SearchCheck,
  FileCheck,
  Wrench,
  Sparkles,
  CheckCircle2,
  Droplets,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Flame,
  Activity,
  ArrowRight
} from 'lucide-react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { PROCESS_STEPS } from '../../data/plumbingData';

const stepIcons: Record<string, React.ReactNode> = {
  PhoneCall: <PhoneCall className="w-5 h-5" />,
  CalendarClock: <CalendarClock className="w-5 h-5" />,
  SearchCheck: <SearchCheck className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />
};

export const PlumbingProcess: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Interactive Simulator Controls
  const [isManualScrub, setIsManualScrub] = useState(false);
  const [manualProgress, setManualProgress] = useState(0.45);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);
  const [currentActiveStep, setCurrentActiveStep] = useState(1);

  // Track window scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 25%']
  });

  // Spring physics for natural liquid glide
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001
  });

  // Manual scrub spring motion value
  const manualMotionVal = useMotionValue(0.45);
  const springManual = useSpring(manualMotionVal, {
    stiffness: 120,
    damping: 22
  });

  // Final active progress to drive SVG pathLength and UI states
  const activeProgress = isManualScrub ? springManual : springProgress;

  // Track active step milestone based on progress (6 steps -> ~0.16 each)
  useEffect(() => {
    const unsubscribe = activeProgress.on('change', (latest) => {
      const stepIndex = Math.min(Math.floor(latest * 6) + 1, 6);
      setCurrentActiveStep(Math.max(1, stepIndex));
    });
    return () => unsubscribe();
  }, [activeProgress]);

  // Auto-play animation loop when demo mode is triggered
  useEffect(() => {
    let interval: any;
    if (isPlayingAuto && isManualScrub) {
      interval = setInterval(() => {
        setManualProgress((prev) => {
          if (prev >= 1) {
            return 0;
          }
          const next = prev + 0.008;
          manualMotionVal.set(next);
          return next;
        });
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPlayingAuto, isManualScrub, manualMotionVal]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setManualProgress(val);
    manualMotionVal.set(val);
    if (!isManualScrub) setIsManualScrub(true);
    if (isPlayingAuto) setIsPlayingAuto(false);
  };

  const toggleAutoPlay = () => {
    if (!isManualScrub) {
      setIsManualScrub(true);
      manualMotionVal.set(manualProgress);
    }
    setIsPlayingAuto(!isPlayingAuto);
  };

  const resetToScroll = () => {
    setIsManualScrub(false);
    setIsPlayingAuto(false);
  };

  return (
    <section
      ref={containerRef}
      id="process-journey"
      className="py-16 sm:py-28 bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-50 relative overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <SectionHeading
          badge="Scroll-Driven Journey Line"
          title="Watch Our 6-Step Service Flow Draw Live As You Scroll"
          subheadline="From urgent dispatch to immaculate cleanup, experience the complete journey with our animated real-time SVG pipeline tracking your progress."
        />

        {/* Dynamic Interactive Flow Dashboard & Controller */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xl shadow-sky-950/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Live Progress Info */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 text-white flex items-center justify-center shadow-md shadow-sky-500/25 shrink-0">
                <Droplets className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-slate-900 font-outfit uppercase tracking-wider">
                    Pipeline Status:
                  </span>
                  <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/80">
                    Phase {currentActiveStep} of 6
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{isManualScrub ? 'Interactive Scrub Mode' : 'Synchronized with Page Scroll'}</span>
                </div>
              </div>
            </div>

            {/* Interactive Scrub & Play Controls */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              {/* Slider Scrub */}
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80 w-full sm:w-48">
                <Sliders className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.005"
                  value={isManualScrub ? manualProgress : 0.5}
                  onChange={handleSliderChange}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                  title="Drag slider to test SVG line drawing dynamically"
                />
              </div>

              {/* Play/Pause Demo Flow */}
              <button
                type="button"
                onClick={toggleAutoPlay}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-md shadow-sky-600/20 transition-transform active:scale-95 shrink-0"
                title={isPlayingAuto ? 'Pause simulated flow' : 'Play automated pipeline flow'}
              >
                {isPlayingAuto ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Auto-Flow</span>
                  </>
                )}
              </button>

              {/* Reset to Scroll */}
              {isManualScrub && (
                <button
                  type="button"
                  onClick={resetToScroll}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-transform active:scale-95"
                  title="Reset to Page Scroll tracking"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP 3-COLUMN SERPENTINE SVG JOURNEY PIPELINE (Visible on LG & XL screens) */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative pb-12">
          
          {/* Main Desktop Animated SVG Journey Pipeline */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1140 700"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Flow Gradient */}
                <linearGradient id="serpentineFlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="30%" stopColor="#00d4ff" />
                  <stop offset="65%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>

                {/* Glow Filter */}
                <filter id="pipeGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Drop Shadow for realistic PVC/Metallic Pipe */}
                <filter id="pipeShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.08" />
                </filter>
              </defs>

              {/* Outer Blueprint Outer Pipe Track (Dashed Background) */}
              <path
                d="M 190 70 L 570 70 L 950 70 C 1090 70, 1090 420, 950 420 L 570 420 L 190 420"
                stroke="#e2e8f0"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#pipeShadow)"
              />
              <path
                d="M 190 70 L 570 70 L 950 70 C 1090 70, 1090 420, 950 420 L 570 420 L 190 420"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 8"
              />

              {/* Dynamic Scroll-Drawn Inner Neon Water Flow Line */}
              <motion.path
                d="M 190 70 L 570 70 L 950 70 C 1090 70, 1090 420, 950 420 L 570 420 L 190 420"
                stroke="url(#serpentineFlowGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: activeProgress }}
                filter="url(#pipeGlow)"
              />

              {/* Milestone Checkpoint Valve Nodes on the SVG Track */}
              {[
                { cx: 190, cy: 70, step: 1, label: '01 Dispatch' },
                { cx: 570, cy: 70, step: 2, label: '02 Scheduling' },
                { cx: 950, cy: 70, step: 3, label: '03 Diagnostic' },
                { cx: 950, cy: 420, step: 4, label: '04 Upfront Quote' },
                { cx: 570, cy: 420, step: 5, label: '05 Code Repair' },
                { cx: 190, cy: 420, step: 6, label: '06 Final Peace' },
              ].map((node) => {
                const isPassed = currentActiveStep >= node.step;
                return (
                  <g key={node.step} className="transition-all duration-300">
                    {/* Flange Ring */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="16"
                      fill={isPassed ? '#ffffff' : '#f8fafc'}
                      stroke={isPassed ? '#0284c7' : '#cbd5e1'}
                      strokeWidth={isPassed ? 4 : 2}
                      className="shadow-md"
                    />
                    {/* Center Core */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="7"
                      fill={isPassed ? '#00d4ff' : '#94a3b8'}
                      className={isPassed ? 'animate-pulse' : ''}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Cards Grid Laid out synchronously over the SVG path */}
          <div className="grid grid-cols-3 gap-8 relative z-10 pt-16">
            {/* ROW 1: Steps 1, 2, 3 */}
            {PROCESS_STEPS.slice(0, 3).map((step, idx) => {
              const stepNum = idx + 1;
              const isPassed = currentActiveStep >= stepNum;
              const isCurrent = currentActiveStep === stepNum;

              return (
                <div key={step.step} className="flex flex-col">
                  <GlassCard
                    variant="elevated"
                    className={`flex flex-col justify-between h-full border-2 transition-all duration-500 backdrop-blur-md rounded-2xl p-6 ${
                      isCurrent
                        ? 'border-sky-500 ring-4 ring-sky-400/20 shadow-2xl shadow-sky-500/15 -translate-y-2 bg-white'
                        : isPassed
                        ? 'border-sky-300 shadow-lg bg-white/95'
                        : 'border-slate-200/80 opacity-80 bg-white/80'
                    }`}
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center font-extrabold font-outfit text-base transition-all duration-300 ${
                              isPassed
                                ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/30 scale-105'
                                : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {step.step}
                          </div>
                          <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Phase {stepNum}
                            </span>
                            {isCurrent && (
                              <span className="text-[10px] font-bold text-sky-600 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                                Active Flow
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                          {step.duration}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-xl font-extrabold text-slate-900 font-outfit tracking-tight mb-2.5 flex items-center gap-2">
                        <span className={`p-1.5 rounded-lg ${isPassed ? 'bg-sky-50 text-sky-600' : 'bg-slate-100 text-slate-400'}`}>
                          {stepIcons[step.iconName] || <Wrench className="w-4 h-4" />}
                        </span>
                        <span>{step.title}</span>
                      </h3>

                      {/* Step Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">
                        {step.description}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="pt-4 border-t border-slate-100">
                      <ul className="space-y-1.5">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs font-medium text-slate-600"
                          >
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isPassed ? 'text-emerald-500' : 'text-slate-300'}`} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </div>
              );
            })}
          </div>

          {/* ROW 2: Steps 4, 5, 6 (Positioned below the S-bend) */}
          <div className="grid grid-cols-3 gap-8 relative z-10 pt-20">
            {/* Note: Step 4 is at column 3, Step 5 is at column 2, Step 6 is at column 1 to match the fluid pipeline loop */}
            {[
              { ...PROCESS_STEPS[5], colIdx: 0, stepNumber: 6 },
              { ...PROCESS_STEPS[4], colIdx: 1, stepNumber: 5 },
              { ...PROCESS_STEPS[3], colIdx: 2, stepNumber: 4 },
            ].map((step) => {
              const stepNum = step.stepNumber;
              const isPassed = currentActiveStep >= stepNum;
              const isCurrent = currentActiveStep === stepNum;

              return (
                <div key={step.step} style={{ gridColumnStart: step.colIdx + 1 }} className="flex flex-col">
                  <GlassCard
                    variant="elevated"
                    className={`flex flex-col justify-between h-full border-2 transition-all duration-500 backdrop-blur-md rounded-2xl p-6 ${
                      isCurrent
                        ? 'border-sky-500 ring-4 ring-sky-400/20 shadow-2xl shadow-sky-500/15 -translate-y-2 bg-white'
                        : isPassed
                        ? 'border-sky-300 shadow-lg bg-white/95'
                        : 'border-slate-200/80 opacity-80 bg-white/80'
                    }`}
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center font-extrabold font-outfit text-base transition-all duration-300 ${
                              isPassed
                                ? 'bg-gradient-to-br from-cyan-500 to-emerald-500 text-white shadow-md shadow-teal-500/30 scale-105'
                                : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {step.step}
                          </div>
                          <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Phase {stepNum}
                            </span>
                            {isCurrent && (
                              <span className="text-[10px] font-bold text-sky-600 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                                Active Flow
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                          {step.duration}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-xl font-extrabold text-slate-900 font-outfit tracking-tight mb-2.5 flex items-center gap-2">
                        <span className={`p-1.5 rounded-lg ${isPassed ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                          {stepIcons[step.iconName] || <Wrench className="w-4 h-4" />}
                        </span>
                        <span>{step.title}</span>
                      </h3>

                      {/* Step Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">
                        {step.description}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="pt-4 border-t border-slate-100">
                      <ul className="space-y-1.5">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs font-medium text-slate-600"
                          >
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isPassed ? 'text-emerald-500' : 'text-slate-300'}`} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET CONTINUOUS VERTICAL SVG JOURNEY SPINE (Visible below LG) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative pl-8 sm:pl-12 py-4">
          
          {/* Vertical Animated SVG Spine */}
          <div className="absolute top-0 bottom-0 left-3.5 sm:left-5 w-4 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 16 1000"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="verticalFlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="40%" stopColor="#00d4ff" />
                  <stop offset="75%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {/* Background Guide Line */}
              <line
                x1="8"
                y1="20"
                x2="8"
                y2="980"
                stroke="#e2e8f0"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />

              {/* Dynamic Scroll-Drawn Spine Line */}
              <motion.line
                x1="8"
                y1="20"
                x2="8"
                y2="980"
                stroke="url(#verticalFlowGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ pathLength: activeProgress }}
                filter="url(#pipeGlow)"
              />
            </svg>
          </div>

          {/* Vertical Step Cards List */}
          <div className="space-y-6">
            {PROCESS_STEPS.map((step, idx) => {
              const stepNum = idx + 1;
              const isPassed = currentActiveStep >= stepNum;
              const isCurrent = currentActiveStep === stepNum;

              return (
                <div key={step.step} className="relative">
                  
                  {/* Glowing Node on the Vertical Spine */}
                  <div
                    className={`absolute -left-8 sm:-left-12 top-6 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isPassed
                        ? 'bg-sky-500 text-white ring-4 ring-sky-200 shadow-md shadow-sky-500/40'
                        : 'bg-white border-2 border-slate-300 text-slate-400'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${isPassed ? 'bg-white animate-ping' : 'bg-slate-300'}`} />
                  </div>

                  {/* Card Content */}
                  <GlassCard
                    variant="elevated"
                    className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                      isCurrent
                        ? 'border-sky-500 bg-white ring-2 ring-sky-300/30 shadow-xl'
                        : isPassed
                        ? 'border-sky-200 bg-white/95'
                        : 'border-slate-200 bg-white/80 opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                          Step {step.step}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          {step.duration}
                        </span>
                      </div>
                      <div className={`p-1.5 rounded-lg ${isPassed ? 'text-sky-600 bg-sky-50' : 'text-slate-400 bg-slate-100'}`}>
                        {stepIcons[step.iconName] || <Wrench className="w-4 h-4" />}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-outfit mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-3">
                      {step.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100">
                      <ul className="space-y-1">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isPassed ? 'text-emerald-500' : 'text-slate-300'}`} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-200 shadow-md text-xs font-medium text-slate-700">
            <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              100% Satisfaction Guarantee
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span>Upfront Written Pricing</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span>Licensed &amp; Insured Master Plumbers</span>
          </div>
        </div>

      </div>
    </section>
  );
};
