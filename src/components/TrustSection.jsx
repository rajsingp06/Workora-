import React from 'react';
import { Users, CheckCircle, Smile, Award, ShieldCheck, Clock, BadgeCheck } from 'lucide-react';

export default function TrustSection() {
  const stats = [
    {
      id: 'stat-freelancers',
      label: 'Verified Professionals',
      value: '48,000+',
      description: 'Domain specialists & local pros across 10+ Indian cities',
      icon: Users,
    },
    {
      id: 'stat-projects',
      label: 'Projects Completed',
      value: '120,000+',
      description: 'From seed-stage software builds to local home services',
      icon: CheckCircle,
    },
    {
      id: 'stat-clients',
      label: 'Client Satisfaction',
      value: '99.4%',
      description: 'Milestone escrow approvals with zero payment disputes',
      icon: Smile,
    },
    {
      id: 'stat-time',
      label: 'Fast Turnaround',
      value: '< 24 Hrs',
      description: 'Direct communication & verified portfolio booking',
      icon: Clock,
    },
  ];

  const brandNames = ['Razorpay Ecosystem', 'Meesho Sellers', 'FinNext Labs', 'Kaveri Organics', 'UrbanScale'];

  return (
    <section id="trust" className="py-12 md:py-16 bg-[#FAFAFC] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logos Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-10 border-b border-slate-200/70 text-slate-400 text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-500">
            Trusted by founders, agencies & households across:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-slate-600">
            {brandNames.map((name) => (
              <span key={name} className="hover:text-slate-900 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Clean Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 text-left">
          {stats.map((st) => {
            const Icon = st.icon;
            return (
              <div key={st.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
                  {st.value}
                </p>
                <h4 className="text-xs font-bold text-slate-800 mb-1">{st.label}</h4>
                <p className="text-[11px] text-slate-500 leading-snug">{st.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
