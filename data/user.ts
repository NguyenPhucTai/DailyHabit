import { User, UserPreferences, NotificationSettings, PrivacySettings } from '../models';

// Mock user data
export const mockUser: User = {
  id: 'user_1',
  email: 'user@example.com',
  name: 'Nguyễn Văn A',
  avatar: undefined,
  createdAt: new Date('2024-01-01'),
  preferences: {
    theme: 'system',
    language: 'vi',
    notifications: {
      enableReminders: true,
      reminderTime: '19:00',
      enableWeeklyReport: true,
      enableAchievements: true,
      soundEnabled: true,
    },
    privacy: {
      shareProgress: false,
      allowAnalytics: true,
    },
  },
};

// API functions for user management
export const userAPI = {
  // Get current user
  getCurrentUser: async (): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockUser;
  },

  // Update user profile
  updateProfile: async (updates: Partial<Pick<User, 'name' | 'avatar'>>): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    Object.assign(mockUser, updates);
    return mockUser;
  },

  // Update user preferences
  updatePreferences: async (preferences: Partial<UserPreferences>): Promise<UserPreferences> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    mockUser.preferences = { ...mockUser.preferences, ...preferences };
    return mockUser.preferences;
  },

  // Update notification settings
  updateNotificationSettings: async (settings: Partial<NotificationSettings>): Promise<NotificationSettings> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    mockUser.preferences.notifications = { 
      ...mockUser.preferences.notifications, 
      ...settings 
    };
    return mockUser.preferences.notifications;
  },

  // Update privacy settings
  updatePrivacySettings: async (settings: Partial<PrivacySettings>): Promise<PrivacySettings> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    mockUser.preferences.privacy = { 
      ...mockUser.preferences.privacy, 
      ...settings 
    };
    return mockUser.preferences.privacy;
  },

  // Login
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock authentication - trong thực tế sẽ validate với server
    if (email && password) {
      return {
        user: mockUser,
        token: 'mock_jwt_token_' + Date.now(),
      };
    }
    throw new Error('Invalid credentials');
  },

  // Logout
  logout: async (): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    // Clear local storage, tokens, etc.
  },

  // Register
  register: async (email: string, password: string, name: string): Promise<{ user: User; token: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    // Mock registration
    const newUser: User = {
      ...mockUser,
      id: 'user_' + Date.now(),
      email,
      name,
      createdAt: new Date(),
    };
    
    return {
      user: newUser,
      token: 'mock_jwt_token_' + Date.now(),
    };
  },
};
