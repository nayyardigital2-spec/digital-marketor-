import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  Zap,
  Globe,
  Share2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, serviceId?: string) => void;
  onBookConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onBookConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageType; hasDropdown?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services', hasDropdown: true },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Blog', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const quickServices = [
    { name: 'Search Engine Optimization', id: 'seo', icon: <TrendingUp className="w-4 h-4 text-sky-500" /> },
    { name: 'Social Media Marketing', id: 'social-media', icon: <Share2 className="w-4 h-4 text-pink-500" /> },
    { name: 'Paid Advertising (Google/Meta)', id: 'paid-ads', icon: <Zap className="w-4 h-4 text-amber-500" /> },
    { name: 'Website Design & Dev', id: 'web-design-dev', icon: <Globe className="w-4 h-4 text-indigo-500" /> },
    { name: 'AI Marketing & Automation', id: 'ai-marketing', icon: <Cpu className="w-4 h-4 text-sky-400" />, badge: 'Featured' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    onNavigate('service-detail', serviceId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="Nayyar Digital Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-950 via-[#0b132b] to-sky-900 flex items-center justify-center text-white font-black text-lg tracking-wider shadow-md group-hover:scale-105 transition-transform border border-slate-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-indigo-200">
                ND
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-950">
                  NAYYAR DIGITAL
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-sky-500" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider uppercase -mt-0.5">
                AI-Powered Digital Growth
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.page} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                        isActive
                          ? 'text-sky-600 bg-sky-50/80'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2.5 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Core Capabilities
                          </span>
                          <button
                            onClick={() => handleNavClick('services')}
                            className="text-[11px] text-sky-600 font-semibold hover:underline"
                          >
                            View All 9
                          </button>
                        </div>
                        {quickServices.map((svc) => (
                          <button
                            key={svc.id}
                            onClick={() => handleServiceClick(svc.id)}
                            className="w-full flex items-center justify-between px-3.5 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              {svc.icon}
                              <span className="font-medium">{svc.name}</span>
                            </div>
                            {svc.badge && (
                              <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-1.5 py-0.5 rounded">
                                {svc.badge}
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-sky-600 bg-sky-50/80'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onBookConsultation}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-bold shadow-md hover:bg-slate-800 hover:shadow-lg transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                Get Free Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBookConsultation}
              className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold sm:hidden"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200/90 shadow-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-sky-50 text-sky-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-sky-500" />}
                </button>
              );
            })}
          </div>

          {/* Mobile Quick Service Shortcuts */}
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-2">
              Explore Popular Services
            </span>
            <div className="grid grid-cols-2 gap-2">
              {quickServices.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => handleServiceClick(svc.id)}
                  className="p-2.5 rounded-lg border border-slate-200/70 text-left bg-slate-50/50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    {svc.icon}
                    <span className="truncate">{svc.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
