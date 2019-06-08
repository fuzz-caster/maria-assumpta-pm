import { Repository } from 'typeorm';
import { Member } from '../entities/Member.entity';
import * as DTO from '../dto';
export declare class MemberController {
    private readonly _repo;
    constructor(_repo: Repository<Member>);
    create(payload: DTO.Member): Promise<Member>;
    update(id: number, payload: DTO.Member): Promise<void>;
    find(options: DTO.FindOptions): Promise<Member[]>;
    getOneById(id: number): Promise<Member>;
    deleteOneById(id: number): Promise<void>;
}
