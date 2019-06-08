import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToOne, ManyToMany } from "typeorm";
import { Base } from "./Base";
import { Member } from "./Member.entity";
import { Answer } from "./Answer.entity";

@Entity()
export class CreditRequest {

  @PrimaryGeneratedColumn()
  id: number;

  @Column(type => Base)
  base: Base;

  @ManyToOne(type => Member, member => member.requests, {
    onDelete: 'CASCADE'
  })
  member: Member;

  @ManyToMany(type => Answer, answer => answer.requests, {
    cascade: true
  })
  @JoinTable()
  answers: Answer[];

}