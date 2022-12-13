/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoriesUseCase } from './listCategoriesUseCase';

export class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const all = await listCategoriesUseCase.execute();

    return response.json(all);
  }
}
