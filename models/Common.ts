export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface WeeklyReport {
  userId: string;
  weekStartDate: string;
  weekEndDate: string;
  totalHabits: number;
  completedDays: number;
  totalPossibleDays: number;
  completionRate: number;
  bestStreak: number;
  habitDetails: HabitWeeklyDetail[];
}

export interface HabitWeeklyDetail {
  habitId: string;
  habitName: string;
  completedDays: number;
  totalDays: number;
  streak: number;
}
