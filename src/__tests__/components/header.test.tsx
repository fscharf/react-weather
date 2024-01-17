import { render, screen } from '@testing-library/react'
import Header from 'components/header'

describe('Header component tests', () => {
  it('should renders correctly', () => {
    render(<Header />)
    expect(screen.getByText(/React Weather/)).toBeInTheDocument()
  })
})
