import { Achievement, UserAchievement, AchievementCondition } from '../models';

// Mock achievements data
export const mockAchievements: Achievement[] = [
  {
    id: 'achievement_1',
    title: 'Người mới bắt đầu',
    description: 'Hoàn thành thói quen đầu tiên của bạn',
    icon: '🎯',
    condition: {
      type: 'total_days',
      target: 1,
    },
    isUnlocked: true,
    unlockedAt: new Date('2024-01-02'),
  },
  {
    id: 'achievement_2',
    title: 'Streak Master',
    description: 'Duy trì streak 7 ngày liên tiếp',
    icon: '🔥',
    condition: {
      type: 'streak',
      target: 7,
    },
    isUnlocked: true,
    unlockedAt: new Date('2024-01-08'),
  },
  {
    id: 'achievement_3',
    title: 'Thánh kiên trì',
    description: 'Duy trì streak 30 ngày liên tiếp',
    icon: '💪',
    condition: {
      type: 'streak',
      target: 30,
    },
    isUnlocked: false,
  },
  {
    id: 'achievement_4',
    title: 'Collector',
    description: 'Tạo 5 thói quen khác nhau',
    icon: '📚',
    condition: {
      type: 'habits_count',
      target: 5,
    },
    isUnlocked: true,
    unlockedAt: new Date('2024-01-15'),
  },
  {
    id: 'achievement_5',
    title: 'Perfectionist',
    description: 'Đạt 90% completion rate trong 1 tuần',
    icon: '⭐',
    condition: {
      type: 'completion_rate',
      target: 90,
    },
    isUnlocked: false,
  },
  {
    id: 'achievement_6',
    title: 'Century Club',
    description: 'Hoàn thành tổng cộng 100 ngày',
    icon: '🏆',
    condition: {
      type: 'total_days',
      target: 100,
    },
    isUnlocked: false,
  },
];

// Mock user achievements
export const mockUserAchievements: UserAchievement[] = [
  {
    userId: 'user_1',
    achievementId: 'achievement_1',
    unlockedAt: new Date('2024-01-02'),
    progress: 100,
  },
  {
    userId: 'user_1',
    achievementId: 'achievement_2',
    unlockedAt: new Date('2024-01-08'),
    progress: 100,
  },
  {
    userId: 'user_1',
    achievementId: 'achievement_4',
    unlockedAt: new Date('2024-01-15'),
    progress: 100,
  },
  {
    userId: 'user_1',
    achievementId: 'achievement_3',
    unlockedAt: new Date(),
    progress: 50, // 15/30 days
  },
  {
    userId: 'user_1',
    achievementId: 'achievement_5',
    unlockedAt: new Date(),
    progress: 85, // 85% completion rate
  },
  {
    userId: 'user_1',
    achievementId: 'achievement_6',
    unlockedAt: new Date(),
    progress: 78, // 78/100 days
  },
];

// API functions for achievements
export const achievementAPI = {
  // Get all achievements
  getAllAchievements: async (): Promise<Achievement[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockAchievements;
  },

  // Get user achievements
  getUserAchievements: async (userId: string): Promise<UserAchievement[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockUserAchievements.filter(ua => ua.userId === userId);
  },

  // Get unlocked achievements for user
  getUnlockedAchievements: async (userId: string): Promise<Achievement[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const userAchievements = mockUserAchievements
      .filter(ua => ua.userId === userId && ua.progress === 100)
      .map(ua => ua.achievementId);
    
    return mockAchievements.filter(achievement => 
      userAchievements.includes(achievement.id)
    );
  },

  // Check and unlock new achievements
  checkAchievements: async (userId: string): Promise<Achievement[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock logic to check if user has earned new achievements
    // Trong thực tế sẽ kiểm tra các điều kiện dựa trên dữ liệu thực
    const newlyUnlocked: Achievement[] = [];
    
    // Ví dụ: check achievement dựa trên habit stats
    // Điều này sẽ được implement chi tiết hơn với dữ liệu thực
    
    return newlyUnlocked;
  },

  // Update achievement progress
  updateAchievementProgress: async (
    userId: string, 
    achievementId: string, 
    progress: number
  ): Promise<UserAchievement | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const userAchievement = mockUserAchievements.find(
      ua => ua.userId === userId && ua.achievementId === achievementId
    );
    
    if (userAchievement) {
      userAchievement.progress = progress;
      if (progress >= 100) {
        userAchievement.unlockedAt = new Date();
      }
      return userAchievement;
    }
    
    return null;
  },
};
