import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { rentalRoutes } from './rental.routes';
import { passwordRoutes } from './password.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

export const router = Router();

router.use(authenticateRoutes);
router.use('/cars', carsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/rentals', rentalRoutes);
router.use('/password', passwordRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);
