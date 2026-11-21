import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Categories from './components/Categories';
import FeaturedFreelancers from './components/FeaturedFreelancers';
import HowItWorks from './components/HowItWorks';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FreelancerModal from './components/FreelancerModal';
import NotificationToast from './components/NotificationToast';

// Phase 02 Auth & Onboarding Components
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import FreelancerOnboarding from './components/onboarding/FreelancerOnboarding';
import ClientOnboarding from './components/onboarding/ClientOnboarding';
import Dashboard from './components/dashboard/Dashboard';
import { authStorage } from './utils/auth';

// Redesign Feature Sections
import WorkoraPro from './components/WorkoraPro';
import LocalServicesHomepageSection from './components/LocalServicesHomepageSection';
import SuccessStories from './components/SuccessStories';

// Quick Gigs Hyperlocal Components
import QuickGigsHomepageSection from './components/QuickGigsHomepageSection';
import QuickGigsPage from './components/quickgigs/QuickGigsPage';
import QuickGigDetailsModal from './components/quickgigs/QuickGigDetailsModal';
import QuickGigApplyModal from './components/quickgigs/QuickGigApplyModal';

// Phase 03 Local Services Components
import LocalServicesPage from './components/local/LocalServicesPage';
import LocationModal from './components/local/LocationModal';
import LocalProviderModal from './components/local/LocalProviderModal';
import BookingModal from './components/local/BookingModal';
import { locationService } from './utils/location';

