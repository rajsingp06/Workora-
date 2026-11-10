import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Quote
} from 'lucide-react';

export default function LocalProviderModal({ provider, userLocation, onClose, onOpenBooking, onShowToast }) {
  if (!provider) return null;

  const handleCall = () => {
    if (onShowToast) {
      onShowToast(`Calling ${provider.name} at ${provider.phone}...`);
    }
    window.location.href = `tel:${provider.phone.replace(/\s+/g, '')}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${provider.name}, I found your profile on Workora Local Services and would like to inquire about your availability.`
    );
    window.open(`https://wa.me/${provider.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      
      {/* Optimized Modal Container: max-h-[90vh] with flex column */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact Cover Banner */}
        <div className="relative h-24 sm:h-28 bg-slate-900 shrink-0 overflow-hidden">
          <img
            src={provider.coverImage}
            alt={provider.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors border border-white/20 shadow-soft"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Header Identity Row (Sticky / Fixed at top of card) */}
        <div className="px-6 sm:px-8 pt-0 pb-4 border-b border-slate-100 bg-white shrink-0 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-10 sm:-mt-12 gap-3">
            <div className="flex items-end gap-3.5">
              <div className="relative shrink-0">
                <img
                  src={provider.avatar}
                  alt={provider.name}
                  className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
              </div>

              <div className="pb-0.5 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {provider.name}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-brand-600 fill-brand-50" />
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                    Verified Pro
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 truncate mt-0.5">{provider.profession}</p>
                <div className="flex items-center gap-2.5 text-xs text-slate-500 mt-1">
                  <span className="flex items-center gap-1 font-bold text-slate-900">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    {provider.rating} ({provider.reviewsCount} reviews)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                    <MapPin className="w-3 h-3" />
                    {provider.distanceKm} km away ({provider.area})
                  </span>
                </div>
              </div>
            </div>

            {/* Price badge */}
            <div className="hidden sm:flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200/80">
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Starting From</span>
                <div className="text-xl font-black text-slate-900 leading-none">
                  ₹{provider.startingPrice}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Modal Body: 2-Column Balanced Layout */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 cols): Bio, Services Menu, Portfolio, Reviews */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges bar */}
              <div className="flex flex-wrap items-center gap-2">
                {provider.badges?.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200/60"
                  >
                    <ShieldCheck className="w-3 h-3" />
                    {b}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                  <Clock className="w-3 h-3" />
                  {provider.availability}
                </span>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                  About
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {provider.bio}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="font-bold text-slate-700">Coverage:</span>
                  <span>{provider.serviceArea}</span>
                </div>
              </div>

              {/* Services & Pricing Menu */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                  Services & Pricing Breakdown
                </h4>
                <div className="space-y-2">
                  {provider.servicesList?.map((s) => (
                    <div key={s.name} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">{s.name}</h5>
                        <span className="text-[10px] text-slate-400">Est. duration: {s.duration}</span>
                      </div>
                      <span className="text-xs font-black text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200/50">
                        {s.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Gallery */}
              {provider.gallery?.length > 0 && (
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                    Portfolio & Work Samples
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {provider.gallery.map((img, idx) => (
                      <div key={idx} className="relative rounded-xl overflow-hidden aspect-square bg-slate-100">
                        <img
                          src={img}
                          alt="Portfolio sample"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Customer Reviews */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                  Verified Customer Reviews ({provider.reviewsCount})
                </h4>
                <div className="space-y-2.5">
                  {provider.reviews?.map((r, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">{r.author}</span>
                        <span className="text-[10px] text-slate-400">{r.date}</span>
                      </div>
                      <p className="text-xs text-slate-600 italic">
                        "{r.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Sticky Quick Action Card with Booking & Direct Contact */}
            <div className="lg:col-span-5 bg-slate-50/70 rounded-3xl p-5 border border-slate-200/90 shadow-soft-sm space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Starting Rate</span>
                  <div className="text-2xl font-black text-slate-900 leading-none">
                    ₹{provider.startingPrice}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Verified Provider</span>
                  <span className="text-xs font-semibold text-slate-600">Pay after service</span>
                </div>
              </div>

              {/* Direct Booking Callout */}
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 mb-1">
                  Book Doorstep Service
                </h4>
                <p className="text-[11px] text-slate-500 mb-4">
                  Select your package, date, and time slot. No upfront deposit required.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenBooking(provider);
                  }}
                  className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-brand-glow transition-all flex items-center justify-center gap-2 mb-3"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </button>
              </div>

              {/* Direct Contact Options */}
              <div className="pt-2 border-t border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Direct Inquiries
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCall}
                    className="py-2.5 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Call Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-soft"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span>Police verified & identity background-checked</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>30-minute arrival window guarantee</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
