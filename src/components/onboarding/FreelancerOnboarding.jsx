import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Upload, 
  Camera, 
  User, 
  MapPin, 
  Briefcase, 
  Globe, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Edit3,
  FileText,
  UploadCloud,
  Trash2,
  RefreshCw
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
  'https://images.pexels.com/photos/29852852/pexels-photo-29852852/free-photo-of-professional-studio-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1&fit=crop',
  'https://images.pexels.com/photos/37605831/pexels-photo-37605831/free-photo-of-professional-portrait-of-a-businessman-in-formal-attire.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1&fit=crop',
  'https://images.pexels.com/photos/17329048/pexels-photo-17329048/free-photo-of-portrait-of-woman-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1&fit=crop',
  'https://images.pexels.com/photos/38889923/pexels-photo-38889923/free-photo-of-professional-portrait-of-a-businessman.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1&fit=crop',
  'https://images.pexels.com/photos/33646670/pexels-photo-33646670/free-photo-of-professional-woman-in-business-attire-portrait.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1&fit=crop'
];

export default function FreelancerOnboarding({ user, onComplete, onShowToast }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');

  // Step 1: Personal Information
  const [avatar, setAvatar] = useState(user?.avatar || AVATAR_PRESETS[0]);
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [title, setTitle] = useState(user?.title || 'Senior Full-Stack Engineer');
  const [location, setLocation] = useState(user?.location || 'Bengaluru, Karnataka');

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
  const [hourlyRate, setHourlyRate] = useState(user?.hourlyRate || 1800);
  const [portfolioUrl, setPortfolioUrl] = useState(user?.portfolioUrl || 'https://github.com');

  // Resume Upload State in Onboarding
  const [resumeFile, setResumeFile] = useState(user?.resume || null);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [resumeProgress, setResumeProgress] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const stepsList = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Skills' },
    { number: 3, title: 'Professional Details & Resume' },
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

  const processResumeFile = (file) => {
    setError('');
    if (!file) return;

    const validExtensions = ['.pdf', '.doc', '.docx'];
    const lowerName = file.name.toLowerCase();
    const isValidExt = validExtensions.some(ext => lowerName.endsWith(ext));

    if (!isValidExt) {
      setError('Please upload a valid PDF or DOC/DOCX document.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size exceeds the 5 MB limit.');
      return;
    }

    const formattedSize = file.size >= 1024 * 1024 
      ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` 
      : `${Math.round(file.size / 1024)} KB`;

    setIsUploadingResume(true);
    setResumeProgress(30);

    setTimeout(() => {
      setResumeProgress(75);
    }, 150);

    setTimeout(() => {
      setResumeProgress(100);
      setIsUploadingResume(false);
      setResumeFile({
        name: file.name,
        size: file.size,
        formattedSize,
        type: file.type || 'application/pdf',
        lastModified: file.lastModified || Date.now()
      });
      if (onShowToast) {
        onShowToast(`Resume "${file.name}" updated successfully!`);
      }
    }, 350);
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
        setError('Please enter a valid hourly rate in ₹.');
        return false;
      }
      if (!resumeFile) {
        setError('Please ensure your resume is uploaded (mandatory for verified freelancers).');
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
        resume: resumeFile,
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {stepsList.map((step) => {
              const isPassed = step.number < currentStep;
              const isCurrent = step.number === currentStep;
              return (
                <div
                  key={step.number}
                  className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-bold transition-all ${
                    isCurrent
                      ? 'border-brand-600 bg-white text-slate-900 shadow-soft-sm ring-1 ring-brand-500/10'
                      : isPassed
                      ? 'border-emerald-200 bg-emerald-50/40 text-emerald-800'
                      : 'border-slate-200/60 bg-white/50 text-slate-400'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                    isCurrent
                      ? 'bg-brand-600 text-white'
                      : isPassed
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {isPassed ? <Check className="w-3 h-3 stroke-[3]" /> : step.number}
                  </div>
                  <span className="truncate">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card Body */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft-xl p-6 sm:p-10 relative">
          
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
              <div className="font-medium">{error}</div>
            </div>
          )}

          {/* STEP 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Personal Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  How should clients address and see you across the platform?
                </p>
              </div>

              {/* Profile Photo Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-3">
                  Profile Photo <span className="text-rose-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative group">
                    <img
                      src={avatar}
                      alt="Avatar Preview"
                      className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-200 group-hover:border-brand-500 transition-colors shadow-soft"
                    />
                    <label className="absolute inset-0 bg-slate-900/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity text-white text-xs font-bold">
                      <Camera className="w-5 h-5 mb-1" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold cursor-pointer transition-colors mb-2">
                      <Upload className="w-4 h-4 text-slate-600" />
                      <span>Upload Custom Headshot</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[11px] text-slate-400">
                      Or pick from authentic verified presets below:
                    </p>

                    {/* Presets */}
                    <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                      {AVATAR_PRESETS.map((p, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setAvatar(p)}
                          className={`w-9 h-9 rounded-xl overflow-hidden border-2 transition-all ${
                            avatar === p ? 'border-brand-600 ring-2 ring-brand-500/20 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={p} alt={`Preset ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
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
                    placeholder="e.g. Priya Nair"
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
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Location (City, State) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Bengaluru, Karnataka or Mumbai, Maharashtra"
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
                  Skills & Seniority
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Tag the frameworks, tools, and expertise you bring to clients.
                </p>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Experience Level <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { level: 'Beginner', desc: '1–2 years of practical work', badge: 'Junior Specialist' },
                    { level: 'Intermediate', desc: '3–5 years shipped projects', badge: 'Mid Specialist' },
                    { level: 'Expert', desc: '6+ years proven leadership', badge: 'Top-Tier Specialist' }
                  ].map((exp) => (
                    <div
                      key={exp.level}
                      onClick={() => setExperienceLevel(exp.level)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        experienceLevel === exp.level
                          ? 'border-brand-600 bg-brand-50/30 ring-2 ring-brand-500/10'
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

          {/* STEP 3: Professional Details & Resume */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Professional Details & Resume
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Define your standard hourly billing rate in Indian Rupees and manage your verified CV.
                </p>
              </div>

              {/* Hourly Rate (INR) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Hourly Rate (INR ₹) <span className="text-rose-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative w-48">
                    <span className="text-lg font-black text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      ₹
                    </span>
                    <input
                      type="number"
                      min="300"
                      max="25000"
                      step="50"
                      required
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 text-lg font-black text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white"
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-500">/ hour</span>
                  <div className="hidden sm:block text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                    💡 Benchmark for {experienceLevel}: <strong>₹{experienceLevel === 'Expert' ? '2,000 - ₹4,500' : experienceLevel === 'Intermediate' ? '1,200 - ₹2,000' : '600 - ₹1,200'}/hr</strong>
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

              {/* Resume Upload / Verification Section */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-brand-600" />
                    <span>Attached Resume / CV</span>
                    <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {resumeFile ? 'Verified Attached' : 'Upload Required'}
                  </span>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => e.target.files?.[0] && processResumeFile(e.target.files[0])}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

                {isUploadingResume && (
                  <div className="p-3 bg-white rounded-xl border border-brand-200">
                    <div className="flex justify-between text-xs font-bold text-brand-900 mb-1">
                      <span>Uploading Resume...</span>
                      <span>{resumeProgress}%</span>
                    </div>
                    <div className="w-full bg-brand-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-600 h-full rounded-full transition-all" style={{ width: `${resumeProgress}%` }} />
                    </div>
                  </div>
                )}

                {!isUploadingResume && resumeFile && (
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="truncate text-left">
                        <p className="text-xs font-bold text-slate-900 truncate">{resumeFile.name}</p>
                        <p className="text-[11px] text-slate-500">{resumeFile.formattedSize || '1.8 MB'} • Ready for client verification</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg shrink-0 flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" /> Replace
                    </button>
                  </div>
                )}

                {!isUploadingResume && !resumeFile && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="p-4 border-2 border-dashed border-slate-300 hover:border-brand-400 bg-white rounded-xl text-center cursor-pointer transition-colors"
                  >
                    <UploadCloud className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                    <p className="text-xs font-bold text-slate-800">Click to upload your resume (PDF or DOCX, max 5MB)</p>
                  </div>
                )}
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
                    <span className="text-2xl font-black text-slate-900">₹{Number(hourlyRate).toLocaleString('en-IN')}</span>
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

                {/* Resume Status */}
                {resumeFile && (
                  <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <FileText className="w-4 h-4 text-brand-600" />
                      <span>{resumeFile.name}</span>
                      <span className="text-slate-400 font-normal">({resumeFile.formattedSize})</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Resume Attached
                    </span>
                  </div>
                )}

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
                  <Edit3 className="w-3 h-3" /> Edit Rate, Bio & Resume
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
