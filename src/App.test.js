import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders quote box', () => {
  render(<App />);
  const quoteBox = screen.getByTestId('quote-box');
  expect(quoteBox).toBeInTheDocument();
});

test('renders quote text', () => {
  render(<App />);
  const quoteBox = screen.getByTestId('quote-box');
  const quoteText = screen.getByTestId('text');
  expect(quoteBox).toContainElement(quoteText);
});

test('renders quote author', () => {
  render(<App />);
  const quoteBox = screen.getByTestId('quote-box');
  const quoteAuthor = screen.getByTestId('author');
  expect(quoteBox).toContainElement(quoteAuthor);
});

test('renders new-quote clickable element', () => {
  render(<App />);
  const quoteBox = screen.getByTestId('quote-box');
  const newQuote = screen.getByTestId('new-quote');
  expect(quoteBox).toContainElement(newQuote);
});

test('renders tweet-quote clickable element', () => {
  render(<App />);
  const quoteBox = screen.getByTestId('quote-box');
  const tweetQuote = screen.getByTestId('tweet-quote');
  expect(quoteBox).toContainElement(tweetQuote);
});

test('renders quote on first load', () => {
  render(<App />);
  const quoteText = screen.getByTestId('text');
  expect(quoteText).not.toBeEmptyDOMElement();
});

test('renders author on first load', () => {
  render(<App />);
  const quoteAuthor = screen.getByTestId('author');
  expect(quoteAuthor).not.toBeEmptyDOMElement();
});

test('rerenders quote when new-quote clicked', () => {
  render(<App />);
  const quoteText = screen.getByTestId('text');
  const oldText = quoteText.innerHTML;
  fireEvent.click(screen.getByTestId('new-quote'));
  expect(quoteText.innerHTML).not.toBe(oldText)
});

test('rerenders author when new-quote clicked', () => {
  render(<App />);
  const quoteAuthor = screen.getByTestId('author');
  const oldValue = quoteAuthor.innerHTML;
  fireEvent.click(screen.getByTestId('new-quote'));
  expect(quoteAuthor.innerHTML).not.toBe(oldValue)
});

test('tweet-quote href must contains "twitter.com/intent/tweet"', () => {
  render(<App />);
  const tweetQuote = screen.getByTestId('tweet-quote');
  expect(tweetQuote.getAttribute('href')).toContain('twitter.com/intent/tweet');
});
