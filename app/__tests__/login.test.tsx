import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
  }),
}));

// Mock Alert
jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

import LoginScreen from '../login';

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders login form correctly', () => {
    render(<LoginScreen />);
    
    expect(screen.getByText('Đăng nhập')).toBeTruthy();
    expect(screen.getByText('Chào mừng bạn quay lại! Hãy tiếp tục hành trình của bạn.')).toBeTruthy();
    expect(screen.getByTestId('email-input')).toBeTruthy();
    expect(screen.getByTestId('password-input')).toBeTruthy();
  });

  it('has all required buttons', () => {
    render(<LoginScreen />);
    
    expect(screen.getByTestId('login-button')).toBeTruthy();
    expect(screen.getByTestId('signup-button')).toBeTruthy();
    expect(screen.getByText('Bỏ qua ngay bây giờ')).toBeTruthy();
  });

  it('allows text input in email and password fields', () => {
    render(<LoginScreen />);
    
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    
    expect(emailInput.props.value).toBe('test@example.com');
    expect(passwordInput.props.value).toBe('password123');
  });

  it('shows loading state when login button is pressed', async () => {
    render(<LoginScreen />);
    
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByTestId('login-button');
    
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);
    
    await waitFor(() => {
      expect(screen.getByText('Đang đăng nhập...')).toBeTruthy();
    });
  });

  it('shows error when fields are empty', () => {
    const AlertMock = require('react-native/Libraries/Alert/Alert');
    
    render(<LoginScreen />);
    
    const loginButton = screen.getByTestId('login-button');
    fireEvent.press(loginButton);
    
    expect(AlertMock.alert).toHaveBeenCalledWith('Lỗi', 'Vui lòng nhập email và mật khẩu');
  });

  it('matches snapshot', () => {
    const tree = render(<LoginScreen />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
