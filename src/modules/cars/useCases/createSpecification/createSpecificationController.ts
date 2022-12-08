/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSpecificationsUseCase } from './createSpecificationUseCase';

export class CreateSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationsUseCase,
    );

    await createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
