import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it('renders correctly with required props', () => {
    render(<Button title="Test Button" onPress={mockOnPress} />);
    
    expect(screen.getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    render(<Button title="Test Button" onPress={mockOnPress} testID="test-button" />);
    
    const button = screen.getByTestId('test-button');
    fireEvent.press(button);
    
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    render(
      <Button
        title="Disabled Button"
        onPress={mockOnPress}
        disabled={true}
        testID="disabled-button"
      />
    );
    
    const button = screen.getByTestId('disabled-button');
    fireEvent.press(button);
    
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('renders primary variant by default', () => {
    render(<Button title="Primary Button" onPress={mockOnPress} testID="primary-button" />);
    
    const button = screen.getByTestId('primary-button');
    expect(button).toBeTruthy();
  });

  it('renders secondary variant when specified', () => {
    render(
      <Button
        title="Secondary Button"
        onPress={mockOnPress}
        variant="secondary"
        testID="secondary-button"
      />
    );
    
    const button = screen.getByTestId('secondary-button');
    expect(button).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    render(<Button title="Accessible Button" onPress={mockOnPress} testID="accessible-button" />);
    
    const button = screen.getByTestId('accessible-button');
    expect(button.props.accessibilityRole).toBe('button');
    expect(button.props.accessibilityState.disabled).toBe(false);
  });

  it('has correct accessibility state when disabled', () => {
    render(
      <Button
        title="Disabled Button"
        onPress={mockOnPress}
        disabled={true}
        testID="disabled-accessible-button"
      />
    );
    
    const button = screen.getByTestId('disabled-accessible-button');
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('matches snapshot for primary variant', () => {
    const tree = render(<Button title="Primary Button" onPress={mockOnPress} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('matches snapshot for secondary variant', () => {
    const tree = render(
      <Button title="Secondary Button" onPress={mockOnPress} variant="secondary" />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('matches snapshot for disabled state', () => {
    const tree = render(<Button title="Disabled Button" onPress={mockOnPress} disabled={true} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
