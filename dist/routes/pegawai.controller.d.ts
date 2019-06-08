import { Repository } from 'typeorm';
import { Pegawai } from '../entities/Pegawai.entity';
import * as DTO from '../dto';
export declare class PegawaiController {
    private readonly _repo;
    constructor(_repo: Repository<Pegawai>);
    create(payload: DTO.Pegawai): Promise<Pegawai>;
    list(): Promise<Pegawai[]>;
    remove(id: number): Promise<void>;
}
