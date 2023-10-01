import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const FRONTEND_URL = process.env.FRONTEND;
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });
  app.enableCors({
    origin: ['*', FRONTEND_URL],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: '*',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
}
bootstrap();
/* Thank you mr.Sami */
