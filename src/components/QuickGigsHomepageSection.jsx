import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  IndianRupee, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Users, 
  Briefcase, 
  Navigation,
  Compass,
  Zap,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { quickGigCategories, quickGigsData, filterGigs } from '../data/quickGigs';

export default function QuickGigsHomepageSection({ 
  userLocation, 
  onOpenLocationModal, 
  onSelectGig, 
  onOpenApply, 
  onNavigate,
  onShowToast 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [nearMeOnly, setNearMeOnly] = useState(false);

  // Filtered gigs for the homepage
  const displayedGigs = useMemo(() => {
    const filtered = filterGigs(quickGigsData, {
      search: searchQuery,
      category: selectedCategory,
      nearMeOnly: nearMeOnly
    });
    return filtered.slice(0, 6);
  }, [searchQuery, selectedCategory, nearMeOnly]);

  return (
    <section id="quick-gigs-section" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500" />
              <span>Workora Quick Gigs</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">Hyperlocal Opportunities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Find Work. Earn Locally.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Discover flexible jobs and short-term opportunities around you. Ideal for students, freelancers, and anyone seeking immediate temporary work.
            </p>
          </div>

          {/* Right Action: Location Selector & Browse All Button */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            <div className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 p-2 px-3 rounded-2xl border border-slate-200 text-xs transition-colors">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-slate-500">Near:</span>
              <strong className="text-slate-900 font-bold">{userLocation?.city || 'Mumbai'}, {userLocation?.area || 'Bandra'}</strong>
              <button
                type="button"
                onClick={onOpenLocationModal}
                className="ml-1 text-emerald-700 font-bold hover:underline cursor-pointer"
              >
                Change
              </button>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('quick-gigs')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>Browse All Gigs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Search & "Jobs Near Me" Filter Bar */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-3 sm:p-4 mb-8 flex flex-col md:flex-row items-center gap-3 shadow-soft-sm">
          
          {/* Search by Keyword */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jobs by keyword (e.g. Fest Helper, Data Entry, Store Assistant, Event)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter: "Jobs Near Me" Toggle */}
          <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => setNearMeOnly(!nearMeOnly)}
              className={`flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap ${
                nearMeOnly
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
              }`}
            >
              <Navigation className={`w-3.5 h-3.5 ${nearMeOnly ? 'text-white' : 'text-emerald-600'}`} />
              <span>Jobs Near Me (&lt; 5 km)</span>
              {nearMeOnly && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
            </button>

            <button
              type="button"
              onClick={() => onNavigate('quick-gigs')}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <span>More Filters</span>
            </button>
          </div>

        </div>

        {/* 8 Categories Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
            }`}
          >
            All Quick Gigs ({quickGigsData.length})
          </button>
          {quickGigCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/70 text-slate-600'}`}>
                  {cat.startingPay}
                </span>
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {displayedGigs.length === 0 && (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-3xl border border-slate-200 my-4">
            <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-base font-bold text-slate-800 mb-1">No quick gigs found matching your filter.</p>
            <p className="text-xs text-slate-500 mb-4">Try clearing your search keyword or switching categories.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setNearMeOnly(false);
              }}
              className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Gigs Grid (6 Cards on Homepage) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGigs.map((gig) => (
            <div
              key={gig.id}
              onClick={() => onSelectGig(gig)}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between group text-left"
            >
              <div>
                {/* Card Top: Category Badge, Distance & Vacancies */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-black uppercase tracking-wider">
                      {gig.categoryName}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>{gig.distanceDisplay}</span>
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full shrink-0">
                    {gig.vacancies} vacancies
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug mb-2">
                  {gig.title}
                </h3>

                {/* Employer Info */}
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src={gig.employer.logo}
                    alt={gig.employer.name}
                    className="w-5 h-5 rounded-md object-cover ring-1 ring-slate-200"
                  />
                  <span className="text-xs font-bold text-slate-700 truncate">{gig.employer.name}</span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded shrink-0">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>

                {/* Key Meta Strip: Duration & Hours */}
                <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
                    <span className="font-bold text-slate-800 truncate block">{gig.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Hours</span>
                    <span className="font-semibold text-slate-800 truncate block">{gig.workingHours}</span>
                  </div>
                </div>

                {/* Tags (Student Friendly, Instant Pay, etc.) */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {gig.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Pay & Apply CTA */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Payment</span>
                  <div className="text-base font-black text-slate-900">
                    {gig.payment.display}
                    <span className="text-xs font-medium text-slate-500"> / {gig.payment.unit}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectGig(gig);
                    }}
                    className="px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenApply(gig);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
              Need short-term staff for your event or business?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Post a Quick Gig in 2 Minutes. Hire Vetted Locals.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              From store helpers to event crew and data typists, get verified nearby applicants with instant phone and WhatsApp matching.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (onShowToast) onShowToast('Quick Gig employer posting portal opened. Ready to list your vacancy.');
              }}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-brand-glow transition-all cursor-pointer"
            >
              Post a Quick Gig Free
            </button>
            <button
              type="button"
              onClick={() => onNavigate('quick-gigs')}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              Explore All Gigs →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
