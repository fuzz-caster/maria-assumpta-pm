"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var typeorm_1 = require("typeorm");
var Base_1 = require("./Base");
var Member_entity_1 = require("./Member.entity");
var Answer_entity_1 = require("./Answer.entity");
var CreditRequest = (function () {
    function CreditRequest() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], CreditRequest.prototype, "id");
    __decorate([
        typeorm_1.Column(function (type) { return Base_1.Base; })
    ], CreditRequest.prototype, "base");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Member_entity_1.Member; }, function (member) { return member.requests; }, {
            onDelete: 'CASCADE'
        })
    ], CreditRequest.prototype, "member");
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Answer_entity_1.Answer; }, function (answer) { return answer.requests; }, {
            cascade: true
        }),
        typeorm_1.JoinTable()
    ], CreditRequest.prototype, "answers");
    CreditRequest = __decorate([
        typeorm_1.Entity()
    ], CreditRequest);
    return CreditRequest;
}());
exports.CreditRequest = CreditRequest;
