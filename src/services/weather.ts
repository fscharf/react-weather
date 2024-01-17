import { httpClient } from 'config/http-client'
import { IForecast, IWeather } from 'models/weather'

export const getCurrentWeather = async (
  params?: Record<string, unknown>
): Promise<IWeather> => {
  try {
    const response = await httpClient.get<IWeather>('/weather', {
      params: {
        units: 'metric',
        ...params
      }
    })

    return response.data
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message)
    }

    throw new Error(`Error fetching current weather: ${error}`)
  }
}

export const getCurrentForecast = async (
  lat: number,
  lon: number,
  params?: Record<string, unknown>
) => {
  try {
    const response = await httpClient.get<IForecast>('/forecast', {
      params: {
        lat,
        lon,
        units: 'metric',
        ...params
      }
    })

    return response.data
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message)
    }

    throw new Error(`Error fetching current forecast: ${error}`)
  }
}
