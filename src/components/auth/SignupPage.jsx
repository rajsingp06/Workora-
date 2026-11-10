import React, { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  AlertCircle, 
  Briefcase, 
  UserCheck, 
  Lock, 
  Mail, 
  User, 
  Building2,
  Code2,
  X
} from 'lucide-react';
import { authStorage } from '../../utils/auth';

const POPULAR_ROLES = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'Frontend Engineer',
  'Mobile App Developer (iOS/Android)',
  'AI & Machine Learning Engineer',
  'Brand Identity Designer',
  'Digital Marketer & SEO Specialist',
  'Motion Designer & 3D Visualizer',
  'Technical Content Writer'
];

const SUGGESTED_SKILLS = [
  'React', 'Next.js', 'Figma', 'TypeScript', 'Node.js', 
  'Python', 'Tailwind CSS', 'Mobile UI', 'AI Agents', 'SEO'
];

export default function SignupPage({ initialRole = 'client', onNavigate, onSignupSuccess, onShowToast }) {
  const [accountType, setAccountType] = useState(initialRole); // 'client' | 'freelancer'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [professionalRole, setProfessionalRole] = useState(POPULAR_ROLES[0]);
  const [customRole, setCustomRole] = useState('');
  const [selectedSkills, setSelectedSkills] = useState(['React', 'TypeScript', 'Tailwind CSS']);
  const [skillInput, setSkillInput] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Password strength calculation
  const getPasswordStrength = () => {
    if (!password) return { score: 0, label: '', color: 'bg-slate-200' };
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return { score: 1, label: 'Weak', color: 'bg-rose-500' };
    if (score <= 3) return { score: 2, label: 'Fair', color: 'bg-amber-500' };
    return { score: 3, label: 'Strong', color: 'bg-brand-500' };
  };

  const handleToggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleAddCustomSkill = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      const trimmed = skillInput.trim();
      if (trimmed && !selectedSkills.includes(trimmed)) {
        setSelectedSkills([...selectedSkills, trimmed]);
        setSkillInput('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim() || !email.trim() || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (accountType === 'freelancer' && selectedSkills.length === 0) {
      setError('Please select or add at least one primary skill.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      try {
        const finalRole = professionalRole === 'Other' && customRole ? customRole : professionalRole;
        const userData = {
          fullName: fullName.trim(),
          email: email.trim(),
          password,
          role: accountType,
          companyName: accountType === 'client' ? companyName.trim() : undefined,
          title: accountType === 'freelancer' ? finalRole : undefined,
          skills: accountType === 'freelancer' ? selectedSkills : [],
          profileCompleted: false
        };

        const newUser = authStorage.signup(userData);
        setIsLoading(false);
        if (onShowToast) {
          onShowToast(`Account created! Let's set up your ${accountType === 'client' ? 'Client' : 'Freelancer'} profile.`);
        }
        if (onSignupSuccess) {
          onSignupSuccess(newUser);
        }
      } catch (err) {
        setIsLoading(false);
        setError(err.message || 'Registration failed. Please try again.');
      }
    }, 600);
  };

  // Google sign up simulation
  const handleGoogleSignup = () => {
    setIsLoading(true);
    setTimeout(() => {
      const googleUser = authStorage.signup({
        email: `google.${Date.now()}@workora.demo`,
        password: 'google-oauth-demo',
        fullName: accountType === 'client' ? 'Client Partner (Google)' : 'Specialist (Google)',
        role: accountType,
        companyName: accountType === 'client' ? 'Startup Labs' : undefined,
        title: accountType === 'freelancer' ? 'Senior Full-Stack Engineer' : undefined,
        skills: accountType === 'freelancer' ? ['React', 'Next.js', 'Figma'] : [],
        profileCompleted: false
      });
      setIsLoading(false);
      if (onShowToast) {
        onShowToast('Signed up with Google successfully!');
      }
      if (onSignupSuccess) {
        onSignupSuccess(googleUser);
      }
    }, 700);
  };

  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-[#FBFBFD] flex flex-col justify-between selection:bg-brand-100 selection:text-brand-900">
      
      {/* Header */}
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

      {/* Main Registration Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-xl bg-white rounded-3xl border border-slate-200/90 shadow-soft-xl p-6 sm:p-10 relative">
          
          {/* Headline */}
          <div className="text-center max-w-md mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3 text-brand-500" />
              Join Workora
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Create Your Workora Account
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Choose how you want to participate in the marketplace.
            </p>
          </div>

          {/* Account Type Selection Cards (Option A vs Option B) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            {/* OPTION A: HIRE TALENT (CLIENT) */}
            <div
              onClick={() => {
                setAccountType('client');
                setError('');
              }}
              className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                accountType === 'client'
                  ? 'border-brand-600 bg-brand-50/20 ring-2 ring-brand-500/10 shadow-soft'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                  accountType === 'client' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  accountType === 'client' ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 bg-white'
                }`}>
                  {accountType === 'client' && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 block mb-0.5">
                  Option A
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  Hire Talent
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  I'm a founder, team lead, or client looking to hire vetted talent and ship projects.
                </p>
              </div>
            </div>

            {/* OPTION B: FIND WORK (FREELANCER) */}
            <div
              onClick={() => {
                setAccountType('freelancer');
                setError('');
              }}
              className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                accountType === 'freelancer'
                  ? 'border-brand-600 bg-brand-50/20 ring-2 ring-brand-500/10 shadow-soft'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                  accountType === 'freelancer' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  accountType === 'freelancer' ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 bg-white'
                }`}>
                  {accountType === 'freelancer' && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 block mb-0.5">
                  Option B
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  Find Work
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  I'm an independent specialist looking for high-paying contracts and client relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <div className="flex-1 font-medium">{error}</div>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Common: Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Mercer"
                  className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Common: Work Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Common: Password */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Password <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
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

              {/* Password strength indicator */}
              {password && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden flex gap-1">
                    <div className={`h-full rounded-full transition-all ${strength.score >= 1 ? strength.color : 'bg-transparent'} flex-1`} />
                    <div className={`h-full rounded-full transition-all ${strength.score >= 2 ? strength.color : 'bg-transparent'} flex-1`} />
                    <div className={`h-full rounded-full transition-all ${strength.score >= 3 ? strength.color : 'bg-transparent'} flex-1`} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">{strength.label}</span>
                </div>
              )}
            </div>

            {/* CONDITIONAL: OPTION A (CLIENT) */}
            {accountType === 'client' && (
              <div className="pt-1 animate-fadeIn">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Corp or Studio Labs"
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            )}

            {/* CONDITIONAL: OPTION B (FREELANCER) */}
            {accountType === 'freelancer' && (
              <div className="space-y-4 pt-1 animate-fadeIn">
                {/* Professional Role */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Professional Role <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={professionalRole}
                    onChange={(e) => setProfessionalRole(e.target.value)}
                    className="w-full px-3.5 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                  >
                    {POPULAR_ROLES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                    <option value="Other">Other (Custom Role)</option>
                  </select>

                  {professionalRole === 'Other' && (
                    <input
                      type="text"
                      required
                      value={customRole}
                      onChange={(e) => setCustomRole(e.target.value)}
                      placeholder="Type your professional role title..."
                      className="mt-2 w-full px-3.5 py-2.5 text-xs text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500"
                    />
                  )}
                </div>

                {/* Primary Skills */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Primary Skills <span className="text-rose-500">*</span>
                  </label>

                  {/* Selected skill badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5 min-h-[32px] p-2 bg-slate-50 border border-slate-200 rounded-xl">
                    {selectedSkills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-200/80 text-xs font-semibold"
                      >
                        <span>{skill}</span>
                        <button
                          type="button"
                          onClick={() => handleToggleSkill(skill)}
                          className="hover:text-brand-900 p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    {selectedSkills.length === 0 && (
                      <span className="text-xs text-slate-400 py-1">No skills selected yet</span>
                    )}
                  </div>

                  {/* Suggested Quick Add Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="text-[11px] font-semibold text-slate-400">Suggestions:</span>
                    {SUGGESTED_SKILLS.slice(0, 6).map((skill) => {
                      const isSelected = selectedSkills.includes(skill);
                      return (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => handleToggleSkill(skill)}
                          className={`text-[11px] px-2 py-0.5 rounded-md font-medium transition-colors ${
                            isSelected
                              ? 'bg-brand-600 text-white'
                              : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-300'
                          }`}
                        >
                          {isSelected ? '✓ ' + skill : '+ ' + skill}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Skill Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={handleAddCustomSkill}
                      placeholder="Add another skill..."
                      className="flex-1 px-3 py-2 text-xs text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomSkill}
                      className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-bold text-white bg-slate-900 hover:bg-brand-600 rounded-xl shadow-soft hover:shadow-brand-glow transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Social Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Or sign up with
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Google Sign Up Button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-3 transition-colors shadow-soft-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Sign up with Google</span>
          </button>

          {/* Link to Login */}
          <p className="text-center text-xs text-slate-500 mt-6">
            Already have a Workora account?{' '}
            <button
              type="button"
              onClick={() => onNavigate('login')}
              className="font-bold text-brand-600 hover:text-brand-700 hover:underline"
            >
              Log in
            </button>
          </p>

        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 text-center text-xs text-slate-400 border-t border-slate-100">
        © 2026 WORKORA Inc. All rights reserved. • Where Skills Meet Opportunities.
      </footer>
    </div>
  );
}
