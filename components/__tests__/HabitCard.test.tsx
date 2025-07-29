import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { HabitCard } from '../HabitCard';
import { Habit } from '../../models';

describe('HabitCard Component', () => {
  const mockOnToggle = jest.fn();
  const mockOnPress = jest.fn();

  const mockHabit: Habit = {
    id: '1',
    name: 'Đọc sách',
    description: 'Đọc ít nhất 30 phút mỗi ngày',
    streak: 5,
    isCompletedToday: false,
    color: '#FF6B6B',
  };

  beforeEach(() => {
    mockOnToggle.mockClear();
    mockOnPress.mockClear();
  });

  it('renders habit information correctly', () => {
    render(
      <HabitCard
        habit={mockHabit}
        onToggle={mockOnToggle}
        onPress={mockOnPress}
        testID="habit-card"
      />
    );

    expect(screen.getByText('Đọc sách')).toBeTruthy();
    expect(screen.getByText('Đọc ít nhất 30 phút mỗi ngày')).toBeTruthy();
    expect(screen.getByText('Streak: 5 ngày')).toBeTruthy();
  });

  it('calls onPress when card is pressed', () => {
    render(
      <HabitCard
        habit={mockHabit}
        onToggle={mockOnToggle}
        onPress={mockOnPress}
        testID="habit-card"
      />
    );

    const card = screen.getByTestId('habit-card');
    fireEvent.press(card);

    expect(mockOnPress).toHaveBeenCalledWith(mockHabit);
    expect(mockOnToggle).not.toHaveBeenCalled();
  });

  it('calls onToggle when check button is pressed', () => {
    render(
      <HabitCard
        habit={mockHabit}
        onToggle={mockOnToggle}
        onPress={mockOnPress}
        testID="habit-card"
      />
    );

    const toggleButton = screen.getByTestId('habit-card-toggle');
    fireEvent.press(toggleButton);

    expect(mockOnToggle).toHaveBeenCalledWith('1');
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('displays uncompleted state correctly', () => {
    render(
      <HabitCard
        habit={mockHabit}
        onToggle={mockOnToggle}
        testID="habit-card"
      />
    );

    const toggleButton = screen.getByTestId('habit-card-toggle');
    expect(toggleButton.props.accessibilityState.checked).toBe(false);
    expect(screen.getByText('○')).toBeTruthy();
  });

  it('displays completed state correctly', () => {
    const completedHabit: Habit = {
      ...mockHabit,
      isCompletedToday: true,
    };

    render(
      <HabitCard
        habit={completedHabit}
        onToggle={mockOnToggle}
        testID="habit-card"
      />
    );

    const toggleButton = screen.getByTestId('habit-card-toggle');
    expect(toggleButton.props.accessibilityState.checked).toBe(true);
    expect(screen.getByText('✓')).toBeTruthy();
  });

  it('renders without description when not provided', () => {
    const habitWithoutDescription: Habit = {
      ...mockHabit,
    };
    delete (habitWithoutDescription as any).description;

    render(
      <HabitCard
        habit={habitWithoutDescription}
        onToggle={mockOnToggle}
        testID="habit-card"
      />
    );

    expect(screen.getByText('Đọc sách')).toBeTruthy();
    expect(screen.queryByText('Đọc ít nhất 30 phút mỗi ngày')).toBeNull();
    expect(screen.getByText('Streak: 5 ngày')).toBeTruthy();
  });

  it('works without onPress callback', () => {
    render(
      <HabitCard
        habit={mockHabit}
        onToggle={mockOnToggle}
        testID="habit-card"
      />
    );

    const card = screen.getByTestId('habit-card');
    
    // Should not throw error when pressed without onPress
    expect(() => fireEvent.press(card)).not.toThrow();
  });

  it('has correct accessibility properties', () => {
    render(
      <HabitCard
        habit={mockHabit}
        onToggle={mockOnToggle}
        testID="habit-card"
      />
    );

    const card = screen.getByTestId('habit-card');
    const toggleButton = screen.getByTestId('habit-card-toggle');

    expect(card.props.accessibilityRole).toBe('button');
    expect(card.props.accessibilityLabel).toBe('Habit: Đọc sách');
    expect(toggleButton.props.accessibilityRole).toBe('checkbox');
  });

  it('matches snapshot for uncompleted habit', () => {
    const tree = render(
      <HabitCard
        habit={mockHabit}
        onToggle={mockOnToggle}
        testID="habit-card"
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('matches snapshot for completed habit', () => {
    const completedHabit: Habit = {
      ...mockHabit,
      isCompletedToday: true,
    };

    const tree = render(
      <HabitCard
        habit={completedHabit}
        onToggle={mockOnToggle}
        testID="habit-card"
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
