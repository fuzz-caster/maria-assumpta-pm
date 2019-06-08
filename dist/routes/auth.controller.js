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
const bcrypt = require('bcrypt');
let AuthController = class AuthController {
    constructor(_repo) {
        this._repo = _repo;
    }
    login(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = payload;
            const employer = yield this._repo.findOneOrFail({ username });
            const compareResult = yield bcrypt.compare(password, employer.password);
            if (!compareResult) {
                throw new Error("Password not match");
            }
            return employer;
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    common_1.Controller("api/v1/auth"),
    __param(0, typeorm_2.InjectRepository(Pegawai_entity_1.Pegawai)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map