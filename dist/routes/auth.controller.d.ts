import { Repository } from 'typeorm';
import { Pegawai } from '../entities/Pegawai.entity';
export declare class AuthController {
    private readonly _repo;
    constructor(_repo: Repository<Pegawai>);
    login(payload: {
        username: string;
        password: string;
    }): Promise<Pegawai>;
}
