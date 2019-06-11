import { sortBy } from 'lodash';
import { CreditRequest, Answer, Question } from '../entities';

const criteriaOrder = new Map<string, number>([
  ['watak', 1],
  ['kapasitas', 2],
  ['kapital', 3],
  ['kolateral', 4],
  ['kondisi', 5]
]);

export function questionOrderValue (q: Question) : number {
  return criteriaOrder.get(q.type) + (1 - (1.0 / q.showOrder));
}

export function compareQuestion (qa: Question, qb: Question) : number {
  const aOrder = questionOrderValue(qa);
  const bOrder = questionOrderValue(qb);
  const diff = aOrder - bOrder;
  if (Math.abs(diff - 0) < 0.01) {
    return 0;
  }
  if (diff > 0) {
    return 1;
  } else {
    return -1;
  }
}

export function answerArrayOrder (ans: Answer) : number {
  let critOrder = criteriaOrder.get(ans.question.type);
  let subCritOrder = 1.0 / ans.question.showOrder;
  return critOrder + subCritOrder;
};

export function convertToRow (cr: CreditRequest) {
  let answers = cr.answers;
  // Sort by question order and .
  let answersSorted = sortBy(answers, answerArrayOrder);
  return answersSorted.map(ans => ans.weight);
}