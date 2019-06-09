import { computeDifference, applyGap } from './index';

describe('Profile Matching should work', () => {

  it('computeDifference', () => {
    const input = [
      [3, 1, 0],
      [1, 3, 2],
      [3, 1, 2]
    ]
    const expected = [
      [2, 2, 2],
      [4, 0, 0],
      [2, 2, 0]
    ]

    const result = computeDifference(input, [5, 3, 2])
    return expect(result).toEqual(expected)
  })

  it('applyGap', () => {
    const input = [
      [2, 2, 2],
      [4, 0, 0],
      [2, 2, 0]
    ]
    const expected = [
      [9, 9, 9],
      [8, 10, 10],
      [9, 9, 10]
    ]

    const result = applyGap(input)
    return expect(result).toEqual(expected)
  })

})
