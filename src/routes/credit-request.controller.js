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
var CreditRequest_entity_1 = require('../entities/CreditRequest.entity');
var Member_entity_1 = require("../entities/Member.entity");
var Answer_entity_1 = require("../entities/Answer.entity");
var typeorm_1 = require('@nestjs/typeorm');
var CreditRequestController = (function () {
    function CreditRequestController(readonly, Repository, readonly, EntityManager) {
        if (readonly === void 0) { readonly = _repo; }
        if (Repository === void 0) { Repository = ; }
        if (readonly === void 0) { readonly = _em; }
        this.readonly = readonly;
        this.readonly = readonly;
    }
    CreditRequestController.prototype.create = function (payload) {
        return __awaiter(this, void 0, Promise, function* () {
            var answers = yield this._em.findByIds(Answer_entity_1.Answer, payload.answerList);
            var member = yield this._em.findOneOrFail(Member_entity_1.Member, payload.memberId);
            var cr = this._repo.create({});
            cr.answers = answers;
            cr.member = member;
            cr = yield this._repo.save(cr);
            return cr;
        });
    };
    CreditRequestController.prototype.getWithRelations = function () {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repo.find({
                relations: ['answers', 'answers.question', 'member']
            });
        });
    };
    CreditRequestController.prototype.getOneWithRelations = function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repo.findOne(id, {
                relations: ['answers', 'answers.question', 'answers.question.answers', 'member']
            });
        });
    };
    CreditRequestController.prototype.update = function (id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            var cr = yield this._repo.findOneOrFail(id);
            var answers = yield this._em.findByIds(Answer_entity_1.Answer, payload.answerList);
            cr.answers = answers;
            yield this._repo.save(cr);
            return cr;
        });
    };
    CreditRequestController.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            this._repo.delete(id);
        });
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], CreditRequestController.prototype, "create");
    __decorate([
        common_1.Get()
    ], CreditRequestController.prototype, "getWithRelations");
    __decorate([
        common_1.Get(":id"),
        __param(0, common_1.Param("id"))
    ], CreditRequestController.prototype, "getOneWithRelations");
    __decorate([
        common_1.Put(":id"),
        __param(0, common_1.Param("id")),
        __param(1, common_1.Body())
    ], CreditRequestController.prototype, "update");
    __decorate([
        common_1.Delete(":id"),
        __param(0, common_1.Param("id"))
    ], CreditRequestController.prototype, "remove");
    CreditRequestController = __decorate([
        common_1.Controller("api/v1/credit-requests"),
        __param(0, typeorm_1.InjectRepository(CreditRequest_entity_1.CreditRequest)),
        __param(2, typeorm_1.InjectEntityManager())
    ], CreditRequestController);
    return CreditRequestController;
}());
exports.CreditRequestController = CreditRequestController;
