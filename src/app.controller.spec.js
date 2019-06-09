"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var testing_1 = require('@nestjs/testing');
var app_controller_1 = require('./app.controller');
var app_service_1 = require('./app.service');
describe('AppController', function () {
    var appController;
    beforeEach(function () __awaiter(this, void 0, void 0, function* () {
        var app = yield testing_1.Test.createTestingModule({
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        }).compile();
        appController = app.get(app_controller_1.AppController);
    }));
    describe('root', function () {
        it('should return "Hello World!"', function () {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
