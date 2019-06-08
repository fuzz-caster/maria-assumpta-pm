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
const Answer_entity_1 = require("./Answer.entity");
let Question = class Question {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Question.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(type => Base_1.Base),
    __metadata("design:type", Base_1.Base)
], Question.prototype, "base", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Question.prototype, "text", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Question.prototype, "profileTarget", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Question.prototype, "showOrder", void 0);
__decorate([
    typeorm_1.Column({ default: 'false', nullable: true }),
    __metadata("design:type", Boolean)
], Question.prototype, "deleted", void 0);
__decorate([
    typeorm_1.OneToMany(type => Answer_entity_1.Answer, answer => answer.question, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Question.prototype, "answers", void 0);
__decorate([
    typeorm_1.Column({ default: 'true' }),
    __metadata("design:type", Boolean)
], Question.prototype, "isCf", void 0);
Question = __decorate([
    typeorm_1.Entity()
], Question);
exports.Question = Question;
//# sourceMappingURL=Question.entity.js.map