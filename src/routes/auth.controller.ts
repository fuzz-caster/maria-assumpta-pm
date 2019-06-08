import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common'
import { Repository } from 'typeorm';
import { Pegawai } from '../entities/Pegawai.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as DTO from '../dto'

const bcrypt = require('bcrypt');

@Controller("api/v1/auth")
export class AuthController {
  constructor (
    @InjectRepository(Pegawai)
    private readonly _repo: Repository<Pegawai>
  ) {}

  @Post()
  async login (@Body() payload: { username: string, password: string }) : Promise<Pegawai> {
    const { username, password } = payload
    const employer = await this._repo.findOneOrFail({ username })
    const compareResult = await bcrypt.compare(password, employer.password)
    if (!compareResult) {
      throw new Error("Password not match")
    }
    return employer
  }
}