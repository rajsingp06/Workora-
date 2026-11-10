import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Crosshair, 
  Star, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Sparkles, 
  Filter, 
  SlidersHorizontal, 
  Map, 
  List, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Eye,
  Camera,
  Palette,
  Feather,
  PartyPopper,
  Zap,
  Wrench,
  GraduationCap,
  Home,
  Check
} from 'lucide-react';
import { localCategoriesData, localProvidersData } from '../../data/localServices';

// Icon map for the 9 categories
const categoryIconMap = {
  Sparkles,
  Palette,
  Feather,
  Camera,
  PartyPopper,
  Zap,
  Wrench,
  GraduationCap,
  Home
};

export default function LocalServicesPage({ 
  userLocation, 
  onOpenLocationModal, 
  onSelectProvider, 
  onOpenBooking,
  onShowToast 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxDistance, setMaxDistance] = useState(25); // km
  const [availabilityFilter, setAvailabilityFilter] = useState('all'); // 'all' | 'today' | 'weekend'
  const [sortBy, setSortBy] = useState('distance'); // 'distance' | 'rating' | 'price'
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'map'
  const [activeMapPin, setActiveMapPin] = useState(null);

  // Filter & sort providers
  const filteredProviders = useMemo(() => {
    return localProvidersData
      .filter((provider) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'all' || provider.category === selectedCategory;

        // Search query filter
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          provider.name.toLowerCase().includes(q) ||
          provider.profession.toLowerCase().includes(q) ||
          provider.city.toLowerCase().includes(q) ||
          provider.area.toLowerCase().includes(q) ||
          provider.servicesList?.some((s) => s.name.toLowerCase().includes(q));

        // Distance filter
        const matchesDistance = provider.distanceKm <= maxDistance;

        // Availability filter
        const matchesAvailability =
          availabilityFilter === 'all' ||
          (availabilityFilter === 'today' && provider.availability.toLowerCase().includes('today')) ||
          (availabilityFilter === 'weekend' && (provider.availability.toLowerCase().includes('weekend') || provider.availability.toLowerCase().includes('today')));

        return matchesCategory && matchesSearch && matchesDistance && matchesAvailability;
      })
      .sort((a, b) => {
        if (sortBy === 'distance') return a.distanceKm - b.distanceKm;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price') return a.startingPrice - b.startingPrice;
        return 0;
      });
  }, [searchQuery, selectedCategory, maxDistance, availabilityFilter, sortBy]);

  const handleQuickCall = (e, provider) => {
    e.stopPropagation();
    if (onShowToast) {
      onShowToast(`Calling ${provider.name} at ${provider.phone}...`);
    }
    window.location.href = `tel:${provider.phone.replace(/\s+/g, '')}`;
  };

  const handleQuickWhatsApp = (e, provider) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hi ${provider.name}, I am reaching out through Workora Local Services for an inquiry.`
    );
    window.open(`https://wa.me/${provider.whatsapp}?text=${text}`, '_blank');
  };

  const handleQuickBook = (e, provider) => {
    e.stopPropagation();
    onOpenBooking(provider);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-24 pb-20 selection:bg-brand-100 selection:text-brand-900 font-sans">
      
      {/* Top Banner with Search & Location */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 py-10 sm:py-14">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-50/50 rounded-full blur-2xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Verified In-Home & On-Demand Experts
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Local Services At Your Doorstep
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              From bridal makeup artists & rangoli masters to licensed electricians & home tutors — booked with verified background checks and zero middlemen fees.
            </p>
          </div>

          {/* Unified Search & Location Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-2.5 sm:p-3 shadow-soft-xl border border-slate-200/90 flex flex-col md:flex-row items-stretch gap-2.5">
            
            {/* Location Selector Component */}
            <button
              type="button"
              onClick={onOpenLocationModal}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100/80 text-slate-800 transition-colors text-left border border-slate-200/80 md:w-72 shrink-0 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-brand-600 shadow-soft-sm group-hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 truncate">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Service Location
                </span>
                <span className="text-xs font-extrabold text-slate-900 truncate block">
                  {userLocation?.formatted || 'Mumbai, Bandra West'}
                </span>
              </div>
              <span className="text-[11px] font-bold text-brand-600 underline">Change</span>
            </button>

            {/* Keyword Search Input */}
            <div className="relative flex-1 flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by service (e.g. Bridal Mehendi, Plumber, Physics Tutor, Decorator)..."
                className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 bg-transparent rounded-2xl focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mr-3 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-0.5 rounded-lg"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Search Action */}
            <button
              type="button"
              className="px-6 py-3.5 bg-slate-900 hover:bg-brand-600 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-soft transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Pros</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Quick Filter Suggestions */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400 font-semibold">Popular in {userLocation?.city || 'Mumbai'}:</span>
            {['Bridal Makeup', 'Sanskar Bharti Rangoli', 'Organic Henna', 'Short Circuit Electrician', 'Modular Kitchen'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 text-slate-600 hover:text-brand-700 font-medium transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Popular 9 Local Service Categories Carousel/Grid */}
      <section className="py-12 bg-[#FAFAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Explore Local Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                On-demand verified experts available in your neighbourhood
              </p>
            </div>

            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-xs font-bold transition-colors ${
                selectedCategory === 'all' ? 'text-brand-700 underline' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Show All ({localProvidersData.length} Pros)
            </button>
          </div>

          {/* 9 Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-3">
            {localCategoriesData.map((cat) => {
              const IconComp = categoryIconMap[cat.icon] || Sparkles;
              const isSelected = selectedCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col items-center text-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-soft-lg scale-[1.02]'
                      : 'bg-white border-slate-200/90 hover:border-brand-300 hover:shadow-soft'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                      isSelected
                        ? 'bg-brand-500 text-white'
                        : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className={`text-xs font-extrabold leading-tight mb-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {cat.name}
                    </h3>
                    <span className={`text-[10px] block font-semibold ${isSelected ? 'text-brand-300' : 'text-slate-400'}`}>
                      {cat.count}
                    </span>
                  </div>

                  <span className={`text-[10px] mt-2 font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/10 text-brand-200' : 'bg-slate-50 text-slate-600'
                  }`}>
                    from {cat.startingRate}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Main Providers Section with Filters and View Toggle */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Results count, Filters, and View Toggle (List vs Map) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 mb-8 shadow-soft-sm flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left: Distance & Filters */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Distance filter */}
              <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-500">Radius:</span>
                <select
                  value={maxDistance}
                  onChange={(e) => setMaxDistance(Number(e.target.value))}
                  className="bg-transparent font-bold text-slate-900 focus:outline-none"
                >
                  <option value={3}>Within 3 km</option>
                  <option value={5}>Within 5 km</option>
                  <option value={10}>Within 10 km</option>
                  <option value={25}>Within 25 km</option>
                </select>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-500">Availability:</span>
                <select
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value)}
                  className="bg-transparent font-bold text-slate-900 focus:outline-none"
                >
                  <option value="all">Anytime</option>
                  <option value="today">Available Today</option>
                  <option value="weekend">This Weekend</option>
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-500">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent font-bold text-slate-900 focus:outline-none"
                >
                  <option value="distance">Nearest First</option>
                  <option value="rating">Top Rated (4.8+)</option>
                  <option value="price">Starting Price (Low to High)</option>
                </select>
              </div>
            </div>

            {/* Right: Results counter & View Toggle */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <span className="text-xs font-semibold text-slate-500">
                Found <strong className="text-slate-900">{filteredProviders.length}</strong> local pros
              </span>

              {/* View Switcher (List vs Map) */}
              <div className="inline-flex p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'list'
                      ? 'bg-white text-slate-900 shadow-soft-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  <span>List</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('map')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'map'
                      ? 'bg-white text-slate-900 shadow-soft-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Interactive Map</span>
                </button>
              </div>
            </div>

          </div>

          {/* Empty State */}
          {filteredProviders.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 p-8">
              <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">No local pros found in this radius</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-5">
                Try expanding your search radius to 25 km or clearing your active filters to see all nearby experts.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setMaxDistance(25);
                  setSearchQuery('');
                  setAvailabilityFilter('all');
                }}
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-brand-glow transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* VIEW MODE 1: LIST / GRID VIEW */}
          {viewMode === 'list' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <div
                  key={provider.id}
                  onClick={() => onSelectProvider(provider)}
                  className="group bg-white rounded-3xl border border-slate-200/90 hover:border-brand-300 shadow-soft hover:shadow-soft-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Top Media Snapshot */}
                    <div className="relative h-44 bg-slate-100 overflow-hidden">
                      <img
                        src={provider.coverImage}
                        alt={provider.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      {/* Distance Badge */}
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-extrabold shadow-soft-sm">
                        <MapPin className="w-3 h-3 text-brand-600" />
                        {provider.distanceKm} km away
                      </span>

                      {/* Availability Tag */}
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold">
                        <Clock className="w-3 h-3" />
                        {provider.availability}
                      </span>

                      {/* Starting Rate on Cover */}
                      <div className="absolute bottom-3 left-3 text-white">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300 block">Starting From</span>
                        <span className="text-xl font-black">{provider.priceDisplay}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 sm:p-6">
                      
                      {/* Name & Avatar */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <img
                          src={provider.avatar}
                          alt={provider.name}
                          className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100 shrink-0 shadow-soft-sm"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-extrabold text-slate-900 text-base group-hover:text-brand-600 transition-colors truncate">
                              {provider.name}
                            </h3>
                            <CheckCircle2 className="w-4 h-4 text-brand-600 fill-brand-50 shrink-0" />
                          </div>
                          <p className="text-xs font-semibold text-slate-500 truncate">{provider.profession}</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span className="text-xs font-bold text-slate-900">{provider.rating}</span>
                            <span className="text-xs text-slate-400">({provider.reviewsCount} reviews)</span>
                          </div>
                        </div>
                      </div>

                      {/* Service Area */}
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {provider.bio}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate"><strong>Service Area:</strong> {provider.area}</span>
                      </div>

                      {/* Sample Service Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {provider.servicesList?.slice(0, 2).map((s) => (
                          <span key={s.name} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                            {s.name} ({s.price})
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Card Actions: Call Now, WhatsApp, Book Now */}
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleQuickCall(e, provider)}
                      className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 hover:border-emerald-200 transition-colors"
                      title="Call Specialist"
                      aria-label="Call Specialist"
                    >
                      <Phone className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleQuickWhatsApp(e, provider)}
                      className="p-2.5 rounded-xl border border-slate-200 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200 transition-colors"
                      title="WhatsApp Chat"
                      aria-label="WhatsApp Chat"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleQuickBook(e, provider)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-soft flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Slot</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* VIEW MODE 2: INTERACTIVE VECTOR MAP VIEW */}
          {viewMode === 'map' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Map Canvas (Simulated styled interactive vector map) */}
              <div className="lg:col-span-8 bg-slate-900 rounded-3xl p-6 relative overflow-hidden min-h-[520px] shadow-2xl border border-slate-800 flex flex-col justify-between">
                
                {/* Map Grid Pattern & Concentric Radar Circles */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                
                {/* Distance radar circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-brand-500/20 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-brand-500/10 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-700/30 rounded-full pointer-events-none" />

                {/* Top Overlay Bar */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 text-white text-xs flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold">Live Radar: {userLocation?.formatted || 'Mumbai'}</span>
                    <span className="text-slate-400">({filteredProviders.length} active specialists nearby)</span>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-950/60 px-3 py-1 rounded-lg">
                    Vector Topology Preview
                  </span>
                </div>

                {/* Center User Location Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center ring-8 ring-brand-500/20 shadow-brand-glow animate-pulse">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-extrabold text-white bg-slate-900/90 px-2 py-0.5 rounded-full mt-1 border border-slate-700">
                    You are here
                  </span>
                </div>

                {/* Provider Pins scattered in neighborhood relative coordinates */}
                <div className="absolute inset-0 pointer-events-auto">
                  {filteredProviders.map((p, idx) => {
                    // Spread pins in a visually appealing radial constellation
                    const angle = (idx * (360 / Math.max(filteredProviders.length, 1))) * (Math.PI / 180);
                    const distFactor = Math.min(Math.max(p.distanceKm * 25, 60), 200);
                    const x = 50 + (Math.cos(angle) * distFactor) / 6;
                    const y = 50 + (Math.sin(angle) * distFactor) / 6;
                    const isSelected = activeMapPin?.id === p.id;

                    return (
                      <div
                        key={p.id}
                        style={{ left: `${x}%`, top: `${y}%` }}
                        onClick={() => setActiveMapPin(p)}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 transition-all duration-200 group ${
                          isSelected ? 'scale-125 z-40' : 'hover:scale-110'
                        }`}
                      >
                        <div className={`p-2 rounded-2xl flex items-center gap-1.5 shadow-xl border transition-all ${
                          isSelected 
                            ? 'bg-brand-500 text-white border-white ring-4 ring-brand-400/30' 
                            : 'bg-white text-slate-900 border-slate-200 hover:bg-brand-50'
                        }`}>
                          <img src={p.avatar} alt={p.name} className="w-6 h-6 rounded-lg object-cover" />
                          <div className="text-left hidden sm:block pr-1">
                            <span className="text-[11px] font-bold block leading-none">{p.name.split(' ')[0]}</span>
                            <span className="text-[9px] opacity-75">{p.distanceKm} km</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map Bottom Legend */}
                <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-800">
                  <span>Click any pin to inspect rates and contact details</span>
                  <span className="text-brand-400 font-semibold">100% In-Home Verified Coverage</span>
                </div>

              </div>

              {/* Map Selected Provider Detail Panel (Right 4 cols) */}
              <div className="lg:col-span-4">
                {activeMapPin ? (
                  <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft-lg animate-fadeIn">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={activeMapPin.avatar} alt={activeMapPin.name} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-brand-500/30" />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-extrabold text-base text-slate-900">{activeMapPin.name}</h4>
                            <CheckCircle2 className="w-4 h-4 text-brand-600 fill-brand-50" />
                          </div>
                          <span className="text-xs font-semibold text-slate-500 block">{activeMapPin.profession}</span>
                          <span className="text-xs font-bold text-amber-500 flex items-center gap-1 mt-0.5">
                            <Star className="w-3.5 h-3.5 fill-amber-400" /> {activeMapPin.rating} ({activeMapPin.reviewsCount} reviews)
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveMapPin(null)}
                        className="text-slate-400 hover:text-slate-600 p-1"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-600 mb-5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Proximity:</span>
                        <strong className="text-slate-900">{activeMapPin.distanceKm} km away ({activeMapPin.area})</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Starting Price:</span>
                        <strong className="text-emerald-700 font-black">{activeMapPin.priceDisplay}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Availability:</span>
                        <span className="font-semibold text-brand-700">{activeMapPin.availability}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-5">
                      {activeMapPin.bio}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <button
                        type="button"
                        onClick={(e) => handleQuickCall(e, activeMapPin)}
                        className="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Call</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleQuickWhatsApp(e, activeMapPin)}
                        className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(activeMapPin)}
                      className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-brand-glow transition-all"
                    >
                      Book Doorstep Appointment
                    </button>
                  </div>
                ) : (
                  <div className="p-8 text-center bg-white rounded-3xl border border-dashed border-slate-200 flex flex-col items-center justify-center min-h-[300px]">
                    <MapPin className="w-10 h-10 text-brand-500 mb-2 animate-bounce" />
                    <h4 className="text-sm font-extrabold text-slate-800 mb-1">Select a Pin on Radar</h4>
                    <p className="text-xs text-slate-500 max-w-xs">
                      Click any technician or artisan pin on the vector map to inspect real-time proximity, portfolio, and contact details.
                    </p>
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
