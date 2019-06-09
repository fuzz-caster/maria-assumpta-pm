"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var typeorm_1 = require("typeorm");
var Question_entity_1 = require("./Question.entity");
var CreditRequest_entity_1 = require("./CreditRequest.entity");
var Base_1 = require("./Base");
var Answer = (function () {
    function Answer() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Answer.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Answer.prototype, "text");
    __decorate([
        typeorm_1.Column('float')
    ], Answer.prototype, "weight");
    __decorate([
        typeorm_1.Column()
    ], Answer.prototype, "questionId");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Question_entity_1.Question; }, function (question) { return question.answers; }, {
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn({
            name: 'questionId'
        })
    ], Answer.prototype, "question");
    __decorate([
        typeorm_1.Column(function (type) { return Base_1.Base; })
    ], Answer.prototype, "base");
    __decorate([
        typeorm_1.ManyToMany(function (type) { return CreditRequest_entity_1.CreditRequest; }, function (creditRequest) { return creditRequest.answers; }, {
            onDelete: 'CASCADE'
        })
    ], Answer.prototype, "requests");
    Answer = __decorate([
        typeorm_1.Entity()
    ], Answer);
    return Answer;
}());
exports.Answer = Answer;
