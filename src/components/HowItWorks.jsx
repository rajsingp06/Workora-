import React, { useState } from 'react';
import { Search, MessageSquareCode, ShieldCheck, ArrowRight, UserCheck, Send, IndianRupee, Sparkles, Check } from 'lucide-react';

export default function HowItWorks({ onOpenAuth }) {
  const [activeRole, setActiveRole] = useState('clients'); // 'clients' | 'freelancers'

  const clientSteps = [
    {
      step: '01',
      title: 'Discover Talent',
      tagline: 'Vetted Portfolios & Instant Matching',
      description: 'Search by exacting tech stacks, review verified client ratings, and inspect real shipped project case studies.',
      icon: Search,
      highlights: ['Transparent upfront hourly or fixed pricing in ₹', 'Direct candidate messaging', 'Public work histories & verified ratings'],
    },
    {
      step: '02',
      title: 'Collaborate',
      tagline: 'Safe Milestone Escrow Contracts',
      description: 'Chat in real time, establish clear project milestones, and fund milestones safely before contractor kickoff.',
      icon: MessageSquareCode,
      highlights: ['Seamless real-time brief exchange', 'Custom milestone definitions', 'Workora Escrow security guarantee'],
    },
    {
      step: '03',
      title: 'Get Things Done',
      tagline: 'Approve & Scale Confidently',
      description: 'Review final source code, design files, or local doorstep work. Release payments only when you are completely satisfied.',
      icon: ShieldCheck,
      highlights: ['One-click milestone release', 'Full IP and copyright transfer', 'Automated GST-compliant invoicing'],
    },
  ];

  const freelancerSteps = [
    {
      step: '01',
      title: 'Create Your Profile',
      tagline: 'Showcase Your Real Craft',
      description: 'Highlight your top achievements, upload your verified resume, link portfolios, and set your own transparent rates in ₹ INR.',
      icon: UserCheck,
      highlights: ['Verified Pro badge evaluation', 'Dynamic rich case-study showcases', 'Zero bidding fees or proposal taxes'],
    },
    {
      step: '02',
      title: 'Receive Direct Pitches',
      tagline: 'Inbound Inquiries & Selective Clients',
      description: 'Clients reach out to you directly based on your skills. Receive structured project scopes and negotiate milestones freely.',
      icon: Send,
      highlights: ['Direct client messaging', 'Clear project requirements upfront', 'No low-ball racing to the bottom'],
    },
    {
      step: '03',
      title: 'Get Paid on Time',
      tagline: 'Guaranteed Escrow & UPI/Bank Payouts',
      description: 'Never chase an unpaid invoice again. Client funds are funded into escrow before you begin coding or designing.',
      icon: IndianRupee,
      highlights: ['Guaranteed payment protection', 'Instant UPI / Direct Bank transfer withdrawals', 'Build long-term recurring client partnerships'],
    },
  ];

  const currentSteps = activeRole === 'clients' ? clientSteps : freelancerSteps;

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Simple & Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            How Workora Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A friction-free ecosystem engineered to take you from initial brief to successful delivery with complete peace of mind.
          </p>

          {/* Interactive Role Switcher */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveRole('clients')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeRole === 'clients'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Clients (Hire Talent)
            </button>
            <button
              onClick={() => setActiveRole('freelancers')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeRole === 'freelancers'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Freelancers (Earn & Grow)
            </button>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentSteps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-emerald-300 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
