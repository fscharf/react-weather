import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { celsiusToFahrenheit, fahrenheitToCelsius } from 'utils/temperature'

type Props = {
  value: number
  showOnlyLabel?: boolean
}

const Temperature = ({ value, showOnlyLabel = false }: Props) => {
  const [currentTemperature, setCurrentTemperature] = useLocalStorage<
    'celsius' | 'fahrenheit'
  >('temperature_scale', 'celsius')

  const [currentValue, setCurrentValue] = useState<number>(value)

  useEffect(() => {
    if (currentTemperature === 'celsius' && value !== currentValue) {
      setCurrentValue(fahrenheitToCelsius(currentValue))
    }

    if (currentTemperature === 'fahrenheit') {
      setCurrentValue(celsiusToFahrenheit(value))
    }
  }, [currentTemperature])

  useEffect(() => {
    if (currentTemperature === 'celsius' && value) {
      setCurrentValue(value)
    }

    if (currentTemperature === 'fahrenheit' && value) {
      setCurrentValue(celsiusToFahrenheit(value))
    }
  }, [value])

  return (
    <div className="flex items-center gap-2">
      <span>{Math.round(currentValue)}</span>
      <div className="flex items-center gap-2 text-2xl font-bold">
        {showOnlyLabel ? (
          <React.Fragment>
            <span>
              {currentTemperature === 'celsius'
                ? 'ºC'
                : currentTemperature === 'fahrenheit'
                  ? 'ºF'
                  : ''}
            </span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button
              onClick={() => setCurrentTemperature('celsius')}
              className={
                currentTemperature === 'celsius' ? '' : 'text-slate-400'
              }
            >
              ºC
            </button>
            <span className="font-extralight">|</span>
            <button
              onClick={() => setCurrentTemperature('fahrenheit')}
              className={
                currentTemperature === 'fahrenheit' ? '' : 'text-slate-400'
              }
            >
              ºF
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Temperature
