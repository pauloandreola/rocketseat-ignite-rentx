import { container } from 'tsyringe';

import './providers';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/specificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';
import { CarsRepository } from '../../modules/cars/infra/typeorm/repositories/carsRepository';
import { ICarsRepository } from '../../modules/cars/repositories/ICarsRepository';
import { CarsImagesRepository } from '../../modules/cars/infra/typeorm/repositories/carsImagesRepository';
import { ICarsImagesRepository } from '../../modules/cars/repositories/ICarsImagesRepository';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/usersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { RentalsRepository } from '../../modules/rentals/infra/typeorm/repositories/rentalsRepository';
import { IRentalsRepository } from '../../modules/rentals/repositories/IRentalsRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/categoriesRepository';

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
  CarsImagesRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IRentalsRepository>(
  'RentalsRepository',
  RentalsRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
