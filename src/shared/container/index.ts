import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/usersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
// import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
// import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/specificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

// container.registerSingleton<ICarsRepository>(
//     "CarsRepository", CarsRepository
// );

// container.registerSingleton<ICategoriesRepository>(
//   'CategoriesRepository',
//   CategoriesRepository,
// );

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
