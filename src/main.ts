// Dotenv configuration
import { join } from 'path'
import * as dotenv from 'dotenv'

const namePrefix = process.env.NODE_ENV
const envFile = join(process.cwd(), `.${namePrefix}.env`)
dotenv.config({ path: envFile })
console.log(`Running in ${namePrefix} mode...`)
// console.log(process.env)

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT);
}

bootstrap();
