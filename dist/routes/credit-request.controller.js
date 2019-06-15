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
const CreditRequest_entity_1 = require("../entities/CreditRequest.entity");
const Member_entity_1 = require("../entities/Member.entity");
const Answer_entity_1 = require("../entities/Answer.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CreditRequestController = class CreditRequestController {
    constructor(_repo, _em) {
        this._repo = _repo;
        this._em = _em;
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let answers = yield this._em.findByIds(Answer_entity_1.Answer, payload.answerList);
            let member = yield this._em.findOneOrFail(Member_entity_1.Member, payload.memberId);
            let cr = this._repo.create({});
            cr.answers = answers;
            cr.member = member;
            cr = yield this._repo.save(cr);
            return cr;
        });
    }
    getWithRelations() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repo.find({
                relations: ['answers', 'answers.question', 'member']
            });
        });
    }
    getOneWithRelations(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this._repo.findOne(id, {
                relations: ['answers', 'answers.question', 'answers.question.answers', 'member']
            });
            console.log(result.id);
            console.log(result.answers.map(it => `id=(${it.id}), weight(${it.weight})`));
            return result;
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let cr = yield this._repo.findOneOrFail(id);
            console.log(`answers_ids = ${payload.answerList}`);
            let answers = yield this._em.findByIds(Answer_entity_1.Answer, payload.answerList);
            cr.answers = answers;
            yield this._repo.save(cr);
            return cr;
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
], CreditRequestController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CreditRequestController.prototype, "getWithRelations", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CreditRequestController.prototype, "getOneWithRelations", null);
__decorate([
    common_1.Put(":id"),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CreditRequestController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CreditRequestController.prototype, "remove", null);
CreditRequestController = __decorate([
    common_1.Controller("api/v1/credit-requests"),
    __param(0, typeorm_2.InjectRepository(CreditRequest_entity_1.CreditRequest)),
    __param(1, typeorm_2.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.EntityManager])
], CreditRequestController);
exports.CreditRequestController = CreditRequestController;
//# sourceMappingURL=credit-request.controller.js.map