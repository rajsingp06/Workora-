import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Compass, 
  Sparkles, 
  Code2, 
  Palette, 
  Video, 
  TrendingUp, 
  PenTool, 
  Smartphone, 
  Bot, 
  Camera, 
  Wrench, 
  Zap, 
  User, 
  LayoutDashboard
} from 'lucide-react';
import { categoriesData } from '../data/categories';
import { localCategoriesData } from '../data/localServices';

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
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCategoriesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (target) => {
    setIsMobileMenuOpen(false);
    setIsCategoriesDropdownOpen(false);

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
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all duration-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex items-center justify-between h-16 xl:h-18 gap-4 w-full">
          
          {/* Far Left: Workora Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-base shadow-sm group-hover:bg-emerald-700 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8.5 18L12 9L15.5 18L20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-black text-xl tracking-tight text-slate-900 flex items-center">
                WORKORA
                <span className="text-emerald-500 font-extrabold text-2xl leading-none">.</span>
              </span>
            </a>
          </div>

          {/* Center Navigation Links (Fiverr Inspired) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Explore Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                className={`inline-flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors ${
                  isCategoriesDropdownOpen ? 'text-slate-900 bg-slate-100' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Explore Categories</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoriesDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {isCategoriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[540px] bg-white rounded-2xl border border-slate-200/90 shadow-soft-xl p-5 z-50 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Digital Services */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Digital Services</span>
                      </div>
                      <div className="space-y-1">
                        {categoriesData.slice(0, 5).map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => handleNavClick('categories')}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-between"
                          >
                            <span>{cat.title}</span>
                            <span className="text-[10px] text-slate-400">{cat.startingDisplay}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Local Services */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                        <Compass className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Local Services</span>
                      </div>
                      <div className="space-y-1">
                        {localCategoriesData.slice(0, 5).map((loc) => (
                          <button
                            key={loc.id}
                            onClick={() => handleNavClick('local-services')}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-between"
                          >
                            <span>{loc.name}</span>
                            <span className="text-[10px] text-slate-400">from {loc.startingRate}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleNavClick('categories')}
                      className="font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                    >
                      <span>View all 8 digital categories</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleNavClick('local-services')}
                      className="font-bold text-slate-700 hover:text-slate-900"
                    >
                      Browse local directory →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Find Freelancers */}
            <button
              onClick={() => handleNavClick('featured-freelancers')}
              className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
            >
              Find Freelancers
            </button>

            {/* Local Services */}
            <button
              onClick={() => handleNavClick('local-services')}
              className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                currentView === 'local-services'
                  ? 'text-emerald-700 bg-emerald-50 font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Local Services</span>
              <span className="text-[9px] uppercase font-black bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full">
                Nearby
              </span>
            </button>

            {/* Workora Pro */}
            <button
              onClick={() => handleNavClick('workora-pro')}
              className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1"
            >
              <span>Workora Pro</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </button>

            {/* Become a Seller */}
            <button
              onClick={() => onOpenAuth('signup', 'freelancer')}
              className="px-3 py-2 text-xs xl:text-sm font-semibold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors whitespace-nowrap"
            >
              Become a Seller
            </button>
          </nav>

          {/* Far Right Corner: Auth / Profile Button */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            {currentUser ? (
              <button
                onClick={() => onNavigate('dashboard')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all text-xs font-bold text-slate-800 shadow-soft-sm group"
                title="Go to your dashboard"
              >
                <img
                  src={currentUser.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80'}
                  alt={currentUser.fullName}
                  className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200 group-hover:ring-emerald-400"
                />
                <span className="font-bold text-slate-900">{currentUser.fullName?.split(' ')[0] || 'User'}</span>
                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {currentUser.role === 'freelancer' ? 'Seller' : 'Buyer'}
                </span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors whitespace-nowrap"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onOpenAuth('signup', 'client')}
                  className="inline-flex items-center justify-center px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap"
                >
                  Join Now
                </button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('categories')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Explore Categories
            </button>
            <button
              onClick={() => handleNavClick('featured-freelancers')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Find Freelancers
            </button>
            <button
              onClick={() => handleNavClick('local-services')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-emerald-700 bg-emerald-50"
            >
              Local Services (Doorstep)
            </button>
            <button
              onClick={() => handleNavClick('workora-pro')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Workora Pro
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuth('signup', 'freelancer');
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-emerald-600 hover:bg-emerald-50"
            >
              Become a Seller
            </button>
          </div>

          {!currentUser && (
            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuth('signup', 'client');
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
              >
                Join Now
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
