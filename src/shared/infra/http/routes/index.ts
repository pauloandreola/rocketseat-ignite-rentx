/* eslint-disable import/prefer-default-export */
import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

export const router = Router();

router.use(authenticateRoutes);
router.use('/cars', carsRoutes);
// router.use("/cars_image", cars_imageRoutes);
router.use('/categories', categoriesRoutes);
// router.use("/rentals", rentalsRoutes);
router.use('/specifications', specificationsRoutes);
// router.use("/specifications_cars", specifications_carsRoutes);
router.use('/users', usersRoutes);
