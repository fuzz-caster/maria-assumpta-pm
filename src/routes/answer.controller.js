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
var Answer_entity_1 = require('../entities/Answer.entity');
var typeorm_1 = require('@nestjs/typeorm');
var AnswerController = (function () {
    function AnswerController(readonly, Repository) {
        if (readonly === void 0) { readonly = _repo; }
        if (Repository === void 0) { Repository = ; }
        this.readonly = readonly;
    }
    AnswerController.prototype.create = function (payload) {
        return __awaiter(this, void 0, Promise, function* () {
            var answer = this._repo.create(payload);
            return this._repo.save(answer);
        });
    };
    AnswerController.prototype.getOneById = function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._repo.findOneOrFail(id);
        });
    };
    AnswerController.prototype.update = function (id, payload) {
        return __awaiter(this, void 0, Promise, function* () {
            var answer = yield this._repo.findOneOrFail(id);
            var toUpdate = this._repo.create(payload);
            answer = this._repo.merge(answer, toUpdate);
            return this._repo.save(answer);
        });
    };
    AnswerController.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            this._repo.delete(id);
        });
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], AnswerController.prototype, "create");
    __decorate([
        common_1.Get(":id"),
        __param(0, common_1.Param("id"))
    ], AnswerController.prototype, "getOneById");
    __decorate([
        common_1.Put(":id"),
        __param(0, common_1.Param("id")),
        __param(1, common_1.Body())
    ], AnswerController.prototype, "update");
    __decorate([
        common_1.Delete(":id"),
        __param(0, common_1.Param("id"))
    ], AnswerController.prototype, "remove");
    AnswerController = __decorate([
        common_1.Controller("api/v1/answers"),
        __param(0, typeorm_1.InjectRepository(Answer_entity_1.Answer))
    ], AnswerController);
    return AnswerController;
}());
exports.AnswerController = AnswerController;
