import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Award, 
  Briefcase, 
  Sparkles,
  Zap,
  TrendingUp,
  SlidersHorizontal
} from 'lucide-react';

export default function WorkoraPro({ onSelectFreelancer, onExplorePro }) {
  const proTalents = [
    {
      id: 'priya-nair',
      name: 'Priya Nair',
      role: 'Lead Product Designer & Design Systems Architect',
      location: 'Bengaluru, Karnataka',
      rate: '₹1,850/hr',
      rating: 4.98,
      reviews: 142,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      highlight: 'Ex-fintech UX Lead • Built design systems for 80+ engineering teams',
      metric: '+42% User Retention on SaaS Redesign',
      skills: ['Figma Tokens', 'SaaS UX', 'Design Systems', 'Prototyping']
    },
    {
      id: 'dr-rajiv-menon',
      name: 'Dr. Rajiv Menon',
      role: 'Generative AI & LLM Systems Engineer',
      location: 'Bengaluru, Karnataka',
      rate: '₹3,500/hr',
      rating: 5.0,
      reviews: 92,
      avatar: 'https://images.pexels.com/photos/17454597/pexels-photo-17454597/free-photo-of-elderly-man-in-hat.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1&fit=crop',
      highlight: 'PhD in Computer Science • Enterprise private LLMs & RAG architectures',
      metric: 'Zero-hallucination legal AI pipeline',
      skills: ['LangChain', 'Python', 'Vector DB', 'Fine-tuning']
    },
    {
      id: 'aarav-patel',
      name: 'Aarav Patel',
      role: 'Full-Stack Next.js & Cloud Architect',
      location: 'Bengaluru, Karnataka',
      rate: '₹2,500/hr',
      rating: 5.0,
      reviews: 156,
      avatar: 'https://images.pexels.com/photos/29679657/pexels-photo-29679657/free-photo-of-portrait-of-man-in-traditional-orange-turban.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1&fit=crop',
      highlight: 'Built architectures handling 1M+ daily active users on AWS Serverless',
      metric: '99.99% uptime during festive peaks',
      skills: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS Serverless']
    }
  ];

  return (
    <section id="workora-pro" className="py-20 md:py-28 bg-[#0B0F19] text-white relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pro Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-black uppercase tracking-wider mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Workora Pro • Enterprise Grade</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Pre-vetted talent, dedicated to your highest-impact projects.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The top 1% of independent specialists across India. Hand-evaluated for technical rigor, communication excellence, and proven enterprise delivery.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-white mb-2">Vetted for Excellence</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every Pro freelancer undergoes live technical vetting, portfolio audits, and past client reference checks before being awarded the Pro badge.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-white mb-2">Protected Escrow & Contracts</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Funds are securely held in milestone escrow and disbursed only when you inspect and sign off on completed code and design assets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-white mb-2">Advanced Matching & Support</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Filter by precise experience levels, tech stacks, or request a Workora talent partner to curate shortlists within 24 to 48 hours.
            </p>
          </div>
        </div>

        {/* Featured Pro Talent Cards */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-white">Featured Pro Specialists</h3>
            <span className="text-xs text-slate-400 font-semibold">Available for contract hire</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proTalents.map((talent) => (
              <div
                key={talent.id}
                className="bg-white/5 rounded-2xl border border-white/10 p-5 hover:bg-white/[0.08] transition-all flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <img
                      src={talent.avatar}
                      alt={talent.name}
                      className="w-14 h-14 rounded-xl object-cover ring-2 ring-emerald-500/40"
                    />
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Rate</span>
                      <span className="text-lg font-black text-white">{talent.rate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mb-1">
                    <h4 className="text-base font-black text-white group-hover:text-emerald-400 transition-colors">
                      {talent.name}
                    </h4>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium mb-3">{talent.role}</p>

                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
                    <div className="flex items-center gap-1 font-bold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{talent.rating}</span>
                    </div>
                    <span>•</span>
                    <span className="text-slate-400">{talent.reviews} verified reviews</span>
                  </div>

                  {/* Highlight pill */}
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 mb-3">
                    <p className="font-semibold text-emerald-300 mb-0.5">{talent.metric}</p>
                    <p className="text-slate-400">{talent.highlight}</p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {talent.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-semibold text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('featured-freelancers');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>View Verified Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
              Ready to hire pre-vetted specialists for your team?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Browse Workora Pro profiles, review verified portfolios, and kick off contracts with zero risk.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('featured-freelancers');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shrink-0 flex items-center gap-2 shadow-lg transition-colors"
          >
            <span>Explore Workora Pro</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

      </div>
    </section>
  );
}
