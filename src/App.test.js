import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({}) }));
  window.history.pushState({}, '', '/');
});

test('renders the home page with search and restaurants', async () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /know what to order/i })).toBeInTheDocument();
  expect(screen.getByRole('searchbox')).toBeInTheDocument();
  expect(await screen.findByText('Sample Bistro')).toBeInTheDocument();
});

test('unknown routes show the not found page', async () => {
  window.history.pushState({}, '', '/nope');
  render(<App />);
  expect(await screen.findByRole('heading', { name: /page not found/i })).toBeInTheDocument();
});
