/**
 * Validate habit data
 */
export const validateHabitName = (name: string): { isValid: boolean; error?: string } => {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: 'Tên habit không được để trống' };
  }
  
  if (name.trim().length < 3) {
    return { isValid: false, error: 'Tên habit phải có ít nhất 3 ký tự' };
  }
  
  if (name.trim().length > 50) {
    return { isValid: false, error: 'Tên habit không được vượt quá 50 ký tự' };
  }
  
  return { isValid: true };
};

/**
 * Generate habit colors
 */
export const getHabitColors = (): string[] => {
  return [
    '#FF6B6B', // Red
    '#4ECDC4', // Teal
    '#45B7D1', // Blue
    '#96CEB4', // Green
    '#FFEAA7', // Yellow
    '#DDA0DD', // Plum
    '#98D8C8', // Mint
    '#F7DC6F', // Light Yellow
    '#BB8FCE', // Light Purple
    '#85C1E9', // Light Blue
  ];
};

/**
 * Calculate habit completion percentage
 */
export const calculateCompletionRate = (
  completedDays: number,
  totalDays: number
): number => {
  if (totalDays === 0) return 0;
  return Math.round((completedDays / totalDays) * 100);
};

/**
 * Generate habit ID
 */
export const generateHabitId = (): string => {
  return `habit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Format habit streak message
 */
export const getStreakMessage = (streak: number): string => {
  if (streak === 0) return 'Bắt đầu streak mới!';
  if (streak === 1) return 'Ngày đầu tiên! 🌱';
  if (streak < 7) return `${streak} ngày! Tiếp tục nào! 💪`;
  if (streak < 30) return `${streak} ngày! Tuyệt vời! 🔥`;
  if (streak < 100) return `${streak} ngày! Không thể tin được! 🏆`;
  return `${streak} ngày! Bạn là huyền thoại! 👑`;
};

/**
 * Check if habit should be reset (if missed yesterday)
 */
export const shouldResetStreak = (lastCompletedDate: Date | null): boolean => {
  if (!lastCompletedDate) return false;
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(23, 59, 59, 999); // End of yesterday
  
  const lastCompleted = new Date(lastCompletedDate);
  lastCompleted.setHours(23, 59, 59, 999); // End of last completed day
  
  // If last completed was before yesterday, reset streak
  return lastCompleted < yesterday;
};
