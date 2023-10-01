import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
}
bootstrap();
