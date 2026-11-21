import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Filter, 
  X, 
  IndianRupee, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Navigation, 
  Briefcase, 
  Calendar, 
  Users, 
  Sparkles, 
  RotateCcw,
  LayoutGrid,
  Map as MapIcon,
  PartyPopper,
  FileText,
  ShoppingBag,
  Presentation,
  Package,
  Camera,
  Flame,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { quickGigCategories, quickGigsData, filterGigs } from '../../data/quickGigs';

export default function QuickGigsPage({ 
  userLocation, 
  onOpenLocationModal, 
  onSelectGig, 
  onOpenApply, 
  onShowToast 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [radiusFilter, setRadiusFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');
  const [payFilter, setPayFilter] = useState('all');
  const [employmentFilter, setEmploymentFilter] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [nearMeOnly, setNearMeOnly] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'map'
  const [selectedMapGig, setSelectedMapGig] = useState(null);

  // Filtered Gigs
  const filteredGigs = useMemo(() => {
    return filterGigs(quickGigsData, {
      search: searchQuery,
      category: selectedCategory,
      radius: radiusFilter,
      duration: durationFilter,
      payRange: payFilter,
      employmentType: employmentFilter,
      experience: experienceFilter,
      nearMeOnly: nearMeOnly
    });
  }, [
    searchQuery,
    selectedCategory,
    radiusFilter,
    durationFilter,
    payFilter,
    employmentFilter,
    experienceFilter,
    nearMeOnly
  ]);

  const hasActiveFilters = 
    searchQuery ||
    selectedCategory !== 'all' ||
    radiusFilter !== 'all' ||
    durationFilter !== 'all' ||
    payFilter !== 'all' ||
    employmentFilter !== 'all' ||
    experienceFilter !== 'all' ||
    nearMeOnly;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setRadiusFilter('all');
    setDurationFilter('all');
    setPayFilter('all');
    setEmploymentFilter('all');
    setExperienceFilter('all');
    setNearMeOnly(false);
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'PartyPopper': return <PartyPopper className="w-5 h-5 text-emerald-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-emerald-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'Presentation': return <Presentation className="w-5 h-5 text-emerald-600" />;
      case 'Package': return <Package className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'Camera': return <Camera className="w-5 h-5 text-emerald-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-emerald-600" />;
      default: return <Briefcase className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen pb-20 animate-fadeIn">
      
      {/* Hero Banner with Location Bar */}
      <section className="bg-white border-b border-slate-200/90 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Hyperlocal Short-Term Jobs</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">Students &amp; Freelancers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Workora Quick Gigs
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Find flexible, verified temporary jobs within your locality. Instant daily payouts, trusted verified employers, and zero registration fees.
            </p>
          </div>

          {/* Search, Location & Near Me Controls */}
          <div className="bg-slate-50 p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-soft-sm flex flex-col lg:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title, skill or company (e.g. Fest, Excel, Store, Event)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

            {/* Location Selector */}
            <div className="flex items-center gap-2 w-full lg:w-auto bg-white p-2 px-3.5 rounded-xl border border-slate-200 text-xs shrink-0">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-slate-500">Location:</span>
              <strong className="text-slate-900 font-bold">{userLocation?.city || 'Mumbai'}, {userLocation?.area || 'Bandra'}</strong>
              <button
                type="button"
                onClick={onOpenLocationModal}
                className="ml-1 text-emerald-700 font-bold hover:underline cursor-pointer"
              >
                Change
              </button>
            </div>

            {/* Near Me Toggle */}
            <button
              type="button"
              onClick={() => setNearMeOnly(!nearMeOnly)}
              className={`w-full lg:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                nearMeOnly
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
              }`}
            >
              <Navigation className={`w-3.5 h-3.5 ${nearMeOnly ? 'text-white' : 'text-emerald-600'}`} />
              <span>Jobs Near Me (&lt; 5 km)</span>
              {nearMeOnly && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
            </button>

            {/* View Mode Toggle: Grid vs Map */}
            <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shrink-0 w-full lg:w-auto justify-center">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex-1 lg:flex-initial inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>List View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('map')}
                className={`flex-1 lg:flex-initial inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  viewMode === 'map'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span>Map View</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 8 Attractive Job Category Cards */}
      <section className="py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Explore Job Categories
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Select a category to view instant openings and average earnings
              </p>
            </div>

            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline cursor-pointer"
              >
                View All Categories
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {quickGigCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left group ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 shadow-soft ring-2 ring-emerald-500/20'
                      : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-soft-sm'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center mb-2.5 transition-colors">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                      {cat.name}
                    </h3>
                    <div className="text-[10px] text-slate-400 mt-1">{cat.count}</div>
                    <div className="text-[11px] font-black text-slate-900 mt-0.5">{cat.startingPay}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Gigs Explorer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Smart Filter Pills Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-soft-sm mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-black uppercase tracking-wider text-slate-700">Smart Job Filters</span>
              <span className="text-xs text-slate-400 font-semibold">({filteredGigs.length} gigs matched)</span>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* 5 Filter Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            
            {/* Distance Radius */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Distance
              </label>
              <select
                value={radiusFilter}
                onChange={(e) => setRadiusFilter(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="all">Any Distance</option>
                <option value="2">Within 2 km</option>
                <option value="5">Within 5 km</option>
                <option value="10">Within 10 km</option>
                <option value="20">Within 20 km</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Duration
              </label>
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="all">All Durations</option>
                <option value="daily">Daily (1–2 Days)</option>
                <option value="weekly">Weekly Gigs</option>
                <option value="project">Project-based (3–5 Days)</option>
              </select>
            </div>

            {/* Pay Range */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Payment Rate
              </label>
              <select
                value={payFilter}
                onChange={(e) => setPayFilter(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="all">Any Payment</option>
                <option value="under-800">Under ₹800 / day</option>
                <option value="800-1500">₹800 – ₹1,500 / day</option>
                <option value="above-1500">₹1,500+ / day</option>
              </select>
            </div>

            {/* Employment Type */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Work Type
              </label>
              <select
                value={employmentFilter}
                onChange={(e) => setEmploymentFilter(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="all">Part &amp; Full Time</option>
                <option value="part-time">Part-time</option>
                <option value="full-time">Full-time</option>
                <option value="shift">Shift-based</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Experience
              </label>
              <select
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="all">All Levels</option>
                <option value="not-required">No Experience (Students)</option>
                <option value="required">Prior Experience Required</option>
              </select>
            </div>

          </div>
        </div>

        {/* View Mode: Map View vs Grid View */}
        {viewMode === 'map' ? (
          /* MAP VIEW */
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              
              {/* Left Column: List of Gigs on Map */}
              <div className="p-4 sm:p-5 border-r border-slate-200 max-h-[600px] overflow-y-auto space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Gigs in {userLocation?.city || 'Mumbai'} ({filteredGigs.length})
                </div>

                {filteredGigs.map((gig) => {
                  const isSelected = (selectedMapGig?.id === gig.id) || (!selectedMapGig && gig.id === filteredGigs[0]?.id);
                  return (
                    <div
                      key={gig.id}
                      onClick={() => setSelectedMapGig(gig)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-bold text-emerald-800">{gig.categoryName}</span>
                        <span className="font-bold text-slate-900">{gig.payment.display}</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-900 line-clamp-1">{gig.title}</h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        <span>{gig.area} • {gig.distanceDisplay}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right 2 Columns: Stylized Interactive Map with Gigs Pins */}
              <div className="lg:col-span-2 relative min-h-[480px] bg-slate-100 flex flex-col justify-between p-6 overflow-hidden">
                {/* Background Map Visual */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px]" />
                
                <svg className="absolute inset-0 w-full h-full opacity-30 stroke-slate-400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-50 150 Q 200 80 500 240 T 900 120" fill="none" strokeWidth="12" />
                  <path d="M180 -30 Q 320 220 260 550" fill="none" strokeWidth="8" />
                  <path d="M500 500 L 700 -20" fill="none" strokeWidth="6" />
                </svg>

                {/* Map Control Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-800 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Pinpoints ({userLocation?.city || 'Mumbai'})</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-white/80 px-2.5 py-1 rounded-full">
                    Click any pin to inspect
                  </span>
                </div>

                {/* Map Pins Display */}
                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-6 my-auto py-8">
                  {filteredGigs.slice(0, 6).map((gig, idx) => {
                    const isSelected = selectedMapGig?.id === gig.id;
                    return (
                      <div
                        key={gig.id}
                        onClick={() => setSelectedMapGig(gig)}
                        className="flex flex-col items-center cursor-pointer group"
                      >
                        <div className={`p-2 rounded-full shadow-lg transition-transform group-hover:scale-110 ${
                          isSelected
                            ? 'bg-emerald-600 text-white ring-4 ring-emerald-300'
                            : 'bg-white text-emerald-700 border border-slate-200'
                        }`}>
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="mt-1 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-black rounded-lg shadow whitespace-nowrap">
                          {gig.area} ({gig.payment.display})
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Gig Preview Card Floating on Map */}
                {(selectedMapGig || filteredGigs[0]) && (
                  <div className="relative z-10 bg-white rounded-2xl p-4 border border-slate-200 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {(selectedMapGig || filteredGigs[0]).categoryName}
                        </span>
                        <span className="text-slate-500 font-semibold">
                          {(selectedMapGig || filteredGigs[0]).distanceDisplay}
                        </span>
                      </div>
                      <h4 className="text-sm font-black text-slate-900">
                        {(selectedMapGig || filteredGigs[0]).title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {(selectedMapGig || filteredGigs[0]).mapDetails.landmark} • {(selectedMapGig || filteredGigs[0]).workingHours}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="text-right sm:mr-3">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Pay</span>
                        <span className="text-base font-black text-slate-900">
                          {(selectedMapGig || filteredGigs[0]).payment.display}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onSelectGig(selectedMapGig || filteredGigs[0])}
                        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                      >
                        View Gig
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenApply(selectedMapGig || filteredGigs[0])}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        ) : (
          /* GRID VIEW */
          <>
            {filteredGigs.length === 0 ? (
              <div className="text-center py-20 px-4 bg-white rounded-3xl border border-slate-200 my-4 shadow-soft-sm">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-black text-slate-800 mb-1">No Quick Gigs Found</h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-5">
                  We couldn’t find any jobs matching your current filter criteria in {userLocation?.city || 'this area'}. Try broadening your radius or category.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGigs.map((gig) => (
                  <div
                    key={gig.id}
                    onClick={() => onSelectGig(gig)}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between group text-left"
                  >
                    <div>
                      {/* Top Header */}
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
                          {gig.vacancies} open
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug mb-2">
                        {gig.title}
                      </h3>

                      {/* Employer */}
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

                      {/* Meta Box */}
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

                      {/* Tags */}
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

                    {/* Footer */}
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
            )}
          </>
        )}

      </div>

    </div>
  );
}
