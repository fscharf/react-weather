import { render, screen } from '@testing-library/react'
import Alert from 'components/alert'

describe('Alert component tests', () => {
  it('should renders correctly', () => {
    render(<Alert>Error</Alert>)
    expect(screen.getByText(/Error/)).toBeInTheDocument()
  })
  it('should render null if no type is provided', () => {
    render(<Alert type={'undefined' as any}>Error</Alert>)
    expect(screen.queryByText(/Error/)).not.toBeInTheDocument()
  })
})
