import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ChevronUp,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="bg-white px-3 sm:px-6 lg:px-10 pt-4 pb-6">
      <footer className="xclean-footer-card max-w-[1440px] mx-auto text-white rounded-[32px] sm:rounded-[36px] relative overflow-hidden pt-14 sm:pt-16 pb-0 shadow-2xl">
        
        {/* Subtle Wave Graphic on Bottom-Left from Xclean Demo 1 */}
        <div 
          className="absolute left-0 bottom-0 w-[460px] h-[320px] pointer-events-none opacity-30 select-none bg-contain bg-no-repeat bg-left-bottom z-0"
          style={{ backgroundImage: 'url(/footer-bg-img.png)' }}
        />

        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          
          {/* Top Newsletter & Logo Area matching media_1794570220643_61d3c852.png */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 sm:pb-14">
            
            {/* Left: Round Logo Badge from Xclean */}
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-300"
                title="North Shore Cleaning Systems, Inc."
              >
                <img 
                  src="/footer-logo.svg" 
                  alt="North Shore Clean" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md"
                />
              </Link>
            </div>

            {/* Right: Newsletter Title + Integrated Capsule Input */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-10 flex-1 justify-end">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold font-['Quicksand'] text-white leading-tight tracking-tight">
                Subscribe to Our <br className="hidden sm:inline" />
                Newsletter
              </h3>

              <div className="w-full sm:w-auto min-w-[280px] sm:min-w-[420px] max-w-[480px]">
                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs font-bold text-[#fba311] bg-white/10 px-6 py-4 rounded-full border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-[#fba311]" />
                    <span>Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="relative flex items-center w-full">
                    <input 
                      type="email" 
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter Your Email Address"
                      className="w-full h-[58px] sm:h-[64px] pl-6 sm:pl-8 pr-[160px] sm:pr-[180px] text-xs sm:text-sm text-[#001837] placeholder:text-gray-400 bg-white rounded-full focus:outline-none shadow-md"
                    />
                    <button 
                      type="submit" 
                      className="absolute right-1 sm:right-1.5 top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 bg-[#fba311] hover:bg-[#e5930b] text-white font-bold text-xs sm:text-sm px-5 sm:px-7 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 shadow group cursor-pointer"
                    >
                      <span>Subscribe Now</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Middle 4-Column Widgets Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pt-4 pb-12 sm:pb-16">
            
            {/* Col 1: Social Media Links (Directly under Logo) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-5">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-[#fba311] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-white hover:fill-[#fba311] transition-colors" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-[#fba311] transition-colors"
                  aria-label="Twitter / X"
                >
                  <svg className="w-3.5 h-3.5 fill-white hover:fill-[#fba311] transition-colors" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-[#fba311] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-white hover:fill-[#fba311] transition-colors" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-[#fba311] transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-white hover:fill-[#fba311] transition-colors" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Useful Link (Split into 2 sub-columns) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white font-['Quicksand']">
                Useful Link
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-[#b0c0d8]">
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="hover:text-[#fba311] transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-[#fba311] transition-colors">About</Link>
                  </li>
                  <li>
                    <Link to="/services" className="hover:text-[#fba311] transition-colors">Services</Link>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li>
                    <Link to="/specials" className="hover:text-[#fba311] transition-colors">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/faq" className="hover:text-[#fba311] transition-colors">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-[#fba311] transition-colors">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 3: Working Time */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white font-['Quicksand']">
                Working Time
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#b0c0d8]">
                <li>Mon - Fri: 9.00am - 5.00pm</li>
                <li>Saturday: 10.00am - 6.00pm</li>
                <li>Sunday Closed</li>
              </ul>
            </div>

            {/* Col 4: Say Hello */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white font-['Quicksand']">
                Say Hello
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-[#b0c0d8]">
                <div>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneRaw}`} 
                    className="hover:text-[#fba311] text-white font-medium transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="hover:text-[#fba311] transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Centered White Copyright Notch on Bottom Edge */}
          <div className="flex justify-center w-full pt-4">
            <div className="pbmit-footer-text-inner">
              <p className="text-xs sm:text-[13px] text-[#565656] font-medium m-0 whitespace-nowrap">
                Copyright © 2026 <span className="text-[#001837] font-semibold">North Shore Cleaning Systems, Inc.</span> All Rights Reserved.
              </p>
            </div>
          </div>

        </div>

        {/* Scroll-To-Top Button in Bottom Right Corner matching screenshot */}
        <button 
          onClick={scrollToTop} 
          className="absolute right-5 sm:right-8 bottom-4 sm:bottom-6 w-11 h-11 rounded-full bg-[#182844] border-2 border-[#fba311] text-[#fba311] hover:bg-[#fba311] hover:text-[#001837] flex items-center justify-center transition-all duration-300 shadow-xl group z-20 cursor-pointer"
          title="Back to top"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5] transition-transform group-hover:-translate-y-0.5" />
        </button>

      </footer>
    </div>
  );
};
