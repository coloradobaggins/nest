import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService]    //Expongo el servicio al mundo exterior, para poder importarlo desde otros servicios.
})
export class BrandsModule {}
