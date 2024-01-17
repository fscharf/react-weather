import { getShortDate } from 'utils/date'

describe('getShortDate tests', () => {
  it('should return the correct short date', () => {
    const date = getShortDate('2024-01-23')

    expect(date).toEqual('23/01')
  })
})
