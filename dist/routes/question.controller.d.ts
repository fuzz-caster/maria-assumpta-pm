import { Repository } from 'typeorm';
import { Question } from '../entities/Question.entity';
import { Answer } from '../entities/Answer.entity';
import * as DTO from '../dto';
export declare class QuestionController {
    private readonly _repo;
    private readonly _answer_repo;
    constructor(_repo: Repository<Question>, _answer_repo: Repository<Answer>);
    create(payload: DTO.Question): Promise<Question>;
    findAllWithAnswers(): Promise<Question[]>;
    getOneById(id: number): Promise<Question>;
    getAnswers(id: number): Promise<Answer[]>;
    update(id: number, payload: DTO.Question): Promise<Question>;
    remove(id: number): Promise<void>;
    find(): Promise<Question[]>;
}
