import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Base } from "./Base";

@Entity()
export class Pegawai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(type => Base)
  base: Base;

  @Column()
  nama: string;

  @Column()
  username: string;

  @Column()
  password: string;
}