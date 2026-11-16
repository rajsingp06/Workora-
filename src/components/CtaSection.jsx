import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CtaSection({ onOpenAuth }) {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-lg border border-slate-800">
          
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Start Getting Things Done
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Your Next Opportunity Starts Here.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Join thousands of businesses hiring vetted freelance specialists and trusted doorstep professionals across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={() => onOpenAuth('signup', 'client')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Hire Talent Now</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </button>

              <button
                type="button"
                onClick={() => onOpenAuth('signup', 'freelancer')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Join as a Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Upfront Recruitment Cost</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Protected Escrow Milestones</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Direct ₹ INR Bank & UPI Transfers</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
