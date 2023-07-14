import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quote box', () => {
  render(<App />);
  const quoteBox = screen.getByTestId('quote-box');
  expect(quoteBox).toBeInTheDocument();
});
