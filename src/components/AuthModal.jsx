import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ShieldCheck, Check, Sparkles, UserCheck, Briefcase } from 'lucide-react';

export default function AuthModal({ isOpen, initialMode = 'login', initialRole = 'client', onClose, onShowToast }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'signup'
  const [role, setRole] = useState(initialRole); // 'client' | 'freelancer'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    setRole(initialRole);
  }, [initialMode, initialRole, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFillDemo = () => {
    if (mode === 'login') {
      setEmail('alex.founder@acme.ai');
      setPassword('••••••••••••');
    } else {
      setFullName('Alex Mercer');
      setEmail('alex.mercer@innovate.co');
      setPassword('SecretPassword123!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onClose();
      if (onShowToast) {
        if (mode === 'login') {
          onShowToast(`Welcome back, ${email || 'Alex'}! Logged in as demo user.`);
        } else {
          onShowToast(`Welcome to Workora, ${fullName || 'Alex'}! Account initialized as ${role === 'client' ? 'Client' : 'Freelancer'}.`);
        }
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 sm:p-8 pb-4 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-extrabold text-sm shadow-brand-glow">
              W
            </div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900">WORKORA</span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {mode === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {mode === 'login'
              ? 'Access your saved projects, talent contracts, and messages.'
              : 'Join the premier ecosystem where skills meet opportunities.'}
          </p>

          {/* Mode Switch Tabs */}
          <div className="mt-5 p-1 bg-slate-100 rounded-xl flex">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'login' ? 'bg-white text-slate-900 shadow-soft-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'signup' ? 'bg-white text-slate-900 shadow-soft-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="px-6 sm:px-8 pb-8 pt-2">
          {mode === 'signup' && (
            <div className="mb-4">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                I want to:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('client')}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    role === 'client'
                      ? 'border-brand-600 bg-brand-50/40 ring-1 ring-brand-500'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Briefcase className={`w-4 h-4 ${role === 'client' ? 'text-brand-600' : 'text-slate-500'}`} />
                    {role === 'client' && <Check className="w-3.5 h-3.5 text-brand-600 font-bold" />}
                  </div>
                  <span className="text-xs font-bold text-slate-900">Hire Talent</span>
                  <span className="text-[10px] text-slate-500">I'm a founder or client</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole('freelancer')}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    role === 'freelancer'
                      ? 'border-brand-600 bg-brand-50/40 ring-1 ring-brand-500'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <UserCheck className={`w-4 h-4 ${role === 'freelancer' ? 'text-brand-600' : 'text-slate-500'}`} />
                    {role === 'freelancer' && <Check className="w-3.5 h-3.5 text-brand-600 font-bold" />}
                  </div>
                  <span className="text-xs font-bold text-slate-900">Find Work</span>
                  <span className="text-[10px] text-slate-500">I'm a skilled freelancer</span>
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:bg-white"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Work Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:bg-white"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-700">Password</label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => alert('Demo password reset link simulated.')}
                    className="text-[11px] font-semibold text-brand-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:bg-white"
              />
            </div>

            {/* Quick Demo Autofill helper */}
            <div className="pt-1 flex items-center justify-between">
              <button
                type="button"
                onClick={handleFillDemo}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-brand-600 bg-slate-100 px-2.5 py-1 rounded-lg transition-colors"
              >
                <Sparkles className="w-3 h-3 text-brand-500" />
                Fill Demo Credentials
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-brand-600 rounded-xl shadow-soft transition-colors"
            >
              <span>{isLoading ? 'Processing...' : mode === 'login' ? 'Log In to Workora' : 'Create Free Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Social login divider */}
          <div className="mt-5 pt-5 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400 block mb-3">Or continue with demo provider</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  if (onShowToast) onShowToast('Google SSO demo simulation authorized.');
                  onClose();
                }}
                className="py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onShowToast) onShowToast('GitHub SSO demo simulation authorized.');
                  onClose();
                }}
                className="py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-slate-900" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
