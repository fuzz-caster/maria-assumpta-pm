"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var typeorm_1 = require("typeorm");
var Base_1 = require("./Base");
var Answer_entity_1 = require("./Answer.entity");
var Question = (function () {
    function Question() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Question.prototype, "id");
    __decorate([
        typeorm_1.Column(function (type) { return Base_1.Base; })
    ], Question.prototype, "base");
    __decorate([
        typeorm_1.Column("text")
    ], Question.prototype, "text");
    __decorate([
        typeorm_1.Column()
    ], Question.prototype, "type");
    __decorate([
        typeorm_1.Column()
    ], Question.prototype, "profileTarget");
    __decorate([
        typeorm_1.Column()
    ], Question.prototype, "showOrder");
    __decorate([
        typeorm_1.Column({ default: 'false', nullable: true })
    ], Question.prototype, "deleted");
    __decorate([
        typeorm_1.OneToMany(function (type) { return Answer_entity_1.Answer; }, function (answer) { return answer.question; }, {
            cascade: true
        })
    ], Question.prototype, "answers");
    __decorate([
        typeorm_1.Column({ default: 'true' })
    ], Question.prototype, "isCf");
    Question = __decorate([
        typeorm_1.Entity()
    ], Question);
    return Question;
}());
exports.Question = Question;
