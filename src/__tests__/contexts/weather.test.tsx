import { fireEvent, render, waitFor } from '@testing-library/react'
import WeatherProvider, { WeatherContext } from 'contexts/weather'
import { IForecast, IWeather } from 'models/weather'
import { getCurrentForecast, getCurrentWeather } from 'services/weather'

jest.mock('services/weather')

jest.mock('hooks', () => ({
  useLocation: jest.fn(() => ({ location: { latitude: 0, longitude: 0 } }))
}))

describe('WeatherProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const getCurrentWeatherMock = getCurrentWeather as jest.Mock
  const getCurrentForecastMock = getCurrentForecast as jest.Mock

  const mockWeatherData: IWeather = {
    coord: {
      lon: 0,
      lat: 0
    },
    weather: [],
    main: {
      temp: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0
    },
    wind: {
      speed: 0
    },
    dt: 0,
    name: ''
  }
  const mockForecastData: IForecast = {
    list: []
  }

  getCurrentWeatherMock.mockResolvedValue(mockWeatherData)
  getCurrentForecastMock.mockResolvedValue(mockForecastData)

  it('initial state is set correctly', async () => {
    const { getByText } = render(
      <WeatherProvider>
        <WeatherContext.Consumer>
          {(value) => (
            <div>
              <span>{value.isLoading ? 'Loading...' : 'Not Loading'}</span>
              <span>{value.weather ? 'Weather Data' : 'No Weather Data'}</span>
              <span>
                {value.forecast ? 'Forecast Data' : 'No Forecast Data'}
              </span>
            </div>
          )}
        </WeatherContext.Consumer>
      </WeatherProvider>
    )

    await waitFor(() => {})

    expect(getByText('Not Loading')).toBeInTheDocument()
    expect(getByText('Weather Data')).toBeInTheDocument()
    expect(getByText('Forecast Data')).toBeInTheDocument()
  })

  it('toggles current location successfully', async () => {
    getCurrentWeatherMock.mockResolvedValueOnce(mockWeatherData)
    getCurrentForecastMock.mockResolvedValueOnce(mockForecastData)

    const { getByText } = render(
      <WeatherProvider>
        <WeatherContext.Consumer>
          {(value) => (
            <div>
              <button onClick={() => value.toggleCurrentLocation()}>
                Toggle Location
              </button>
            </div>
          )}
        </WeatherContext.Consumer>
      </WeatherProvider>
    )

    fireEvent.click(getByText('Toggle Location'))

    await waitFor(() => {})

    expect(getCurrentWeather).toHaveBeenCalledWith({ lat: 0, lon: 0 })
    expect(getCurrentForecast).toHaveBeenCalledWith(0, 0)
  })
})
