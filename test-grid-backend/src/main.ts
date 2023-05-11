import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions } from './models/main';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DEFAULT_PORT } from './config/app-config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.enableCors(corsOptions);

  const APP_PORT = process.env.PORT || DEFAULT_PORT;

  //Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Docs test-grid REST-API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/1.0/docs', app, document);

  //Validation requests
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(APP_PORT);
}
bootstrap();
