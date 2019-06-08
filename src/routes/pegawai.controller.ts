import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common'
import { Repository } from 'typeorm';
import { Pegawai } from '../entities/Pegawai.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as DTO from '../dto'

const bcrypt = require('bcrypt');

@Controller("api/v1/employers")
export class PegawaiController {

  constructor (
    @InjectRepository(Pegawai)
    private readonly _repo: Repository<Pegawai>
  ) {}

  @Post()
  async create (@Body() payload: DTO.Pegawai) : Promise<Pegawai> {
    let pegawai = this._repo.create(payload)
    let hashedPass = await bcrypt.hash(pegawai.password, 10)
    pegawai.password = hashedPass
    pegawai = await this._repo.save(pegawai)
    return pegawai
  }

  @Get()
  async list () : Promise<Pegawai[]> {
    return this._repo.find()
  }

  @Delete(":id")
  async remove (@Param("id") id: number) {
    await this._repo.delete(id)
  }
}