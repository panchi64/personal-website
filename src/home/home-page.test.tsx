import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './home-page'

test('renders learn react link', () => {
  // FIXME: Make this actually test all my implementations correctly
  render(<Header />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
});
