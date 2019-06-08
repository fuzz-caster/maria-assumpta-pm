import { Base } from "./Base";
import { Member } from "./Member.entity";
import { Answer } from "./Answer.entity";
export declare class CreditRequest {
    id: number;
    base: Base;
    member: Member;
    answers: Answer[];
}
