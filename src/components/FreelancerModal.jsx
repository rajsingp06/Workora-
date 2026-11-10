import React, { useEffect, useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Briefcase, 
  Send, 
  Quote, 
  CheckCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function FreelancerModal({ freelancer, onClose, onShowToast }) {
  const [inquiryText, setInquiryText] = useState('');
  const [projectBudget, setProjectBudget] = useState('5k-10k');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!freelancer) return null;

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      if (onShowToast) {
        onShowToast(`Inquiry sent to ${freelancer.name}! They typically respond within ${freelancer.responseRate}.`);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      
      {/* Optimized Modal Container: max-h-[90vh] so it never exceeds screen bounds */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact Header Cover */}
        <div className="relative h-24 sm:h-28 bg-slate-900 shrink-0 overflow-hidden">
          <img
            src={freelancer.coverImage}
            alt="Cover"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors border border-white/20 shadow-soft"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Profile Identity Row (Sticky / Fixed at top of card) */}
        <div className="px-6 sm:px-8 pt-0 pb-4 border-b border-slate-100 bg-white shrink-0 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-10 sm:-mt-12 gap-3">
            <div className="flex items-end gap-3.5">
              <div className="relative shrink-0">
                <img
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" title="Online" />
              </div>
              <div className="pb-0.5 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {freelancer.name}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-brand-600 fill-brand-50" />
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                    {freelancer.badges?.[0] || 'Top Rated'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 truncate mt-0.5">
                  {freelancer.title}
                </p>
                <div className="flex items-center gap-2.5 text-xs text-slate-500 mt-1">
                  <span className="flex items-center gap-1 font-bold text-slate-900">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    {freelancer.rating} ({freelancer.reviewsCount} reviews)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {freelancer.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Rate Pill */}
            <div className="hidden sm:flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200/80">
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Rate</span>
                <div className="text-xl font-black text-slate-900 leading-none">
                  ${freelancer.hourlyRate}<span className="text-xs font-normal text-slate-500">/hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Modal Body: 2-Column Balanced Layout */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 cols): Portfolio, Bio, Skills, Review */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges bar */}
              <div className="flex flex-wrap items-center gap-2">
                {freelancer.badges?.map((b) => (
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
                  Replies {freelancer.responseRate}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  {freelancer.completedProjects} Projects Done
                </span>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                  About
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {freelancer.bio}
                </p>
              </div>

              {/* Verified Case Studies & Impact */}
              {freelancer.recentWork?.length > 0 && (
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                    Verified Shipped Work & Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {freelancer.recentWork.map((work, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-start justify-between gap-1.5 mb-1">
                          <h5 className="text-xs font-bold text-slate-900 leading-snug">{work.title}</h5>
                          <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200/50 shrink-0">
                            {work.result}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {work.tags?.map((t) => (
                            <span key={t} className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                  Skills & Tools
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {freelancer.skills?.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              {freelancer.testimonial && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs italic text-slate-700 leading-relaxed font-medium">
                      "{freelancer.testimonial}"
                    </p>
                    <span className="text-[10px] font-bold text-slate-400 block mt-1.5 uppercase tracking-wider">
                      Verified Client Review
                    </span>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column (5 cols): Sticky Action Card with Inquiry Form */}
            <div className="lg:col-span-5 bg-slate-50/70 rounded-3xl p-5 border border-slate-200/90 shadow-soft-sm space-y-4">
              
              {/* Rate & Protection Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Hourly Rate</span>
                  <div className="text-2xl font-black text-slate-900 leading-none">
                    ${freelancer.hourlyRate}<span className="text-xs font-normal text-slate-500">/hr</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Escrow Protected</span>
                  <span className="text-xs font-semibold text-slate-600">Release on approval</span>
                </div>
              </div>

              {/* Direct Inquiry Form */}
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 mb-1">
                  Work with {freelancer.name.split(' ')[0]}
                </h4>
                <p className="text-[11px] text-slate-500 mb-3">
                  Send your project brief. Funds are held in escrow until you approve deliverables.
                </p>

                <form onSubmit={handleSubmitInquiry} className="space-y-3">
                  <div>
                    <textarea
                      rows="3"
                      required
                      value={inquiryText}
                      onChange={(e) => setInquiryText(e.target.value)}
                      placeholder={`Hi ${freelancer.name.split(' ')[0]}, we are looking for help with our new project...`}
                      className="w-full p-3 text-xs text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Estimated Project Budget:
                    </label>
                    <select
                      value={projectBudget}
                      onChange={(e) => setProjectBudget(e.target.value)}
                      className="w-full text-xs font-medium text-slate-800 bg-white border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-500"
                    >
                      <option value="1k-3k">$1,000 - $3,000</option>
                      <option value="3k-5k">$3,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k+">$10,000+</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-brand-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending Brief...' : `Send Inquiry to ${freelancer.name.split(' ')[0]}`}</span>
                  </button>
                </form>
              </div>

              {/* Security Assurance */}
              <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span>100% money-back escrow guarantee</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Average response time under {freelancer.responseRate}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
