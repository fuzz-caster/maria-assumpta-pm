import { Base } from "./Base";
import { CreditRequest } from "./CreditRequest.entity";
export declare enum Sex {
    PRIA = "pria",
    WANITA = "wanita"
}
export declare class Member {
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
    base: Base;
    requests: CreditRequest[];
}
