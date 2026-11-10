import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  DollarSign, 
  Star, 
  TrendingUp, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Sparkles, 
  Plus, 
  ShieldCheck, 
  ExternalLink,
  Edit3,
  Clock,
  Eye
} from 'lucide-react';
import { authStorage } from '../../utils/auth';

export default function Dashboard({ user, onNavigate, onLogout, onEditProfile, onShowToast }) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobBudget, setJobBudget] = useState('5k-10k');

  const isFreelancer = user?.role === 'freelancer';

  const handleCreateJob = (e) => {
    e.preventDefault();
    setShowPostJobModal(false);
    setJobTitle('');
    if (onShowToast) {
      onShowToast(`Project brief "${jobTitle}" published! Matched talent will be notified.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 selection:bg-brand-100 selection:text-brand-900 flex flex-col font-sans">
      
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo & Role Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-extrabold text-lg shadow-brand-glow">
                W
              </div>
              <span className="font-extrabold text-xl text-slate-900 tracking-tight">WORKORA</span>
            </button>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200 uppercase tracking-wider">
              {isFreelancer ? 'Specialist Workspace' : 'Client Hub'}
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('landing')}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>View Landing Page</span>
            </button>

            {/* Profile Dropdown preview / avatar */}
            <div className="flex items-center gap-3 pl-2 sm:pl-3 sm:border-l border-slate-200">
              <div className="relative">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                  alt={user?.fullName || 'User'}
                  className="w-9 h-9 rounded-xl object-cover ring-2 ring-slate-100"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div className="hidden md:block text-left">
                <div className="text-xs font-extrabold text-slate-900 leading-none">
                  {user?.fullName || 'User'}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 capitalize">
                  {user?.role}
                </div>
              </div>

              <button
                onClick={onLogout}
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                title="Log Out"
                aria-label="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Welcome Banner */}
        <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6 sm:p-8 mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-brand-50 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
                alt={user?.fullName}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-4 ring-slate-50 shadow-soft"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {user?.fullName || 'Welcome to Workora'}
                  </h1>
                  <CheckCircle2 className="w-5 h-5 text-brand-600 fill-brand-50" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">
                  {isFreelancer 
                    ? (user?.title || 'Specialist') 
                    : (user?.companyName ? `${user.companyName} • ${user.industry || 'Tech'}` : 'Client Partner')}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {user?.email} • Member since {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {isFreelancer ? (
                <>
                  <button
                    onClick={() => setIsAvailable(!isAvailable)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                      isAvailable
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                    <span>{isAvailable ? 'Available for Work' : 'Currently Busy'}</span>
                  </button>

                  <button
                    onClick={onEditProfile}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-brand-600 text-xs font-bold shadow-soft transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Profile</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowPostJobModal(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-brand-glow transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Post New Project</span>
                  </button>

                  <button
                    onClick={() => onNavigate('landing')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Browse Talent Roster</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 4 Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {isFreelancer ? (
            <>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
                <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Hourly Rate</span>
                <div className="text-2xl font-black text-slate-900">${user?.hourlyRate || 85}<span className="text-xs font-normal text-slate-400">/hr</span></div>
                <span className="text-[11px] font-semibold text-brand-600 mt-1 block">Standard Billing</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
                <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Profile Views</span>
                <div className="text-2xl font-black text-slate-900">342</div>
                <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">↑ 18% this week</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
                <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Active Inquiries</span>
                <div className="text-2xl font-black text-slate-900">3</div>
                <span className="text-[11px] font-semibold text-slate-500 mt-1 block">2 client briefs awaiting reply</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
                <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Workora Rating</span>
                <div className="text-2xl font-black text-slate-900 flex items-center gap-1.5">
                  5.0 <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-[11px] font-semibold text-brand-700 mt-1 block">Top 1% Vetted Specialist</span>
              </div>
            </>
          ) : (
            <>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
                <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Target Budget</span>
                <div className="text-2xl font-black text-slate-900">{user?.hiringRequirements?.budgetRange || '$10k - $25k'}</div>
                <span className="text-[11px] font-semibold text-brand-600 mt-1 block">Milestone Escrow Ready</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
                <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Active Projects</span>
                <div className="text-2xl font-black text-slate-900">1</div>
                <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">1 Milestone in review</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
                <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Talent Proposals</span>
                <div className="text-2xl font-black text-slate-900">8</div>
                <span className="text-[11px] font-semibold text-slate-500 mt-1 block">From verified specialists</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
                <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Escrow Protection</span>
                <div className="text-2xl font-black text-emerald-600 flex items-center gap-1.5">
                  100% <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-500 mt-1 block">Funds released on approval</span>
              </div>
            </>
          )}
        </div>

        {/* Dynamic Section: Freelancer view vs Client view */}
        {isFreelancer ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Cols: Inbound Inquiries & Live Bio */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Inbound Inquiries Feed */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-brand-600" />
                    Inbound Project Inquiries (Demo Simulator)
                  </h3>
                  <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200/50">
                    2 New
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      company: 'Veloce AI',
                      title: 'Frontend Lead for Autonomous Drone Telemetry Dashboard',
                      budget: '$12,000 Milestone',
                      time: '2 hours ago',
                      snippet: 'Looking for a specialist with Next.js and high-performance WebGL canvas experience to build our real-time telemetry suite.'
                    },
                    {
                      company: 'Northstar Health',
                      title: 'HIPAA-compliant Design System & Patient Flow',
                      budget: '$90/hr (approx 80 hrs)',
                      time: 'Yesterday',
                      snippet: 'We loved your work on healthcare UI. Need to revamp our multi-tenant clinician workflows before Series-A.'
                    }
                  ].map((inq, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-colors">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <span className="text-xs font-bold text-slate-900">{inq.title}</span>
                          <span className="text-xs text-slate-400 block">{inq.company} • {inq.time}</span>
                        </div>
                        <span className="text-xs font-bold text-brand-700 bg-white px-2.5 py-1 rounded-xl border border-slate-200">
                          {inq.budget}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{inq.snippet}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => alert(`Replied to ${inq.company}! Contract negotiations simulated.`)}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-brand-600 transition-colors"
                        >
                          Review Brief
                        </button>
                        <button
                          type="button"
                          onClick={() => alert(`Marked inquiry as reviewed.`)}
                          className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-white"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio & Skills Snapshot */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6">
                <h3 className="text-base font-extrabold text-slate-900 mb-2">Public Bio & Positioning</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {user?.bio || 'No bio configured yet.'}
                </p>

                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Registered Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {(user?.skills || ['React', 'Next.js', 'Figma']).map((s) => (
                    <span key={s} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Profile Strength & Quick Tips */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6">
                <h4 className="text-sm font-extrabold text-slate-900 mb-2 flex items-center justify-between">
                  <span>Profile Strength</span>
                  <span className="text-brand-600 font-bold">100%</span>
                </h4>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                  <div className="bg-brand-600 h-full w-full rounded-full" />
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Personal information verified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Competencies & rates set</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Escrow account configured</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900 text-white">
                <Sparkles className="w-6 h-6 text-brand-400 mb-3" />
                <h4 className="text-sm font-bold mb-1">Workora Pro Tip</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Freelancers with transparent milestone deliverables and sample case study metrics close 3.4x more contracts.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('landing')}
                  className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-xs font-bold text-white transition-colors"
                >
                  Explore Top Rated Talent
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Client View */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              
              {/* Active Jobs & Contracts */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-brand-600" />
                    Active Project Deliverables
                  </h3>
                  <button
                    onClick={() => setShowPostJobModal(true)}
                    className="text-xs font-bold text-brand-600 hover:underline"
                  >
                    + Post Job
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-sm font-bold text-slate-900">
                        {user?.companyName ? `${user.companyName} Core MVP Deliverable` : 'Design System & API Architecture'}
                      </span>
                      <span className="text-xs text-slate-400 block mt-0.5">
                        Engagement: {user?.hiringRequirements?.projectType || 'Milestone Escrow'}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200">
                      Milestone 1 in Review
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Lead engineer submitted staging build for review. Once verified, one-click release milestone escrow of $4,500.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => alert('Escrow release simulation approved!')}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-brand-600 transition-colors"
                    >
                      Release Milestone ($4,500)
                    </button>
                    <button
                      type="button"
                      onClick={() => alert('Change request notes dispatched to contractor.')}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-white"
                    >
                      Request Revisions
                    </button>
                  </div>
                </div>
              </div>

              {/* Recommended Talent Match based on company tech stack */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-extrabold text-slate-900">
                    Recommended Talent Matches
                  </h3>
                  <button
                    onClick={() => onNavigate('landing')}
                    className="text-xs font-bold text-brand-600 hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: 'Elena Rostova',
                      role: 'Senior Product Designer',
                      rate: '$95/hr',
                      rating: 4.98,
                      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                      skills: ['Figma', 'Design Systems', 'SaaS UX']
                    },
                    {
                      name: 'Marcus Vance',
                      role: 'Full-Stack AI & Cloud Architect',
                      rate: '$120/hr',
                      rating: 5.0,
                      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                      skills: ['React', 'Python', 'AWS', 'Next.js']
                    }
                  ].map((talent, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <img src={talent.avatar} alt={talent.name} className="w-10 h-10 rounded-xl object-cover" />
                          <div>
                            <h5 className="text-xs font-bold text-slate-900">{talent.name}</h5>
                            <span className="text-[11px] text-slate-500 block">{talent.role}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs mb-3">
                          <span className="font-bold text-slate-900">{talent.rate}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-amber-500 font-bold">
                            <Star className="w-3 h-3 fill-amber-400" /> {talent.rating}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          onNavigate('landing');
                        }}
                        className="w-full py-2 bg-white hover:bg-brand-600 hover:text-white rounded-xl text-xs font-bold text-slate-800 border border-slate-200 transition-colors"
                      >
                        View Profile
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Client Overview */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6">
                <h4 className="text-sm font-extrabold text-slate-900 mb-3">Company Overview</h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-semibold uppercase text-[10px]">Company Name</span>
                    <span className="font-bold text-slate-800 text-sm">{user?.companyName || 'Not Set'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold uppercase text-[10px]">Industry</span>
                    <span className="font-medium text-slate-700">{user?.industry || 'Technology'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold uppercase text-[10px]">Description</span>
                    <p className="text-slate-600 leading-relaxed mt-0.5">{user?.companyDescription || 'No description provided.'}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900 text-white">
                <ShieldCheck className="w-6 h-6 text-brand-400 mb-3" />
                <h4 className="text-sm font-bold mb-1">Escrow Protection Active</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  All contracts created on Workora are protected with 100% money-back milestone escrow. Talent only receives payment when you approve deliverables.
                </p>
                <button
                  type="button"
                  onClick={() => setShowPostJobModal(true)}
                  className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-xs font-bold text-white transition-colors"
                >
                  Create New Escrow Milestone
                </button>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Post Project Modal Simulation */}
      {showPostJobModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">Post a New Project</h3>
            <p className="text-xs text-slate-500 mb-4">
              Describe your project requirement. Vetted specialists will submit scoped proposals within 24 hours.
            </p>

            <form onSubmit={handleCreateJob} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Next.js SaaS Dashboard Architecture"
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Budget</label>
                <select
                  value={jobBudget}
                  onChange={(e) => setJobBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                >
                  <option value="1k-3k">$1,000 - $3,000</option>
                  <option value="3k-5k">$3,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPostJobModal(false)}
                  className="flex-1 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-brand-glow"
                >
                  Publish Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="px-6 py-6 text-center text-xs text-slate-400 border-t border-slate-200/80 bg-white">
        © 2026 WORKORA Inc. All rights reserved. • Logged in as demo user ({user?.email})
      </footer>

    </div>
  );
}
