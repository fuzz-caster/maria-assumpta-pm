import { Sex } from '../entities/Member.entity'

export interface Member {
  id: number;
  nama: string;
  noHp: string;
  alamat: string;
  statusTerakhir: string;
  limitKredit: number;
  jangkaWaktu: number;
  tempatLahir: string;
  tanggalLahir: Date;
  sex: Sex;
}