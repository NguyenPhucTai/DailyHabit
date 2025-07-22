import {
  formatDate,
  isSameDay,
  getDayOfWeek,
  daysBetween,
  isToday,
  formatStreak,
} from '../dateUtils';

describe('Date Utils', () => {
  describe('formatDate', () => {
    it('should format date correctly in Vietnamese locale', () => {
      const date = new Date(2025, 0, 15); // 15 tháng 1, 2025
      const formatted = formatDate(date);
      
      expect(formatted).toContain('2025');
      expect(formatted).toContain('15');
      // Có thể chứa "Tháng 1" hoặc "January" tùy vào cài đặt locale
    });

    it('should handle different dates', () => {
      const date1 = new Date(2024, 11, 25); // 25 tháng 12, 2024
      const date2 = new Date(2025, 5, 10); // 10 tháng 6, 2025
      
      const formatted1 = formatDate(date1);
      const formatted2 = formatDate(date2);
      
      expect(formatted1).not.toBe(formatted2);
      expect(formatted1).toContain('2024');
      expect(formatted2).toContain('2025');
    });
  });

  describe('isSameDay', () => {
    it('should return true for same day', () => {
      const date1 = new Date(2025, 0, 15, 10, 30);
      const date2 = new Date(2025, 0, 15, 18, 45);
      
      expect(isSameDay(date1, date2)).toBe(true);
    });

    it('should return false for different days', () => {
      const date1 = new Date(2025, 0, 15);
      const date2 = new Date(2025, 0, 16);
      
      expect(isSameDay(date1, date2)).toBe(false);
    });

    it('should return false for different months', () => {
      const date1 = new Date(2025, 0, 15);
      const date2 = new Date(2025, 1, 15);
      
      expect(isSameDay(date1, date2)).toBe(false);
    });

    it('should return false for different years', () => {
      const date1 = new Date(2024, 0, 15);
      const date2 = new Date(2025, 0, 15);
      
      expect(isSameDay(date1, date2)).toBe(false);
    });
  });

  describe('getDayOfWeek', () => {
    it('should return correct day of week', () => {
      const sunday = new Date(2025, 0, 5); // 5/1/2025 là Chủ nhật
      const monday = new Date(2025, 0, 6); // 6/1/2025 là Thứ hai
      
      expect(getDayOfWeek(sunday)).toBe(0);
      expect(getDayOfWeek(monday)).toBe(1);
    });
  });

  describe('daysBetween', () => {
    it('should calculate correct days between dates', () => {
      const date1 = new Date(2025, 0, 1);
      const date2 = new Date(2025, 0, 5);
      
      expect(daysBetween(date1, date2)).toBe(4);
    });

    it('should handle reverse order', () => {
      const date1 = new Date(2025, 0, 5);
      const date2 = new Date(2025, 0, 1);
      
      expect(daysBetween(date1, date2)).toBe(4);
    });

    it('should return 0 for same day', () => {
      const date1 = new Date(2025, 0, 1, 10, 0);
      const date2 = new Date(2025, 0, 1, 18, 0);
      
      expect(daysBetween(date1, date2)).toBe(0);
    });

    it('should handle different months', () => {
      const date1 = new Date(2025, 0, 31); // 31/1/2025
      const date2 = new Date(2025, 1, 1);  // 1/2/2025
      
      expect(daysBetween(date1, date2)).toBe(1);
    });
  });

  describe('isToday', () => {
    it('should return true for today', () => {
      const today = new Date();
      expect(isToday(today)).toBe(true);
    });

    it('should return false for yesterday', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      expect(isToday(yesterday)).toBe(false);
    });

    it('should return false for tomorrow', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      expect(isToday(tomorrow)).toBe(false);
    });
  });

  describe('formatStreak', () => {
    it('should format zero streak', () => {
      expect(formatStreak(0)).toBe('Chưa có streak');
    });

    it('should format single day streak', () => {
      expect(formatStreak(1)).toBe('1 ngày');
    });

    it('should format multiple days streak', () => {
      expect(formatStreak(5)).toBe('5 ngày liên tiếp');
      expect(formatStreak(100)).toBe('100 ngày liên tiếp');
    });
  });
});
