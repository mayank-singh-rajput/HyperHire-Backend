import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticationMiddleware } from './middleware/authentication.check';
import * as serverless from 'serverless-http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const handler = serverless(app.getHttpAdapter().getInstance());

  // Set the global prefix for routes
  app.setGlobalPrefix('api');

  // Use custom authentication middleware
  app.use(new AuthenticationMiddleware().use);

  await app.listen(process.env.PORT ?? 4000);

  if (process.env.SERVERLESS) {
    return handler;
  }
}
bootstrap();
