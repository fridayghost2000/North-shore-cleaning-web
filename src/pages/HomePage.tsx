import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Check, 
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQS, SPECIALS } from '../data/content';

// Animated Counter Component for Facts In Digits (FID)
const AnimatedCounter: React.FC<{ to: number; duration?: number }> = ({ to, duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutCubic curve
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * to));
            if (progress < 1) {
              animationFrameId = window.requestAnimationFrame(step);
            } else {
              setCount(to);
            }
          };
          animationFrameId = window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [to, duration]);

  return <span ref={ref}>{count}</span>;
};

export const HomePage: React.FC = () => {
  // Hero slider index (3 slides)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);


  // Interactive Cost Calculator Form state (Exact Xclean Demo 1)
  const [calcService, setCalcService] = useState('Choose a Service');
  const [calcCleanType, setCalcCleanType] = useState('Type of Clean');
  const [calcArea, setCalcArea] = useState('');
  const [calcName, setCalcName] = useState('');
  const [calcEmail, setCalcEmail] = useState('');
  const [calcSubmitted, setCalcSubmitted] = useState(false);
  const [calcQuote, setCalcQuote] = useState<{ low: number; high: number } | null>(null);

  const handleCostEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const area = parseInt(calcArea.replace(/[^0-9]/g, '')) || 3500;
    let rate = 0.16;
    if (calcService.includes('Floor')) rate = 0.32;
    if (calcService.includes('Medical')) rate = 0.22;
    if (calcService.includes('Post-Construction')) rate = 0.28;
    const mult = calcCleanType.includes('Deep') ? 1.35 : 1.0;
    const base = Math.round(area * rate * mult);
    setCalcQuote({
      low: Math.round(base * 0.9),
      high: Math.round(base * 1.15)
    });
    setCalcSubmitted(true);
  };

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Service slider state (3 cards visible at a time)
  const [serviceIndex, setServiceIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Testimonial slider state (2 cards visible on desktop, matching Xclean Demo 1)
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialItemsPerView, setTestimonialItemsPerView] = useState(2);

  useEffect(() => {
    const updateTestimonialItems = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 1024) {
          setTestimonialItemsPerView(1);
        } else {
          setTestimonialItemsPerView(2);
        }
      }
    };
    updateTestimonialItems();
    window.addEventListener('resize', updateTestimonialItems);
    return () => window.removeEventListener('resize', updateTestimonialItems);
  }, []);

  const maxTestimonialIndex = Math.max(0, TESTIMONIALS.length - testimonialItemsPerView);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev >= maxTestimonialIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev <= 0 ? maxTestimonialIndex : prev - 1));
  };

  useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          setItemsPerView(1);
        } else if (window.innerWidth < 1024) {
          setItemsPerView(2);
        } else {
          setItemsPerView(3);
        }
      }
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Hero Slides matching Xclean Demo 1 Screenshot
  const slides = [
    {
      eyebrow: "ULTIMATE CLEAN SOLUTIONS",
      title: "Cleaning made fun\nnot a chore!",
      subtitle: "Hire us! We are a professional cleaning company offering services.",
      image: "/slide-a-02.jpg",
      btnText: "Our Services",
      btnLink: "/services"
    },
    {
      eyebrow: "YOUR CLEAN, OUR GUARANTEE.",
      title: "Cleaning with a\npersonal touch",
      subtitle: "Hire us! We are a professional commercial cleaning company offering customized facility care.",
      image: "/slide-a-01.jpg",
      btnText: "Our Services",
      btnLink: "/services"
    },
    {
      eyebrow: "NEEDS PROFESSIONAL CLEANING?",
      title: "Let us do your\ndirty work",
      subtitle: "Commercial janitorial, high-gloss floor waxing, and medical sanitation across the North Shore.",
      image: "/slide-a-03.jpg",
      btnText: "Our Services",
      btnLink: "/services"
    }
  ];

  // Auto-play slider matching Smart Slider 3 (rotates every 8 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setSlideKey((k) => k + 1);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSelectSlide = (idx: number) => {
    setCurrentSlide(idx);
    setSlideKey((k) => k + 1);
  };


  const maxServiceIndex = Math.max(0, SERVICES.length - itemsPerView);
  const nextService = () => {
    setServiceIndex((prev) => (prev >= maxServiceIndex ? 0 : prev + 1));
  };
  const prevService = () => {
    setServiceIndex((prev) => (prev <= 0 ? maxServiceIndex : prev - 1));
  };

  // Custom equipment vector icons matching Xclean demo 1 squircle badges
  const renderServiceIcon = (id: string) => {
    switch (id) {
      case 'commercial-cleaning':
        return (
          <svg className="w-7 h-7 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 4h-4l-1 4h6l-1-4z" />
            <path d="M10 8v2a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7" />
            <path d="M10 4V2" />
            <path d="M16 6l3-1" />
            <path d="M17 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
          </svg>
        );
      case 'floor-stripping-waxing':
        return (
          <svg className="w-7 h-7 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v11" />
            <path d="M8 3h8" />
            <rect x="5" y="14" width="14" height="4" rx="2" />
            <ellipse cx="12" cy="20" rx="7" ry="2" />
          </svg>
        );
      case 'carpet-upholstery-cleaning':
        return (
          <svg className="w-7 h-7 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="7" cy="17" r="4" />
            <circle cx="7" cy="17" r="1.5" />
            <path d="M11 17h10" />
            <path d="M7 13V8a3 3 0 0 1 3-3h3a2 2 0 0 1 2 2v10" />
            <path d="M15 17l4 4" />
            <path d="M17 21h4" />
          </svg>
        );
      case 'medical-healthcare-cleaning':
        return (
          <svg className="w-7 h-7 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
        );
      case 'day-porter-services':
        return (
          <svg className="w-7 h-7 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 3l-6.5 6.5" />
            <path d="M11.5 9.5l3 3-5 5a2 2 0 0 1-2.8 0l-.2-.2a2 2 0 0 1 0-2.8l5-5z" />
            <path d="M6.5 17.5l-3 3a1 1 0 0 0 1 1.5h4.5l-2.5-4.5z" />
          </svg>
        );
      case 'post-construction-cleaning':
        return (
          <svg className="w-7 h-7 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="6" rx="1" />
            <path d="M12 10v10" />
            <path d="M9 20h6" />
            <path d="M7 10l-2 4" />
            <path d="M17 10l2 4" />
          </svg>
        );
      case 'industrial-warehouse-cleaning':
        return (
          <svg className="w-7 h-7 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M5 21V9l7-5 7 5v12" />
            <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
          </svg>
        );
      case 'window-power-washing':
      default:
        return (
          <svg className="w-7 h-7 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7h18" />
            <path d="M5 4h14" />
            <path d="M12 7v13" />
            <path d="M9 20h6" />
            <path d="M6 11l-3 3" />
            <path d="M18 11l3 3" />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col bg-white">
      
      {/* 1. HERO SLIDER + 3 HIGHLIGHT CARDS ON UNIFIED LIGHT GREY (#f0f2f4) FRAME (Exact Xclean Demo 1 Header-Hero-Cards Area) */}
      <div className="bg-[#f0f2f4] w-full pt-4 sm:pt-6 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-10">
        <div className="max-w-[1720px] mx-auto w-full space-y-6 sm:space-y-8">

          {/* HERO SLIDER SECTION (Exact 700px Height, Rounded 30px Container, Staggered Animations) */}
          <div className="relative rounded-[30px] sm:rounded-[32px] overflow-hidden min-h-[580px] sm:min-h-[660px] lg:h-[700px] flex items-center bg-[#001837] shadow-xl">
            
            {/* Background Image with animated Pan/Zoom matching Smart Slider 3 */}
            <div 
              key={`bg-${slideKey}`}
              className="absolute inset-0 bg-cover bg-center hero-slide-bg"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />

            {/* Left Gradient Overlay: Strong dark on left for high-contrast white text, clear & vibrant on the right for cleaner image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001837]/92 via-[#001837]/75 sm:via-[#001837]/45 via-60% to-transparent pointer-events-none" />

            {/* Hero Content with Staggered Keyframe Animations */}
            <div 
              key={`content-${slideKey}`}
              className="relative z-10 max-w-[850px] px-6 sm:px-14 lg:px-20 py-16 text-white space-y-6"
            >
              
              {/* 1. Eyebrow Tag with official double gold sparkle icon (Animation delay 0.3s) */}
              <div className="hero-ani-eyebrow flex items-center gap-3">
                <span className="text-xs sm:text-sm font-semibold tracking-[1px] uppercase text-white font-['Open_Sans']">
                  {slides[currentSlide].eyebrow}
                </span>
                <img 
                  src="/slide-a-icon.png" 
                  alt="sparkle" 
                  className="w-10 sm:w-12 h-auto object-contain inline-block hero-ani-icon" 
                />
              </div>

              {/* 2. Massive Heading (pbmit_slide_left Animation delay 0.9s, Pure White #ffffff) */}
              <h1 
                className="hero-ani-heading text-4xl sm:text-6xl lg:text-[72px] xl:text-[78px] font-bold font-['Quicksand'] leading-[1.04] !text-white tracking-tight"
                style={{ color: '#ffffff' }}
              >
                {slides[currentSlide].title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < slides[currentSlide].title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>

              {/* 3. Subtitle Paragraph (slide_up Animation delay 1.4s) */}
              <p className="hero-ani-subtitle text-base sm:text-lg text-white/90 font-['Open_Sans'] font-normal leading-relaxed max-w-lg">
                {slides[currentSlide].subtitle}
              </p>

              {/* 4. Orange Pill Button: Our Services ↗ (slide_up Animation delay 1.7s) */}
              <div className="hero-ani-btn pt-2">
                <Link 
                  to={slides[currentSlide].btnLink} 
                  className="inline-flex items-center gap-2.5 bg-[#fba311] hover:bg-[#001837] text-white font-['Quicksand'] font-bold text-base px-9 py-5 rounded-[50px] transition-all duration-300 shadow-lg shadow-[#fba311]/25 hover:shadow-xl hover:translate-y-[-2px] group"
                >
                  <span>{slides[currentSlide].btnText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>

            {/* Right-Edge Vertical Tab / Notch Slider Indicator matching Xclean Demo 1 */}
            <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-[#f0f2f4] py-8 px-3.5 rounded-l-[30px] shadow-xl z-20 flex-col items-center gap-3 border-y border-l border-white/60">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSlide(idx)}
                  className={`w-3 rounded-full transition-all duration-400 cursor-pointer ${
                    currentSlide === idx 
                      ? 'h-8 bg-[#fba311] shadow-sm' 
                      : 'h-3 bg-[#001837] opacity-60 hover:opacity-100 hover:scale-110'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile bottom slide dots */}
            <div className="sm:hidden absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-6 bg-[#fba311]' : 'w-2 bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* 2. THREE HIGHLIGHT CARDS (Directly under Hero on Same Light Grey Background, Matching Image 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            
            {/* Card 1 (Col span 4): Free Evaluation Of Your Cleaning Needs */}
            <div 
              className="lg:col-span-4 bg-white rounded-[30px] p-8 sm:p-9 shadow-sm relative overflow-hidden flex flex-col justify-between group card-hover-xclean min-h-[220px]"
              style={{ 
                backgroundImage: 'url(/icon-box-bg.jpg)', 
                backgroundPosition: 'center right', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover' 
              }}
            >
              <div className="relative z-10 space-y-3 max-w-[65%]">
                <div className="eyebrow-xclean">
                  <span>✦</span>
                  <span>FREE SERVICES</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Quicksand'] text-[#001837] leading-snug">
                  Free Evaluation Of Your Cleaning Needs
                </h3>
              </div>

              {/* Dark Navy Circle Arrow Button on Bottom Right */}
              <div className="relative z-10 pt-4">
                <Link 
                  to="/contact" 
                  className="w-11 h-11 rounded-full bg-[#001837] hover:bg-[#fba311] text-white flex items-center justify-center transition-all shadow-md group-hover:scale-105"
                  aria-label="Request Evaluation"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Card 2 (Col span 3): Solid Orange 520 + Card matching Image 2 */}
            <div className="lg:col-span-3 bg-[#fba311] rounded-[30px] p-8 sm:p-9 shadow-sm flex flex-col justify-between card-hover-xclean min-h-[220px] text-[#001837] relative overflow-hidden">
              <div className="flex items-baseline gap-2 relative z-10">
                <span className="text-5xl sm:text-6xl font-extrabold text-outline-white font-['Quicksand'] tracking-tight">
                  520
                </span>
                <span className="text-5xl sm:text-6xl font-black text-[#001837] font-['Quicksand']">
                  +
                </span>
              </div>

              <div className="pt-4 relative z-10">
                <p className="text-base sm:text-lg font-bold font-['Quicksand'] text-[#001837] leading-snug">
                  Professional and Experienced staff ready to help you
                </p>
              </div>
            </div>

            {/* Card 3 (Col span 5): Easy Booking & Fast Communication matching Image 2 */}
            <div 
              className="lg:col-span-5 bg-white rounded-[30px] p-8 sm:p-9 shadow-sm relative overflow-hidden flex flex-col justify-between group card-hover-xclean min-h-[220px]"
              style={{ 
                backgroundImage: 'url(/icon-box-bg-02.png)', 
                backgroundPosition: 'center right', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover' 
              }}
            >
              <div className="relative z-10 space-y-2 max-w-[65%]">
                <h3 className="text-xl sm:text-2xl font-bold font-['Quicksand'] text-[#fba311] leading-snug">
                  Easy Booking & Fast Communication
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Direct hotline & 2-hour quote turnaround.
                </p>
              </div>

              {/* Dark Navy Pill Button: Book Now ↗ */}
              <div className="relative z-10 pt-4">
                <Link 
                  to="/contact" 
                  className="bg-[#001837] hover:bg-[#fba311] text-white font-['Quicksand'] font-bold text-xs px-6 py-3 rounded-full transition-all duration-300 shadow-sm flex items-center gap-1.5 inline-flex hover:shadow-md"
                >
                  <span>Book Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3. WHY CHOOSE US (Exact Match to Reference Image 2: No clash, vacuum placed on the left, 3-line heading, plenty of space before marquee) */}
      <section className="pt-20 sm:pt-28 pb-28 sm:pb-36 px-4 sm:px-8 lg:px-12 max-w-[1720px] mx-auto w-full relative overflow-visible">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Left Column: Vacuum Illustration + 3-Line Heading + Outline Button */}
          <div className="lg:col-span-6 relative pt-2">
            
            {/* Official Canister Vacuum Illustration - positioned to the left of the content */}
            <div className="absolute -left-6 sm:-left-10 lg:-left-12 xl:-left-14 bottom-[-10px] lg:bottom-[-20px] pointer-events-none select-none z-0 hidden md:block">
              <img 
                src="/about-bg-icon.png" 
                alt="Vacuum Illustration" 
                className="h-[320px] sm:h-[360px] lg:h-[400px] w-auto object-contain opacity-40"
              />
            </div>

            {/* Text & Button with left offset so it sits cleanly beside the vacuum body, matching Reference Image 2 */}
            <div className="relative z-10 md:pl-28 lg:pl-36 xl:pl-44 space-y-6">
              
              {/* Eyebrow with Official Orange Vector Broom/Sweeper Icon matching Xclean Demo 1 */}
              <div className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 text-[#fba311] shrink-0 fill-[#fba311]" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19.78 4.22a1.5 1.5 0 0 0-2.12 0l-5.66 5.66 2.12 2.12 5.66-5.66a1.5 1.5 0 0 0 0-2.12l-.7-.7zM11.3 10.59l-2.12-2.12-1.41 1.41a1.5 1.5 0 0 0-.44 1.06v.38l-3.3 4.2a1.85 1.85 0 0 0 .28 2.58 1.85 1.85 0 0 0 2.58.28l4.2-3.3h.38c.4 0 .78-.16 1.06-.44l1.41-1.41-2.46-2.46z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#001837] font-['Quicksand']">
                  WHY CHOOSE US?
                </span>
              </div>

              {/* Exact 3-Line Crisp Heading without orphan words */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold font-['Quicksand'] text-[#001837] leading-[1.15] tracking-tight">
                <span className="block whitespace-nowrap">We work many fields to</span>
                <span className="block whitespace-nowrap">clean your surrounding</span>
                <span className="block">area</span>
              </h2>

              {/* Pill Outline Button: Know More ↗ */}
              <div className="pt-4 sm:pt-6">
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#001837] text-[#001837] font-['Quicksand'] font-bold text-sm hover:bg-[#001837] hover:text-white transition-all duration-300 group shadow-sm hover:shadow bg-white"
                >
                  <span>Know More</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* Right Column: Exact 2x2 Feature Grid matching Image 1 & 2 */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-10 lg:gap-y-12">
            
            {/* Feature 1: Experienced Staff */}
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-[20px] bg-[#f0f2f4] text-[#001837] flex items-center justify-center">
                {/* Person walking with mop / cleaning cart icon */}
                <svg className="w-8 h-8 text-[#001837]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="5" r="2" />
                  <path d="M7 21v-6l2-2 3 3v5" />
                  <path d="M12 11l-3-3H6v5" />
                  <path d="M17 12l2 2-3 3" />
                  <path d="M19 14l-5 5" />
                  <circle cx="19" cy="19" r="2" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold font-['Quicksand'] text-[#001837]">
                Experienced Staff
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-500 font-['Open_Sans'] leading-relaxed">
                Office Services Sweeping Mopping Kitchen Cleaning, Equipped with the most modern appliances Services
              </p>
            </div>

            {/* Feature 2: Natural Products */}
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-[20px] bg-[#f0f2f4] text-[#001837] flex items-center justify-center">
                {/* Feather duster / cleaning brush icon */}
                <svg className="w-8 h-8 text-[#001837]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4c2.5 0 5 2.5 5 5 0 3-2.5 6-6 7l-7 7-2-2 7-7c-1-3.5 2-6 5-6h3z" />
                  <path d="M15 9l-4 4" />
                  <path d="M18 6l-5 5" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold font-['Quicksand'] text-[#001837]">
                Natural Products
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-500 font-['Open_Sans'] leading-relaxed">
                cleaning and sanitizing may be the most important aspects of a clean and stored in a clean, sanitary manner
              </p>
            </div>

            {/* Feature 3: Fast Service */}
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-[20px] bg-[#f0f2f4] text-[#001837] flex items-center justify-center">
                {/* Cleaning machine / fast buffer equipment icon */}
                <svg className="w-8 h-8 text-[#001837]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 17h16" />
                  <path d="M4 17a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4" />
                  <path d="M8 13V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
                  <path d="M6 20h12" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold font-['Quicksand'] text-[#001837]">
                Fast Service
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-500 font-['Open_Sans'] leading-relaxed">
                We provide you the best service quality with best rate all the time no matter you're looking for residential or commercial
              </p>
            </div>

            {/* Feature 4: Best Equipment */}
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-[20px] bg-[#f0f2f4] text-[#001837] flex items-center justify-center">
                {/* Cleaning vacuum and spray kit icon */}
                <svg className="w-8 h-8 text-[#001837]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="6" height="10" rx="1" />
                  <path d="M8 11V7a2 2 0 0 1 2-2h1" />
                  <rect x="13" y="7" width="6" height="14" rx="2" />
                  <path d="M16 7V4" />
                  <circle cx="18" cy="12" r="1" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold font-['Quicksand'] text-[#001837]">
                Best Equipment
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-500 font-['Open_Sans'] leading-relaxed">
                We make sure that we had all the tools and equipment you need to provide high-quality service to our clients
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. GIANT RUNNING MARQUEE BANNER (Matching Xclean Demo 1 / Image 3: Exact pbmit marquee animation + hover liquid fill reveal) */}
      <section className="py-8 sm:py-14 bg-white overflow-hidden border-y border-gray-100 select-none">
        <div className="marquee-track-xclean whitespace-nowrap">
          {/* Track repeated twice for mathematical seamless continuous scroll */}
          {[
            { text: "Sweeping", solid: true },
            { text: "Cleaning", solid: false },
            { text: "Moping", solid: false },
            { text: "Janitorial", solid: true },
            { text: "Sanitation", solid: false },
            { text: "Vacuum", solid: false },
            { text: "Sweeping", solid: true },
            { text: "Cleaning", solid: false },
            { text: "Moping", solid: false },
            { text: "Janitorial", solid: true },
            { text: "Sanitation", solid: false },
            { text: "Vacuum", solid: false },
            { text: "Sweeping", solid: true },
            { text: "Cleaning", solid: false },
            { text: "Moping", solid: false },
            { text: "Janitorial", solid: true },
            { text: "Sanitation", solid: false },
            { text: "Vacuum", solid: false },
            { text: "Sweeping", solid: true },
            { text: "Cleaning", solid: false },
            { text: "Moping", solid: false },
            { text: "Janitorial", solid: true },
            { text: "Sanitation", solid: false },
            { text: "Vacuum", solid: false },
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <span 
                data-text={item.text}
                className={`marquee-word-xclean text-6xl sm:text-7xl lg:text-[88px] font-bold tracking-tight ${
                  item.solid ? 'marquee-word-solid' : 'marquee-word-outline'
                }`}
              >
                {item.text}
              </span>
              <span className="text-3xl sm:text-5xl text-[#fba311] px-6 sm:px-10 select-none shrink-0">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 5. WHO WE ARE (Exact Replica of Xclean Demo 1 / Image 1: Scaled-up High-Impact Content & Gauges) */}
      <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-12 max-w-[1720px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Exact Full-Frame Cleaning Imagery matching Image 1 */}
          <div className="lg:col-span-6 relative h-full">
            <div className="rounded-[30px] sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white h-full">
              <img 
                src="/sticky-img-about.jpg" 
                alt="North Shore Clean Staff" 
                className="w-full h-[580px] sm:h-[660px] lg:h-[720px] object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Scaled-up Eyebrow + Heading + Content + Large Circular Gauges + Subheading + Checkmarks */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Eyebrow with Orange Vector Broom Icon */}
            <div className="flex items-center gap-2.5">
              <svg 
                className="w-5 h-5 text-[#fba311] shrink-0 fill-[#fba311]" 
                viewBox="0 0 24 24"
              >
                <path d="M19.78 4.22a1.5 1.5 0 0 0-2.12 0l-5.66 5.66 2.12 2.12 5.66-5.66a1.5 1.5 0 0 0 0-2.12l-.7-.7zM11.3 10.59l-2.12-2.12-1.41 1.41a1.5 1.5 0 0 0-.44 1.06v.38l-3.3 4.2a1.85 1.85 0 0 0 .28 2.58 1.85 1.85 0 0 0 2.58.28l4.2-3.3h.38c.4 0 .78-.16 1.06-.44l1.41-1.41-2.46-2.46z" />
              </svg>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#001837] font-['Quicksand']">
                WHO WE ARE
              </span>
            </div>

            {/* Main Heading - Scaled up */}
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-bold font-['Quicksand'] text-[#001837] leading-[1.12] tracking-tight">
              Most awarded cleaning company since 1995.
            </h2>

            {/* Primary Paragraph - Scaled up */}
            <p className="text-base sm:text-[17px] text-gray-600 font-['Open_Sans'] leading-[1.7] max-w-2xl">
              We carefully screen all of our cleaners, so you can rest assured that your facility receives the absolute highest quality of service providing. Headquartered at 100 Cummings Center in Beverly, Massachusetts with direct owner supervision and no long-term contracts.
            </p>

            {/* TWO LARGE CIRCULAR PROGRESS GAUGES (85% & 70%) MATCHING IMAGE 1 */}
            <div className="flex items-center gap-8 sm:gap-14 pt-3 pb-3">
              
              {/* Gauge 1: 85% Office Cleaning */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 90 90">
                    <circle 
                      cx="45" 
                      cy="45" 
                      r="38" 
                      stroke="#f0f2f4" 
                      strokeWidth="4" 
                      fill="none" 
                    />
                    <circle 
                      cx="45" 
                      cy="45" 
                      r="38" 
                      stroke="#fba311" 
                      strokeWidth="4" 
                      strokeDasharray="238.76" 
                      strokeDashoffset="35.8" 
                      strokeLinecap="round" 
                      fill="none" 
                    />
                  </svg>
                  <span className="absolute font-bold font-['Quicksand'] text-2xl sm:text-3xl text-[#001837]">
                    85<span className="text-sm font-semibold align-top">%</span>
                  </span>
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-bold font-['Quicksand'] text-[#001837] leading-snug">
                  Office<br />Cleaning
                </div>
              </div>

              {/* Gauge 2: 70% Commercial Janitorial */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 90 90">
                    <circle 
                      cx="45" 
                      cy="45" 
                      r="38" 
                      stroke="#f0f2f4" 
                      strokeWidth="4" 
                      fill="none" 
                    />
                    <circle 
                      cx="45" 
                      cy="45" 
                      r="38" 
                      stroke="#fba311" 
                      strokeWidth="4" 
                      strokeDasharray="238.76" 
                      strokeDashoffset="71.6" 
                      strokeLinecap="round" 
                      fill="none" 
                    />
                  </svg>
                  <span className="absolute font-bold font-['Quicksand'] text-2xl sm:text-3xl text-[#001837]">
                    70<span className="text-sm font-semibold align-top">%</span>
                  </span>
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-bold font-['Quicksand'] text-[#001837] leading-snug">
                  Commercial<br />Janitorial
                </div>
              </div>

            </div>

            {/* Subtle Divider Line */}
            <div className="border-t border-gray-200/80 my-4" />

            {/* Sub-heading - Scaled up */}
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold font-['Quicksand'] text-[#001837]">
              Don’t Bother Yourself with Facility Maintenance
            </h3>

            {/* Secondary Paragraph - Scaled up */}
            <p className="text-sm sm:text-base text-gray-600 font-['Open_Sans'] leading-relaxed max-w-2xl">
              We carefully screen all of our cleaners, so you can rest assured that your commercial facility would receive the absolute highest quality of service providing.
            </p>

            {/* Two Checkmark Bullet Items with Orange Checkmarks - Scaled up */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3.5">
                <Check className="w-5 h-5 text-[#fba311] shrink-0 mt-0.5 stroke-[3]" />
                <span className="text-sm sm:text-[15px] font-medium text-gray-700 font-['Open_Sans'] leading-relaxed">
                  Performers are Selected and Trained to deliver rigorous hospital-grade sanitization.
                </span>
              </div>
              <div className="flex items-start gap-3.5">
                <Check className="w-5 h-5 text-[#fba311] shrink-0 mt-0.5 stroke-[3]" />
                <span className="text-sm sm:text-[15px] font-medium text-gray-700 font-['Open_Sans'] leading-relaxed">
                  Cleaners are Monitored, Including In-Person Owner Walkthroughs by Jerry Sheehan.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. OUR SERVICES (Exact Xclean Demo 1 Replicated 3-Card Carousel) */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
          
          {/* Section Header: Eyebrow + 2-line Heading + Top-Right Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
            <div>
              {/* Eyebrow with Solid Orange Broom Vector */}
              <div className="flex items-center gap-2 mb-2.5">
                <svg className="w-5 h-5 text-[#fba311] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.414 4.586a2 2 0 0 0-2.828 0L9.5 11.672l-1.086-1.086a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l5.656 5.657a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414L13.398 15.172l7.086-7.086a2 2 0 0 0 0-2.828l-1.07-1.072zM5.5 16.5l-3 4.5a1 1 0 0 0 1 1.5h6l-4-6z" />
                </svg>
                <span className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#001837] font-['Quicksand']">
                  OUR SERVICES
                </span>
              </div>

              {/* Exact 2-Line Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-['Quicksand'] text-[#001837] leading-[1.18] tracking-tight">
                We work many fields to clean<br className="hidden sm:inline" /> your surrounding area
              </h2>
            </div>

            {/* Slider Navigation Buttons (Exact Xclean Capsule Pill with < | >) */}
            <div className="inline-flex items-center bg-[#001837] rounded-full overflow-hidden shadow-md shrink-0 self-start md:self-end">
              <button 
                onClick={prevService} 
                aria-label="Previous Service"
                className="w-12 h-11 sm:h-12 flex items-center justify-center text-white hover:text-[#fba311] hover:bg-[#09042d] transition-all cursor-pointer focus:outline-none pl-1"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <span className="text-white/30 text-sm select-none">|</span>
              <button 
                onClick={nextService} 
                aria-label="Next Service"
                className="w-12 h-11 sm:h-12 flex items-center justify-center text-white hover:text-[#fba311] hover:bg-[#09042d] transition-all cursor-pointer focus:outline-none pr-1"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Carousel Viewport (Showing 3 cards on desktop, 2 on tablet, 1 on mobile) */}
          <div className="relative overflow-hidden w-full -mx-3.5 px-3.5 py-2">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${serviceIndex * (100 / itemsPerView)}%)` }}
            >
              {SERVICES.map((service) => (
                <div 
                  key={service.id} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3.5"
                >
                  {/* Service Style 1 Card (Exact match to media_1794560257986_e5b2055f.jpg) */}
                  <div className="bg-white rounded-[30px] p-4 sm:p-5 border border-[#001837]/12 shadow-[0_4px_25px_rgba(0,24,55,0.06)] hover:shadow-[0_20px_45px_rgba(0,24,55,0.12)] transition-all duration-300 flex flex-col justify-between group h-full">
                    
                    {/* Top Image Container with Inverted Cutout Arch Notch */}
                    <div className="pbmit-service-image-wrapper">
                      <div className="overflow-hidden rounded-[26px] aspect-[4/3] w-full bg-gray-100">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>

                      {/* Signature Inverted Curved Button Notch */}
                      <div className="pbmit-service-btn-wrapper">
                        <Link
                          to={`/services/${service.slug}`}
                          aria-label={`View details for ${service.title}`}
                          className="pbmit-service-btn"
                        >
                          <ChevronRight className="w-5 h-5 text-white stroke-[2.5]" />
                        </Link>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="pt-8 pb-2 px-1 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-['Quicksand'] font-bold text-[22px] text-[#001837] group-hover:text-[#fba311] transition-colors leading-snug">
                          <Link to={`/services/${service.slug}`}>
                            {service.title}
                          </Link>
                        </h3>
                        <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2 mt-2 font-['Open_Sans']">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Bottom Equipment Icon Squircle */}
                      <div className="pt-6 mt-auto">
                        <div className="w-14 h-14 rounded-2xl bg-[#f0f2f4] group-hover:bg-[#fba311]/15 text-[#001837] group-hover:text-[#fba311] flex items-center justify-center transition-colors">
                          {renderServiceIcon(service.id)}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Decorative Leaning Broom Illustration on Bottom-Right (Fully visible, not cropped) */}
        <img 
          src="/service-bg-icon.png" 
          alt="Decorative Broom" 
          className="absolute bottom-0 right-0 sm:right-2 lg:right-4 w-[160px] lg:w-[195px] xl:w-[215px] pointer-events-none opacity-80 select-none hidden md:block z-0" 
        />
      </section>

      {/* 6.5. FUN AND FACTS (Exact Xclean Demo 1 FID Style 2 Section matching media_1794562019593_d7e3bec9.png) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          
          {/* Centered Eyebrow with Divider Line */}
          <div className="relative flex items-center justify-center mb-14 sm:mb-20">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative bg-white px-8">
              <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.24em] text-[#565656] font-['Quicksand']">
                FUN AND FACTS
              </span>
            </div>
          </div>

          {/* 4 Stat Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10">
            
            {/* 1. 250+ */}
            <div className="flex flex-col">
              <div className="flex items-baseline font-['Quicksand'] font-bold text-6xl sm:text-7xl lg:text-[85px] xl:text-[98px] leading-none mb-3">
                <span className="xclean-fid-number">
                  <AnimatedCounter to={250} />
                </span>
                <span className="xclean-fid-suffix ml-0.5 text-5xl sm:text-6xl lg:text-[75px] xl:text-[85px] leading-none text-[#001837]">
                  +
                </span>
              </div>
              <p className="text-[#565656] text-[15px] sm:text-[16px] leading-relaxed font-['Open_Sans']">
                Professional and Experienced staff ready to help you anytime.
              </p>
            </div>

            {/* 2. 14m */}
            <div className="flex flex-col">
              <div className="flex items-baseline font-['Quicksand'] font-bold text-6xl sm:text-7xl lg:text-[85px] xl:text-[98px] leading-none mb-3">
                <span className="xclean-fid-number">
                  <AnimatedCounter to={14} />
                </span>
                <span className="xclean-fid-suffix ml-0.5 text-5xl sm:text-6xl lg:text-[75px] xl:text-[85px] leading-none text-[#001837]">
                  m
                </span>
              </div>
              <p className="text-[#565656] text-[15px] sm:text-[16px] leading-relaxed font-['Open_Sans']">
                Proving all type of cleaning solutions every small and big businesses
              </p>
            </div>

            {/* 3. 460+ */}
            <div className="flex flex-col">
              <div className="flex items-baseline font-['Quicksand'] font-bold text-6xl sm:text-7xl lg:text-[85px] xl:text-[98px] leading-none mb-3">
                <span className="xclean-fid-number">
                  <AnimatedCounter to={460} />
                </span>
                <span className="xclean-fid-suffix ml-0.5 text-5xl sm:text-6xl lg:text-[75px] xl:text-[85px] leading-none text-[#001837]">
                  +
                </span>
              </div>
              <p className="text-[#565656] text-[15px] sm:text-[16px] leading-relaxed font-['Open_Sans']">
                We start with a thorough detail clean throughout your house.
              </p>
            </div>

            {/* 4. 30k */}
            <div className="flex flex-col">
              <div className="flex items-baseline font-['Quicksand'] font-bold text-6xl sm:text-7xl lg:text-[85px] xl:text-[98px] leading-none mb-3">
                <span className="xclean-fid-number">
                  <AnimatedCounter to={30} />
                </span>
                <span className="xclean-fid-suffix ml-0.5 text-5xl sm:text-6xl lg:text-[75px] xl:text-[85px] leading-none text-[#001837]">
                  k
                </span>
              </div>
              <p className="text-[#565656] text-[15px] sm:text-[16px] leading-relaxed font-['Open_Sans']">
                We hold a successful track record of satisfying our customers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. INTERACTIVE COST CALCULATOR (Exact Xclean Demo 1 Replicated matching media_1794562417227_34fb08ce.jpg & media_1794563200876_8ecaf759.png) */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Full Outer Rounded Card with background cleaner photo */}
        <div 
          className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden min-h-[580px] lg:min-h-[640px] bg-cover bg-no-repeat shadow-2xl flex items-center p-4 sm:p-6 lg:p-10"
          style={{ 
            backgroundImage: `url('/contact-form-bg.jpg')`,
            backgroundPosition: 'center right'
          }}
        >
          {/* Subtle mobile dark gradient so text remains readable on small screens where photo is beneath */}
          <div className="absolute inset-0 bg-black/40 lg:bg-transparent pointer-events-none" />

          {/* Left Navy Form Container with Mask Cutout */}
          <div className="w-full lg:w-[64%] xl:w-[58%] relative z-10">
            <div className="pbmit-appointment-form pbmit-appointment-form-inner relative text-white">
              
              {/* Form Content Wrapper (z-10 ensures it renders above the mask pseudo-element) */}
              <div className="pbmit-appointment-form-content z-10">
                
                {/* Header */}
                <div className="mb-8">
                  {/* Eyebrow with Solid Orange Broom Vector */}
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-[#fba311] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.414 4.586a2 2 0 0 0-2.828 0L9.5 11.672l-1.086-1.086a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l5.656 5.657a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414L13.398 15.172l7.086-7.086a2 2 0 0 0 0-2.828l-1.07-1.072zM5.5 16.5l-3 4.5a1 1 0 0 0 1 1.5h6l-4-6z" />
                    </svg>
                    <span className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.16em] text-white font-['Quicksand']">
                      COST CALCULATOR
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Quicksand'] text-white leading-[1.15]">
                    Get your free estimate!
                  </h2>
                </div>

                {/* Form Grid */}
                <form id="cost-calc-form" onSubmit={handleCostEstimateSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Row 1: Choose a Service + Type of Clean */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <select
                        value={calcService}
                        onChange={(e) => setCalcService(e.target.value)}
                        className="w-full bg-[#001837]/60 lg:bg-transparent border border-white/20 hover:border-white/40 focus:border-white/80 rounded-full px-6 py-3.5 sm:py-4 text-sm text-white focus:outline-none appearance-none cursor-pointer transition-colors"
                      >
                        <option value="Choose a Service" className="bg-[#001837] text-white">Choose a Service</option>
                        <option value="Commercial & Office Cleaning" className="bg-[#001837] text-white">Commercial & Office Cleaning</option>
                        <option value="Floor Stripping & Waxing" className="bg-[#001837] text-white">Floor Stripping & Waxing</option>
                        <option value="Carpet & Upholstery Cleaning" className="bg-[#001837] text-white">Carpet & Upholstery Cleaning</option>
                        <option value="Medical & Healthcare Facilities" className="bg-[#001837] text-white">Medical & Healthcare Facilities</option>
                        <option value="Day Porter Services" className="bg-[#001837] text-white">Day Porter Services</option>
                        <option value="Post-Construction Clean-Up" className="bg-[#001837] text-white">Post-Construction Clean-Up</option>
                        <option value="Window & Pressure Washing" className="bg-[#001837] text-white">Window & Pressure Washing</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-white/70 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <div className="relative">
                      <select
                        value={calcCleanType}
                        onChange={(e) => setCalcCleanType(e.target.value)}
                        className="w-full bg-[#001837]/60 lg:bg-transparent border border-white/20 hover:border-white/40 focus:border-white/80 rounded-full px-6 py-3.5 sm:py-4 text-sm text-white focus:outline-none appearance-none cursor-pointer transition-colors"
                      >
                        <option value="Type of Clean" className="bg-[#001837] text-white">Type of Clean</option>
                        <option value="Routine Commercial Maintenance" className="bg-[#001837] text-white">Routine Commercial Maintenance</option>
                        <option value="Deep Disinfection & Scrub" className="bg-[#001837] text-white">Deep Disinfection & Scrub</option>
                        <option value="High-Gloss Floor Restoration" className="bg-[#001837] text-white">High-Gloss Floor Restoration</option>
                        <option value="Terminal Healthcare Protocol" className="bg-[#001837] text-white">Terminal Healthcare Protocol</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-white/70 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 2: Total Floor Area + Your Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={calcArea}
                        onChange={(e) => setCalcArea(e.target.value)}
                        placeholder="Total Floor Area (sq ft)"
                        className="w-full bg-[#001837]/60 lg:bg-transparent border border-white/20 hover:border-white/40 focus:border-white/80 rounded-full px-6 py-3.5 sm:py-4 text-sm text-white placeholder:text-[#7892ae] focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value={calcName}
                        onChange={(e) => setCalcName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full bg-[#001837]/60 lg:bg-transparent border border-white/20 hover:border-white/40 focus:border-white/80 rounded-full px-6 py-3.5 sm:py-4 text-sm text-white placeholder:text-[#7892ae] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Email Address + Descriptive Text */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div className="relative">
                      <input
                        type="email"
                        value={calcEmail}
                        onChange={(e) => setCalcEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full bg-[#001837]/60 lg:bg-transparent border border-white/20 hover:border-white/40 focus:border-white/80 rounded-full px-6 py-3.5 sm:py-4 text-sm text-white placeholder:text-[#7892ae] focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="px-1 sm:px-2">
                      <p className="text-[13px] sm:text-[14px] italic text-[#d4e0f0] font-['Open_Sans'] leading-snug">
                        Submit this information and we will send you the cost for the service.
                      </p>
                    </div>
                  </div>

                  {/* Instant Calculation Output Toast */}
                  {calcSubmitted && calcQuote && (
                    <div className="mt-4 p-4 rounded-2xl bg-white/10 border border-[#fba311]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#fba311] block">
                          Estimated Ballpark Rate
                        </span>
                        <span className="text-2xl font-bold font-['Quicksand'] text-white">
                          ${calcQuote.low.toLocaleString()} - ${calcQuote.high.toLocaleString()} / mo
                        </span>
                      </div>
                      <span className="text-xs text-slate-300">
                        Jerry Sheehan will follow up with {calcEmail || 'your email'} shortly.
                      </span>
                    </div>
                  )}

                  {/* Mobile-Only Submit Button (in flow) */}
                  <div className="pt-4 block lg:hidden">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#fba311] text-[#001837] hover:text-white px-8 py-3.5 rounded-full font-['Quicksand'] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer group"
                    >
                      <span>Get Cost Estimate</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </form>

              </div>

              {/* Desktop Submit Button: positioned directly inside the cutout notch */}
              <div className="hidden lg:block absolute bottom-[20px] right-[85px] xl:right-[100px] z-30">
                <button
                  type="submit"
                  form="cost-calc-form"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-[#fba311] text-[#001837] hover:text-white px-9 py-4 rounded-full font-['Quicksand'] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer group"
                >
                  <span>Get Cost Estimate</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Exact Xclean Demo 1 Replicated matching media_1794568092257_aa5461af.png) */}
      <section className="py-20 lg:py-28 bg-[#fdfdfd] relative overflow-hidden">
        {/* Floating background bubbles on the left (matches Xclean Demo 1) */}
        <div className="absolute left-0 bottom-4 sm:bottom-10 pointer-events-none select-none z-0">
          <img 
            src="/testimonial-bg-icon.png" 
            alt="" 
            className="w-40 sm:w-56 lg:w-72 opacity-80" 
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
          
          {/* Header Row: Left-aligned Title + Right-aligned Slider Capsule */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              {/* Eyebrow with Solid Orange Broom Vector */}
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#fba311] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.414 4.586a2 2 0 0 0-2.828 0L9.5 11.672l-1.086-1.086a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l5.656 5.657a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414L13.398 15.172l7.086-7.086a2 2 0 0 0 0-2.828l-1.07-1.072zM5.5 16.5l-3 4.5a1 1 0 0 0 1 1.5h6l-4-6z" />
                </svg>
                <span className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#fba311] font-['Quicksand']">
                  TESTIMONIALS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-['Quicksand'] text-[#001837] leading-[1.15] tracking-tight">
                Trusted by thousand of <br className="hidden sm:inline" />people &amp; companies.
              </h2>
            </div>

            {/* Slider Capsule Pill Navigation (< | >) */}
            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              <div className="inline-flex items-center bg-[#001837] text-white rounded-full p-1 shadow-md">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonials"
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-white/20 select-none text-xs px-0.5">|</span>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next Testimonials"
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Slider Carousel (2 items per view on desktop) */}
          <div className="overflow-hidden -mx-3 sm:-mx-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${testimonialIndex * (100 / testimonialItemsPerView)}%)`
              }}
            >
              {TESTIMONIALS.map((item, idx) => (
                <div 
                  key={idx}
                  className="w-full lg:w-1/2 shrink-0 px-3 sm:px-4"
                >
                  <div className="pbmit-testimonial-style-2">
                    
                    {/* Top Section: Orange Quote Icon + Text */}
                    <div>
                      {/* Bold Orange Quotation Icon */}
                      <div className="text-[#fba311] mb-2 sm:mb-3">
                        <svg className="w-10 h-10 sm:w-11 sm:h-11 fill-current" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <blockquote className="pbmit-testimonial-text">
                        “{item.quote}”
                      </blockquote>
                    </div>

                    {/* Bottom Author Info */}
                    <div className="pt-2 pb-1">
                      <h3 className="text-xl sm:text-[22px] font-bold font-['Quicksand'] text-[#001837] leading-tight">
                        {item.author}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#787878] font-['Open_Sans'] mt-1">
                        {item.role}{item.company ? ` • ${item.company}` : ''}
                      </p>
                    </div>

                    {/* Signature Inverted Fillet Avatar Notch */}
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img 
                          src={item.avatar || "/testimonials/testimonial-img-01.jpg"} 
                          alt={item.author} 
                          className="w-16 h-16 rounded-full object-cover shadow-sm"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 9. PRICING TABLE (Exact Xclean Demo 1 Replicated matching media_1794569233249_ddc23a43.png) */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Full Outer Rounded Light Card */}
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#f4f5f8] overflow-hidden p-6 sm:p-10 lg:p-14 xl:p-16">
          
          {/* Background Bucket Illustration on the right (matches Xclean Demo 1) */}
          <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0 opacity-80">
            <img 
              src="/priceing-bg-icon.png" 
              alt="" 
              className="w-56 sm:w-72 lg:w-96 translate-x-8 translate-y-8 lg:translate-x-4 lg:translate-y-4" 
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Column 1: Small Business (White Card) */}
            <div className="lg:col-span-4">
              <div className="xclean-ptable-card bg-white shadow-sm">
                <div className="pbmit-head-wrap border-b border-gray-100">
                  <h3 className="text-lg font-bold font-['Quicksand'] text-[#001837] mb-2">
                    Small Business
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-[#001837] font-['Quicksand']">$</span>
                    <span className="text-5xl sm:text-6xl font-bold text-[#001837] font-['Quicksand'] tracking-tight">299</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 font-['Quicksand'] ml-2">/ Per Month</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-3.5 pb-4">
                  <li className="flex items-center gap-3 text-sm text-[#565656] font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#001837] shrink-0" strokeWidth={2.5} />
                    <span>Custom schedules everyday</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#565656] font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#001837] shrink-0" strokeWidth={2.5} />
                    <span>Desks and workstations cleaning</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#565656] font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#001837] shrink-0" strokeWidth={2.5} />
                    <span>Washrooms cleaning</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#565656] font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#001837] shrink-0" strokeWidth={2.5} />
                    <span>Floor cleaning</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#565656] font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#001837] shrink-0" strokeWidth={2.5} />
                    <span>Waiting area cleaning</span>
                  </li>
                </ul>

                {/* Bottom Cutout Notch Button */}
                <div className="pbmit-price-btn-wrap">
                  <Link
                    to="/contact?plan=small-business"
                    className="inline-flex items-center gap-2.5 bg-[#001837] hover:bg-[#fba311] text-white px-8 py-3.5 sm:py-4 rounded-full font-['Quicksand'] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group whitespace-nowrap"
                  >
                    <span>Purchase Now</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2: Large Business (Featured - Dark Navy Card #001837) */}
            <div className="lg:col-span-4">
              <div className="xclean-ptable-card bg-[#001837] shadow-xl text-white">
                <div className="pbmit-head-wrap border-b border-white/15">
                  <h3 className="text-lg font-bold font-['Quicksand'] text-white mb-2">
                    Large Business
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-white font-['Quicksand']">$</span>
                    <span className="text-5xl sm:text-6xl font-bold text-white font-['Quicksand'] tracking-tight">350</span>
                    <span className="text-xs sm:text-sm font-semibold text-white/70 font-['Quicksand'] ml-2">/ Per Month</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-3.5 pb-4">
                  <li className="flex items-center gap-3 text-sm text-gray-200 font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#fba311] shrink-0" strokeWidth={2.5} />
                    <span>Custom schedules everyday</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200 font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#fba311] shrink-0" strokeWidth={2.5} />
                    <span>Desks and workstations cleaning</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200 font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#fba311] shrink-0" strokeWidth={2.5} />
                    <span>Washrooms cleaning</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200 font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#fba311] shrink-0" strokeWidth={2.5} />
                    <span>Floor cleaning</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200 font-['Open_Sans']">
                    <Check className="w-4 h-4 text-[#fba311] shrink-0" strokeWidth={2.5} />
                    <span>Waiting area cleaning</span>
                  </li>
                </ul>

                {/* Bottom Cutout Notch Button */}
                <div className="pbmit-price-btn-wrap">
                  <Link
                    to="/contact?plan=large-business"
                    className="inline-flex items-center gap-2.5 bg-[#fba311] hover:bg-white text-white hover:text-[#001837] px-8 py-3.5 sm:py-4 rounded-full font-['Quicksand'] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group whitespace-nowrap"
                  >
                    <span>Purchase Now</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 3: Section Heading & Content on the Right */}
            <div className="lg:col-span-4 pl-0 lg:pl-6 space-y-4">
              {/* Eyebrow with Solid Orange Broom Vector */}
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#fba311] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.414 4.586a2 2 0 0 0-2.828 0L9.5 11.672l-1.086-1.086a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l5.656 5.657a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414L13.398 15.172l7.086-7.086a2 2 0 0 0 0-2.828l-1.07-1.072zM5.5 16.5l-3 4.5a1 1 0 0 0 1 1.5h6l-4-6z" />
                </svg>
                <span className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#fba311] font-['Quicksand']">
                  PRICING TABLE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Quicksand'] text-[#001837] leading-[1.15] tracking-tight">
                The best pricing to help you!
              </h2>

              <p className="text-sm sm:text-[15px] text-[#565656] leading-relaxed font-['Open_Sans'] pt-2">
                We carefully screen all of our cleaners, so you can rest assured that your commercial facility receives the absolute highest quality of service providing.
              </p>

              {/* Promotional Specials Callout Tags */}
              <div className="pt-4 flex flex-wrap gap-2">
                {SPECIALS.map((sp) => (
                  <div 
                    key={sp.id}
                    className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-['Quicksand'] text-[#001837] shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#fba311]" />
                    <span className="font-bold">{sp.discount}</span>
                    <span className="text-gray-500 font-mono text-[11px]">({sp.code})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. QUICK FAQ ACCORDION */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 w-full">
          <div className="text-center mb-12">
            <div className="eyebrow-xclean justify-center">
              <span>✦</span>
              <span>FAQS</span>
            </div>
            <h2 className="text-3xl font-bold font-['Quicksand'] text-[#001837] mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 4).map((faq, idx) => (
              <div 
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#001837] font-['Quicksand'] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#fba311] transition-transform duration-300 shrink-0 ${
                    openFaqIndex === idx ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 bg-white leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
