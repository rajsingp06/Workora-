import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Wrench, 
  Code2, 
  Palette,
  Check
} from 'lucide-react';

export default function Hero({ onSearch, onSelectCategory, onOpenAuth }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'digital' | 'local'

  const popularSearches = [
    { label: 'Website Design', query: 'Website Development' },
    { label: 'WordPress', query: 'WordPress' },
    { label: 'Logo Design', query: 'Graphic Design' },
    { label: 'Video Editing', query: 'Video Editing' },
    { label: 'Plumbers', query: 'Plumbers' },
    { label: 'AI Services', query: 'AI Services' },
    { label: 'Makeup Artists', query: 'Makeup Artists' }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim(), 'talent');
    }
  };

  const handleQuickTagClick = (tagQuery) => {
    setSearchQuery(tagQuery);
    if (onSearch) {
      onSearch(tagQuery, 'talent');
    }
  };

  return (
    <section id="hero" className="relative bg-white pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Search */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Minimal Brand Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Where Skills Meet Opportunities</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-extrabold">All India</span>
            </div>

            {/* Headline (Specified) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4">
              Find the right talent.{' '}
              <span className="text-emerald-600 block sm:inline">Get things done.</span>
            </h1>

            {/* Subtitle (Specified) */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              Discover skilled freelancers and trusted local professionals across India. Transparent pricing, verified portfolios, and protected milestone payments.
            </p>

            {/* Large Fiverr-style Search Bar */}
            <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl mb-5">
              <div className="flex flex-col sm:flex-row items-stretch rounded-2xl sm:rounded-full border-2 border-slate-300 hover:border-slate-400 focus-within:border-emerald-600 bg-white p-1.5 transition-all shadow-sm">
                
                <div className="flex-1 flex items-center px-4 py-2 sm:py-0 min-h-[48px]">
                  <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for any service (e.g. Website development, logo design, plumber)..."
                    className="w-full text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl sm:rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-colors shrink-0"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Popular Searches Tags (Specified) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-bold text-slate-700">Popular:</span>
              {popularSearches.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleQuickTagClick(item.query)}
                  className="px-3 py-1 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 transition-colors font-medium text-xs"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Trust Points */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 w-full text-left">
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">4.9/5</p>
                <p className="text-xs text-slate-500">Over 18,000+ client ratings</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">100%</p>
                <p className="text-xs text-slate-500">Milestone escrow protected</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">10+ Cities</p>
                <p className="text-xs text-slate-500">Doorstep & remote talent</p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Human-Focused Visual Showcase (Authentic Indian Talent) */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Featured Showcase Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-md relative z-10">
              
              {/* Category Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Workora Pro Verified
                </span>
                <span className="text-xs font-bold text-slate-500">Featured Today</span>
              </div>

              {/* Freelancer Profile Image & Info */}
              <div className="relative mb-5 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.pexels.com/photos/38281680/pexels-photo-38281680/free-photo-of-portrait-of-woman-in-traditional-indian-attire.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1&fit=crop"
                  alt="Priya Nair - Lead Product Designer"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Rating Pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-200/80">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-black text-slate-900">4.98</span>
                  <span className="text-[11px] text-slate-500 font-semibold">(142 reviews)</span>
                </div>

                {/* Location Pill */}
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>Bengaluru, Karnataka</span>
                </div>
              </div>

              {/* Specialist Meta */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-black text-slate-900">Priya Nair</h3>
                  <p className="text-xs text-slate-600 font-medium">Lead Product & Design Systems Architect</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting at</span>
                  <span className="text-xl font-black text-slate-900">₹1,850<span className="text-xs font-normal text-slate-500">/hr</span></span>
                </div>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['Figma Systems', 'SaaS UX', 'Design Tokens', 'Prototyping'].map((skill) => (
                  <span key={skill} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('featured-freelancers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View Full Profile & Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Secondary Floating Card: Local Service Pro (Equal Importance for Local Professionals!) */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-20 bg-white rounded-2xl p-3.5 shadow-lg border border-slate-200 hidden sm:flex items-center gap-3 max-w-[280px]">
              <img
                src="https://images.pexels.com/photos/34685880/pexels-photo-34685880/free-photo-of-smiling-mustached-man-in-delhi-street-scene.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1&fit=crop"
                alt="Rahul Sharma - Residential Plumber"
                className="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-200"
              />
              <div className="text-left min-w-0">
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Available Nearby (1.8 km)</span>
                </div>
                <h4 className="text-xs font-black text-slate-900 truncate">Rahul Sharma</h4>
                <p className="text-[11px] text-slate-500 truncate">Residential Plumber • ₹499/visit</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
