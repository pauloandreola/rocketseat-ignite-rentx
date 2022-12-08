/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/appError';
import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
export class CreateSpecificationsUseCase {
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
