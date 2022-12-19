import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/createCarController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listCars/listAvailableCarsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);
