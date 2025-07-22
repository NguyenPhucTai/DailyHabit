# DailyHabit

Ứng dụng quản lý thói quen hàng ngày được xây dựng bằng React Native, Expo và TypeScript.

## 🚀 Tính năng

- ✅ Tạo và quản lý các thói quen hàng ngày
- 🔥 Theo dõi streak (chuỗi ngày liên tiếp)
- 🎨 Giao diện thân thiện và dễ sử dụng
- 📱 Hỗ trợ cả iOS và Android
- 💯 Unit tests coverage cao
- 🌐 TypeScript support đầy đủ

## 🛠️ Công nghệ sử dụng

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform
- **TypeScript** - Type safety
- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting

## 📋 Yêu cầu hệ thống

- Node.js 20.x
- npm hoặc yarn
- Expo CLI
- iOS Simulator (cho Mac) hoặc Android Emulator

## 🔧 Cài đặt

1. Clone repository:
```bash
git clone https://github.com/NguyenPhucTai/DailyHabit.git
cd DailyHabit
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy ứng dụng:
```bash
npm start
```

## 🧪 Testing

Chạy tất cả tests:
```bash
npm test
```

Chạy tests với coverage:
```bash
npm run test:coverage
```

Chạy tests trong watch mode:
```bash
npm run test:watch
```

## 📁 Cấu trúc dự án

```
DailyHabit/
├── __tests__/              # Main app tests
├── components/             # Reusable components
│   ├── __tests__/         # Component tests
│   ├── Button.tsx
│   ├── HabitCard.tsx
│   └── index.ts
├── utils/                  # Utility functions
│   ├── __tests__/         # Utility tests
│   ├── dateUtils.ts
│   ├── habitUtils.ts
│   └── index.ts
├── App.tsx                # Main app component
└── package.json
```

## 🧪 Test Coverage

- **69 tests** passing
- **6 snapshots** maintained
- **98%+ code coverage**

### Components tested:
- ✅ App component
- ✅ Button component
- ✅ HabitCard component

### Utils tested:
- ✅ Date utilities (formatDate, isSameDay, etc.)
- ✅ Habit utilities (validation, streak calculation, etc.)

## 📱 Scripts

- `npm start` - Khởi chạy Expo development server
- `npm run android` - Chạy trên Android emulator
- `npm run ios` - Chạy trên iOS simulator
- `npm run web` - Chạy trên web browser
- `npm test` - Chạy tất cả tests
- `npm run test:watch` - Chạy tests trong watch mode
- `npm run test:coverage` - Chạy tests với coverage report
- `npm run test:ci` - Chạy tests cho CI environment

## 🎯 Roadmap

- [ ] Thêm push notifications
- [ ] Dark mode support
- [ ] Habit categories
- [ ] Statistics và charts
- [ ] Data persistence với AsyncStorage
- [ ] Habit sharing
- [ ] Achievement system

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

## 📝 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác giả

**Nguyen Phuc Tai** - [GitHub](https://github.com/NguyenPhucTai)

---

⭐ Hãy star repository này nếu bạn thấy hữu ích!
