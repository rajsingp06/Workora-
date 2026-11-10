import React, { useState } from 'react';
import { Search, MessageSquareCode, ShieldCheck, ArrowRight, UserCheck, Send, DollarSign, Sparkles } from 'lucide-react';

export default function HowItWorks({ onOpenAuth }) {
  const [activeRole, setActiveRole] = useState('clients'); // 'clients' | 'freelancers'

  const clientSteps = [
    {
      step: '01',
      title: 'Discover Talent',
      tagline: 'Vetted Portfolios & Instant Matching',
      description: 'Search by exacting tech stacks, review verified client ratings, and inspect real shipped project case studies.',
      icon: Search,
      highlights: ['AI-assisted candidate matching', 'Public work histories & verified ratings', 'Transparent upfront hourly or fixed pricing'],
    },
    {
      step: '02',
      title: 'Collaborate',
      tagline: 'Built-in Workspace & Safe Contracts',
      description: 'Chat in real time, review iterative work in staging, and establish clear deliverables with flexible milestone escrow.',
      icon: MessageSquareCode,
      highlights: ['Seamless encrypted messaging', 'Custom milestone definitions', 'Workora Escrow security guarantee'],
    },
    {
      step: '03',
      title: 'Get Things Done',
      tagline: 'Approve & Scale Confidently',
      description: 'Review final source code, design files, or assets. Release payments only when you are completely satisfied with the results.',
      icon: ShieldCheck,
      highlights: ['One-click milestone release', 'Full IP and copyright transfer', 'Automated tax-compliant invoicing'],
    },
  ];

  const freelancerSteps = [
    {
      step: '01',
      title: 'Create Your Profile',
      tagline: 'Showcase Your Real Craft',
      description: 'Highlight your top achievements, link your GitHub/Figma portfolios, and set your own transparent hourly rates.',
      icon: UserCheck,
      highlights: ['Verified Pro badge evaluation', 'Dynamic rich case-study showcases', 'Zero bidding fees or proposal taxes'],
    },
    {
      step: '02',
      title: 'Receive Quality Pitches',
      tagline: 'Direct Inbound & Selective Projects',
      description: 'Clients reach out to you directly based on your skills. Receive structured project scopes and negotiate milestones freely.',
      icon: Send,
      highlights: ['Direct client messaging', 'Clear project requirements upfront', 'No low-ball racing to the bottom'],
    },
    {
      step: '03',
      title: 'Get Paid on Time',
      tagline: 'Guaranteed Escrow & Global Payouts',
      description: 'Never chase an unpaid invoice again. Client funds are funded into escrow before you begin coding or designing.',
      icon: DollarSign,
      highlights: ['Guaranteed payment protection', 'Instant global withdrawals to Stripe/Bank', 'Build long-term recurring client partnerships'],
    },
  ];

  const currentSteps = activeRole === 'clients' ? clientSteps : freelancerSteps;

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAFAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Simple & Transparent Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How Workora Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A friction-free ecosystem engineered to take you from initial brief to successful delivery with complete peace of mind.
          </p>

          {/* Interactive Role Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-200/70 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveRole('clients')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeRole === 'clients'
                  ? 'bg-white text-slate-900 shadow-soft'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Clients (Hire Talent)
            </button>
            <button
              onClick={() => setActiveRole('freelancers')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeRole === 'freelancers'
                  ? 'bg-white text-slate-900 shadow-soft'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Freelancers (Earn & Grow)
            </button>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {currentSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-brand-300 shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-slate-200 group-hover:text-brand-200 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors shadow-soft-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-700 uppercase tracking-wider mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-6 border-t border-slate-100">
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action beneath steps */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenAuth(activeRole === 'clients' ? 'signup' : 'signup')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-brand-600 text-white font-bold text-sm rounded-2xl shadow-soft hover:shadow-brand-glow transition-all"
          >
            <span>{activeRole === 'clients' ? 'Start Hiring on Workora' : 'Apply to Join as Talent'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
