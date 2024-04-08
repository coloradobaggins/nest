import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars:Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // }
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id:string){
        //return this.cars[id];

        const car = this.cars.find(c=> c.id === id);

        if(!car){
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        return car;
    }

    create(createCarDto:CreateCarDto){
        /*
        let car: Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model
        }
        */
        let car:Car = {
            id: uuid(),
            ...createCarDto
        }
        
        console.log(car);
        this.cars.push(car);

        return car;
    }


    update(id:string, updateCarDto:UpdateCarDto){

        let storedCar = this.findOneById(id);

        if(updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`Id de url  & id de body deben ser iguales. Datos invalidos.`);

        this.cars = this.cars.map((car)=>{

            if(car.id === id){
                storedCar = {
                    ...storedCar,           //Esparso (spread) propiedades del encontrador
                    ...updateCarDto,        //Esparso y sobreescribo propieades (se repiten y sobreescriben) del objeto que me llega.
                    id                      //Si en el body viajo un id y se reemplaza con el spread anterior, aca lo vuelvo a sobreescribir con el que se que va ya que se encontro.
                }
                return storedCar;
            }

        });

        return storedCar;

    }

    delete(id:string){

        let storedCar = this.findOneById(id);

        /*
        const index = this.cars.findIndex(car=> car.id === id);
        this.cars.splice(index, 1);
        return storedCar;        
        */

        this.cars = this.cars.filter(car=> car.id !== id);  //Array final tiene filtrado todos los elementos menos por el que se pregunta.

    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars;
    }
}
