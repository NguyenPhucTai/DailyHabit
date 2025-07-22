import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

describe('App Component', () => {
  it('renders correctly', () => {
    const tree = render(<App />);
    expect(tree).toBeTruthy();
  });

  it('should display the main text', () => {
    render(<App />);
    
    // Kiểm tra text có tồn tại
    const mainText = screen.getByText('Open up App.tsx to start working on your app!');
    expect(mainText).toBeTruthy();
  });

  it('should render the main container', () => {
    const { getByText } = render(<App />);
    
    // Kiểm tra container chứa text
    const container = getByText('Open up App.tsx to start working on your app!').parent;
    expect(container).toBeTruthy();
  });

  it('should match snapshot', () => {
    const tree = render(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
