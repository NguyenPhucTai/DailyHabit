import {
  validateHabitName,
  getHabitColors,
  calculateCompletionRate,
  generateHabitId,
  getStreakMessage,
  shouldResetStreak,
} from '../habitUtils';

describe('Habit Utils', () => {
  describe('validateHabitName', () => {
    it('should return invalid for empty name', () => {
      const result = validateHabitName('');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Tên habit không được để trống');
    });

    it('should return invalid for whitespace only name', () => {
      const result = validateHabitName('   ');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Tên habit không được để trống');
    });

    it('should return invalid for name too short', () => {
      const result = validateHabitName('Ab');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Tên habit phải có ít nhất 3 ký tự');
    });

    it('should return invalid for name too long', () => {
      const longName = 'A'.repeat(51);
      const result = validateHabitName(longName);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Tên habit không được vượt quá 50 ký tự');
    });

    it('should return valid for proper name', () => {
      const result = validateHabitName('Đọc sách');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should trim whitespace and validate', () => {
      const result = validateHabitName('  Tập thể dục  ');
      expect(result.isValid).toBe(true);
    });
  });

  describe('getHabitColors', () => {
    it('should return array of colors', () => {
      const colors = getHabitColors();
      expect(Array.isArray(colors)).toBe(true);
      expect(colors.length).toBeGreaterThan(0);
    });

    it('should return valid hex colors', () => {
      const colors = getHabitColors();
      colors.forEach(color => {
        expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      });
    });

    it('should return consistent colors', () => {
      const colors1 = getHabitColors();
      const colors2 = getHabitColors();
      expect(colors1).toEqual(colors2);
    });
  });

  describe('calculateCompletionRate', () => {
    it('should return 0 for zero total days', () => {
      const rate = calculateCompletionRate(5, 0);
      expect(rate).toBe(0);
    });

    it('should calculate correct percentage', () => {
      const rate = calculateCompletionRate(7, 10);
      expect(rate).toBe(70);
    });

    it('should round to nearest integer', () => {
      const rate = calculateCompletionRate(1, 3);
      expect(rate).toBe(33); // 33.33... rounded to 33
    });

    it('should return 100 for perfect completion', () => {
      const rate = calculateCompletionRate(10, 10);
      expect(rate).toBe(100);
    });

    it('should return 0 for zero completed days', () => {
      const rate = calculateCompletionRate(0, 10);
      expect(rate).toBe(0);
    });
  });

  describe('generateHabitId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateHabitId();
      const id2 = generateHabitId();
      expect(id1).not.toBe(id2);
    });

    it('should start with "habit_"', () => {
      const id = generateHabitId();
      expect(id).toMatch(/^habit_/);
    });

    it('should be string type', () => {
      const id = generateHabitId();
      expect(typeof id).toBe('string');
    });
  });

  describe('getStreakMessage', () => {
    it('should return correct message for zero streak', () => {
      const message = getStreakMessage(0);
      expect(message).toBe('Bắt đầu streak mới!');
    });

    it('should return correct message for first day', () => {
      const message = getStreakMessage(1);
      expect(message).toBe('Ngày đầu tiên! 🌱');
    });

    it('should return correct message for early streak', () => {
      const message = getStreakMessage(5);
      expect(message).toContain('5 ngày!');
      expect(message).toContain('💪');
    });

    it('should return correct message for weekly streak', () => {
      const message = getStreakMessage(15);
      expect(message).toContain('15 ngày!');
      expect(message).toContain('🔥');
    });

    it('should return correct message for monthly streak', () => {
      const message = getStreakMessage(50);
      expect(message).toContain('50 ngày!');
      expect(message).toContain('🏆');
    });

    it('should return correct message for legendary streak', () => {
      const message = getStreakMessage(150);
      expect(message).toContain('150 ngày!');
      expect(message).toContain('👑');
    });
  });

  describe('shouldResetStreak', () => {
    it('should return false for null last completed date', () => {
      const shouldReset = shouldResetStreak(null);
      expect(shouldReset).toBe(false);
    });

    it('should return false for today completion', () => {
      const today = new Date();
      const shouldReset = shouldResetStreak(today);
      expect(shouldReset).toBe(false);
    });

    it('should return false for yesterday completion', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const shouldReset = shouldResetStreak(yesterday);
      expect(shouldReset).toBe(false);
    });

    it('should return true for completion before yesterday', () => {
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
      const shouldReset = shouldResetStreak(twoDaysAgo);
      expect(shouldReset).toBe(true);
    });

    it('should return true for old completion', () => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      const shouldReset = shouldResetStreak(weekAgo);
      expect(shouldReset).toBe(true);
    });
  });
});
