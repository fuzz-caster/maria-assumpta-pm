import { Controller, Post, Put, Get, Delete, Param, Query, Body } from '@nestjs/common'
import { Repository, Like } from 'typeorm';
import { Member } from '../entities/Member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as DTO from '../dto'

@Controller("api/v1/members")
export class MemberController {

  constructor (
    @InjectRepository(Member)
    private readonly _repo: Repository<Member>
  ) {}

  @Post()
  async create (@Body() payload: DTO.Member) : Promise<Member> {
    let member = this._repo.create(payload)
    member = await this._repo.save(member)
    return member
  }

  @Put(":id")
  async update (@Param('id') id: number, @Body() payload: DTO.Member) {
    let member = await this._repo.findOneOrFail(id)
    this._repo.merge(member, payload)
    await this._repo.save(member)
  }

  @Get()
  async find(@Query() options: DTO.FindOptions) {
    const _options = Object.assign({}, options, DTO.defaultFindOptions)
    console.log(_options)
    return this._repo.find({
      where: {
        nama: Like(`%${_options.keyword}%`)
      },
      skip: _options.skip,
      take: _options.take
    })
  }

  @Get(":id")
  async getOneById (@Param("id") id: number) : Promise<Member> {
    return this._repo.findOneOrFail(id)
  }


  @Delete(":id")
  async deleteOneById (@Param("id") id: number) {
    await this._repo.delete(id)
  }
}