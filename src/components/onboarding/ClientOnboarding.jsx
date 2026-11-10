import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Building2, 
  User, 
  Layers, 
  FileText, 
  DollarSign, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Edit3
} from 'lucide-react';
import { authStorage } from '../../utils/auth';

const INDUSTRIES = [
  'Artificial Intelligence & Robotics',
  'FinTech & Neobanking',
  'SaaS & Enterprise Software',
  'E-Commerce & Retail',
  'HealthTech & Biotech',
  'Media, Gaming & Entertainment',
  'Web3 & Distributed Systems',
  'CleanTech & Energy',
  'Other / Emerging Sector'
];

const PROJECT_TYPES = [
  { id: 'milestone', label: 'One-time Milestone Project', desc: 'Deliver an MVP, redesign, or specific feature.' },
  { id: 'ongoing', label: 'Ongoing Part-time Contract', desc: 'Retain talent for 10-30 hours per week.' },
  { id: 'fulltime', label: 'Dedicated Full-time Role', desc: 'Hire an ongoing full-time specialist.' }
];

const BUDGET_RANGES = [
  '$1,000 - $3,000',
  '$3,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000+'
];

export default function ClientOnboarding({ user, onComplete, onShowToast }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');

  // Step 1: Company Identity
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [companyName, setCompanyName] = useState(user?.companyName || 'Acme Technologies');
  const [industry, setIndustry] = useState(user?.industry || INDUSTRIES[0]);

  // Step 2: About & Hiring Requirements
  const [companyDescription, setCompanyDescription] = useState(
    user?.companyDescription || 
    'We are scaling a modern technology platform and looking for top-tier engineers and designers to build robust, scalable features.'
  );
  const [projectType, setProjectType] = useState('milestone');
  const [budgetRange, setBudgetRange] = useState(BUDGET_RANGES[1]);
  const [keySkillsInput, setKeySkillsInput] = useState('React, Next.js, Figma, TypeScript');

  const stepsList = [
    { number: 1, title: 'Company Identity' },
    { number: 2, title: 'Hiring Needs' },
    { number: 3, title: 'Profile Preview' }
  ];

  const validateStep = () => {
    setError('');
    if (currentStep === 1) {
      if (!fullName.trim()) {
        setError('Please enter your full name.');
        return false;
      }
      if (!companyName.trim()) {
        setError('Please enter your company or project name.');
        return false;
      }
    } else if (currentStep === 2) {
      if (!companyDescription.trim() || companyDescription.length < 20) {
        setError('Please provide a brief company description (at least 20 characters).');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setError('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleComplete = () => {
    try {
      const skillsArray = keySkillsInput
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

      const profileData = {
        fullName: fullName.trim(),
        companyName: companyName.trim(),
        industry,
        companyDescription: companyDescription.trim(),
        hiringRequirements: {
          projectType: PROJECT_TYPES.find((p) => p.id === projectType)?.label || projectType,
          budgetRange,
          keySkills: skillsArray
        },
        profileCompleted: true
      };

      const updatedUser = authStorage.updateUserProfile(profileData);
      if (onShowToast) {
        onShowToast('Client profile setup complete! Welcome to your hiring dashboard.');
      }
      if (onComplete) {
        onComplete(updatedUser);
      }
    } catch (err) {
      setError(err.message || 'Failed to complete profile.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] py-10 px-4 sm:px-6 lg:px-8 selection:bg-brand-100 selection:text-brand-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-extrabold text-sm shadow-brand-glow">
                W
              </div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">WORKORA</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200">
                Client Onboarding
              </span>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Step {currentStep} of 3
            </span>
          </div>

          {/* Stepper bar */}
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-6">
            <div 
              className="bg-brand-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>

          {/* Step Pill indicators */}
          <div className="grid grid-cols-3 gap-2 text-center">
            {stepsList.map((step) => (
              <div
                key={step.number}
                className={`py-2 px-1 rounded-xl text-xs font-bold border transition-colors ${
                  step.number === currentStep
                    ? 'bg-slate-900 text-white border-slate-900 shadow-soft-sm'
                    : step.number < currentStep
                    ? 'bg-brand-50 text-brand-700 border-brand-200'
                    : 'bg-white text-slate-400 border-slate-200'
                }`}
              >
                <span>Step {step.number}: {step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5 animate-fadeIn">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
            <div className="flex-1 font-medium">{error}</div>
          </div>
        )}

        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft-xl p-6 sm:p-10 mb-8">
          
          {/* STEP 1: Company Identity */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Company & Team Identity
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Tell talent who you are and what your organization builds.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Connor"
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Company / Organization Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Robotics or Stealth Startup"
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Industry / Domain <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: About & Hiring Requirements */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Hiring Requirements & Project Scope
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Specify your anticipated project engagement model and estimated budget.
                </p>
              </div>

              {/* Company Description */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Company Description <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {companyDescription.length} characters
                  </span>
                </div>
                <textarea
                  rows="3"
                  required
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  placeholder="Provide a brief overview of your business, product mission, and team culture..."
                  className="w-full p-4 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white leading-relaxed"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Engagement Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PROJECT_TYPES.map((pt) => (
                    <div
                      key={pt.id}
                      onClick={() => setProjectType(pt.id)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        projectType === pt.id
                          ? 'border-brand-600 bg-brand-50/20 shadow-soft'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold text-xs text-slate-900">{pt.label}</span>
                        {projectType === pt.id && <Check className="w-3.5 h-3.5 text-brand-600 font-bold" />}
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug">{pt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Estimated Project Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BUDGET_RANGES.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudgetRange(b)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                        budgetRange === b
                          ? 'bg-slate-900 text-white shadow-soft-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Skills Needed */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Target Skills / Technologies <span className="text-slate-400 font-normal">(Comma separated)</span>
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={keySkillsInput}
                    onChange={(e) => setKeySkillsInput(e.target.value)}
                    placeholder="e.g. React, Next.js, Python, Figma"
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Final Profile Preview */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Final Company Profile Preview
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Review Your Client Profile
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  This profile will be shown to talent when you post jobs or send direct contract offers.
                </p>
              </div>

              {/* Preview Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-soft-lg">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-2xl shadow-soft">
                      {companyName.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-xl font-extrabold text-slate-900">{companyName}</h3>
                        <CheckCircle2 className="w-4 h-4 text-brand-600 fill-brand-50" />
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          Verified Client
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-500">Contact: {fullName}</p>
                      <p className="text-xs font-semibold text-brand-700 mt-0.5">{industry}</p>
                    </div>
                  </div>

                  <div className="bg-brand-50/60 px-4 py-3 rounded-2xl border border-brand-100 text-left sm:text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 block">
                      Target Budget
                    </span>
                    <span className="text-lg font-black text-slate-900">{budgetRange}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-5 pb-5 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    About The Company
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {companyDescription}
                  </p>
                </div>

                {/* Hiring Model & Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Engagement Model
                    </span>
                    <span className="inline-block px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold">
                      {PROJECT_TYPES.find((p) => p.id === projectType)?.label}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Target Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {keySkillsInput.split(',').map((s) => s.trim()).filter(Boolean).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 text-xs font-semibold border border-brand-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Jump to edit buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg"
                >
                  <Edit3 className="w-3 h-3" /> Edit Company Info
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg"
                >
                  <Edit3 className="w-3 h-3" /> Edit Hiring Requirements
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-7 py-3 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-brand-600 rounded-xl shadow-soft hover:shadow-brand-glow transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleComplete}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-brand-glow transition-all"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Complete Profile & Open Hiring Dashboard</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
