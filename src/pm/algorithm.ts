import { zip, rangeRight, sum } from 'lodash';
import { Injectable } from '@nestjs/common';

type CoreRow = boolean[];
type Row = number[];
type Matrix = Row[];

const GAP_LOOKUP = new Map<number, number>(
  rangeRight(0, 20).map(i => [i, 10 - (i * 0.5)])
)

export function computeDifference (xs: Matrix, ptarget: number[]) : Matrix {
  // if (xs.length >= 20) {
  //   throw new Error(`Length of matrix can't be >= 20`);
  // }
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

export function totalCriteria (matrix: Matrix, coreRow: CoreRow) : Matrix {
  if (coreRow.length == 0)  {
    throw new Error("coreRow can't be empty");
  }
  return matrix.map(row => {
    const zipped = zip(row, coreRow);
    let ncf = zipped
      .filter(
        ([ x, isCore ]) => isCore
      )
      .map(
        ([ x, _ ]) => x
      );
    let nsf = zipped
      .filter(
        ([ x, isCore ]) => !isCore
      )
      .map(
        ([ x, _ ]) => x
      );

    let totalNcf = ncf.length * 1.0;
    if (totalNcf == 0) {
      throw new Error("ncf array is empty");
    }
    let totalNsf = nsf.length * 1.0;
    if (totalNsf == 0) {
      throw new Error("nsf array is empty");
    }

    let nsfValue = ncf.reduce((a, b) => a + b, 0) / totalNcf;
    let nscValue = nsf.reduce((a, b) => a + b, 0) / totalNsf;
    let totalValue = (0.8 * nsfValue) + (0.2 * nscValue);
    const result = [nsfValue, nscValue, totalValue];
    // console.log(`result=${result}`);
    return result;
  });
}

export function _totalCriteria (matrix: Matrix, coreRow: CoreRow, qorders: number[]) {
  if (coreRow.length == 0) {
    throw new Error("coreRow can't be empty");
  }
  if (coreRow.length != qorders.length) {
    const msg = `Dimension of coreRow and qorders must be the same: coreRow(${coreRow.length}), qorders(${qorders.length})`;
    throw new Error(msg);
  }

  // Initialize result matrix awkwardly.
  let result: Matrix = [];
  
  for (let i = 0; i < matrix.length; i++) {
    // Initialize current 
    let row_result = [];
    let ncf = [];
    let nsf = []; 
    let current_q_order = qorders[0];
    for (let j = 0; j < coreRow.length; j++) {
      // If We pass the limit of current criteria.
      if (qorders[j] != current_q_order) {
        // calculate the ncf, and nsf. and total
        let ncf_val = sum(ncf) / (ncf.length * 1.0);
        let nsf_val = sum(nsf) / (nsf.length * 1.0);
        let total_val = (ncf_val * 0.8) + (nsf_val * 0.2);

        row_result.push(total_val);

        // Change current_q_order and reinitialize variables.
        current_q_order = qorders[j];
        ncf = [];
        nsf = [];
      }
      if (coreRow[j]) {
        // This is core factor
        ncf.push(matrix[i][j]);
      } else {
        nsf.push(matrix[i][j]);
      }
    }
    let ncf_val = sum(ncf) / (ncf.length * 1.0);
    let nsf_val = sum(nsf) / (nsf.length * 1.0);
    let total_val = (ncf_val * 0.8) + (nsf_val * 0.2);
    row_result.push(total_val);

    result.push(row_result);
  }
  return result;
}

export function totalValues (matrix: Matrix, weights: Row) : Row {
  const matrixLength = matrix.length
  const weightsDim = weights.length;
  if (matrixLength === 0) {
    return [];
  }
  const matrixDim = matrix[0].length;
  if (weightsDim !== matrixDim) {
    throw new Error(`Matrix and Weights dimension must be equal: Matrix(${matrixDim}) !== Weights(${weightsDim})`);
  }

  return matrix.map(row =>
    zip(row, weights)
      .map(
        ([x, w]) => x * w
      )
      .reduce(
        (a, b) => a + b,
        0
      )
  )
}

@Injectable()
export class ProfileMatchingService {
}