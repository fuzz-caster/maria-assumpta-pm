import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Base } from "./Base";
import { Answer } from "./Answer.entity";

@Entity()
export class Question {

  @PrimaryGeneratedColumn()
  id: number;

  @Column(type => Base)
  base: Base;

  @Column("text")
  text: string;

  @Column()
  type: string;

  @Column()
  profileTarget: number;

  @Column()
  showOrder: number;

  @Column({ default: 'false', nullable: true })
  deleted: boolean;

  @OneToMany(type => Answer, answer => answer.question, {
    cascade: true
  })
  answers: Answer[];

  @Column({ default: 'true' })
  isCf: boolean;

}