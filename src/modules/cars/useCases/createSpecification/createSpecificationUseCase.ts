import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/appError';
import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError('Specifications already exists');
    }

    await this.specificationsRepository.create({ name, description });
  }
}
