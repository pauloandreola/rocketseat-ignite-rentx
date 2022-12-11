import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/createCategoryController';

export const categoriesRoutes = Router();

const createSpecificationController = new CreateCategoryController();

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.post('/', createSpecificationController.handle);
