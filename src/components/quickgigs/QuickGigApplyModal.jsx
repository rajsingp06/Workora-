import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  IndianRupee, 
  ShieldCheck, 
  Send, 
  User, 
  Phone, 
  GraduationCap, 
  Calendar,
  Sparkles
} from 'lucide-react';

export default function QuickGigApplyModal({ 
  gig, 
  currentUser, 
  onClose, 
  onShowToast 
}) {
  const [fullName, setFullName] = useState(currentUser?.fullName || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [profileType, setProfileType] = useState('student');
  const [availableConfirmed, setAvailableConfirmed] = useState(true);
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!gig) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone.trim() || phone.replace(/[^0-9]/g, '').length < 10) {
      if (onShowToast) onShowToast('Please enter a valid 10-digit Indian mobile number for WhatsApp updates.');
      return;
    }

    if (!availableConfirmed) {
      if (onShowToast) onShowToast('Please confirm your availability for the specified schedule.');
      return;
    }

    setIsSubmitting(true);

    const application = {
      id: `app-${Date.now()}`,
      gigId: gig.id,
      gigTitle: gig.title,
      employerName: gig.employer.name,
      applicantName: fullName || 'Applicant',
      phone: phone.trim(),
      profileType,
      note,
      status: 'Submitted',
      appliedAt: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem('workora_quick_gig_applications');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(application);
      localStorage.setItem('workora_quick_gig_applications', JSON.stringify(list));
    } catch {
      // fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      if (onShowToast) {
        onShowToast(`Application sent to ${gig.employer.name}! You will receive a WhatsApp message within 2 hours.`);
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              Quick 1-Minute Apply
            </span>
            <h3 className="text-base sm:text-lg font-black text-white leading-tight">
              {gig.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
              <span>{gig.employer.name}</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">{gig.payment.display} ({gig.payment.period})</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* WhatsApp / Phone */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              WhatsApp / Mobile Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              The employer will contact you on WhatsApp regarding reporting instructions and gate passes.
            </p>
          </div>

          {/* Profile / Student Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Who are you?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'student', label: 'College Student' },
                { id: 'freelancer', label: 'Freelancer' },
                { id: 'part-time', label: 'Part-Time Seeker' }
              ].map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setProfileType(t.id)}
                  className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition-colors cursor-pointer text-center ${
                    profileType === t.id
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Confirmation Checkbox */}
          <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-xl">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-emerald-950 font-medium">
              <input
                type="checkbox"
                checked={availableConfirmed}
                onChange={(e) => setAvailableConfirmed(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 mt-0.5"
              />
              <span>
                I confirm I am available for <strong>{gig.duration}</strong> during <strong>{gig.workingHours}</strong> at <strong>{gig.area || gig.city}</strong>.
              </span>
            </label>
          </div>

          {/* Short Note (Optional) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Short Note or Relevant Experience <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. College 2nd year student with fast typing and prior fest volunteering experience..."
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Trust Guarantees */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Workora Guaranteed Payout: Funds held in Escrow until shift signoff.</span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-brand-glow transition-all disabled:opacity-70 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Sending Application...' : 'Confirm & Apply'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
