import { Controller, Post, Put, Get, Delete, Param, Body } from '@nestjs/common'
import { Repository } from 'typeorm';
import { Answer } from '../entities/Answer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as DTO from '../dto'

interface CreateAnswerPayload extends DTO.Answer {
  questionId: number
}

@Controller("api/v1/answers")
export class AnswerController {
  
  constructor (
    @InjectRepository(Answer)
    private readonly _repo: Repository<Answer>
  ) {}

  @Post()
  async create (@Body() payload: CreateAnswerPayload) : Promise<Answer> {
    let answer = this._repo.create(payload)
    return this._repo.save(answer)
  }

  @Get(":id")
  async getOneById (@Param("id") id: number) {
    return this._repo.findOneOrFail(id)
  }

  @Put(":id")
  async update (@Param("id") id: number, @Body() payload: DTO.Answer) : Promise<Answer> {
    let answer = await this._repo.findOneOrFail(id)
    let toUpdate = this._repo.create(payload)
    answer = this._repo.merge(answer, toUpdate)
    return this._repo.save(answer)
  }

  @Delete(":id")
  async remove (@Param("id") id: number) {
    this._repo.delete(id)
  }
}