import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
//@UsePipes(ValidationPipe) - Validador nivel controlador.
export class CarsController {

    //Inyeccion de dependencia
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    
    //@Get(':id/:brand')
    @Get(':id') //Diferencia la ruta del metodo anterior Get, esperando el id
    getCarById( @Param('id', ParseUUIDPipe) id:string ){   //Param('id') matchea con Get(':id'). Al param le puedo agregar los pipes, coleccion de pipes
        console.log(`CarId: ${id}`);
        return this.carsService.findOneById(id);
        //return {id:id}
    }
    
    @Post()
    //@UsePipes(ValidationPipe)   //Use Pipe a nivel de METODO en el controlador. Si necesito validar lo mismo en otro metodo de este controler, debo replicarlo en el que corresponda. Sino podria ponerlo a nivel de CONTROLADOR. En tal caso, todos los metodos van a utilizar el pipe.. Tambien puede ponerse a nivel de aplicacion.
    create(@Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id:string, @Body() updateCarDto:UpdateCarDto){
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.carsService.delete(id)
    }
}
