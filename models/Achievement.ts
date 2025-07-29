export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: AchievementCondition;
  isUnlocked: boolean;
  unlockedAt?: Date;
}

export interface AchievementCondition {
  type: 'streak' | 'total_days' | 'habits_count' | 'completion_rate';
  target: number;
  habitId?: string; // Nếu achievement dành cho habit cụ thể
}

export interface UserAchievement {
  userId: string;
  achievementId: string;
  unlockedAt: Date;
  progress: number;
}
