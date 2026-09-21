import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subheadline?: string;
  align?: 'center' | 'left';
  className?: string;
  badgeVariant?: 'blue' | 'cyan' | 'red' | 'navy';
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subheadline,
  align = 'center',
  className = '',
  badgeVariant = 'blue',
  id
}) => {
  const badgeClasses = {
    blue: 'bg-sky-50 text-sky-700 border-sky-200/80 shadow-sm',
    cyan: 'bg-cyan-50 text-cyan-800 border-cyan-200/80 shadow-sm',
    red: 'bg-rose-50 text-rose-700 border-rose-200/80 shadow-sm',
    navy: 'bg-slate-100 text-slate-800 border-slate-200 shadow-sm'
  }[badgeVariant];

  const alignmentClasses =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div
      id={id}
      className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClasses} ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border ${badgeClasses}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 animate-pulse" />
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
        {title}
      </h2>

      {subheadline && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
          {subheadline}
        </p>
      )}
    </div>
  );
};
