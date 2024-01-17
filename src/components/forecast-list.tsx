import { useWeather } from 'hooks'
import { IForecastList } from 'models/weather'
import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import Skeleton from 'react-loading-skeleton'
import { getShortDate } from 'utils/date'
import { Temperature } from '.'

const ForecastList = () => {
  const { forecast, isLoading } = useWeather()

  const groupedItems = forecast?.list.reduce<{
    [date: string]: IForecastList[]
  }>((acc, item) => {
    const date = item.dt_txt.split(' ')[0]
    acc[date] = acc[date] || []
    acc[date].push(item)
    return acc
  }, {})

  return (
    <div className="flex gap-4 max-w-[calc(100%_-1px)] overflow-x-auto">
      {isLoading ? (
        <React.Fragment>
          <Skeleton
            className="w-52 h-60 bg-slate-500 mb-2"
            highlightColor="#94a3b8"
            baseColor="#94a3b8"
          />
          <Skeleton
            className="w-52 h-60 bg-slate-500 mb-2"
            highlightColor="#94a3b8"
            baseColor="#94a3b8"
          />
        </React.Fragment>
      ) : (
        Object.entries(groupedItems ?? []).map(([date, items], index) => {
          return (
            <div key={index} className="bg-slate-600 rounded-md p-4 min-w-52">
              <h2 className="font-bold text-2xl mb-4 flex items-center gap-2">
                <BiCalendar />
                {getShortDate(date)}
              </h2>
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <p className="font-bold text-2xl text-slate-400">
                      {item.dt_txt.split(' ')[1].slice(0, 5)}
                    </p>
                    <div className="text-2xl font-bold">
                      <Temperature showOnlyLabel value={item.main.temp} />
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })
      )}
    </div>
  )
}

export default ForecastList
