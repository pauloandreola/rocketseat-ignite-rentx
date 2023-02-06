import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/uploads';
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/createCarController';
import { ListAvailableCarsController } from '../../../../modules/cars/useCases/listCars/listAvailableCarsController';
import { CreateCarSpecificationController } from '../../../../modules/cars/useCases/createCarSpecification/createCarSpecificationController';
import { UploadCarImagesController } from '../../../../modules/cars/useCases/uploadCarImages/uploadCarImagesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload('./tmp/cars'));

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadCarImagesController.handle,
);

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle,
);

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);
