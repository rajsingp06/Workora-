import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, CheckCircle2, Star, ShieldCheck, Briefcase, Users, Zap } from 'lucide-react';

export default function Hero({ onSearch, onSelectCategory, onOpenAuth }) {
  const [searchMode, setSearchMode] = useState('talent'); // 'talent' or 'projects'
  const [searchQuery, setSearchQuery] = useState('');

  const trendingSkills = [
    { label: 'Next.js', category: 'web-dev' },
    { label: 'Figma Systems', category: 'ui-ux' },
    { label: 'AI Agents', category: 'ai-automation' },
    { label: 'Brand Strategy', category: 'graphic-design' },
    { label: 'React Native', category: 'mobile-dev' },
    { label: 'Technical SEO', category: 'digital-marketing' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery, searchMode);
    }
  };

  const handlePillClick = (skill) => {
    setSearchQuery(skill.label);
    if (onSearch) {
      onSearch(skill.label, searchMode);
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-brand-100/60 to-emerald-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Search */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-soft-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Where Skills Meet Opportunities
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-semibold">
                Workora 2.0
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Great Work Starts With{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-600">Great People.</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-100/70 -z-0 rounded-sm" />
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mb-8">
              Connect with talented freelancers, discover exciting projects, and turn your skills into opportunities. Built for modern businesses and high-caliber independents.
            </p>

            {/* Search Switcher & Container */}
            <div className="w-full max-w-2xl bg-white p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl shadow-soft-lg border border-slate-200/90 mb-6">
              {/* Mode Toggle */}
              <div className="flex items-center gap-1 mb-2 px-2 pt-1 border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setSearchMode('talent')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    searchMode === 'talent'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  Find Talent
                </button>
                <button
                  type="button"
                  onClick={() => setSearchMode('projects')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    searchMode === 'projects'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  Browse Projects
                </button>
              </div>

              {/* Main Search Input Form */}
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-stretch gap-2">
                <div className="relative flex-1 flex items-center">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      searchMode === 'talent'
                        ? 'Search by skill (e.g. Next.js, Figma, AI, Copywriting)...'
                        : 'Search projects by keyword (e.g. Mobile App, Rebrand, SEO)...'
                    }
                    className="w-full pl-11 pr-4 py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-slate-400 hover:text-slate-600 mr-3 px-1.5 py-0.5 rounded bg-slate-100"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl sm:rounded-2xl shadow-brand-glow transition-all duration-200"
                  >
                    <span>{searchMode === 'talent' ? 'Find Talent' : 'Search Projects'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Action Buttons & Suggested Tags */}
            <div className="flex flex-col gap-3 w-full max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                  Popular:
                </span>
                {trendingSkills.map((skill) => (
                  <button
                    key={skill.label}
                    onClick={() => handlePillClick(skill)}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-brand-500 hover:text-brand-600 hover:bg-brand-50/40 transition-colors font-medium shadow-soft-sm"
                  >
                    {skill.label}
                  </button>
                ))}
              </div>

              {/* Direct Action Link Buttons */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('featured-freelancers');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm font-bold text-slate-900 hover:text-brand-600 flex items-center gap-1.5 group"
                >
                  <span>Explore Featured Freelancers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-slate-300">•</span>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900"
                >
                  Post a Project Free
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Freelancer Spotlight Card */}
              <div className="relative z-20 bg-white rounded-3xl p-6 shadow-soft-xl border border-slate-200/90 backdrop-blur-sm">
                
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                        alt="Elena Rostova"
                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-brand-500/30"
                      />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" title="Online" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-extrabold text-slate-900 text-base">Elena Rostova</h4>
                        <span className="text-brand-600" title="Workora Verified">
                          <CheckCircle2 className="w-4 h-4 fill-brand-100" />
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">Design Systems & SaaS Lead</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="text-xs font-bold text-slate-800">4.98</span>
                        <span className="text-xs text-slate-400">(142 verified reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Rate</span>
                    <p className="text-lg font-black text-slate-900">$95<span className="text-xs font-normal text-slate-500">/hr</span></p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-semibold">Figma Tokens</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">SaaS UX</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">Prototyping</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">Design Sprint</span>
                </div>

                {/* Portfolio Preview Mini Snapshot */}
                <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-700">Recent Completed Project</span>
                    <span className="text-brand-600 font-bold bg-brand-50 px-2 py-0.5 rounded-full">+42% Conversion</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    "Architected unified multi-brand design tokens for a Series-B fintech web app with 85+ components."
                  </p>
                </div>

                {/* Action button inside card */}
                <button
                  onClick={() => {
                    const el = document.getElementById('featured-freelancers');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Verified Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Floating Badge 1: Escrow Milestone Guarantee */}
              <div className="absolute -top-6 -left-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-soft-lg border border-slate-200/80 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Protected Escrow</p>
                  <p className="text-[11px] text-slate-500">Funds released on approval</p>
                </div>
              </div>

              {/* Floating Badge 2: Quick Turnaround */}
              <div className="absolute -bottom-6 -right-4 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-soft-lg border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Zap className="w-5 h-5 fill-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">48h Average Match</p>
                  <p className="text-[11px] text-slate-500">From brief to interview</p>
                </div>
              </div>

              {/* Subtle Decorative Ring */}
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-r from-brand-500/10 via-emerald-500/5 to-slate-200/30 -z-10 blur-xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
