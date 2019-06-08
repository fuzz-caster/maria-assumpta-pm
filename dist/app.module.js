"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const Pegawai_entity_1 = require("./entities/Pegawai.entity");
const Member_entity_1 = require("./entities/Member.entity");
const CreditRequest_entity_1 = require("./entities/CreditRequest.entity");
const Answer_entity_1 = require("./entities/Answer.entity");
const Question_entity_1 = require("./entities/Question.entity");
const pegawai_controller_1 = require("./routes/pegawai.controller");
const member_controller_1 = require("./routes/member.controller");
const question_controller_1 = require("./routes/question.controller");
const answer_controller_1 = require("./routes/answer.controller");
const credit_request_controller_1 = require("./routes/credit-request.controller");
const auth_controller_1 = require("./routes/auth.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true
            }),
            typeorm_1.TypeOrmModule.forFeature([
                Pegawai_entity_1.Pegawai,
                Member_entity_1.Member,
                CreditRequest_entity_1.CreditRequest,
                Question_entity_1.Question,
                Answer_entity_1.Answer
            ])
        ],
        controllers: [app_controller_1.AppController, pegawai_controller_1.PegawaiController, member_controller_1.MemberController, question_controller_1.QuestionController, answer_controller_1.AnswerController, credit_request_controller_1.CreditRequestController, auth_controller_1.AuthController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map