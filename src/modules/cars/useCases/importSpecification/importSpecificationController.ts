import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportSpecificationUseCase } from './importSpecificationUseCase';

export class ImportSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importSpecificationUseCase = container.resolve(
      ImportSpecificationUseCase,
    );
    await importSpecificationUseCase.execute(file);

    return response.send();
  }
}
