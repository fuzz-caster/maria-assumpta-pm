import { Module } from '@nestjs/common';
import { ProfileMatchingService } from "./pm.service";
import { ProfileMatchingController } from "./pm.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question, CreditRequest } from '../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Question,
      CreditRequest
    ])
  ],
  providers: [
    ProfileMatchingService
  ],
  exports: [
    ProfileMatchingService
  ],
  controllers: [
    ProfileMatchingController
  ]
})
export class ProfileMatchingModule {}