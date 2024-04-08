import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

//export class UpdateBrandDto extends PartialType(CreateBrandDto) {} //PartialTypes, al extender, hace que todas las propiedades sean opcionales. Bien util.
export class UpdateBrandDto {
    @IsString()
    @MinLength(3)
    name:string
}