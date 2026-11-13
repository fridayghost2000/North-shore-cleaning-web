import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services', hasDropdown: true },
    { label: 'SPECIALS', path: '/specials' },
    { label: 'FAQ', path: '/faq' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'CONTACT US', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full relative z-50 bg-[#f0f2f4]">
      {/* Floating White Main Navbar Island Matching Xclean Demo 1 Header (Height: 100px, border-radius: 30px, on #f0f2f4 background) */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-50 bg-[#f0f2f4]/95 backdrop-blur-md px-4 sm:px-8 lg:px-10 py-3 shadow-sm' 
          : 'pt-6 sm:pt-8 px-4 sm:px-8 lg:px-10 pb-0'
      }`}>
        <div className={`w-full max-w-[1720px] mx-auto bg-white rounded-[30px] h-[95px] sm:h-[100px] shadow-sm flex items-center justify-between px-6 sm:px-8 lg:px-10 transition-all ${
          isScrolled ? 'h-[80px] shadow-md' : ''
        }`}>
          
          {/* Official Company Logo (Enlarged) */}
          <Link to="/" className="flex items-center group shrink-0 py-1">
            <img 
              src="/logo.png" 
              alt="North Shore Cleaning Systems Inc." 
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14 lg:h-[62px]'
              }`}
            />
          </Link>

          {/* Desktop Navigation Links with Orange Sparkle Separators */}
          <nav className="hidden xl:flex items-center gap-3 text-[14px] font-bold font-['Quicksand'] uppercase tracking-[0.5px]">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <div 
                  className="relative group py-2"
                  onMouseEnter={() => item.hasDropdown && setServicesDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setServicesDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`transition-colors flex items-center gap-1 ${
                      isActive(item.path)
                        ? 'text-[#fba311]'
                        : 'text-[#001837] hover:text-[#fba311]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 mt-1 z-50 animate-in fade-in duration-150">
                      <div className="px-4 py-1.5 border-b border-gray-100 text-[10px] font-bold text-gray-400 tracking-wider font-['Quicksand']">
                        OUR COMMERCIAL SPECIALTIES
                      </div>
                      {SERVICES.slice(0, 6).map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-[#001837] hover:bg-[#f8fafc] hover:text-[#fba311] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fba311]" />
                          <span>{service.title}</span>
                        </Link>
                      ))}
                      <div className="px-4 pt-2 border-t border-gray-100 mt-1">
                        <Link to="/services" className="text-xs font-bold text-[#fba311] hover:underline flex items-center justify-between">
                          <span>All Services</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Orange 4-point bullet between menu items */}
                {index < navItems.length - 1 && (
                  <span className="text-[#fba311] text-[10px] select-none opacity-80 px-1">
                    ✦
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Right Area: Phone + Search + Cart + Get A Quote */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            
            {/* Phone with Orange Circle Icon */}
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#fba311] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 fill-white text-white" />
              </div>
              <span className="text-sm font-bold font-['Quicksand'] text-[#001837] group-hover:text-[#fba311] transition-colors">
                {COMPANY_INFO.phone}
              </span>
            </a>

            {/* Search Icon */}
            <button 
              onClick={() => setSearchModalOpen(true)}
              className="text-[#001837] hover:text-[#fba311] transition-colors p-1"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Cart / Quote Items */}
            <Link 
              to="/contact" 
              className="relative text-[#001837] hover:text-[#fba311] transition-colors p-1"
              title="Quote Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#fba311] text-[#001837] text-[10px] font-extrabold flex items-center justify-center font-['Quicksand']">
                0
              </span>
            </Link>

            {/* Dark Navy Pill Button: Get A Quote ↗ */}
            <Link 
              to="/contact" 
              className="bg-[#001837] hover:bg-[#fba311] text-white font-['Quicksand'] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-sm flex items-center gap-1.5 hover:shadow-md hover:scale-[1.02]"
            >
              <span>Get A Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-9 h-9 rounded-full bg-[#fba311] text-[#001837] flex items-center justify-center"
              aria-label="Call"
            >
              <Phone className="w-4 h-4 fill-current text-[#001837]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#001837] hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                  <img 
                    src="/logo.png" 
                    alt="North Shore Cleaning Systems Inc." 
                    className="h-11 w-auto object-contain"
                  />
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-gray-500">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-2 font-['Quicksand']">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`block px-3 py-2.5 rounded-xl text-sm font-bold tracking-wider ${
                      isActive(item.path)
                        ? 'bg-[#fba311]/15 text-[#fba311]'
                        : 'text-[#001837] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-2xl"
              >
                <div className="w-9 h-9 rounded-full bg-[#fba311] text-[#001837] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 font-bold uppercase font-['Quicksand']">Call Us 24/7</span>
                  <span className="text-sm font-bold text-[#001837] font-['Quicksand']">{COMPANY_INFO.phone}</span>
                </div>
              </a>
              <Link to="/contact" className="btn-xclean-orange w-full text-center text-xs justify-center">
                <span>Get A Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Quick Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <button 
              onClick={() => setSearchModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold font-['Quicksand'] text-[#001837] mb-4">
              Search North Shore Clean
            </h3>
            <div className="relative">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, floor waxing, medical cleaning..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#fba311] text-sm"
                autoFocus
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-4 top-3.5" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="text-gray-400 font-semibold">Popular:</span>
              <Link to="/services/floor-stripping-waxing" onClick={() => setSearchModalOpen(false)} className="text-[#001837] hover:text-[#fba311] underline">Floor Waxing</Link>
              <Link to="/services/commercial-cleaning" onClick={() => setSearchModalOpen(false)} className="text-[#001837] hover:text-[#fba311] underline">Office Cleaning</Link>
              <Link to="/specials" onClick={() => setSearchModalOpen(false)} className="text-[#001837] hover:text-[#fba311] underline">Specials</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
