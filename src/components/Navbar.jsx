import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  User, 
  LayoutDashboard, 
  MapPin,
  Compass
} from 'lucide-react';

export default function Navbar({ 
  onOpenAuth, 
  onNavigate, 
  currentUser, 
  currentView = 'landing',
  userLocation,
  onOpenLocationModal 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target) => {
    setIsMobileMenuOpen(false);
    if (target === 'local-services') {
      onNavigate('local-services');
      return;
    }

    if (currentView !== 'landing') {
      onNavigate('landing');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentView !== 'landing'
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-200/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 lg:gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-extrabold text-xl shadow-brand-glow group-hover:bg-brand-700 transition-colors">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8.5 18L12 9L15.5 18L20 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                  WORKORA
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                    PRO
                  </span>
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-wide hidden sm:block -mt-1">
                  Skills Meet Opportunities
                </span>
              </div>
            </a>

            {/* Navbar Location Selector Pill */}
            <button
              type="button"
              onClick={onOpenLocationModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 hover:bg-brand-50 border border-slate-200/80 hover:border-brand-300 text-xs text-slate-700 hover:text-brand-700 transition-all shadow-soft-sm max-w-[210px] truncate"
              title="Click to change your local service area"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span className="font-extrabold truncate text-slate-800">
                {userLocation?.city || 'Mumbai'}, {userLocation?.area?.split(' ')[0] || 'Bandra'}
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => {
                if (currentView !== 'landing') onNavigate('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('featured-freelancers')}
              className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors"
            >
              Find Talent
            </button>

            <button
              onClick={() => handleNavClick('hero')}
              className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors"
            >
              Find Work
            </button>

            {/* Local Services Link with distinct highlight */}
            <button
              onClick={() => handleNavClick('local-services')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-bold rounded-lg transition-all ${
                currentView === 'local-services'
                  ? 'bg-slate-900 text-white shadow-soft-sm'
                  : 'text-slate-900 hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              <Compass className={`w-4 h-4 ${currentView === 'local-services' ? 'text-brand-400' : 'text-brand-600'}`} />
              <span>Local Services</span>
              <span className="text-[10px] uppercase font-extrabold bg-brand-50 text-brand-700 border border-brand-200/80 px-1.5 py-0.2 rounded-full">
                New
              </span>
            </button>

            <button
              onClick={() => handleNavClick('how-it-works')}
              className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors"
            >
              How It Works
            </button>
          </nav>

          {/* User Auth Actions / Profile Hub */}
          <div className="hidden sm:flex items-center gap-3">
            {currentUser ? (
              <button
                onClick={() => onNavigate('dashboard')}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-brand-500 shadow-soft-sm transition-all"
              >
                <img
                  src={currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}
                  alt={currentUser.fullName}
                  className="w-6 h-6 rounded-lg object-cover"
                />
                <span className="text-xs font-bold text-slate-800">{currentUser.fullName?.split(' ')[0] || 'Dashboard'}</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-50 text-brand-700">Hub</span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-brand-600 rounded-xl shadow-soft hover:shadow-brand-glow transition-all duration-200 group"
                >
                  <span>Join Workora</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Location + Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenLocationModal}
              className="p-2 rounded-lg bg-slate-100 text-slate-800"
              title="Change Location"
            >
              <MapPin className="w-4 h-4 text-brand-600" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl px-6 py-6 transition-all duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* Mobile Location Selector Bar */}
          <div className="mb-4 pb-4 border-b border-slate-100">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLocationModal();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-left"
            >
              <div className="flex items-center gap-2 truncate">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800 truncate">
                  {userLocation?.formatted || 'Mumbai, Bandra West'}
                </span>
              </div>
              <span className="text-xs text-brand-700 font-bold">Change</span>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('landing');
              }}
              className="text-left px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('featured-freelancers')}
              className="text-left px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Find Talent
            </button>

            <button
              onClick={() => handleNavClick('hero')}
              className="text-left px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Find Work
            </button>

            {/* Local Services Link in Drawer */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('local-services');
              }}
              className="text-left px-3 py-2.5 text-base font-bold text-brand-700 bg-brand-50/70 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-600" />
                <span>Local Services</span>
              </div>
              <span className="text-[10px] font-extrabold uppercase bg-brand-600 text-white px-2 py-0.5 rounded-full">
                New
              </span>
            </button>

            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-left px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              How It Works
            </button>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              {currentUser ? (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate('dashboard');
                  }}
                  className="w-full py-2.5 text-center text-sm font-bold text-white bg-brand-600 rounded-xl hover:bg-brand-700 shadow-brand-glow flex items-center justify-center gap-2"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Go to Workspace ({currentUser.fullName?.split(' ')[0]})</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenAuth('login');
                    }}
                    className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 border border-slate-200 rounded-xl hover:bg-slate-50"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenAuth('signup');
                    }}
                    className="w-full py-2.5 text-center text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 shadow-brand-glow"
                  >
                    Join Workora
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
