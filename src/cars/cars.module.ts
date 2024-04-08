import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],         //Todos los servicios son providers. No todos los providers son servicios.
  exports: [CarsService]            //Expongo el servicio al mundo exterior, para poder importarlo desde otros servicios.
})
export class CarsModule {}
