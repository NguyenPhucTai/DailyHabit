/**
 * Định dạng ngày tháng thành chuỗi dễ đọc
 */
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return date.toLocaleDateString('vi-VN', options);
};

/**
 * Kiểm tra xem hai ngày có cùng ngày không
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/**
 * Lấy số ngày trong tuần (0 = Chủ nhật, 1 = Thứ hai, ...)
 */
export const getDayOfWeek = (date: Date): number => {
  return date.getDay();
};

/**
 * Tính số ngày giữa hai ngày
 */
export const daysBetween = (date1: Date, date2: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const secondDate = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  
  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
};

/**
 * Kiểm tra xem ngày có phải là hôm nay không
 */
export const isToday = (date: Date): boolean => {
  return isSameDay(date, new Date());
};

/**
 * Tạo chuỗi streak (chuỗi liên tiếp)
 */
export const formatStreak = (count: number): string => {
  if (count === 0) return 'Chưa có streak';
  if (count === 1) return '1 ngày';
  return `${count} ngày liên tiếp`;
};
