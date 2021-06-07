import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//TODO: this is now broken, will we cover this at some point?
test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
