import React from 'react';

interface SkeletonCardProps {
  lines?: number;
  hasImage?: boolean;
  hasBadge?: boolean;
  hasButton?: boolean;
  className?: string;
  id?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  lines = 3,
  hasImage = true,
  hasBadge = true,
  hasButton = true,
  className = '',
  id
}) => {
  return (
    <div
      id={id}
      className={`glass-panel rounded-2xl p-6 border border-white/80 shadow-sm animate-shimmer-pulse overflow-hidden relative ${className}`}
      aria-hidden="true"
    >
      {/* Top Badge & Status Skeleton */}
      {hasBadge && (
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 w-24 rounded-full shimmer-bg" />
          <div className="h-5 w-16 rounded-full shimmer-bg" />
        </div>
      )}

      {/* Image Skeleton Box */}
      {hasImage && (
        <div className="w-full h-44 rounded-xl shimmer-bg mb-5 shadow-inner" />
      )}

      {/* Title Placeholder */}
      <div className="h-6 w-3/4 rounded-md shimmer-bg mb-3" />

      {/* Subtitle / Description Lines */}
      <div className="space-y-2 mb-6">
        {Array.from({ length: lines }).map((_, idx) => (
          <div
            key={idx}
            className={`h-3.5 rounded shimmer-bg ${
              idx === lines - 1 ? 'w-4/5' : 'w-full'
            }`}
          />
        ))}
      </div>

      {/* Bottom Button / Meta Skeleton */}
      {hasButton && (
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="h-4 w-20 rounded shimmer-bg" />
          <div className="h-9 w-28 rounded-xl shimmer-bg" />
        </div>
      )}
    </div>
  );
};
