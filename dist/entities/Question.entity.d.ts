import { Base } from "./Base";
import { Answer } from "./Answer.entity";
export declare class Question {
    id: number;
    base: Base;
    text: string;
    type: string;
    profileTarget: number;
    showOrder: number;
    deleted: boolean;
    answers: Answer[];
    isCf: boolean;
}
