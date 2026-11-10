import React from 'react';
import { Users, CheckCircle, Smile, Award, ShieldCheck, Clock, BadgeCheck } from 'lucide-react';

export default function TrustSection() {
  const stats = [
    {
      id: 'stat-freelancers',
      label: 'Talented Freelancers',
      value: '48,000+',
      description: 'Vetted domain specialists across 85+ countries',
      icon: Users,
    },
    {
      id: 'stat-projects',
      label: 'Projects Completed',
      value: '120,000+',
      description: 'From seed-stage MVPs to enterprise deliverables',
      icon: CheckCircle,
    },
    {
      id: 'stat-clients',
      label: 'Happy Clients',
      value: '99.4%',
      description: 'Average 5-star milestone approval rating',
      icon: Smile,
    },
    {
      id: 'stat-time',
      label: 'Time to First Match',
      value: '< 48 Hrs',
      description: 'Fast, intelligent talent matchmaking',
      icon: Clock,
    },
  ];

  const clientLogos = [
    { name: 'Linear', tag: 'Issue Tracking' },
    { name: 'Vercel', tag: 'Cloud Platform' },
    { name: 'Figma', tag: 'Design Tool' },
    { name: 'Supabase', tag: 'Backend Suite' },
    { name: 'Stripe', tag: 'Payments' },
    { name: 'Raycast', tag: 'Productivity' },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Demo Notice Banner */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs">
            <BadgeCheck className="w-3.5 h-3.5 text-brand-600" />
            <span className="font-semibold text-slate-700">Platform Metrics</span>
            <span className="text-slate-300">•</span>
            <span>Realistic placeholder statistics for preview demonstration</span>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group p-6 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-soft transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-600 shadow-soft-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Live Indicator
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                  {item.value}
                </h3>
                <h4 className="text-sm font-bold text-slate-800 mb-1">
                  {item.label}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom: Trusted by Companies Strip */}
        <div className="pt-8 border-t border-slate-100">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by teams building the future of software and design
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 group cursor-default">
                <div className="w-6 h-6 rounded-md bg-slate-800 text-white flex items-center justify-center text-xs font-black">
                  {logo.name.charAt(0)}
                </div>
                <span className="font-extrabold text-slate-700 tracking-tight text-base sm:text-lg group-hover:text-brand-600 transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
