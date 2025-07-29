import { Habit, HabitProgress, HabitStats } from '../models';

// Mock habits data
export const mockHabits: Habit[] = [
  {
    id: '1',
    name: 'Đọc sách',
    description: 'Đọc ít nhất 30 phút mỗi ngày',
    streak: 5,
    isCompletedToday: false,
    color: '#FF6B6B',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date(),
    category: 'learning',
    targetDays: 365,
    reminderTime: '20:00',
  },
  {
    id: '2',
    name: 'Tập thể dục',
    description: 'Tập gym hoặc chạy bộ',
    streak: 12,
    isCompletedToday: true,
    color: '#4ECDC4',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date(),
    category: 'health',
    targetDays: 365,
    reminderTime: '06:00',
  },
  {
    id: '3',
    name: 'Uống nước',
    description: 'Uống ít nhất 2L nước mỗi ngày',
    streak: 3,
    isCompletedToday: true,
    color: '#45B7D1',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date(),
    category: 'health',
    targetDays: 365,
    reminderTime: '08:00',
  },
  {
    id: '4',
    name: 'Thiền',
    description: 'Thiền 15 phút mỗi ngày',
    streak: 7,
    isCompletedToday: false,
    color: '#9B59B6',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date(),
    category: 'mindfulness',
    targetDays: 100,
    reminderTime: '07:00',
  },
  {
    id: '5',
    name: 'Viết nhật ký',
    description: 'Viết nhật ký tối thiểu 5 phút',
    streak: 15,
    isCompletedToday: true,
    color: '#F39C12',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date(),
    category: 'personal',
    targetDays: 365,
    reminderTime: '21:00',
  },
];

// Mock habit progress data (for calendar view)
export const mockHabitProgress: HabitProgress[] = [
  // Progress for habit 1 (Đọc sách)
  { habitId: '1', date: '2024-07-25', completed: true },
  { habitId: '1', date: '2024-07-26', completed: true },
  { habitId: '1', date: '2024-07-27', completed: true },
  { habitId: '1', date: '2024-07-28', completed: true },
  { habitId: '1', date: '2024-07-29', completed: false },
  
  // Progress for habit 2 (Tập thể dục)
  { habitId: '2', date: '2024-07-20', completed: true },
  { habitId: '2', date: '2024-07-21', completed: true },
  { habitId: '2', date: '2024-07-22', completed: true },
  { habitId: '2', date: '2024-07-23', completed: true },
  { habitId: '2', date: '2024-07-24', completed: true },
  { habitId: '2', date: '2024-07-25', completed: true },
  { habitId: '2', date: '2024-07-26', completed: true },
  { habitId: '2', date: '2024-07-27', completed: true },
  { habitId: '2', date: '2024-07-28', completed: true },
  { habitId: '2', date: '2024-07-29', completed: true },
];

// Mock habit stats
export const mockHabitStats: HabitStats[] = [
  {
    habitId: '1',
    totalDays: 210,
    completedDays: 156,
    currentStreak: 5,
    longestStreak: 21,
    completionRate: 74.3,
  },
  {
    habitId: '2',
    totalDays: 210,
    completedDays: 198,
    currentStreak: 12,
    longestStreak: 45,
    completionRate: 94.3,
  },
  {
    habitId: '3',
    totalDays: 210,
    completedDays: 187,
    currentStreak: 3,
    longestStreak: 18,
    completionRate: 89.0,
  },
  {
    habitId: '4',
    totalDays: 195,
    completedDays: 134,
    currentStreak: 7,
    longestStreak: 15,
    completionRate: 68.7,
  },
  {
    habitId: '5',
    totalDays: 210,
    completedDays: 189,
    currentStreak: 15,
    longestStreak: 28,
    completionRate: 90.0,
  },
];

// API functions (mock backend calls)
export const habitAPI = {
  // Get all habits
  getHabits: async (): Promise<Habit[]> => {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
    return mockHabits;
  },

  // Get habit by ID
  getHabitById: async (id: string): Promise<Habit | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockHabits.find(habit => habit.id === id) || null;
  },

  // Create new habit
  createHabit: async (habit: Omit<Habit, 'id' | 'createdAt' | 'updatedAt'>): Promise<Habit> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newHabit: Habit = {
      ...habit,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockHabits.push(newHabit);
    return newHabit;
  },

  // Update habit
  updateHabit: async (id: string, updates: Partial<Habit>): Promise<Habit | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = mockHabits.findIndex(habit => habit.id === id);
    if (index === -1) return null;
    
    mockHabits[index] = {
      ...mockHabits[index],
      ...updates,
      updatedAt: new Date(),
    };
    return mockHabits[index];
  },

  // Delete habit
  deleteHabit: async (id: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = mockHabits.findIndex(habit => habit.id === id);
    if (index === -1) return false;
    
    mockHabits.splice(index, 1);
    return true;
  },

  // Toggle habit completion
  toggleHabitCompletion: async (id: string): Promise<Habit | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const habit = mockHabits.find(h => h.id === id);
    if (!habit) return null;

    habit.isCompletedToday = !habit.isCompletedToday;
    if (habit.isCompletedToday) {
      habit.streak += 1;
    } else {
      habit.streak = Math.max(0, habit.streak - 1);
    }
    habit.updatedAt = new Date();
    
    return habit;
  },

  // Get habit progress
  getHabitProgress: async (habitId: string, startDate: string, endDate: string): Promise<HabitProgress[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockHabitProgress.filter(progress => 
      progress.habitId === habitId && 
      progress.date >= startDate && 
      progress.date <= endDate
    );
  },

  // Get habit stats
  getHabitStats: async (habitId: string): Promise<HabitStats | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockHabitStats.find(stats => stats.habitId === habitId) || null;
  },
};
