import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Base {

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}