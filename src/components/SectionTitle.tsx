import { memo } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-5 sm:mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1.5 sm:mb-2">{title}</h2>
      <div className={`w-12 sm:w-16 h-1 rounded-full ${centered ? 'mx-auto' : ''} mb-2 sm:mb-3`} style={{ background: 'linear-gradient(90deg, #1F7A4D 0%, #2E8B57 100%)' }} />
      {subtitle && <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-sm">{subtitle}</p>}
    </div>
  );
}

export default memo(SectionTitle);
