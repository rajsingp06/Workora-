import React, { useEffect, useState } from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  IndianRupee, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Share2, 
  Calendar, 
  Users, 
  Sparkles, 
  Building2, 
  Navigation,
  ArrowRight,
  Briefcase,
  AlertCircle
} from 'lucide-react';

export default function QuickGigDetailsModal({ 
  gig, 
  onClose, 
  onOpenApply, 
  onShowToast 
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!gig) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      if (onShowToast) onShowToast('Gig link copied to clipboard!');
    }
  };

  const handleCall = () => {
    if (onShowToast) {
      onShowToast(`Connecting call to ${gig.employer.contactPerson} (${gig.employer.name}) at ${gig.employer.phone}...`);
    }
    window.location.href = `tel:${gig.employer.phone}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi ${gig.employer.contactPerson}, I saw your Quick Gig listing "${gig.title}" on Workora and would like to apply.`);
    window.open(`https://wa.me/${gig.employer.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    if (onShowToast) onShowToast(`Opening WhatsApp chat with ${gig.employer.contactPerson}...`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white p-6 sm:p-7 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-black uppercase tracking-wider">
                  {gig.categoryName}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-xs">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{gig.distanceDisplay}</span>
                </span>
                <span className="text-[11px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                  {gig.vacancies} vacancies open
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
                {gig.title}
              </h2>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="font-bold text-white">{gig.employer.name}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Employer
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleShare}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Share gig"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-7 space-y-7 divide-y divide-slate-100 flex-1">
          
          {/* Quick Meta Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">Guaranteed Pay</span>
              <div className="text-lg font-black text-slate-900">{gig.payment.display}</div>
              <span className="text-[11px] text-emerald-700 font-bold block">{gig.payment.period}</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">Duration</span>
              <div className="text-sm font-black text-slate-900 truncate">{gig.duration}</div>
              <span className="text-[11px] text-slate-500 font-semibold block">{gig.employmentType}</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">Shift Hours</span>
              <div className="text-xs font-bold text-slate-900 truncate">{gig.workingHours}</div>
              <span className="text-[11px] text-slate-500 font-semibold block">Fixed Schedule</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">Experience</span>
              <div className="text-xs font-bold text-slate-900 truncate">
                {gig.experienceRequired ? 'Required' : 'No Experience'}
              </div>
              <span className="text-[11px] text-emerald-700 font-semibold block">Students Welcome</span>
            </div>
          </div>

          {/* About The Gig */}
          <div className="pt-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-2">About The Opportunity</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {gig.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {gig.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Responsibilities */}
          <div className="pt-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-3">Key Responsibilities</h3>
            <ul className="space-y-2.5">
              {gig.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements & Perks */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-slate-700" />
                <span>Requirements & Eligibility</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {gig.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Perks & Benefits</span>
              </h4>
              <ul className="space-y-2 text-xs text-emerald-900 font-medium">
                {gig.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Schedule & Reporting */}
          <div className="pt-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-3">Work Schedule & Timings</h3>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-soft-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">{gig.workSchedule.dates}</div>
                  <div className="text-[11px] text-slate-500">Reporting: {gig.workSchedule.reportingTime}</div>
                </div>
              </div>

              <div className="text-xs font-bold text-slate-700 sm:text-right">
                <div className="text-slate-900">{gig.workingHours}</div>
                <div className="text-[11px] text-slate-500 font-normal">{gig.workSchedule.shiftDuration}</div>
              </div>
            </div>
          </div>

          {/* Location on Map (Interactive Visual Mockup) */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-400">Work Location & Map</h3>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {gig.distanceDisplay} from your location
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
              {/* Map Illustration Header */}
              <div className="relative h-44 bg-slate-200 overflow-hidden flex items-center justify-center">
                {/* Visual Map Grid Pattern */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Stylized Street Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30 stroke-slate-400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-20 60 Q 150 120 400 40 T 800 100" fill="none" strokeWidth="8" />
                  <path d="M120 -20 Q 220 80 180 200" fill="none" strokeWidth="6" />
                  <path d="M300 200 L 450 -20" fill="none" strokeWidth="4" />
                </svg>

                {/* Center Map Pin with Pulsing Radar Ring */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-12 h-12 bg-emerald-500/30 rounded-full animate-ping" />
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg ring-4 ring-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-1.5 px-3 py-1 bg-slate-900 text-white text-[11px] font-black rounded-full shadow-md whitespace-nowrap">
                    {gig.mapDetails.landmark}
                  </div>
                </div>
              </div>

              {/* Location Address Details */}
              <div className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200">
                <div className="space-y-0.5">
                  <div className="text-xs font-black text-slate-900">{gig.mapDetails.landmark}</div>
                  <div className="text-xs text-slate-500">{gig.mapDetails.address}</div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gig.mapDetails.address)}`;
                    window.open(url, '_blank');
                    if (onShowToast) onShowToast('Opening Google Maps directions...');
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          </div>

          {/* Employer Info Card */}
          <div className="pt-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-3">About The Employer</h3>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={gig.employer.logo}
                  alt={gig.employer.name}
                  className="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-200"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-slate-900 text-sm">{gig.employer.name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xs text-slate-500">{gig.employer.type}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Contact Person: <strong className="text-slate-700">{gig.employer.contactPerson}</strong> • {gig.employer.activeJobs} active gigs
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCall}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call Employer</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Sticky Modal Footer CTA */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-baseline gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <div>
              <span className="text-[10px] font-black uppercase text-slate-400 block">Total Earning</span>
              <span className="text-xl font-black text-slate-900">{gig.payment.display}</span>
              <span className="text-xs text-slate-500 font-semibold"> / {gig.payment.unit}</span>
            </div>
            <span className="sm:hidden text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
              {gig.payment.payoutType}
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCall}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenApply(gig);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-brand-glow hover:shadow transition-all cursor-pointer"
            >
              <span>Apply for this Gig</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
