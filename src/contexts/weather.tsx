import { useLocation } from 'hooks'
import { IForecast, IWeather } from 'models/weather'
import React, { useEffect, useState } from 'react'
import { getCurrentForecast, getCurrentWeather } from 'services/weather'
import { useDebounce, useLocalStorage } from 'usehooks-ts'

type WeatherProps = {
  weather: IWeather | null
  forecast: IForecast | null
  search: (city: string) => void
  errorMessage?: string
  isLoading: boolean
  toggleCurrentLocation: () => void
}

export const WeatherContext = React.createContext<WeatherProps>(
  {} as WeatherProps
)

const WeatherProvider = ({ children }: React.PropsWithChildren) => {
  const [weather, setWeather] = useLocalStorage<IWeather | null>(
    'weather',
    null
  )
  const [forecast, setForecast] = useLocalStorage<IForecast | null>(
    'weather_forecast',
    null
  )
  const [city, setCity] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const debouncedValue = useDebounce(city, 1000)

  const search = (value: string) => setCity(value)

  const fetchWeather = (params: Record<string, unknown>) => {
    setIsLoading(true)

    getCurrentWeather(params)
      .then(async (response) => {
        setWeather(response)
        setErrorMessage(undefined)
        setIsLoading(false)

        await fetchForecast(response.coord.lat, response.coord.lon)
      })
      .catch((error) => {
        setErrorMessage(error.message)
        setIsLoading(false)
      })
  }

  const fetchForecast = async (lat: number, lon: number) => {
    getCurrentForecast(lat, lon)
      .then((response) => {
        setForecast(response)
      })
      .catch((error) => {
        setErrorMessage(error.message)
      })
  }

  const { location } = useLocation()

  const toggleCurrentLocation = async () => {
    if (location !== null) {
      fetchWeather({ lat: location.latitude, lon: location.longitude })
    }
  }

  useEffect(() => {
    if (weather === null) {
      toggleCurrentLocation()
    }
  }, [location])

  useEffect(() => {
    if (debouncedValue) {
      fetchWeather({ q: debouncedValue })
    } else {
      setErrorMessage(undefined)
    }
  }, [debouncedValue])

  return (
    <WeatherContext.Provider
      value={{
        weather,
        search,
        errorMessage,
        isLoading,
        toggleCurrentLocation,
        forecast
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
