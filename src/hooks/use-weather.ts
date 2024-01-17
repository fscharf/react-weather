import { WeatherContext } from 'contexts/weather'
import { useContext } from 'react'

export const useWeather = () => useContext(WeatherContext)
