/* eslint-disable no-console */
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../modules/accounts/entities/User';
// import { Category } from "../modules/cars/entities/Category"
// import { Specification } from "../modules/cars/entities/Specification"

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '172.19.0.2',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: true,
  logging: true,
  entities: [
    // Category,
    // Specification,
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
