import { fireEvent, render, screen } from '@testing-library/react'
import Temperature from 'components/temperature'

describe('Temperature component tests', () => {
  it('should renders correctly', () => {
    render(<Temperature value={30} />)
    expect(screen.getByText(/30/)).toBeInTheDocument()
    expect(screen.getByText(/ºC/)).toBeInTheDocument()
    expect(screen.getByText(/ºF/)).toBeInTheDocument()
  })
  it('should switch between celsius and fahrenheit ', () => {
    render(<Temperature value={30} />)
    const button = screen.getByText(/ºF/)
    fireEvent.click(button)
    expect(screen.getByText(/86/)).toBeInTheDocument()
  })
  it('should switch between celsius and fahrenheit', () => {
    render(<Temperature value={30} />)
    fireEvent.click(screen.getByText(/ºF/))
    expect(screen.getByText(/86/)).toBeInTheDocument()
  })
  it('should switch between fahrenheit and celsius', () => {
    render(<Temperature value={30} />)
    fireEvent.click(screen.getByText(/ºF/))
    fireEvent.click(screen.getByText(/ºC/))
    expect(screen.getByText(/30/)).toBeInTheDocument()
  })
  it('should show only the label', () => {
    render(<Temperature value={30} showOnlyLabel />)
    expect(screen.getByText(/30/)).toBeInTheDocument()
    expect(screen.getByText(/ºC/)).toBeInTheDocument()
    expect(screen.queryByText(/ºF/)).not.toBeInTheDocument()
  })
})
