import { useWeather } from 'hooks'
import { BiMapPin } from 'react-icons/bi'

const LocationToggler = () => {
  const { toggleCurrentLocation } = useWeather()

  return (
    <button
      onClick={toggleCurrentLocation}
      className="flex items-center gap-2 text-slate-300 hover:text-slate-100"
    >
      <BiMapPin /> Use current location
    </button>
  )
}

export default LocationToggler
