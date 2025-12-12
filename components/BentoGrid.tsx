import React from 'react';
import { Reveal } from './Reveal';

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  span?: 1 | 2 | 3; // Horizontal span
  rowSpan?: 1 | 2;  // Vertical span
  delay?: number;
}

export const BentoItem: React.FC<BentoItemProps> = ({ 
  children, 
  className = '', 
  span = 1, 
  rowSpan = 1,
  delay = 0 
}) => {
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-3xl 
        glass-premium transition-all duration-500
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10
        ${span === 2 ? 'md:col-span-2' : 'md:col-span-1'}
        ${span === 3 ? 'md:col-span-3' : ''}
        ${rowSpan === 2 ? 'md:row-span-2' : 'md:row-span-1'}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </div>
  );
};

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  );
};
