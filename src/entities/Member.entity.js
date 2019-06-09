"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var typeorm_1 = require("typeorm");
var Base_1 = require("./Base");
var CreditRequest_entity_1 = require("./CreditRequest.entity");
(function (Sex) {
    Sex[Sex["PRIA"] = "pria"] = "PRIA";
    Sex[Sex["WANITA"] = "wanita"] = "WANITA";
})(exports.Sex || (exports.Sex = {}));
var Sex = exports.Sex;
var Member = (function () {
    function Member() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Member.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Member.prototype, "nama");
    __decorate([
        typeorm_1.Column()
    ], Member.prototype, "noHp");
    __decorate([
        typeorm_1.Column()
    ], Member.prototype, "alamat");
    __decorate([
        typeorm_1.Column()
    ], Member.prototype, "statusTerakhir");
    __decorate([
        typeorm_1.Column('bigint')
    ], Member.prototype, "limitKredit");
    __decorate([
        typeorm_1.Column()
    ], Member.prototype, "jangkaWaktu");
    __decorate([
        typeorm_1.Column()
    ], Member.prototype, "tempatLahir");
    __decorate([
        typeorm_1.Column()
    ], Member.prototype, "tanggalLahir");
    __decorate([
        typeorm_1.Column("enum", { enum: Sex })
    ], Member.prototype, "sex");
    __decorate([
        typeorm_1.Column(function (type) { return Base_1.Base; })
    ], Member.prototype, "base");
    __decorate([
        typeorm_1.OneToMany(function (type) { return CreditRequest_entity_1.CreditRequest; }, function (creditRequest) { return creditRequest.member; }, {
            cascade: true
        })
    ], Member.prototype, "requests");
    Member = __decorate([
        typeorm_1.Entity()
    ], Member);
    return Member;
}());
exports.Member = Member;
