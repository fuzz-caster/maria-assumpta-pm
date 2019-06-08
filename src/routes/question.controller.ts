import { Controller, Post, Put, Get, Delete, Param, Body } from '@nestjs/common'
import { Repository } from 'typeorm';
import { Question } from '../entities/Question.entity';
import { Answer } from '../entities/Answer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as DTO from '../dto'

@Controller("api/v1/questions")
export class QuestionController {

  constructor (
    @InjectRepository(Question)
    private readonly _repo: Repository<Question>,

    @InjectRepository(Answer)
    private readonly _answer_repo: Repository<Answer>
  ) {}

  @Post()
  async create (@Body() payload: DTO.Question) : Promise<Question> {
    let question = this._repo.create(payload)
    question = await this._repo.save(question)
    return question
  }

  @Get('allNested')
  async findAllWithAnswers () : Promise<Question[]> {
    return this._repo.find({
      order: {
        type: 'DESC',
        showOrder: 'ASC'
      },
      relations: ['answers']
    })
  }

  @Get(":id")
  async getOneById (@Param("id") id: number) {
    return this._repo.findOneOrFail(id)
  }

  @Get(":id/answers")
  async getAnswers (@Param("id") id: number): Promise<Answer[]> {
    const result = await this._repo.findOne(id, {
      relations: ["answers"]
    })
    return result.answers
  }

  @Put(":id")
  async update (@Param("id") id: number, @Body() payload: DTO.Question) : Promise<Question> {
    let question = await this._repo.findOneOrFail(id)
    let toUpdate = this._repo.create(payload)
    question = this._repo.merge(question, toUpdate)
    return this._repo.save(question)
  }

  @Delete(":id")
  async remove (@Param("id") id: number) {
    this._repo.delete(id)
  }

  @Get()
  async find () : Promise<Question[]> {
    return this._repo.find({
      order: {
        type: 'DESC',
        showOrder: 'ASC'
      }
    })
  }

}