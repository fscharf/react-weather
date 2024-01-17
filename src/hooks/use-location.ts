import { useEffect, useState } from 'react'

export const useLocation = () => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        setLocation(position.coords)
      )
    }
  }, [])

  return { location }
}
