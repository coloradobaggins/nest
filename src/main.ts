import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({           //Validation Pipe a nivel de Aplicacion.
    whitelist: true,                                //Solo llega del body lo que espero. Paarms de mas no llegan.
    forbidNonWhitelisted: true                      //Avisa cuales son los params de mas que me estan enviando en el body, e impide que siga la app.
  }),
  )
  await app.listen(3000);
}
bootstrap();
