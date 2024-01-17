import { httpClient } from 'config/http-client'
import { getCurrentForecast, getCurrentWeather } from 'services/weather'

jest.mock('config/http-client')

describe('getCurrentWeather', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  const get = httpClient.get as jest.Mock

  it('fetches current weather successfully', async () => {
    const mockWeatherData = {}

    get.mockResolvedValue({ data: mockWeatherData })

    const result = await getCurrentWeather()

    expect(httpClient.get).toHaveBeenCalledWith('/weather', {
      params: {
        units: 'metric'
      }
    })
    expect(result).toEqual(mockWeatherData)
  })

  it('handles errors when fetching current weather', async () => {
    const errorMessage = 'Error fetching current weather'
    const mockErrorResponse = {
      response: {
        data: {
          message: errorMessage
        }
      }
    }

    get.mockRejectedValue(mockErrorResponse)

    await expect(getCurrentWeather()).rejects.toThrowError(errorMessage)
  })
})

describe('getCurrentForecast', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  const get = httpClient.get as jest.Mock

  it('fetches current forecast successfully', async () => {
    const mockForecastData = {}

    get.mockResolvedValue({ data: mockForecastData })

    const lat = 123
    const lon = 456
    const result = await getCurrentForecast(lat, lon)

    expect(httpClient.get).toHaveBeenCalledWith('/forecast', {
      params: {
        lat,
        lon,
        units: 'metric'
      }
    })
    expect(result).toEqual(mockForecastData)
  })

  it('handles errors when fetching current forecast', async () => {
    const errorMessage = 'Error fetching current forecast'
    const mockErrorResponse = {
      response: {
        data: {
          message: errorMessage
        }
      }
    }

    get.mockRejectedValue(mockErrorResponse)

    const lat = 123
    const lon = 456

    await expect(getCurrentForecast(lat, lon)).rejects.toThrowError(
      errorMessage
    )
  })
})
