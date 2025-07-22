// Mock cho Expo
jest.mock('expo-status-bar', () => ({
  StatusBar: 'StatusBar',
}));

// Global test setup
beforeEach(() => {
  jest.clearAllMocks();
});
