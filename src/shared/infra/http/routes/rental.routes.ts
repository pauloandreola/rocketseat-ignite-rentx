import { Router } from 'express';
import multer from 'multer';

import { CreateRentalController } from '@modules/rentals/useCases/createRental/createRentalController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);
