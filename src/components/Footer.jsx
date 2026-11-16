import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  ShieldCheck, 
  Twitter, 
  Linkedin, 
  Instagram,
  Heart,
  Sparkles
} from 'lucide-react';

export default function Footer({ onNavigate, onOpenAuth }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-white text-slate-600 text-xs sm:text-sm border-t border-slate-200">
      
      {/* Top Main Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Categories */}
          <div>
            <h4 className="font-black text-slate-900 text-sm mb-4 tracking-tight">
              Explore Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-emerald-600 transition-colors">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-emerald-600 transition-colors">
                  Graphic Design & Logos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-emerald-600 transition-colors">
                  Video Editing & Reels
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-emerald-600 transition-colors">
                  Digital Marketing & SEO
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-emerald-600 transition-colors">
                  Content Writing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-emerald-600 transition-colors">
                  App Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-emerald-600 transition-colors">
                  AI & Automation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-emerald-600 transition-colors">
                  Photography
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Local Services */}
          <div>
            <h4 className="font-black text-slate-900 text-sm mb-4 tracking-tight">
              Local Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <button onClick={() => onNavigate('local-services')} className="hover:text-emerald-600 transition-colors">
                  Plumbers & Pipe Fitters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('local-services')} className="hover:text-emerald-600 transition-colors">
                  Electricians & Wiring
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('local-services')} className="hover:text-emerald-600 transition-colors">
                  Bridal & HD Makeup Artists
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('local-services')} className="hover:text-emerald-600 transition-colors">
                  Rangoli Artists
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('local-services')} className="hover:text-emerald-600 transition-colors">
                  Mehendi & Henna Artists
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('local-services')} className="hover:text-emerald-600 transition-colors">
                  Event Photographers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('local-services')} className="hover:text-emerald-600 transition-colors">
                  Home Cleaning & Sanitization
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('local-services')} className="hover:text-emerald-600 transition-colors">
                  Interior Designers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: For Freelancers / Become a Seller */}
          <div>
            <h4 className="font-black text-slate-900 text-sm mb-4 tracking-tight">
              Become a Freelancer
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <button onClick={() => onOpenAuth('signup', 'freelancer')} className="hover:text-emerald-600 transition-colors font-bold text-emerald-700">
                  Join as a Specialist
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAuth('signup', 'freelancer')} className="hover:text-emerald-600 transition-colors">
                  Become a Seller
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('workora-pro')} className="hover:text-emerald-600 transition-colors">
                  Apply for Workora Pro
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="hover:text-emerald-600 transition-colors">
                  Guaranteed Escrow Payouts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('success-stories')} className="hover:text-emerald-600 transition-colors">
                  Freelancer Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAuth('signup', 'freelancer')} className="hover:text-emerald-600 transition-colors">
                  Resume Verification Standards
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: About Workora */}
          <div>
            <h4 className="font-black text-slate-900 text-sm mb-4 tracking-tight">
              About Workora
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <button onClick={() => onNavigate('trust')} className="hover:text-emerald-600 transition-colors">
                  About Our Platform
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('workora-pro')} className="hover:text-emerald-600 transition-colors">
                  Workora Pro Enterprise
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('success-stories')} className="hover:text-emerald-600 transition-colors">
                  Customer Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('trust')} className="hover:text-emerald-600 transition-colors">
                  Trust & Safety Standards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-emerald-600 transition-colors">
                  Careers & Culture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-emerald-600 transition-colors">
                  Press & Partnerships
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Help & Support & Legal */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-black text-slate-900 text-sm mb-4 tracking-tight">
              Help & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
              <li>
                <button onClick={() => alert('Workora Help Center: Dedicated 24/7 client and seller assistance.')} className="hover:text-emerald-600 transition-colors">
                  Help Center & FAQs
                </button>
              </li>
              <li>
                <button onClick={() => alert('Contact: support@workora.in')} className="hover:text-emerald-600 transition-colors">
                  Contact Support
                </button>
              </li>
              <li>
                <button onClick={() => alert('Workora Escrow Guarantee: 100% money-back on unfulfilled milestones.')} className="hover:text-emerald-600 transition-colors">
                  Payment Protection Policy
                </button>
              </li>
              <li>
                <button onClick={() => alert('Terms & Conditions: Workora Freelance Marketplace India.')} className="hover:text-emerald-600 transition-colors font-medium">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => alert('Privacy Policy: User data secured with bank-grade encryption.')} className="hover:text-emerald-600 transition-colors font-medium">
                  Privacy Policy
                </button>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
              <p className="text-[11px] font-bold text-slate-900 mb-1">Stay updated with Workora</p>
              <form onSubmit={handleSubscribe} className="flex gap-1.5 mt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
              {subscribed && (
                <p className="text-[10px] text-emerald-700 font-bold mt-1.5 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Subscribed successfully!
                </p>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright, Currency and Social Links */}
      <div className="border-t border-slate-100 py-6 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <span className="font-black text-lg tracking-tight text-slate-900 flex items-center">
              WORKORA<span className="text-emerald-500 font-black text-xl leading-none">.</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-slate-500">
              © {new Date().getFullYear()} Workora Technologies Pvt. Ltd. Where Skills Meet Opportunities.
            </span>
          </div>

          {/* Currency Pill & Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              <span className="text-emerald-600 font-black">₹</span>
              <span>INR (Indian Rupee)</span>
            </div>

            <div className="flex items-center gap-3 text-slate-500">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
