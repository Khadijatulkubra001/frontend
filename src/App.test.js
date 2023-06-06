import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import React from 'react'
import "@testing-library/jest-dom/extend-expect";



//only testing for dom elements rendered on the screen

test('Navbar exists in id', () => {
  render(<App />);
  const linkElement = screen.getByTestId("App")
  expect(linkElement).toBeInTheDocument();
});
