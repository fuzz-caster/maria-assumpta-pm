import { zip } from "lodash";
import {
  toBeDeepCloseTo,
  toMatchCloseTo
} from 'jest-matcher-deep-close-to';
import {
  computeDifference,
  applyGap,
  totalCriteria,
  totalValues
} from './algorithm';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeDeepCloseTo: (
        expected: number | number[] | object,
        decimals?: number
      ) => R;
      toMatchCloseTo: (
        expected: number | number[] | object,
        decimals?: number
      ) => R;
    }
  }
}

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

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
  });

  it('totalCriteria should done the right thing', () => {
    const input = [
      [9, 9, 9, 9.5, 10, 10, 10, 10],
      [8, 10, 10, 10, 10, 9.5, 10, 10],
      [9, 9, 10, 10, 9.5, 10, 10, 10]
    ];
    const coreSet = [
      true, true, true, false, false, false, false, false
    ];
    const expected = [
      [9, 9.9, 9.18],
      [9.333, 9.9, 9.447],
      [9.333, 9.9, 9.447]
    ]
    const result = totalCriteria(input, coreSet);

    result.forEach((row, idx) => {
      const expectedRow = expected[idx];
      expect(row).toBeDeepCloseTo(expectedRow, 3);
    });
  });

  it('totalValue must do the right thing', () => {
    const input = [
      [9.18, 7.94, 3.967, 6.58, 9.867],
      [9.447, 7.98, 4, 7.6, 9.9],
      [9.447, 8.9, 5.833, 8.56, 10]
    ];
    const weights = [
      0.15,
      0.25,
      0.25,
      0.3,
      0.05
    ];
    const expected = [
      6.821,
      7.187,
      8.168
    ];
    const result = totalValues(input, weights);
    expect(result).toBeDeepCloseTo(expected, 2);
  });

})
