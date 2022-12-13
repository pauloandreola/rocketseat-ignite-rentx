import { Router } from 'express';
import multer from 'multer';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/createSpecificationController';
import { ImportSpecificationController } from '@modules/cars/useCases/importSpecification/importSpecificationController';
import { ListSpecificationsController } from '@modules/cars/useCases/listSpecification/listSpecificationsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const specificationsRoutes = Router();

const upload = multer({ dest: './tmp' });

const createSpecificationController = new CreateSpecificationController();
const importSpecificationController = new ImportSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post('/', createSpecificationController.handle);
specificationsRoutes.get('/', listSpecificationsController.handle);
specificationsRoutes.post(
  '/import',
  upload.single('file'),
  importSpecificationController.handle,
);
