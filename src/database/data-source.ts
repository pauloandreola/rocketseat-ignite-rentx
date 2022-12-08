/* eslint-disable no-console */
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../modules/accounts/entities/user';
import { Car } from '../modules/cars/entities/car';
import { CarImage } from '../modules/cars/entities/carImage';
import { Category } from '../modules/cars/entities/category';
import { Rental } from '../modules/cars/entities/rental';
import { Specification } from '../modules/cars/entities/specification';
import { SpecificationCar } from '../modules/cars/entities/specificationCar';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: true,
  logging: true,
  entities: [
    Car,
    CarImage,
    Category,
    Rental,
    Specification,
    SpecificationCar,
    User,
  ],
  migrations: ['./src/database/migrations/*.ts'],
  subscribers: [],
});

export function createConnection(host = 'database'): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

AppDataSource.initialize()
  .then(async () => {
    console.log('Initializing the database...');
  })
  .catch(err => console.log(err));
