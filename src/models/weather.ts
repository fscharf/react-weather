/**
 * For more information, such as additional props, please refer to [OpenWeatherMap API Docs](https://openweathermap.org/current).
 */
export interface IWeather {
  coord: Coordenate
  weather: Weather[]
  main: Main
  wind: Wind
  dt: number
  name: string
}

export type Coordenate = {
  lon: number
  lat: number
}

export type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

export type Main = {
  temp: number
  humidity: number
  temp_min: number
  temp_max: number
}

export type Wind = {
  speed: number
}

export interface IForecast {
  list: IForecastList[]
}

export interface IForecastList {
  dt: number
  dt_txt: string
  main: ForecastMain
  weather: Weather
  wind: Wind
}

export type ForecastMain = Main
