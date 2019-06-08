import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinColumn } from "typeorm";
import { Question } from "./Question.entity";
import { CreditRequest } from "./CreditRequest.entity";
import { Base } from "./Base";

@Entity()
export class Answer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: String;

  @Column('float')
  weight: number;

  @Column()
  questionId: number;

  @ManyToOne(type => Question, question => question.answers, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'questionId'
  })
  question: Question;

  @Column(type => Base)
  base: Base;

  @ManyToMany(type => CreditRequest, creditRequest => creditRequest.answers, {
    onDelete: 'CASCADE'
  })
  requests: CreditRequest[];
}