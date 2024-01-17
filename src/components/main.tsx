import { useWeather } from 'hooks'
import React from 'react'
import { BiTime, BiWater, BiWind } from 'react-icons/bi'
import Skeleton from 'react-loading-skeleton'
import { Alert, ForecastList, LocationToggler, Search, Temperature } from '.'

const Main = () => {
  const { weather, errorMessage, isLoading } = useWeather()

  return (
    <article className="flex flex-col bg-slate-600/80 backdrop-blur md:pt-8 base:pt-4 md:p-16 base:p-4 rounded-md md:w-1/2 base:w-full max-w-2xl">
      <section className="mb-4">
        <Search />
        {errorMessage ? (
          <Alert>
            <span className="capitalize">{errorMessage}</span>
          </Alert>
        ) : null}
      </section>
      <section className="mb-8 self-center">
        <LocationToggler />
      </section>
      <section className="flex flex-col items-center mb-8">
        {isLoading ? (
          <React.Fragment>
            <Skeleton
              className="w-20 h-8 bg-slate-500 mb-2"
              highlightColor="#94a3b8"
              baseColor="#94a3b8"
            />
            <Skeleton
              className="w-32 h-16 bg-slate-500 mb-2"
              highlightColor="#94a3b8"
              baseColor="#94a3b8"
            />
            <Skeleton
              className="w-20 h-8 bg-slate-500"
              highlightColor="#94a3b8"
              baseColor="#94a3b8"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1 className="font-bold text-lg uppercase mb-2 text-center">
              {weather?.name}
            </h1>
            <h4 className="font-bold text-7xl mb-4">
              <Temperature value={weather?.main.temp ?? 0} />
            </h4>
            <p className="capitalize">{weather?.weather[0].description}</p>
          </React.Fragment>
        )}
      </section>
      <section className="flex items-center gap-2 flex-wrap">
        <div className="p-4 rounded-md bg-slate-600 flex-1 h-36">
          <p className="font-bold uppercase flex items-center gap-2 text-slate-400">
            <BiWind /> Wind speed
          </p>
          <div className="flex gap-2 items-center">
            {isLoading ? (
              <Skeleton
                className="w-16 h-8 bg-slate-500"
                highlightColor="#94a3b8"
                baseColor="#94a3b8"
              />
            ) : (
              <p className="font-bold text-4xl">
                {weather?.wind.speed}{' '}
                <small className="text-slate-400 text-lg">KM/H</small>
              </p>
            )}
          </div>
        </div>
        <div className="p-4 rounded-md bg-slate-600 flex-1 h-36">
          <p className="font-bold uppercase flex items-center gap-2 text-slate-400">
            <BiWater /> Humidity
          </p>
          <div className="flex gap-2 items-center">
            {isLoading ? (
              <Skeleton
                className="w-16 h-8 bg-slate-500"
                highlightColor="#94a3b8"
                baseColor="#94a3b8"
              />
            ) : (
              <p className="font-bold text-4xl">{weather?.main.humidity}</p>
            )}
          </div>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="font-bold uppercase mb-4 flex items-center gap-1">
          <BiTime />
          5-day forecast
        </h2>
        <ForecastList />
      </section>
    </article>
  )
}

export default Main
