import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';

export default function CtaSection({ onOpenAuth }) {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Navy Premium Hero Card */}
        <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl border border-slate-800">
          
          {/* Subtle Ambient Radial Gradients */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              Empowering World-Class Talent & Visionary Companies
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Your Next Opportunity Starts Here.
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
              Whether you are scaling an ambitious team, shipping a game-changing product, or looking to elevate your independent career, Workora delivers the vetted foundation you need.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => onOpenAuth('signup', 'client')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-200"
              >
                <span>Hire Talent</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenAuth('signup', 'freelancer')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-2xl shadow-brand-glow transition-all duration-200"
              >
                <span>Join as Freelancer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>Escrow-Protected Milestone Payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Zero Hidden Fees or Markups</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Top 1% Thoroughly Vetted Roster</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
