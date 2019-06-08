import { Repository } from 'typeorm';
import { Answer } from '../entities/Answer.entity';
import * as DTO from '../dto';
interface CreateAnswerPayload extends DTO.Answer {
    questionId: number;
}
export declare class AnswerController {
    private readonly _repo;
    constructor(_repo: Repository<Answer>);
    create(payload: CreateAnswerPayload): Promise<Answer>;
    getOneById(id: number): Promise<Answer>;
    update(id: number, payload: DTO.Answer): Promise<Answer>;
    remove(id: number): Promise<void>;
}
export {};
