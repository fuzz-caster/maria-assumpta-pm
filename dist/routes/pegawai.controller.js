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
const Pegawai_entity_1 = require("../entities/Pegawai.entity");
const typeorm_2 = require("@nestjs/typeorm");
const DTO = require("../dto");
const bcrypt = require('bcrypt');
let PegawaiController = class PegawaiController {
    constructor(_repo) {
        this._repo = _repo;
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let pegawai = this._repo.create(payload);
            let hashedPass = yield bcrypt.hash(pegawai.password, 10);
            pegawai.password = hashedPass;
            pegawai = yield this._repo.save(pegawai);
            return pegawai;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._repo.find();
        });
    }
    remove(id) {
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
], PegawaiController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PegawaiController.prototype, "list", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PegawaiController.prototype, "remove", null);
PegawaiController = __decorate([
    common_1.Controller("api/v1/employers"),
    __param(0, typeorm_2.InjectRepository(Pegawai_entity_1.Pegawai)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PegawaiController);
exports.PegawaiController = PegawaiController;
//# sourceMappingURL=pegawai.controller.js.map