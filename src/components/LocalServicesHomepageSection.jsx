import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Phone, 
  Calendar, 
  Star, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { localProvidersData } from '../data/localServices';

export default function LocalServicesHomepageSection({ 
  userLocation, 
  onOpenLocationModal, 
  onSelectProvider, 
  onOpenBooking, 
  onNavigate,
  onShowToast 
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Local Services' },
    { id: 'plumbers', label: 'Plumbers' },
    { id: 'electricians', label: 'Electricians' },
    { id: 'makeup-artists', label: 'Makeup Artists' },
    { id: 'rangoli-artists', label: 'Rangoli Artists' },
    { id: 'mehendi-artists', label: 'Mehendi Artists' },
    { id: 'photographers', label: 'Photographers' },
    { id: 'home-cleaning', label: 'Home Cleaning' }
  ];

  const filteredProviders = useMemo(() => {
    return localProvidersData
      .filter((p) => selectedCategory === 'all' || p.category === selectedCategory)
      .slice(0, 6);
  }, [selectedCategory]);

  const handleCallClick = (e, provider) => {
    e.stopPropagation();
    if (onShowToast) {
      onShowToast(`Calling ${provider.name} at ${provider.phone}...`);
    } else {
      window.location.href = `tel:${provider.phone}`;
    }
  };

  const handleBookClick = (e, provider) => {
    e.stopPropagation();
    if (onOpenBooking) {
      onOpenBooking(provider);
    }
  };

  return (
    <section id="local-services-section" className="py-16 md:py-24 bg-[#FAFAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Doorstep Professionals</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">Near You</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Trusted Local Services
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-xl">
              Background-checked local technicians, artists, and home service providers with guaranteed upfront pricing.
            </p>
          </div>

          {/* Location Selector Display */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-white p-2 rounded-2xl border border-slate-200 shadow-sm text-xs">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-slate-500">Service Area:</span>
            <strong className="text-slate-900 font-bold">{userLocation?.city || 'Mumbai'}, {userLocation?.area || 'Bandra'}</strong>
            <button
              onClick={onOpenLocationModal}
              className="ml-2 font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              Change
            </button>
          </div>
        </div>

        {/* 7 Local Categories Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Local Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              onClick={() => onSelectProvider && onSelectProvider(provider)}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between group text-left"
            >
              <div>
                {/* Header row: Avatar, Info & Distance */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={provider.avatar}
                      alt={provider.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-1 ring-slate-200"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {provider.name}
                        </h4>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">{provider.profession}</p>
                      
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                        <span className="flex items-center gap-1 text-emerald-700 font-bold">
                          <MapPin className="w-3 h-3 text-emerald-600" />
                          {provider.distanceKm} km away
                        </span>
                        <span>•</span>
                        <span>{provider.city}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200/80 px-2 py-0.5 rounded-lg text-xs font-black shrink-0">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{provider.rating}</span>
                  </div>
                </div>

                {/* Availability status */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200/70">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    {provider.availability}
                  </span>
                  <span className="text-[11px] text-slate-500 truncate">
                    {provider.availabilityNote || 'Doorstep visit within 60 mins'}
                  </span>
                </div>

                {/* Popular Services mini list */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Verified Starting Service
                  </span>
                  <div className="flex items-center justify-between font-bold text-slate-800">
                    <span className="truncate">{provider.servicesList?.[0]?.name || provider.profession}</span>
                    <span className="text-emerald-700 shrink-0 ml-2">{provider.servicesList?.[0]?.price || provider.priceDisplay}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Starting Price & Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Pricing</span>
                  <span className="text-sm font-black text-slate-900">{provider.priceDisplay}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => handleCallClick(e, provider)}
                    className="p-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-emerald-600 transition-colors"
                    title={`Call ${provider.name}`}
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleBookClick(e, provider)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-sm transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation to Dedicated Local Page */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onNavigate('local-services')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            <span>Explore Full Local Directory & Interactive Map</span>
            <ArrowRight className="w-4 h-4 text-emerald-600" />
          </button>
        </div>

      </div>
    </section>
  );
}
