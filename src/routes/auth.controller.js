"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var common_1 = require('@nestjs/common');
var Pegawai_entity_1 = require('../entities/Pegawai.entity');
var typeorm_1 = require('@nestjs/typeorm');
var bcrypt = require('bcrypt');
var AuthController = (function () {
    function AuthController(readonly, Repository) {
        if (readonly === void 0) { readonly = _repo; }
        if (Repository === void 0) { Repository = ; }
        this.readonly = readonly;
    }
    AuthController.prototype.login = function (payload) {
        return __awaiter(this, void 0, Promise, function* () {
            var username = payload.username, password = payload.password;
            var employer = yield this._repo.findOneOrFail({ username: username });
            var compareResult = yield bcrypt.compare(password, employer.password);
            if (!compareResult) {
                throw new Error("Password not match");
            }
            return employer;
        });
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], AuthController.prototype, "login");
    AuthController = __decorate([
        common_1.Controller("api/v1/auth"),
        __param(0, typeorm_1.InjectRepository(Pegawai_entity_1.Pegawai))
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
