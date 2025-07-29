export interface Habit {
  id: string;
  name: string;
  description: string;
  streak: number;
  isCompletedToday: boolean;
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
  category?: string;
  targetDays?: number;
  reminderTime?: string;
}

export interface HabitProgress {
  habitId: string;
  date: string;
  completed: boolean;
  note?: string;
}

export interface HabitStats {
  habitId: string;
  totalDays: number;
  completedDays: number;
  currentStreak: number;
  longestStreak: number;
  completionRate: number;
}
