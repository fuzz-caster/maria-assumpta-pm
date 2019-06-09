"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var typeorm_1 = require("typeorm");
var Base_1 = require("./Base");
var Pegawai = (function () {
    function Pegawai() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Pegawai.prototype, "id");
    __decorate([
        typeorm_1.Column(function (type) { return Base_1.Base; })
    ], Pegawai.prototype, "base");
    __decorate([
        typeorm_1.Column()
    ], Pegawai.prototype, "nama");
    __decorate([
        typeorm_1.Column()
    ], Pegawai.prototype, "username");
    __decorate([
        typeorm_1.Column()
    ], Pegawai.prototype, "password");
    Pegawai = __decorate([
        typeorm_1.Entity()
    ], Pegawai);
    return Pegawai;
}());
exports.Pegawai = Pegawai;
