import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  Crosshair, 
  X, 
  Check, 
  Navigation, 
  Building2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { POPULAR_CITIES } from '../../data/localServices';
import { locationService } from '../../utils/location';

export default function LocationModal({ isOpen, onClose, onLocationSelect, onShowToast }) {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [isLocating, setIsLocating] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Use Browser GPS
  const handleUseMyLocation = async () => {
    setIsLocating(true);
    setError('');
    try {
      const gpsLocation = await locationService.requestBrowserLocation();
      setIsLocating(false);
      if (onShowToast) {
        onShowToast(`📍 Location updated to ${gpsLocation.formatted}`);
      }
      if (onLocationSelect) {
        onLocationSelect(gpsLocation);
      }
      onClose();
    } catch (err) {
      setIsLocating(false);
      setError(err.message || 'Could not fetch device location. Please choose manually.');
    }
  };

  // Custom search submission
  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    const trimmed = searchInput.trim();
    const newLoc = {
      city: selectedCity,
      area: trimmed,
      pinCode: /^\d{6}$/.test(trimmed) ? trimmed : '400050',
      formatted: `${selectedCity}, ${trimmed}`,
      lat: 19.0596,
      lng: 72.8295,
      isGps: false
    };

    locationService.setLocation(newLoc);
    if (onShowToast) {
      onShowToast(`Location set to ${newLoc.formatted}`);
    }
    if (onLocationSelect) {
      onLocationSelect(newLoc);
    }
    onClose();
  };

  const handleSelectArea = (city, area, pin) => {
    const newLoc = {
      city,
      area,
      pinCode: pin,
      formatted: `${city}, ${area}`,
      lat: 19.0596,
      lng: 72.8295,
      isGps: false
    };

    locationService.setLocation(newLoc);
    if (onShowToast) {
      onShowToast(`Location set to ${newLoc.formatted}`);
    }
    if (onLocationSelect) {
      onLocationSelect(newLoc);
    }
    onClose();
  };

  const currentCityData = POPULAR_CITIES.find((c) => c.name === selectedCity) || POPULAR_CITIES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center border border-brand-200/60">
              <MapPin className="w-5 h-5 text-brand-600" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Select Your Location</h3>
              <p className="text-xs text-slate-500">Find nearby verified professionals in your neighbourhood</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* GPS Location Button */}
          <button
            type="button"
            onClick={handleUseMyLocation}
            disabled={isLocating}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-brand-50/60 border border-brand-200/80 hover:bg-brand-50 hover:border-brand-300 text-brand-800 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-brand-600 shadow-soft-sm group-hover:scale-105 transition-transform">
                <Crosshair className={`w-5 h-5 ${isLocating ? 'animate-spin text-brand-600' : ''}`} />
              </div>
              <div className="text-left">
                <span className="text-xs font-extrabold text-slate-900 block">
                  {isLocating ? 'Detecting Your GPS Location...' : 'Use My Current Location'}
                </span>
                <span className="text-[11px] text-slate-500">
                  Enable device location for nearest verified pros
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-brand-700 underline group-hover:translate-x-0.5 transition-transform">
              Detect
            </span>
          </button>

          {error && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>{error}</span>
            </div>
          )}

          {/* Search Input for Area or PIN */}
          <form onSubmit={handleCustomSubmit} className="relative">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Enter Area, Landmark or 6-digit PIN Code
            </label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="e.g. Bandra West, Koramangala, 400050..."
                className="w-full pl-10 pr-20 py-2.5 text-xs sm:text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-3 py-1.5 bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Apply
              </button>
            </div>
          </form>

          {/* City Tabs */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Popular Cities
            </label>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_CITIES.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedCity(c.name)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCity === c.name
                      ? 'bg-slate-900 text-white shadow-soft-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Neighbourhoods / Areas for Selected City */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Areas in {selectedCity}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {currentCityData.areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => handleSelectArea(selectedCity, area, currentCityData.defaultPin)}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-400 hover:bg-brand-50/30 text-left text-xs font-semibold text-slate-700 hover:text-brand-700 transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{area}</span>
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400">
            Workora Local Services guarantees background-checked verified specialists with doorstep service.
          </p>
        </div>
      </div>
    </div>
  );
}
