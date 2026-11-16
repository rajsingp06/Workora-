import React, { useState, useEffect, useMemo } from 'react';
import { 
  Star, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { featuredFreelancersData } from '../data/freelancers';

export default function FeaturedFreelancers({ 
  selectedCategory, 
  onSelectCategory, 
  searchQuery, 
  onSelectFreelancer,
  onOpenAuth 
}) {
  const [displayLimit, setDisplayLimit] = useState(6);

  const categoryFilters = [
    { id: 'all', label: 'All Services' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'web-dev', label: 'Website Dev' },
    { id: 'mobile-app', label: 'App Development' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'video-editing', label: 'Video Editing' },
    { id: 'ai-automation', label: 'AI Services' },
    { id: 'content-writing', label: 'Content Writing' }
  ];

  // Reset to 6 when category or search changes
  useEffect(() => {
    setDisplayLimit(6);
  }, [selectedCategory, searchQuery]);

  // Filter freelancers based on category and search query
  const filteredFreelancers = useMemo(() => {
    return featuredFreelancersData.filter((freelancer) => {
      const matchesCategory =
        selectedCategory === 'all' || 
        freelancer.category === selectedCategory ||
        (selectedCategory === 'web-dev' && freelancer.category === 'web-dev') ||
        (selectedCategory === 'mobile-app' && freelancer.category === 'mobile-app');

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        freelancer.name.toLowerCase().includes(q) ||
        freelancer.title.toLowerCase().includes(q) ||
        freelancer.skills.some((s) => s.toLowerCase().includes(q)) ||
        freelancer.location.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Constrain visible freelancers to 6-9 range for optimal page balance
  const displayedFreelancers = useMemo(() => {
    return filteredFreelancers.slice(0, displayLimit);
  }, [filteredFreelancers, displayLimit]);

  return (
    <section id="featured-freelancers" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full inline-block mb-2">
              Verified Independent Talent
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Featured Freelancers
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-xl">
              Connect with top-rated Indian specialists. Clear hourly pricing in ₹ INR, verified client reviews, and direct collaboration.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs text-slate-500 font-semibold">
            <span>Showing {displayedFreelancers.length} of {filteredFreelancers.length} verified specialists</span>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categoryFilters.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredFreelancers.length === 0 && (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-slate-200 my-4">
            <p className="text-sm font-bold text-slate-700 mb-2">No freelancers found matching your current filter.</p>
            <button
              onClick={() => onSelectCategory('all')}
              className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Show All Freelancers
            </button>
          </div>
        )}

        {/* Freelancer Cards Grid (Fiverr-Inspired Clean Minimal UI - 6 to 9 cards displayed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedFreelancers.map((freelancer) => {
            const isPro = freelancer.badges?.includes('Top Rated Plus') || freelancer.hourlyRate >= 2000;

            return (
              <div
                key={freelancer.id}
                onClick={() => onSelectFreelancer(freelancer)}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between group text-left"
              >
                <div>
                  {/* Top Header: Avatar, Name & Pro Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <img
                          src={freelancer.avatar}
                          alt={freelancer.name}
                          className="w-14 h-14 rounded-2xl object-cover ring-1 ring-slate-200"
                        />
                        <span
                          className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"
                          title="Online & Available"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors truncate">
                            {freelancer.name}
                          </h3>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        </div>
                        <p className="text-xs text-slate-600 font-medium line-clamp-1">{freelancer.title}</p>
                        
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{freelancer.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pro Badge */}
                    {isPro ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider shrink-0">
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        Pro
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold shrink-0">
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Rating & Review Meta */}
                  <div className="flex items-center gap-2 text-xs text-slate-600 mb-3 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1 font-black text-slate-900">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{freelancer.rating}</span>
                    </div>
                    <span>•</span>
                    <span className="text-slate-500">{freelancer.reviewsCount} reviews</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-semibold">{freelancer.completedProjects} orders</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {freelancer.bio}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {freelancer.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                    {freelancer.skills.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-400 text-[11px]">
                        +{freelancer.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Starting Price & View Profile Button */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting at</span>
                    <span className="text-base font-black text-slate-900">
                      ₹{freelancer.hourlyRate.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-500">/hr</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectFreelancer(freelancer);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 to 9 Freelancers Controller: Prevents excessive vertical scrolling */}
        {filteredFreelancers.length > 6 && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            {displayLimit < filteredFreelancers.length ? (
              <button
                type="button"
                onClick={() => setDisplayLimit((prev) => (prev === 6 ? 9 : filteredFreelancers.length))}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>
                  {displayLimit === 6 
                    ? `Show More Specialists (${Math.min(filteredFreelancers.length, 9)} shown)` 
                    : `View All ${filteredFreelancers.length} Specialists`}
                </span>
                <ChevronDown className="w-4 h-4 text-emerald-600" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setDisplayLimit(6);
                  const el = document.getElementById('featured-freelancers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                <span>Show Less (Show 6)</span>
                <ChevronUp className="w-4 h-4 text-slate-500" />
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
