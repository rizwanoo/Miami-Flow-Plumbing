import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface PrimaryCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'emergency' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
}

export const PrimaryCTA: React.FC<PrimaryCTAProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  showArrow = false,
  className = '',
  loading = false,
  type = 'button',
  disabled = false,
  id
}) => {
  // Size classes with proper 2x horizontal vs vertical padding rule
  const sizeClasses = {
    sm: 'text-xs font-semibold px-4 py-2 rounded-lg gap-1.5',
    md: 'text-sm font-bold px-6 py-3 rounded-xl gap-2 tracking-wide uppercase',
    lg: 'text-base font-bold px-8 py-4 rounded-xl gap-2.5 tracking-wider uppercase',
    xl: 'text-lg font-extrabold px-10 py-5 rounded-2xl gap-3 tracking-wider uppercase'
  }[size];

  // Specific color & styling variants
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20 border border-sky-400/40',
    secondary:
      'bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10 border border-slate-700/50',
    emergency:
      'bg-gradient-to-r from-rose-600 to-red-500 text-white shadow-lg shadow-red-500/25 border border-red-400/40 animate-pulse-subtle',
    glass:
      'bg-white/85 backdrop-blur-md text-slate-800 hover:text-sky-600 border border-white/80 shadow-md shadow-slate-200/50',
    outline:
      'bg-transparent text-sky-700 hover:bg-sky-50/80 border-2 border-sky-600/40'
  }[variant];

  // User requested exact micro-interaction:
  // scale up to 1.02x on hover with a 200ms ease-out transition,
  // increase box shadow slightly (0 4px 12px rgba(0,0,0,0.15)),
  // shift background color 5% lighter (brightness-105),
  // scale down to 0.98x on active click state for immediate tactile feedback.
  const microInteractionClasses =
    'inline-flex items-center justify-center transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:brightness-105 active:scale-[0.98] active:brightness-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none select-none text-center';

  const combinedClasses = `${microInteractionClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin mr-1" />
      ) : (
        icon && <span className="inline-flex shrink-0">{icon}</span>
      )}
      <span className="truncate whitespace-nowrap">{children}</span>
      {showArrow && !loading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a id={id} href={href} className={`group ${combinedClasses}`} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`group ${combinedClasses}`}
    >
      {content}
    </button>
  );
};
