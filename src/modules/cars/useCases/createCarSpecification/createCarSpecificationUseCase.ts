/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { Car } from '@modules/cars/infra/typeorm/entities/car';
import { ICarsRepository } from '../../repositories/ICarsRepository';
import { AppError } from '../../../../shared/errors/appError';

interface IRequest {
  car_id: string;
  specifications_id: string[];
}
@injectable()
export class CreateCarSpecificationUseCase {
  constructor(
    @inject('CarRepository') private carsRepository: ICarsRepository,
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError('Car does not exist!');
    }

    const specifications = await this.specificationsRepository.findByIds(
      specifications_id,
    );

    carExists.specifications = specifications;

    await this.carsRepository.create(carExists);

    return carExists;
  }
}
