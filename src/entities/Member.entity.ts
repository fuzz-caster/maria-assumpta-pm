import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Base } from "./Base";
import { CreditRequest } from "./CreditRequest.entity";

export enum Sex {
  PRIA = "pria",
  WANITA = "wanita"
}

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  noHp: string;

  @Column()
  alamat: string;

  @Column()
  statusTerakhir: string;

  @Column('bigint')
  limitKredit: number;

  @Column()
  jangkaWaktu: number;

  @Column()
  tempatLahir: string;

  @Column()
  tanggalLahir: Date;

  @Column("enum", { enum: Sex })
  sex: Sex;

  @Column(type => Base)
  base: Base;

  @OneToMany(type => CreditRequest, creditRequest => creditRequest.member, {
    cascade: true
  })
  requests: CreditRequest[];
}
