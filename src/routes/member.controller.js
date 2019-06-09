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
var typeorm_1 = require('typeorm');
var Member_entity_1 = require('../entities/Member.entity');
var typeorm_2 = require('@nestjs/typeorm');
var DTO = require('../dto');
var MemberController = (function () {
    function MemberController(readonly, Repository) {
        if (readonly === void 0) { readonly = _repo; }
        if (Repository === void 0) { Repository = ; }
        this.readonly = readonly;
    }
    MemberController.prototype.create = function (payload) {
        return __awaiter(this, void 0, Promise, function* () {
            var member = this._repo.create(payload);
            member = yield this._repo.save(member);
            return member;
        });
    };
    MemberController.prototype.update = function (id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            var member = yield this._repo.findOneOrFail(id);
            this._repo.merge(member, payload);
            yield this._repo.save(member);
        });
    };
    MemberController.prototype.find = function (options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _options = Object.assign({}, options, DTO.defaultFindOptions);
            console.log(_options);
            return this._repo.find({
                where: {
                    nama: typeorm_1.Like("%" + _options.keyword + "%")
                },
                skip: _options.skip,
                take: _options.take
            });
        });
    };
    MemberController.prototype.getOneById = function (id) {
        return __awaiter(this, void 0, Promise, function* () {
            return this._repo.findOneOrFail(id);
        });
    };
    MemberController.prototype.deleteOneById = function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._repo.delete(id);
        });
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], MemberController.prototype, "create");
    __decorate([
        common_1.Put(":id"),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], MemberController.prototype, "update");
    __decorate([
        common_1.Get(),
        __param(0, common_1.Query())
    ], MemberController.prototype, "find");
    __decorate([
        common_1.Get(":id"),
        __param(0, common_1.Param("id"))
    ], MemberController.prototype, "getOneById");
    __decorate([
        common_1.Delete(":id"),
        __param(0, common_1.Param("id"))
    ], MemberController.prototype, "deleteOneById");
    MemberController = __decorate([
        common_1.Controller("api/v1/members"),
        __param(0, typeorm_2.InjectRepository(Member_entity_1.Member))
    ], MemberController);
    return MemberController;
}());
exports.MemberController = MemberController;
