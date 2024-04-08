import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable() // -> este decorador lo hace un 'provider'
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime()
    // }
  ];

  create(createBrandDto: CreateBrandDto) {
    
    const {name} = createBrandDto;

    const brand:Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime()
    }

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    //return `This action returns a #${id} brand`;

    const brand = this.brands.find(b=>b.id === id)
    if(!brand){
      throw new NotFoundException(`Brand with id ${id} NOT found`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    
    let storedBrand = this.findOne(id);

    this.brands = this.brands.map((b)=>{

      if(b.id === id){
        storedBrand = {
          ...storedBrand,   //Esparso propiedades del brand encontrado
          ...updateBrandDto //Esparso y actualizo/sobre-escribo con propiedades del objeto enviado para actualizar
        }
        return storedBrand;
      }
      return b;

    });
    

  }

  remove(id: string) {
    
    this.brands = this.brands.filter(b=>b.id !== id); //Regreso todos menos el id que estoy buscando / eliminando

  }

  fillBrandsWithSeedData(brands: Brand[]){
    this.brands = brands;
  }

}
