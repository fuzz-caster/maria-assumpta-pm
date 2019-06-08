import { Repository, EntityManager } from 'typeorm';
import { CreditRequest } from '../entities/CreditRequest.entity';
export declare class CreditRequestController {
    private readonly _repo;
    private readonly _em;
    constructor(_repo: Repository<CreditRequest>, _em: EntityManager);
    create(payload: CreateCRPayload): Promise<CreditRequest>;
    getWithRelations(): Promise<CreditRequest[]>;
    getOneWithRelations(id: number): Promise<CreditRequest>;
    update(id: number, payload: UpdateCRPayload): Promise<CreditRequest>;
    remove(id: number): Promise<void>;
}
declare type CreateCRPayload = {
    memberId: number;
    answerList: number[];
};
declare type UpdateCRPayload = {
    answerList: number[];
};
export {};
