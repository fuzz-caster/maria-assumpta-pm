"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
// Dotenv configuration
var dotenv = require('dotenv');
dotenv.config();
console.log(process.env.NODE_ENV);
var core_1 = require('@nestjs/core');
var swagger_1 = require('@nestjs/swagger');
var app_module_1 = require('./app.module');
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        var app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        var options = new swagger_1.DocumentBuilder()
            .setTitle('Cats example')
            .setDescription('The cats API description')
            .setVersion('1.0')
            .addTag('cats')
            .build();
        var document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('swagger', app, document);
        var port = parseInt(process.env.PORT);
        yield app.listen(port);
    });
}
bootstrap();
