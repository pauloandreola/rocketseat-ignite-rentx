import { Router } from 'express';
import multer from 'multer';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/createSpecificationController';
import { ImportSpecificationController } from '@modules/cars/useCases/importSpecification/importSpecificationController';
import { ListSpecificationsController } from '@modules/cars/useCases/listSpecification/listSpecificationsController';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';

export const specificationsRoutes = Router();

const upload = multer({ dest: './tmp' });

const createSpecificationController = new CreateSpecificationController();
const importSpecificationController = new ImportSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle,
);

specificationsRoutes.get('/', listSpecificationsController.handle);

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post(
  '/import',
  upload.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importSpecificationController.handle,
);
