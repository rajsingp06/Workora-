import React, { useState } from 'react';
import { 
  Play, 
  Star, 
  CheckCircle2, 
  Quote, 
  TrendingUp, 
  Sparkles, 
  X, 
  ArrowRight,
  Clock,
  Briefcase,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function SuccessStories() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeTab, setActiveTab] = useState('video-stories'); // 'video-stories' | 'growth-journeys' | 'before-after'

  const videoStories = [
    {
      id: 'story-priya',
      name: 'Priya Nair',
      profession: 'Lead Product Designer',
      city: 'Bengaluru',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      duration: '1:45 min',
      projectTitle: 'Multi-Brand Design System for Series-B Fintech',
      clientName: 'FinNext India (Kunal Bansal, CTO)',
      quote: '"Workora gave me the credibility and protected escrow to work directly with funded startup founders without chasing invoices."',
      outcome: '+42% user retention and 3x faster engineering handoff',
      earningsJourney: '₹35,000/mo → ₹1,80,000/mo within 14 months'
    },
    {
      id: 'story-aarav',
      name: 'Aarav Patel',
      profession: 'Full-Stack Next.js Architect',
      city: 'Bengaluru',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      duration: '2:10 min',
      projectTitle: 'High-Throughput E-Commerce Checkout Engine',
      clientName: 'Kaveri Organics D2C',
      quote: '"I built my entire freelance business on Workora. I set my own rates in INR and choose high-impact engineering problems."',
      outcome: 'Zero downtime during Diwali festive sales peak (1M+ sessions)',
      earningsJourney: 'Scaled from junior developer to ₹2.5L/mo independent lead'
    },
    {
      id: 'story-pooja',
      name: 'Pooja Sharma',
      profession: 'Bridal HD & Airbrush Specialist',
      city: 'Mumbai',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      duration: '1:30 min',
      projectTitle: 'Destination Wedding Makeup for 18 Events',
      clientName: 'Deshmukh Family Wedding (Bandra West)',
      quote: '"Local services on Workora connected me with high-ticket bridal families across Mumbai and Pune with zero commission haggling."',
      outcome: '128 verified 5-star reviews and fully booked wedding season',
      earningsJourney: 'From home parlor to managing a 4-artist bridal team'
    }
  ];

  const beforeAfterCases = [
    {
      title: 'B2B SaaS Dashboard Redesign',
      specialist: 'Priya Nair • UI/UX Lead',
      client: 'Veloce Logistics (Pune)',
      metric: 'Conversion lift from 14% to 48%',
      beforeImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      summary: 'Replaced cluttered tables with modern typography, tokenized dark/light themes, and real-time fleet telemetry filters.'
    },
    {
      title: 'Ayurvedic D2C Brand Identity & Packaging',
      specialist: 'Ananya Sengupta • Brand Strategist',
      client: 'VedaPure Organics (Ahmedabad)',
      metric: '3.4x retail shelf standout in 450 stores',
      beforeImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
      summary: 'Crafted bespoke gold-foil debossed label artwork, clean sans-serif typography, and eco-certified packaging guidelines.'
    }
  ];

  return (
    <section id="success-stories" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full inline-block mb-2">
              Inspired by Real Impact
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              What Success on Workora Looks Like
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-2xl">
              Authentic stories of Indian freelancers building sustainable careers and businesses reaching their milestones.
            </p>
          </div>

          {/* Sub-Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start md:self-auto text-xs font-bold">
            <button
              onClick={() => setActiveTab('video-stories')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'video-stories' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Video Reviews
            </button>
            <button
              onClick={() => setActiveTab('before-after')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'before-after' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Project Case Studies
            </button>
          </div>
        </div>

        {/* VIEW 1: Video Review Cards */}
        {activeTab === 'video-stories' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {videoStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Video Thumbnail with Play Button */}
                  <div
                    onClick={() => setActiveVideoModal(story)}
                    className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <img
                      src={story.thumbnail}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/20 transition-colors" />

                    {/* Duration badge */}
                    <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {story.duration}
                    </span>

                    {/* Big Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5">
                    {/* Freelancer Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-200"
                      />
                      <div>
                        <div className="flex items-center gap-1">
                          <h4 className="text-sm font-black text-slate-900">{story.name}</h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium">{story.profession} • {story.city}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                      {story.quote}
                    </p>

                    {/* Project & Client Details */}
                    <div className="space-y-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Project</span>
                        <span className="font-bold text-slate-800">{story.projectTitle}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Client</span>
                        <span className="text-slate-600 font-medium">{story.clientName}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Metric Footer */}
                <div className="px-5 py-3 bg-emerald-50/50 border-t border-emerald-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{story.earningsJourney}</span>
                  </div>
                  <button
                    onClick={() => setActiveVideoModal(story)}
                    className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5"
                  >
                    <span>Watch</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: Project Before & After Showcase */}
        {activeTab === 'before-after' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
            {beforeAfterCases.map((cs, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">{cs.title}</h3>
                    <p className="text-xs font-semibold text-emerald-700">{cs.specialist}</p>
                    <p className="text-[11px] text-slate-500">Client: {cs.client}</p>
                  </div>
                  <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {cs.metric}
                  </span>
                </div>

                {/* Comparative Images Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Previous State</span>
                    <img
                      src={cs.beforeImage}
                      alt="Before"
                      className="w-full h-36 object-cover rounded-xl border border-slate-200"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">Workora Redesign</span>
                    <img
                      src={cs.afterImage}
                      alt="After"
                      className="w-full h-36 object-cover rounded-xl border-2 border-emerald-500 shadow-sm"
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cs.summary}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Video Modal Preview */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={activeVideoModal.avatar}
                  alt={activeVideoModal.name}
                  className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-200"
                />
                <div>
                  <h4 className="text-xs font-black text-slate-900">{activeVideoModal.name}</h4>
                  <p className="text-[11px] text-slate-500">{activeVideoModal.profession} • {activeVideoModal.city}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Simulated Video Player with Poster */}
            <div className="relative aspect-video bg-slate-900 flex items-center justify-center">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-slate-950/40" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-lg animate-pulse">
                  <Play className="w-6 h-6 ml-1 fill-white" />
                </div>
                <p className="text-sm font-bold">{activeVideoModal.projectTitle}</p>
                <p className="text-xs text-slate-300 mt-1">Verified Case Study Interview • Duration {activeVideoModal.duration}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5">
              <div className="mb-4">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Key Deliverable & Result</span>
                <p className="text-xs font-bold text-slate-900">{activeVideoModal.outcome}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic">
                "{activeVideoModal.quote}"
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500">
                  Client: <strong className="text-slate-800">{activeVideoModal.clientName}</strong>
                </span>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
