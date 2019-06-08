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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const Member_entity_1 = require("./Member.entity");
const Answer_entity_1 = require("./Answer.entity");
let CreditRequest = class CreditRequest {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CreditRequest.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(type => Base_1.Base),
    __metadata("design:type", Base_1.Base)
], CreditRequest.prototype, "base", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Member_entity_1.Member, member => member.requests, {
        onDelete: 'CASCADE'
    }),
    __metadata("design:type", Member_entity_1.Member)
], CreditRequest.prototype, "member", void 0);
__decorate([
    typeorm_1.ManyToMany(type => Answer_entity_1.Answer, answer => answer.requests, {
        cascade: true
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], CreditRequest.prototype, "answers", void 0);
CreditRequest = __decorate([
    typeorm_1.Entity()
], CreditRequest);
exports.CreditRequest = CreditRequest;
//# sourceMappingURL=CreditRequest.entity.js.map