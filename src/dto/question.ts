export interface Question {
  id: number;
  type: string;
  text: string;
  profileTarget: number;
  showOrder: number;
  isCf: boolean;
  deleted: boolean;
}