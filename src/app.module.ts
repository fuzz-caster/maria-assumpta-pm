import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pegawai } from './entities/Pegawai.entity';
import { Member } from './entities/Member.entity';
import { CreditRequest } from './entities/CreditRequest.entity';
import { Answer } from './entities/Answer.entity';
import { Question } from './entities/Question.entity';

import { ProfileMatchingModule } from "./pm";

import { PegawaiController } from './routes/pegawai.controller'
import { MemberController } from "./routes/member.controller"
import { QuestionController } from "./routes/question.controller"
import { AnswerController } from "./routes/answer.controller"
import { CreditRequestController } from "./routes/credit-request.controller"
import { AuthController } from "./routes/auth.controller"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      logging: false,
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false
    }),
    TypeOrmModule.forFeature([
      Pegawai,
      Member,
      CreditRequest,
      Question,
      Answer
    ]),
    ProfileMatchingModule
  ],
  controllers: [AppController, PegawaiController, MemberController, QuestionController, AnswerController, CreditRequestController, AuthController],
  providers: [AppService],
})
export class AppModule {}
