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
    origin: [FRONTEND_URL, 'http://localhost:3000'],
    methods: 'GET, HEAD, PUT, POST, DELETE, OPTIONS, PATCH',
    credentials: true,
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authentication, Authorization, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma',
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
}
bootstrap();
/* Thank you mr.Sami */
