import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export const PageBanner: React.FC<BreadcrumbsProps> = ({ 
  title, 
  subtitle, 
  breadcrumbs = [] 
}) => {
  return (
    <div className="relative bg-[#001837] py-20 lg:py-24 text-white overflow-hidden">
      {/* Background overlay pattern matching Xclean titlebar */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001837] via-[#001837]/90 to-[#09042d]/80" />

      {/* Decorative Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fba311] via-[#fba311]/50 to-transparent" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 z-10">
        <div>
          {subtitle && (
            <span className="inline-block text-xs uppercase font-bold text-[#fba311] tracking-widest mb-2">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Quicksand'] text-white">
            {title}
          </h1>
        </div>

        {/* Breadcrumb nav matching Xclean titlebar breadcrumb typography */}
        <nav className="flex items-center justify-center sm:justify-end gap-2 text-xs font-semibold text-gray-300">
          <Link to="/" className="flex items-center gap-1 hover:text-[#fba311] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((b, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-[#fba311]" />
              {b.path ? (
                <Link to={b.path} className="hover:text-[#fba311] transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-[#fba311]">{b.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

