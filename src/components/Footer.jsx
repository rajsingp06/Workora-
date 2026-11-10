import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  ShieldCheck, 
  Twitter, 
  Linkedin, 
  Github, 
  Dribbble,
  Heart
} from 'lucide-react';

export default function Footer({ onNavigate, onOpenAuth }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const footerLinks = {
    categories: [
      { name: 'Web Development', id: 'popular-categories' },
      { name: 'UI/UX Design', id: 'popular-categories' },
      { name: 'Mobile App Development', id: 'popular-categories' },
      { name: 'Graphic & Brand Design', id: 'popular-categories' },
      { name: 'Digital Marketing & SEO', id: 'popular-categories' },
      { name: 'AI & Automation', id: 'popular-categories' },
    ],
    forClients: [
      { name: 'Find Top Talent', id: 'featured-freelancers' },
      { name: 'How Hiring Works', id: 'how-it-works' },
      { name: 'Enterprise Solutions', id: 'hero' },
      { name: 'Milestone Escrow', id: 'how-it-works' },
      { name: 'Client Success Stories', id: 'trust' },
    ],
    forFreelancers: [
      { name: 'Browse Exciting Projects', id: 'hero' },
      { name: 'Freelancer Community', id: 'hero' },
      { name: 'Payout Methods & Escrow', id: 'how-it-works' },
      { name: 'Pro Verification Badge', id: 'featured-freelancers' },
      { name: 'Creator Academy', id: 'how-it-works' },
    ],
    company: [
      { name: 'About Workora', action: () => alert('Workora is an independent premium freelance marketplace demo built with React & Tailwind.') },
      { name: 'Help Center & FAQ', action: () => alert('Workora Concierge Demo: 24/7 dedicated support simulation.') },
      { name: 'Contact Concierge', action: () => alert('Contact demo: concierge@workora.design') },
      { name: 'Terms of Service', action: () => alert('Terms: Workora Demo platform. All rights reserved.') },
      { name: 'Privacy Policy', action: () => alert('Privacy Policy: User privacy protected with strict escrow and zero third-party tracking.') },
    ],
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-900">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 mb-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-extrabold text-xl shadow-brand-glow">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8.5 18L12 9L15.5 18L20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">WORKORA</span>
            </a>

            <p className="text-slate-300 font-medium text-sm mb-2">
              Where Skills Meet Opportunities.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              The premier marketplace connecting verified independent designers, engineers, and strategists with ambitious companies worldwide.
            </p>

            {/* Newsletter input */}
            <div className="w-full max-w-sm mb-6">
              <span className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                Weekly Opportunity Dispatch
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-brand-400 bg-brand-950/60 p-2.5 rounded-xl border border-brand-800">
                  <CheckCircle className="w-4 h-4" />
                  <span>You're subscribed to the Workora dispatch!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Categories */}
            <div>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
                Categories
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.categories.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="text-xs text-slate-400 hover:text-brand-400 transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Clients */}
            <div>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
                For Clients
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.forClients.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="text-xs text-slate-400 hover:text-brand-400 transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Freelancers */}
            <div>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
                For Talent
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.forFreelancers.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="text-xs text-slate-400 hover:text-brand-400 transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Legal */}
            <div>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
                Company & Legal
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={item.action}
                      className="text-xs text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 WORKORA Inc. All rights reserved. Built with React & Vite.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              All Systems Operational
            </span>
            <span className="text-slate-700">•</span>
            <span>Escrow Protected (Demo)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
