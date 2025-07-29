import { Category, WeeklyReport, HabitWeeklyDetail } from '../models';

// Mock categories data
export const mockCategories: Category[] = [
  {
    id: 'health',
    name: 'Sức khỏe',
    description: 'Các thói quen liên quan đến sức khỏe thể chất',
    icon: '💪',
    color: '#4ECDC4',
  },
  {
    id: 'learning',
    name: 'Học tập',
    description: 'Các thói quen học tập và phát triển bản thân',
    icon: '📚',
    color: '#FF6B6B',
  },
  {
    id: 'mindfulness',
    name: 'Tâm linh',
    description: 'Các thói quen thiền định và tâm linh',
    icon: '🧘',
    color: '#9B59B6',
  },
  {
    id: 'personal',
    name: 'Cá nhân',
    description: 'Các thói quen phát triển cá nhân',
    icon: '✨',
    color: '#F39C12',
  },
  {
    id: 'work',
    name: 'Công việc',
    description: 'Các thói quen liên quan đến công việc',
    icon: '💼',
    color: '#3498DB',
  },
  {
    id: 'social',
    name: 'Xã hội',
    description: 'Các thói quen giao tiếp và xã hội',
    icon: '👥',
    color: '#E74C3C',
  },
];

// Mock weekly report data
export const mockWeeklyReport: WeeklyReport = {
  userId: 'user_1',
  weekStartDate: '2024-07-22',
  weekEndDate: '2024-07-28',
  totalHabits: 5,
  completedDays: 28,
  totalPossibleDays: 35, // 5 habits * 7 days
  completionRate: 80.0,
  bestStreak: 15,
  habitDetails: [
    {
      habitId: '1',
      habitName: 'Đọc sách',
      completedDays: 5,
      totalDays: 7,
      streak: 5,
    },
    {
      habitId: '2',
      habitName: 'Tập thể dục',
      completedDays: 7,
      totalDays: 7,
      streak: 12,
    },
    {
      habitId: '3',
      habitName: 'Uống nước',
      completedDays: 6,
      totalDays: 7,
      streak: 3,
    },
    {
      habitId: '4',
      habitName: 'Thiền',
      completedDays: 4,
      totalDays: 7,
      streak: 7,
    },
    {
      habitId: '5',
      habitName: 'Viết nhật ký',
      completedDays: 6,
      totalDays: 7,
      streak: 15,
    },
  ],
};

// API functions for common data
export const commonAPI = {
  // Get all categories
  getCategories: async (): Promise<Category[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockCategories;
  },

  // Get category by ID
  getCategoryById: async (id: string): Promise<Category | null> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockCategories.find(category => category.id === id) || null;
  },

  // Get weekly report
  getWeeklyReport: async (userId: string, weekStartDate: string): Promise<WeeklyReport> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock: trong thực tế sẽ tính toán dựa trên dữ liệu thực của tuần đó
    return {
      ...mockWeeklyReport,
      userId,
      weekStartDate,
      weekEndDate: new Date(new Date(weekStartDate).getTime() + 6 * 24 * 60 * 60 * 1000)
        .toISOString().split('T')[0],
    };
  },

  // Get monthly stats
  getMonthlyStats: async (userId: string, month: string): Promise<{
    totalHabits: number;
    totalCompletedDays: number;
    averageCompletionRate: number;
    bestWeek: WeeklyReport;
  }> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return {
      totalHabits: 5,
      totalCompletedDays: 112,
      averageCompletionRate: 78.5,
      bestWeek: mockWeeklyReport,
    };
  },

  // Search habits by name or category
  searchHabits: async (query: string): Promise<{ habitId: string; habitName: string; category: string }[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Mock search results
    const mockResults = [
      { habitId: '1', habitName: 'Đọc sách', category: 'learning' },
      { habitId: '2', habitName: 'Tập thể dục', category: 'health' },
      { habitId: '3', habitName: 'Uống nước', category: 'health' },
      { habitId: '4', habitName: 'Thiền', category: 'mindfulness' },
      { habitId: '5', habitName: 'Viết nhật ký', category: 'personal' },
    ];
    
    if (!query) return mockResults;
    
    return mockResults.filter(result => 
      result.habitName.toLowerCase().includes(query.toLowerCase()) ||
      result.category.toLowerCase().includes(query.toLowerCase())
    );
  },
};