export default function App() {
  // Navigation View State: 'landing' | 'local-services' | 'quick-gigs' | 'login' | 'signup' | 'onboarding-freelancer' | 'onboarding-client' | 'dashboard'
  const [currentView, setCurrentView] = useState('landing');
  const [signupRole, setSignupRole] = useState('client');
  const [currentUser, setCurrentUser] = useState(null);

  // Quick Gigs States
  const [selectedQuickGig, setSelectedQuickGig] = useState(null);
  const [applyQuickGig, setApplyQuickGig] = useState(null);

  // Local Services States
  const [userLocation, setUserLocation] = useState(locationService.getLocation());
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedLocalProvider, setSelectedLocalProvider] = useState(null);
  const [bookingProvider, setBookingProvider] = useState(null);

  // Landing Page Interactive State
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize current user & listen to URL hash
  useEffect(() => {
    const user = authStorage.getCurrentUser();
    setCurrentUser(user);

    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validViews = [
        'local-services',
        'quick-gigs',
        'login',
        'signup',
        'onboarding-freelancer',
        'onboarding-client',
        'dashboard'
      ];
      if (validViews.includes(hash)) {
        setCurrentView(hash);
      } else if (!hash) {
        setCurrentView('landing');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Safe navigation function with hash update
  const navigateTo = (view, role = 'client') => {
    setCurrentView(view);
    if (role) setSignupRole(role);
    window.location.hash = view === 'landing' ? '' : `/${view}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auth Handlers
  const handleOpenAuth = (mode = 'login', role = 'client') => {
    setSignupRole(role);
    if (mode === 'login') {
      navigateTo('login');
    } else {
      navigateTo('signup', role);
    }
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    if (!user.profileCompleted) {
      if (user.role === 'freelancer') {
        navigateTo('onboarding-freelancer');
      } else {
        navigateTo('onboarding-client');
      }
    } else {
      navigateTo('dashboard');
    }
  };

  const handleSignupSuccess = (user) => {
    setCurrentUser(user);
    if (user.role === 'freelancer') {
      navigateTo('onboarding-freelancer');
    } else {
      navigateTo('onboarding-client');
    }
  };

  const handleOnboardingComplete = (updatedUser) => {
    setCurrentUser(updatedUser);
    navigateTo('dashboard');
  };

  const handleLogout = () => {
    authStorage.logout();
    setCurrentUser(null);
    navigateTo('landing');
    setToastMessage('You have been logged out.');
  };

  const handleEditProfile = () => {
    if (currentUser?.role === 'freelancer') {
      navigateTo('onboarding-freelancer');
    } else {
      navigateTo('onboarding-client');
    }
  };

  // Location selector handler
  const handleLocationSelect = (loc) => {
    setUserLocation(loc);
  };

  // Landing Page internal search / category scroll
  const handleSearch = (query, mode) => {
    setSearchQuery(query);
    if (query) {
      setToastMessage(`Filtering ${mode === 'talent' ? 'freelancers' : 'projects'} for "${query}"`);
    }
    const el = document.getElementById('featured-freelancers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    const el = document.getElementById('featured-freelancers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId) => {
    if (sectionId === 'local-services' || sectionId === 'quick-gigs') {
      navigateTo(sectionId);
      return;
    }
    if (sectionId === 'dashboard' || sectionId === 'profile') {
      navigateTo('dashboard');
      return;
    }
    if (sectionId === 'login' || sectionId === 'signup') {
      navigateTo(sectionId);
      return;
    }
    if (sectionId === 'edit-profile') {
      handleEditProfile();
      return;
    }
    if (currentView !== 'landing') {
      navigateTo('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render Full Screen Views (Login, Signup, Onboarding, Dashboard)
  if (currentView === 'login') {
    return (
      <>
        <LoginPage
          onNavigate={(v) => navigateTo(v)}
          onLoginSuccess={handleLoginSuccess}
          onShowToast={(msg) => setToastMessage(msg)}
        />
        <NotificationToast message={toastMessage} onClose={() => setToastMessage(null)} />
      </>
    );
  }

  if (currentView === 'signup') {
    return (
      <>
        <SignupPage
          initialRole={signupRole}
          onNavigate={(v) => navigateTo(v)}
          onSignupSuccess={handleSignupSuccess}
          onShowToast={(msg) => setToastMessage(msg)}
        />
        <NotificationToast message={toastMessage} onClose={() => setToastMessage(null)} />
      </>
    );
  }

  if (currentView === 'onboarding-freelancer') {
    return (
      <>
        <FreelancerOnboarding
          user={currentUser}
          onComplete={handleOnboardingComplete}
          onShowToast={(msg) => setToastMessage(msg)}
        />
        <NotificationToast message={toastMessage} onClose={() => setToastMessage(null)} />
      </>
    );
  }

  if (currentView === 'onboarding-client') {
    return (
      <>
        <ClientOnboarding
          user={currentUser}
          onComplete={handleOnboardingComplete}
          onShowToast={(msg) => setToastMessage(msg)}
        />
        <NotificationToast message={toastMessage} onClose={() => setToastMessage(null)} />
      </>
    );
  }

  if (currentView === 'dashboard') {
    return (
      <>
        <Dashboard
          user={currentUser}
          onNavigate={(v) => navigateTo(v)}
          onLogout={handleLogout}
          onEditProfile={handleEditProfile}
          onShowToast={(msg) => setToastMessage(msg)}
        />
        <NotificationToast message={toastMessage} onClose={() => setToastMessage(null)} />
      </>
    );
  }

  // Common Header & Footer Layout for Landing Page & Local Services Discovery Page
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col font-sans">
      
      {/* Universal Sticky Navbar */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onNavigate={handleNavigateSection}
        currentUser={currentUser}
        currentView={currentView}
        userLocation={userLocation}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onLogout={handleLogout}
        onEditProfile={handleEditProfile}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'local-services' ? (
          /* LOCAL SERVICES DISCOVERY PAGE */
          <LocalServicesPage
            userLocation={userLocation}
            onOpenLocationModal={() => setIsLocationModalOpen(true)}
            onSelectProvider={(p) => setSelectedLocalProvider(p)}
            onOpenBooking={(p) => setBookingProvider(p)}
            onShowToast={(msg) => setToastMessage(msg)}
          />
        ) : currentView === 'quick-gigs' ? (
          /* QUICK GIGS HYPERLOCAL DISCOVERY PAGE */
          <QuickGigsPage
            userLocation={userLocation}
            onOpenLocationModal={() => setIsLocationModalOpen(true)}
            onSelectGig={(g) => setSelectedQuickGig(g)}
            onOpenApply={(g) => setApplyQuickGig(g)}
            onShowToast={(msg) => setToastMessage(msg)}
          />
        ) : (
          /* DIGITAL SERVICES LANDING PAGE */
          <>
            <Hero
              onSearch={handleSearch}
              onSelectCategory={handleSelectCategory}
              onOpenAuth={handleOpenAuth}
            />

            <TrustSection />

            <Categories
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />

            <WorkoraPro
              onSelectFreelancer={(f) => setSelectedFreelancer(f)}
              onExplorePro={() => handleNavigateSection('featured-freelancers')}
            />

            <LocalServicesHomepageSection
              userLocation={userLocation}
              onOpenLocationModal={() => setIsLocationModalOpen(true)}
              onSelectProvider={(p) => setSelectedLocalProvider(p)}
              onOpenBooking={(p) => setBookingProvider(p)}
              onNavigate={handleNavigateSection}
              onShowToast={(msg) => setToastMessage(msg)}
            />

            <QuickGigsHomepageSection
              userLocation={userLocation}
              onOpenLocationModal={() => setIsLocationModalOpen(true)}
              onSelectGig={(g) => setSelectedQuickGig(g)}
              onOpenApply={(g) => setApplyQuickGig(g)}
              onNavigate={handleNavigateSection}
              onShowToast={(msg) => setToastMessage(msg)}
            />

            <FeaturedFreelancers
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSelectFreelancer={setSelectedFreelancer}
              onOpenAuth={handleOpenAuth}
            />

            <SuccessStories />

            <HowItWorks
              onOpenAuth={handleOpenAuth}
            />

            <CtaSection
              onOpenAuth={handleOpenAuth}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigateSection}
        onOpenAuth={handleOpenAuth}
      />

      {/* Digital Freelancer Profile Modal */}
      <FreelancerModal
        freelancer={selectedFreelancer}
        onClose={() => setSelectedFreelancer(null)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Quick Gig Details Modal */}
      <QuickGigDetailsModal
        gig={selectedQuickGig}
        onClose={() => setSelectedQuickGig(null)}
        onOpenApply={(g) => setApplyQuickGig(g)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Quick Gig 1-Minute Apply Modal */}
      <QuickGigApplyModal
        gig={applyQuickGig}
        currentUser={currentUser}
        onClose={() => setApplyQuickGig(null)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Local Service Provider Profile Modal */}
      <LocalProviderModal
        provider={selectedLocalProvider}
        userLocation={userLocation}
        onClose={() => setSelectedLocalProvider(null)}
        onOpenBooking={(p) => setBookingProvider(p)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Local Service Booking & Doorstep Appointment Modal */}
      <BookingModal
        provider={bookingProvider}
        userLocation={userLocation}
        onClose={() => setBookingProvider(null)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Location Selector Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onLocationSelect={handleLocationSelect}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Interactive Toast Notifications */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
