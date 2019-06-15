"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const CreditRequest_entity_1 = require("./CreditRequest.entity");
var Sex;
(function (Sex) {
    Sex["PRIA"] = "pria";
    Sex["WANITA"] = "wanita";
})(Sex = exports.Sex || (exports.Sex = {}));
let Member = class Member {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Member.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Member.prototype, "nama", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Member.prototype, "noHp", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "noAnggota", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Member.prototype, "alamat", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Member.prototype, "statusTerakhir", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Member.prototype, "limitKredit", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Member.prototype, "jangkaWaktu", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Member.prototype, "tempatLahir", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Member.prototype, "tanggalLahir", void 0);
__decorate([
    typeorm_1.Column("enum", { enum: Sex }),
    __metadata("design:type", String)
], Member.prototype, "sex", void 0);
__decorate([
    typeorm_1.Column(type => Base_1.Base),
    __metadata("design:type", Base_1.Base)
], Member.prototype, "base", void 0);
__decorate([
    typeorm_1.OneToMany(type => CreditRequest_entity_1.CreditRequest, creditRequest => creditRequest.member, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Member.prototype, "requests", void 0);
Member = __decorate([
    typeorm_1.Entity()
], Member);
exports.Member = Member;
//# sourceMappingURL=Member.entity.js.map