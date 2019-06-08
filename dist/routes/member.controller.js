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
const Member_entity_1 = require("../entities/Member.entity");
const typeorm_2 = require("@nestjs/typeorm");
const DTO = require("../dto");
let MemberController = class MemberController {
    constructor(_repo) {
        this._repo = _repo;
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let member = this._repo.create(payload);
            member = yield this._repo.save(member);
            return member;
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let member = yield this._repo.findOneOrFail(id);
            this._repo.merge(member, payload);
            yield this._repo.save(member);
        });
    }
    find(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _options = Object.assign({}, options, DTO.defaultFindOptions);
            console.log(_options);
            return this._repo.find({
                where: {
                    nama: typeorm_1.Like(`%${_options.keyword}%`)
                },
                skip: _options.skip,
                take: _options.take
            });
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._repo.findOneOrFail(id);
        });
    }
    deleteOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._repo.delete(id);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "create", null);
__decorate([
    common_1.Put(":id"),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "find", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "getOneById", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "deleteOneById", null);
MemberController = __decorate([
    common_1.Controller("api/v1/members"),
    __param(0, typeorm_2.InjectRepository(Member_entity_1.Member)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MemberController);
exports.MemberController = MemberController;
//# sourceMappingURL=member.controller.js.map