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
var Question_entity_1 = require('../entities/Question.entity');
var Answer_entity_1 = require('../entities/Answer.entity');
var typeorm_1 = require('@nestjs/typeorm');
var QuestionController = (function () {
    function QuestionController(readonly, Repository, readonly, Repository) {
        if (readonly === void 0) { readonly = _repo; }
        if (Repository === void 0) { Repository = ; }
        if (readonly === void 0) { readonly = _answer_repo; }
        if (Repository === void 0) { Repository = ; }
        this.readonly = readonly;
        this.readonly = readonly;
    }
    QuestionController.prototype.create = function (payload) {
        return __awaiter(this, void 0, Promise, function* () {
            var question = this._repo.create(payload);
            question = yield this._repo.save(question);
            return question;
        });
    };
    QuestionController.prototype.findAllWithAnswers = function () {
        return __awaiter(this, void 0, Promise, function* () {
            return this._repo.find({
                order: {
                    type: 'DESC',
                    showOrder: 'ASC'
                },
                relations: ['answers']
            });
        });
    };
    QuestionController.prototype.getOneById = function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._repo.findOneOrFail(id);
        });
    };
    QuestionController.prototype.getAnswers = function (id) {
        return __awaiter(this, void 0, Promise, function* () {
            var result = yield this._repo.findOne(id, {
                relations: ["answers"]
            });
            return result.answers;
        });
    };
    QuestionController.prototype.update = function (id, payload) {
        return __awaiter(this, void 0, Promise, function* () {
            var question = yield this._repo.findOneOrFail(id);
            var toUpdate = this._repo.create(payload);
            question = this._repo.merge(question, toUpdate);
            return this._repo.save(question);
        });
    };
    QuestionController.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            this._repo.delete(id);
        });
    };
    QuestionController.prototype.find = function () {
        return __awaiter(this, void 0, Promise, function* () {
            return this._repo.find({
                order: {
                    type: 'DESC',
                    showOrder: 'ASC'
                }
            });
        });
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], QuestionController.prototype, "create");
    __decorate([
        common_1.Get('allNested')
    ], QuestionController.prototype, "findAllWithAnswers");
    __decorate([
        common_1.Get(":id"),
        __param(0, common_1.Param("id"))
    ], QuestionController.prototype, "getOneById");
    __decorate([
        common_1.Get(":id/answers"),
        __param(0, common_1.Param("id"))
    ], QuestionController.prototype, "getAnswers");
    __decorate([
        common_1.Put(":id"),
        __param(0, common_1.Param("id")),
        __param(1, common_1.Body())
    ], QuestionController.prototype, "update");
    __decorate([
        common_1.Delete(":id"),
        __param(0, common_1.Param("id"))
    ], QuestionController.prototype, "remove");
    __decorate([
        common_1.Get()
    ], QuestionController.prototype, "find");
    QuestionController = __decorate([
        common_1.Controller("api/v1/questions"),
        __param(0, typeorm_1.InjectRepository(Question_entity_1.Question)),
        __param(2, typeorm_1.InjectRepository(Answer_entity_1.Answer))
    ], QuestionController);
    return QuestionController;
}());
exports.QuestionController = QuestionController;
