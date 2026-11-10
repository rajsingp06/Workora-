import React, { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Lock, 
  Mail,
  UserCheck,
  Briefcase
} from 'lucide-react';
import { authStorage } from '../../utils/auth';

export default function LoginPage({ onNavigate, onLoginSuccess, onShowToast }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      try {
        const user = authStorage.login(email, password, rememberMe);
        setIsLoading(false);
        if (onShowToast) {
          onShowToast(`Welcome back, ${user.fullName || user.email}!`);
        }
        if (onLoginSuccess) {
          onLoginSuccess(user);
        }
      } catch (err) {
        setIsLoading(false);
        setError(err.message || 'Login failed. Please check your credentials.');
      }
    }, 600);
  };

  // Google Login UI Simulation
  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulate login as demo client or create quick google user
      const users = authStorage.getUsers();
      let googleUser = users.find((u) => u.email === 'alex.google@workora.pro');
      if (!googleUser) {
        googleUser = authStorage.signup({
          email: 'alex.google@workora.pro',
          password: 'google-oauth-demo',
          fullName: 'Alex Vance (Google)',
          role: 'client',
          companyName: 'Vance Labs',
          profileCompleted: true
        });
      } else {
        authStorage.setCurrentUser(googleUser, true);
      }
      setIsLoading(false);
      if (onShowToast) {
        onShowToast('Signed in via Google successfully!');
      }
      if (onLoginSuccess) {
        onLoginSuccess(googleUser);
      }
    }, 700);
  };

  // Quick Demo account filler
  const handleFillDemo = (type) => {
    setError('');
    if (type === 'client') {
      setEmail('client@acme.com');
      setPassword('password123');
    } else {
      setEmail('elena@workora.pro');
      setPassword('password123');
    }
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSubmitted(true);
    setTimeout(() => {
      setShowForgotModal(false);
      setForgotSubmitted(false);
      setForgotEmail('');
      if (onShowToast) {
        onShowToast(`Password reset link dispatched to ${forgotEmail}. Check your inbox!`);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] flex flex-col justify-between selection:bg-brand-100 selection:text-brand-900">
      
      {/* Top Header / Brand Bar */}
      <header className="px-6 py-6 max-w-7xl mx-auto w-full flex items-center justify-between">
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-extrabold text-xl shadow-brand-glow group-hover:bg-brand-700 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8.5 18L12 9L15.5 18L20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
              WORKORA
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                PRO
              </span>
            </span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('landing')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200/80 hover:border-slate-300 px-3.5 py-2 rounded-xl transition-all shadow-soft-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </header>

      {/* Main Login Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/90 shadow-soft-xl p-6 sm:p-10 relative">
          
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3 text-brand-500" />
              Welcome Back
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Log in to Workora
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Enter your credentials to access your talent contracts, messages, and projects.
            </p>
          </div>

          {/* Quick Demo Autofill Bar */}
          <div className="mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              ⚡ Quick Demo One-Click Login:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleFillDemo('client')}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 hover:border-brand-500 text-slate-700 text-xs font-semibold hover:text-brand-700 transition-colors shadow-soft-sm"
              >
                <Briefcase className="w-3.5 h-3.5 text-brand-600" />
                <span>Client Demo</span>
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('freelancer')}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 hover:border-brand-500 text-slate-700 text-xs font-semibold hover:text-brand-700 transition-colors shadow-soft-sm"
              >
                <UserCheck className="w-3.5 h-3.5 text-brand-600" />
                <span>Freelancer Demo</span>
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <div className="flex-1 font-medium">{error}</div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700">Password</label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-11 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-600 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                />
                <span>Remember me for 30 days</span>
              </label>
            </div>

            {/* Primary Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-bold text-white bg-slate-900 hover:bg-brand-600 rounded-xl shadow-soft hover:shadow-brand-glow transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Log In</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Social Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-3 transition-colors shadow-soft-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Footer link to Sign Up */}
          <p className="text-center text-xs text-slate-500 mt-6">
            Don't have an account yet?{' '}
            <button
              type="button"
              onClick={() => onNavigate('signup')}
              className="font-bold text-brand-600 hover:text-brand-700 hover:underline"
            >
              Sign up for free
            </button>
          </p>

        </div>
      </main>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Reset Password</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Enter your registered email address and we will dispatch a secure password reset link.
            </p>

            {forgotSubmitted ? (
              <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 text-center">
                <CheckCircle2 className="w-8 h-8 text-brand-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-800">Dispatching reset link...</p>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="flex-1 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-brand-glow"
                  >
                    Send Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="px-6 py-6 text-center text-xs text-slate-400 border-t border-slate-100">
        © 2026 WORKORA Inc. All rights reserved. • Where Skills Meet Opportunities.
      </footer>
    </div>
  );
}
