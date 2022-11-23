/* eslint-disable no-console */
import 'reflect-metadata';
import express = require('express');
import swaggerUi = require('swagger-ui-express');

import './database/data-source';

import './shared/container';

import { Request, Response } from 'express';
import { router } from './routes';
import swaggerFile from './swagger.json';
import 'express-async-errors';
import { AppError } from './errors/appError';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(() => console.log(`Server is running port -> ${port}`));
// console.log('Server is running port -> ', port);
