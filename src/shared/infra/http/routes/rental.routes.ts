import { Router } from 'express';

import { CreateRentalController } from '../../../../modules/rentals/useCases/createRental/createRentalController';
import { DevolutionRentalController } from '../../../../modules/rentals/useCases/devolutionRental/devolutionRentalController';
import { ListRentalByUserController } from '../../../../modules/rentals/useCases/listRentalByUser/listRentalByUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalByUserController = new ListRentalByUserController();

rentalRoutes.get(
  '/user',
  ensureAuthenticated,
  listRentalByUserController.handle,
);

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);

rentalRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionRentalController.handle,
);
