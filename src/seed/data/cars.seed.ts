import { Car } from "src/cars/interfaces/car.interface"; //Clases o interfaces que no tienen dependencias, las puedo importar directo, siendo que son de otro modulo!
import { v4 as uuid } from 'uuid';


export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Renegade'
    },
    {
        id: uuid(),
        brand: 'Renault',
        model: '12'
    }
];