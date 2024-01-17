import { renderHook } from '@testing-library/react-hooks'
import { useLocation } from 'hooks'

describe('useLocation tests', () => {
  const originalGeolocation = global.navigator.geolocation

  beforeEach(() => {
    ;(global.navigator as any).geolocation = {
      getCurrentPosition: jest.fn()
    }
  })

  afterEach(() => {
    ;(global.navigator as any).geolocation = originalGeolocation
  })

  it('returns null initially', () => {
    const { result } = renderHook(() => useLocation())

    expect(result.current.location).toBeNull()
  })

  it('sets location when geolocation is available', async () => {
    const mockPosition = {
      coords: {
        latitude: 40.7128,
        longitude: -74.006
      }
    }

    ;(
      global.navigator.geolocation.getCurrentPosition as jest.Mock
    ).mockImplementationOnce((successCallback) => {
      successCallback({ coords: mockPosition })
    })

    const { result } = renderHook(() => useLocation())

    expect(result.current.location).toEqual({ coords: mockPosition.coords })
  })
})
