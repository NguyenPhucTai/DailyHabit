# Data và Models Architecture

## 📁 Cấu trúc Folder

### `/models` - Chứa các interface và types
```
models/
├── index.ts          # Export tất cả models
├── Habit.ts          # Interface cho Habit, HabitProgress, HabitStats
├── User.ts           # Interface cho User, UserPreferences, NotificationSettings
├── Achievement.ts    # Interface cho Achievement, UserAchievement
└── Common.ts         # Interface cho Category, WeeklyReport, HabitWeeklyDetail
```

### `/data` - Chứa mock data và API functions
```
data/
├── index.ts          # Export tất cả data
├── habits.ts         # Mock habits data + habitAPI
├── user.ts           # Mock user data + userAPI
├── achievements.ts   # Mock achievements data + achievementAPI
└── common.ts         # Mock categories, reports + commonAPI
```

## 🔧 Cách sử dụng

### Import Models
```typescript
import { Habit, User, Achievement } from '../models';
// hoặc
import { Habit } from '../models/Habit';
```

### Import Data & API
```typescript
import { habitAPI, mockHabits } from '../data';
// hoặc
import { habitAPI } from '../data/habits';
```

### Sử dụng API functions
```typescript
// Async functions giống như real backend
const habits = await habitAPI.getHabits();
const user = await userAPI.getCurrentUser();
const achievements = await achievementAPI.getAllAchievements();
```

## 📋 Available APIs

### habitAPI
- `getHabits()` - Lấy tất cả habits
- `getHabitById(id)` - Lấy habit theo ID
- `createHabit(habit)` - Tạo habit mới
- `updateHabit(id, updates)` - Cập nhật habit
- `deleteHabit(id)` - Xóa habit
- `toggleHabitCompletion(id)` - Toggle hoàn thành habit
- `getHabitProgress(habitId, startDate, endDate)` - Lấy progress
- `getHabitStats(habitId)` - Lấy thống kê habit

### userAPI
- `getCurrentUser()` - Lấy thông tin user hiện tại
- `updateProfile(updates)` - Cập nhật profile
- `updatePreferences(preferences)` - Cập nhật preferences
- `login(email, password)` - Đăng nhập
- `logout()` - Đăng xuất
- `register(email, password, name)` - Đăng ký

### achievementAPI
- `getAllAchievements()` - Lấy tất cả achievements
- `getUserAchievements(userId)` - Lấy achievements của user
- `getUnlockedAchievements(userId)` - Lấy achievements đã unlock
- `checkAchievements(userId)` - Kiểm tra achievements mới

### commonAPI
- `getCategories()` - Lấy tất cả categories
- `getCategoryById(id)` - Lấy category theo ID
- `getWeeklyReport(userId, weekStartDate)` - Lấy báo cáo tuần
- `getMonthlyStats(userId, month)` - Lấy thống kê tháng
- `searchHabits(query)` - Tìm kiếm habits

## ✅ Đã cập nhật

1. **HabitCard component** - Sử dụng Habit interface từ models
2. **index.tsx (HomeScreen)** - Sử dụng habitAPI để load data
3. **Components index.ts** - Re-export types từ models
4. **Tests** - Cập nhật để sử dụng models mới

## 🎯 Lợi ích

1. **Tách biệt concerns** - Models riêng, data riêng, components riêng
2. **Type safety** - Tất cả interface được định nghĩa rõ ràng
3. **Simulates backend** - API functions có async/await giống thật
4. **Easy to replace** - Khi có backend thật, chỉ cần thay đổi data folder
5. **Maintainable** - Code dễ maintain và scale
6. **Reusable** - Models và API có thể dùng chung ở nhiều nơi
