import { zip, rangeRight } from 'lodash';

type Gap = number;
type Row = number[];
type Matrix = Row[];

const GAP_LOOKUP = new Map<number, number>(
  rangeRight(0, 20).map(i => [i, 10 - (i * 0.5)])
)

export function computeDifference (xs: Matrix, ptarget: number[]) : Matrix {
  return xs.map(row => 
    zip(row, ptarget).map(([ x, gap ]) => 
      gap - x
    )
  )
}

export function applyGap (matrix: Matrix) : Matrix {
  return matrix.map(row => 
    row.map(x => 
      GAP_LOOKUP.get(x)
    )
  )
}


