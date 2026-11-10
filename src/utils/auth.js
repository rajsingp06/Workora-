// Workora LocalStorage Auth & Mock Database Utility

const USERS_STORAGE_KEY = 'workora_users_db';
const CURRENT_USER_KEY = 'workora_current_user';

// Pre-seeded demo accounts for quick testing
const DEFAULT_USERS = [
  {
    id: 'user-client-demo',
    email: 'client@acme.com',
    password: 'password123',
    fullName: 'Sarah Connor',
    role: 'client',
    companyName: 'Acme Robotics',
    industry: 'Artificial Intelligence & Robotics',
    companyDescription: 'Building autonomous robotics and vision systems for industrial logistics.',
    hiringRequirements: {
      projectType: 'Long-term Contract',
      budgetRange: '$10,000 - $25,000',
      keySkills: ['Computer Vision', 'React', 'Python', 'ROS2']
    },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    profileCompleted: true,
    createdAt: new Date('2026-01-15').toISOString()
  },
  {
    id: 'user-freelancer-demo',
    email: 'elena@workora.pro',
    password: 'password123',
    fullName: 'Elena Rostova',
    role: 'freelancer',
    title: 'Senior Product Designer & Design Systems Lead',
    location: 'Berlin, Germany',
    skills: ['Figma', 'Design Systems', 'SaaS UX', 'User Research', 'Prototyping'],
    experienceLevel: 'Expert',
    bio: 'Ex-fintech Lead Designer dedicated to building high-converting, human-centered digital experiences and scalable design systems.',
    hourlyRate: 95,
    portfolioUrl: 'https://dribbble.com/elenarostova',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    profileCompleted: true,
    createdAt: new Date('2026-02-10').toISOString()
  }
];

export const authStorage = {
  // Get all registered users from localStorage
  getUsers() {
    try {
      const data = localStorage.getItem(USERS_STORAGE_KEY);
      if (!data) {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
        return DEFAULT_USERS;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_USERS;
    }
  },

  // Save users list
  saveUsers(users) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  },

  // Get current session user
  getCurrentUser() {
    try {
      const data = localStorage.getItem(CURRENT_USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  // Set current session user
  setCurrentUser(user, remember = true) {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      if (!remember) {
        sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      }
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
      sessionStorage.removeItem(CURRENT_USER_KEY);
    }
  },

  // Log in user
  login(email, password, remember = true) {
    const users = this.getUsers();
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase().trim()
    );

    if (!user) {
      throw new Error('No account found with this email address.');
    }

    if (user.password !== password) {
      throw new Error('Incorrect password. Please verify your credentials.');
    }

    this.setCurrentUser(user, remember);
    return user;
  },

  // Register user
  signup(userData) {
    const users = this.getUsers();
    const existing = users.find(
      (u) => u.email.toLowerCase() === userData.email.toLowerCase().trim()
    );

    if (existing) {
      throw new Error('An account with this email address already exists.');
    }

    const newUser = {
      id: `user-${Date.now()}`,
      createdAt: new Date().toISOString(),
      profileCompleted: false,
      ...userData
    };

    users.push(newUser);
    this.saveUsers(users);
    this.setCurrentUser(newUser, true);
    return newUser;
  },

  // Update current user profile (during onboarding)
  updateUserProfile(updatedFields) {
    const current = this.getCurrentUser();
    if (!current) throw new Error('No authenticated user session found.');

    const updatedUser = {
      ...current,
      ...updatedFields,
      profileCompleted: true,
      updatedAt: new Date().toISOString()
    };

    // Update in users registry
    const users = this.getUsers();
    const index = users.findIndex((u) => u.id === current.id);
    if (index !== -1) {
      users[index] = updatedUser;
    } else {
      users.push(updatedUser);
    }

    this.saveUsers(users);
    this.setCurrentUser(updatedUser, true);
    return updatedUser;
  },

  // Logout
  logout() {
    this.setCurrentUser(null);
  }
};
