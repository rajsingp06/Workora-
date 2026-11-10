import React, { useMemo } from 'react';
import { 
  Star, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Briefcase, 
  Eye, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { featuredFreelancersData } from '../data/freelancers';

export default function FeaturedFreelancers({ 
  selectedCategory, 
  onSelectCategory, 
  searchQuery, 
  onSelectFreelancer,
  onOpenAuth 
}) {
  const categoryFilters = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'web-dev', label: 'Web Dev' },
    { id: 'mobile-dev', label: 'Mobile Apps' },
    { id: 'graphic-design', label: 'Branding' },
    { id: 'digital-marketing', label: 'Growth & SEO' },
    { id: 'video-editing', label: 'Motion 3D' },
  ];

  // Filter freelancers based on category and search query
  const filteredFreelancers = useMemo(() => {
    return featuredFreelancersData.filter((freelancer) => {
      const matchesCategory =
        selectedCategory === 'all' || freelancer.category === selectedCategory;

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

  return (
    <section id="featured-freelancers" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Top 1% Global Talent
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Freelancers
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Strictly vetted specialists with proven track records. Book transparent hourly rates or fixed milestone deliverables.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs font-bold hover:border-slate-900 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Post a Job to Get Pitches</span>
            </button>
          </div>
        </div>

        {/* Category Pills Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categoryFilters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-soft'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Query indicator if active */}
        {searchQuery && (
          <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
            <span>
              Searching for: <strong className="text-slate-900">"{searchQuery}"</strong> ({filteredFreelancers.length} talent matches found)
            </span>
            <button
              onClick={() => onSelectCategory('all')}
              className="font-bold text-brand-600 hover:text-brand-700 underline"
            >
              Reset filter
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredFreelancers.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-medium text-base mb-3">No freelancers found matching your criteria.</p>
            <button
              onClick={() => {
                onSelectCategory('all');
              }}
              className="px-5 py-2.5 bg-brand-600 text-white text-xs font-bold rounded-xl hover:bg-brand-700 transition-colors"
            >
              View All Featured Freelancers
            </button>
          </div>
        )}

        {/* Freelancer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFreelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="group bg-white rounded-3xl border border-slate-200/90 hover:border-brand-300 shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Body */}
              <div className="p-6 sm:p-7">
                
                {/* Profile Top Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={freelancer.avatar}
                      alt={freelancer.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-slate-100 group-hover:ring-brand-500/40 transition-all"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"
                      title="Available Now"
                    />
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Hourly Rate
                    </span>
                    <span className="text-2xl font-black text-slate-900 tracking-tight">
                      ${freelancer.hourlyRate}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/hr</span>
                  </div>
                </div>

                {/* Name, Badges & Title */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">
                      {freelancer.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-brand-600 fill-brand-50" title="Vetted Identity" />
                  </div>
                  <p className="text-xs font-semibold text-slate-600 leading-snug">
                    {freelancer.title}
                  </p>
                </div>

                {/* Rating & Location Meta */}
                <div className="flex items-center gap-3 text-xs text-slate-500 pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1 font-bold text-slate-800">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>{freelancer.rating}</span>
                    <span className="font-normal text-slate-400">({freelancer.reviewsCount})</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{freelancer.location}</span>
                  </div>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-5">
                  {freelancer.bio}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {freelancer.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-100/90 group-hover:border-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                  {freelancer.skills.length > 4 && (
                    <span className="px-2 py-1 rounded-lg bg-slate-50 text-slate-400 text-xs font-medium">
                      +{freelancer.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="px-6 sm:px-7 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                  <Clock className="w-3 h-3" />
                  <span>{freelancer.responseRate}</span>
                </div>

                <button
                  onClick={() => onSelectFreelancer(freelancer)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-brand-600 hover:text-white rounded-xl border border-slate-200 hover:border-brand-600 shadow-soft-sm transition-all duration-200"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Profile</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
