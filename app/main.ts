import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFilter } from './common/filters/next.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new NextFilter());
  await app.listen(3000);
}

bootstrap();
