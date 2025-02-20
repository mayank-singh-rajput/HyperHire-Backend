import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticationMiddleware } from './middleware/authentication.check';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(new AuthenticationMiddleware().use);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
