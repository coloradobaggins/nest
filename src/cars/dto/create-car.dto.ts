//Data Transfer Object.
//Como esperamos mover la data dentro de mi app. Como luce.
//Propiedades: las que espero recibir en el post. Lo que voy a permitir.
//Los dtos, usualmente cuando se crea la instancia no cambia sus propiedades. Se aconseja sean READONLY.
//Los dtos nos sirven para hacer validaciones de la data, por eso no son interfaces. Siempre son clases.

import { IsString, MinLength } from "class-validator";

export class CreateCarDto{
    
    @IsString({message: 'La marca tiene que existir :P'})   //IsString() validador del paquete class-validator
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;
}