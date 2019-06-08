import { Controller, Post, Put, Get, Delete, Param, Body } from '@nestjs/common'
import { Repository, EntityManager } from 'typeorm';
import { CreditRequest } from '../entities/CreditRequest.entity';
import { Question } from "../entities/Question.entity"
import { Member } from "../entities/Member.entity"
import { Answer } from "../entities/Answer.entity"
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import * as DTO from '../dto'

@Controller("api/v1/credit-requests")
export class CreditRequestController {

  constructor (
    @InjectRepository(CreditRequest)
    private readonly _repo: Repository<CreditRequest>,

    @InjectEntityManager()
    private readonly _em: EntityManager
  ) {}

  @Post()
  async create (@Body() payload: CreateCRPayload) : Promise<CreditRequest> {
    let answers = await this._em.findByIds(Answer, payload.answerList)
    let member = await this._em.findOneOrFail(Member, payload.memberId)
    let cr = this._repo.create({})
    cr.answers = answers
    cr.member = member
    cr = await this._repo.save(cr)
    return cr
  }

  @Get()
  async getWithRelations () {
    return await this._repo.find({
      relations: ['answers', 'answers.question', 'member']
    })
  }

  @Get(":id")
  async getOneWithRelations (@Param("id") id: number) {
    return await this._repo.findOne(id, {
      relations: ['answers', 'answers.question', 'answers.question.answers', 'member']
    })
  }

  @Put(":id")
  async update (@Param("id") id: number, @Body() payload: UpdateCRPayload) {
    let cr = await this._repo.findOneOrFail(id)
    let answers = await this._em.findByIds(Answer, payload.answerList)
    cr.answers = answers
    await this._repo.save(cr)
    return cr
  }

  @Delete(":id")
  async remove (@Param("id") id: number) {
    this._repo.delete(id)
  }

}

type CreateCRPayload = {
  memberId: number
  answerList: number[]
}

type UpdateCRPayload = {
  answerList: number[]
}