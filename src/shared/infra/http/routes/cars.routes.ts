import { Router } from 'express';
import { CreateCarController } from '@modules/cars/useCases/createCar/createCarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.use(ensureAuthenticated);
carsRoutes.post('/', createCarController.handle);
