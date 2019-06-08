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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const Answer_entity_1 = require("../entities/Answer.entity");
const typeorm_2 = require("@nestjs/typeorm");
const DTO = require("../dto");
let AnswerController = class AnswerController {
    constructor(_repo) {
        this._repo = _repo;
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let answer = this._repo.create(payload);
            return this._repo.save(answer);
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._repo.findOneOrFail(id);
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let answer = yield this._repo.findOneOrFail(id);
            let toUpdate = this._repo.create(payload);
            answer = this._repo.merge(answer, toUpdate);
            return this._repo.save(answer);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this._repo.delete(id);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "create", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "getOneById", null);
__decorate([
    common_1.Put(":id"),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "remove", null);
AnswerController = __decorate([
    common_1.Controller("api/v1/answers"),
    __param(0, typeorm_2.InjectRepository(Answer_entity_1.Answer)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AnswerController);
exports.AnswerController = AnswerController;
//# sourceMappingURL=answer.controller.js.map