import { Router } from 'express';

import { CreateRentalController } from '../../../../modules/rentals/useCases/createRental/createRentalController';
import { DevolutionRentalController } from '../../../../modules/rentals/useCases/devolutionRental/devolutionRentalController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);
rentalRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionRentalController.handle,
);
