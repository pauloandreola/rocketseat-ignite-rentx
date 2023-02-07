/* eslint-disable no-console */
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { CarImage } from '../../../modules/cars/infra/typeorm/entities/carImage';
import { Category } from '../../../modules/cars/infra/typeorm/entities/category';
import { Rental } from '../../../modules/rentals/infra/typeorm/entities/rental';
import { Specification } from '../../../modules/cars/infra/typeorm/entities/specification';
import { SpecificationCar } from '../../../modules/cars/infra/typeorm/entities/specificationCar';
import { User } from '../../../modules/accounts/infra/typeorm/entities/user';
import { Car } from '../../../modules/cars/infra/typeorm/entities/car';

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
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  subscribers: [],
});

export function createConnection(host = 'localhost'): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

AppDataSource.initialize()
  .then(async () => {
    console.log('Initializing the database...');
  })
  .catch(err => console.log(err));
