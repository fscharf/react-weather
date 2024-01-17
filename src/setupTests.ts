import '@testing-library/jest-dom'

jest.mock('config/constants', () => ({
  VITE_API_URL: '',
  VITE_API_KEY: ''
}))
