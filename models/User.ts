export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'vi' | 'en';
  notifications: NotificationSettings;
  privacy: PrivacySettings;
}

export interface NotificationSettings {
  enableReminders: boolean;
  reminderTime: string;
  enableWeeklyReport: boolean;
  enableAchievements: boolean;
  soundEnabled: boolean;
}

export interface PrivacySettings {
  shareProgress: boolean;
  allowAnalytics: boolean;
}
