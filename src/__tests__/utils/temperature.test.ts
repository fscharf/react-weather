import { celsiusToFahrenheit, fahrenheitToCelsius } from 'utils/temperature'

describe('celsiusToFahrenheit tests', () => {
  it('should return celsius degree to fahrenheit degree correctly', () => {
    const fahrenheit = celsiusToFahrenheit(30)
    expect(fahrenheit).toEqual(86)
  })
})

describe('fahrenheitToCelsius tests', () => {
  it('should return fahrenheit degree to celsius degree correctly', () => {
    const celsius = fahrenheitToCelsius(86)
    expect(celsius).toEqual(30)
  })
})
