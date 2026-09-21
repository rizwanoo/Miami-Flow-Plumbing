import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'accent' | 'frosted';
  hoverEffect?: boolean;
  onClick?: () => void;
  id?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = true,
  onClick,
  id
}) => {
  const variantStyles = {
    default:
      'bg-white/80 backdrop-blur-md border border-white/70 shadow-sm shadow-slate-200/50',
    elevated:
      'bg-white/90 backdrop-blur-xl border border-white/80 shadow-lg shadow-sky-950/5',
    accent:
      'bg-gradient-to-br from-white/95 via-sky-50/70 to-cyan-50/50 backdrop-blur-lg border border-sky-200/60 shadow-md shadow-sky-500/5',
    frosted:
      'bg-white/65 backdrop-blur-2xl border border-white/50 shadow-md'
  }[variant];

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:shadow-xl hover:shadow-sky-900/5 hover:-translate-y-1 hover:border-sky-300/60'
    : '';

  return (
    <div
      id={id}
      onClick={onClick}
      className={`rounded-2xl p-6 sm:p-8 relative overflow-hidden ${variantStyles} ${hoverStyles} ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {/* Subtle top specular glass reflection line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
      {children}
    </div>
  );
};
