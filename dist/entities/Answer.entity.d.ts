import { Question } from "./Question.entity";
import { CreditRequest } from "./CreditRequest.entity";
import { Base } from "./Base";
export declare class Answer {
    id: number;
    text: String;
    weight: number;
    questionId: number;
    question: Question;
    base: Base;
    requests: CreditRequest[];
}
