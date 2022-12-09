/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoriesUseCase } from './createCategoryUseCase';

export class CreateCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategoryUseCase = container.resolve(CreateCategoriesUseCase);

    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
