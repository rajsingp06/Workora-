import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Upload, 
  Camera, 
  User, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Globe, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Edit3
} from 'lucide-react';
import { authStorage } from '../../utils/auth';

const SKILL_CATEGORIES = {
  'Engineering & Web': [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 
    'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'AWS', 'Docker'
  ],
  'Design & Creative': [
    'Figma', 'UI/UX Design', 'Design Systems', 'Brand Strategy', 
    'Logo Design', 'Prototyping', 'Illustration', 'Motion Design'
  ],
  'AI & Data': [
    'LangChain', 'OpenAI API', 'Vector Databases', 'Prompt Engineering', 
    'Machine Learning', 'Python Data Science', 'RAG Pipelines'
  ],
  'Marketing & Content': [
    'Technical SEO', 'Conversion Rate Optimization', 'Copywriting', 
    'Google Ads', 'Content Strategy', 'Growth Marketing'
  ]
};

const AVATAR_PRESETS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
];

export default function FreelancerOnboarding({ user, onComplete, onShowToast }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');

  // Step 1: Personal Information
  const [avatar, setAvatar] = useState(user?.avatar || AVATAR_PRESETS[0]);
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [title, setTitle] = useState(user?.title || 'Senior Full-Stack Engineer');
  const [location, setLocation] = useState(user?.location || 'San Francisco, CA');

  // Step 2: Skills & Experience
  const [selectedSkills, setSelectedSkills] = useState(
    user?.skills?.length ? user.skills : ['React', 'Next.js', 'Figma', 'TypeScript']
  );
  const [experienceLevel, setExperienceLevel] = useState(user?.experienceLevel || 'Expert');

  // Step 3: Professional Details
  const [bio, setBio] = useState(
    user?.bio ||
    'Experienced specialist crafting production-grade software and interfaces with a focus on speed, design precision, and business metrics.'
  );
  const [hourlyRate, setHourlyRate] = useState(user?.hourlyRate || 85);
  const [portfolioUrl, setPortfolioUrl] = useState(user?.portfolioUrl || 'https://github.com');

  const stepsList = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Skills' },
    { number: 3, title: 'Professional Details' },
    { number: 4, title: 'Review Profile' }
  ];

  // Handle Photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleToggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const validateStep = () => {
    setError('');
    if (currentStep === 1) {
      if (!fullName.trim()) {
        setError('Please enter your full name.');
        return false;
      }
      if (!title.trim()) {
        setError('Please enter your professional title.');
        return false;
      }
      if (!location.trim()) {
        setError('Please enter your location.');
        return false;
      }
    } else if (currentStep === 2) {
      if (selectedSkills.length === 0) {
        setError('Please select at least 2 primary skills.');
        return false;
      }
    } else if (currentStep === 3) {
      if (!bio.trim() || bio.length < 20) {
        setError('Please provide a short professional bio (at least 20 characters).');
        return false;
      }
      if (!hourlyRate || hourlyRate <= 0) {
        setError('Please enter a valid hourly rate.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setError('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleComplete = () => {
    try {
      const profileData = {
        fullName: fullName.trim(),
        title: title.trim(),
        location: location.trim(),
        avatar,
        skills: selectedSkills,
        experienceLevel,
        bio: bio.trim(),
        hourlyRate: Number(hourlyRate),
        portfolioUrl: portfolioUrl.trim(),
        profileCompleted: true
      };

      const updatedUser = authStorage.updateUserProfile(profileData);
      if (onShowToast) {
        onShowToast('Freelancer profile published successfully! Welcome to your dashboard.');
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
                Freelancer Onboarding
              </span>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Step {currentStep} of 4
            </span>
          </div>

          {/* Stepper bar */}
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-6">
            <div 
              className="bg-brand-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>

          {/* Step Pill indicators */}
          <div className="grid grid-cols-4 gap-2 text-center">
            {stepsList.map((step) => (
              <div
                key={step.number}
                className={`py-2 px-1 rounded-xl text-[11px] font-bold border transition-colors ${
                  step.number === currentStep
                    ? 'bg-slate-900 text-white border-slate-900 shadow-soft-sm'
                    : step.number < currentStep
                    ? 'bg-brand-50 text-brand-700 border-brand-200'
                    : 'bg-white text-slate-400 border-slate-200'
                }`}
              >
                <span className="hidden sm:inline">Step {step.number}: </span>
                <span>{step.title}</span>
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

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft-xl p-6 sm:p-10 mb-8">
          
          {/* STEP 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Personal Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Clients connect with people first. Add a professional photo and your primary title.
                </p>
              </div>

              {/* Photo Upload UI */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative group">
                  <img
                    src={avatar}
                    alt="Preview"
                    className="w-24 h-24 rounded-3xl object-cover ring-4 ring-white shadow-soft-lg"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className="absolute inset-0 bg-slate-950/40 rounded-3xl opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer text-white transition-opacity"
                  >
                    <Camera className="w-6 h-6" />
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-slate-800 mb-1">Profile Photo</h4>
                  <p className="text-xs text-slate-500 mb-3">
                    Upload your high-resolution headshot or select one of the verified sample presets.
                  </p>
                  
                  {/* Preset photo selector */}
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Presets:</span>
                    {AVATAR_PRESETS.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setAvatar(p)}
                        className={`w-7 h-7 rounded-xl overflow-hidden ring-2 transition-all ${
                          avatar === p ? 'ring-brand-600 scale-110' : 'ring-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={p} alt="Preset" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Name */}
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
                    placeholder="e.g. Elena Rostova"
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Professional Title */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Professional Title <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Senior Product Designer & Design Systems Lead"
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Keep it concise and clear. This appears right under your name on talent listings.
                </p>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Location <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Berlin, Germany or San Francisco, CA"
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Skills & Experience */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Skills & Experience Level
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Select your strongest skills. Clients search and filter talent using these tags.
                </p>
              </div>

              {/* Experience Level Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Experience Level <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { level: 'Beginner', desc: '1 - 2 years experience', badge: 'Junior Specialist' },
                    { level: 'Intermediate', desc: '3 - 5 years proven projects', badge: 'Mid-Senior' },
                    { level: 'Expert', desc: '5+ years lead authority', badge: 'Top 1% Senior' }
                  ].map((exp) => (
                    <div
                      key={exp.level}
                      onClick={() => setExperienceLevel(exp.level)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        experienceLevel === exp.level
                          ? 'border-brand-600 bg-brand-50/20 shadow-soft'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-extrabold text-sm text-slate-900">{exp.level}</span>
                        {experienceLevel === exp.level && <Check className="w-4 h-4 text-brand-600 font-bold" />}
                      </div>
                      <p className="text-xs text-slate-500 mb-2">{exp.desc}</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {exp.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Predefined Categories */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-bold text-slate-700">
                  Select Skills by Category <span className="text-slate-400 font-normal">({selectedSkills.length} selected)</span>
                </label>

                {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
                  <div key={category} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2.5">
                      {category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => {
                        const isSelected = selectedSkills.includes(skill);
                        return (
                          <button
                            key={skill}
                            type="button"
                            onClick={() => handleToggleSkill(skill)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                              isSelected
                                ? 'bg-brand-600 text-white shadow-sm'
                                : 'bg-white border border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-600'
                            }`}
                          >
                            {isSelected ? '✓ ' + skill : '+ ' + skill}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Professional Details */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Professional Details
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Define your standard hourly billing rate and describe your craft to clients.
                </p>
              </div>

              {/* Hourly Rate */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Hourly Rate (USD) <span className="text-rose-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative w-44">
                    <DollarSign className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="number"
                      min="15"
                      max="500"
                      required
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-lg font-black text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-500">/ hour</span>
                  <div className="hidden sm:block text-xs text-slate-400 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                    💡 Industry benchmark for {experienceLevel}: <strong>${experienceLevel === 'Expert' ? '85 - $150' : experienceLevel === 'Intermediate' ? '50 - $85' : '30 - $50'}/hr</strong>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Professional Bio <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {bio.length} characters
                  </span>
                </div>
                <textarea
                  rows="4"
                  required
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Describe your background, core strengths, past impacts, and how you help teams build..."
                  className="w-full p-4 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white leading-relaxed"
                />
              </div>

              {/* Portfolio URL */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Portfolio / GitHub / Dribbble URL <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://yourportfolio.com or https://github.com/username"
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Review Profile */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Client Perspective Preview
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Review Your Live Profile
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  This is how your card will appear in search results and client discovery feeds.
                </p>
              </div>

              {/* Preview Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-soft-lg relative">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={avatar}
                        alt={fullName}
                        className="w-20 h-20 rounded-2xl object-cover ring-2 ring-brand-500/40"
                      />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-xl font-extrabold text-slate-900">{fullName}</h3>
                        <CheckCircle2 className="w-4 h-4 text-brand-600 fill-brand-50" />
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                          {experienceLevel}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-600">{title}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                        <span className="flex items-center gap-1 font-bold text-slate-900">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          5.0 (New Specialist)
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 text-left sm:text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Standard Rate
                    </span>
                    <span className="text-2xl font-black text-slate-900">${hourlyRate}</span>
                    <span className="text-xs text-slate-500">/hr</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-5 pb-5 border-b border-slate-100">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {bio}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Verified Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio link */}
                {portfolioUrl && (
                  <div className="flex items-center gap-2 text-xs text-slate-600 pt-4 border-t border-slate-100">
                    <Globe className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-medium">Portfolio:</span>
                    <a
                      href={portfolioUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-600 font-bold hover:underline truncate max-w-xs"
                    >
                      {portfolioUrl}
                    </a>
                  </div>
                )}
              </div>

              {/* Jump to edit buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg"
                >
                  <Edit3 className="w-3 h-3" /> Edit Personal Info
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg"
                >
                  <Edit3 className="w-3 h-3" /> Edit Skills
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg"
                >
                  <Edit3 className="w-3 h-3" /> Edit Rate & Bio
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons (Back & Next / Complete) */}
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

            {currentStep < 4 ? (
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
                <span>Complete Profile & Open Dashboard</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
