/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe';
import { Car } from '../../infra/typeorm/entities/car';
import { ICarsRepository } from '../../repositories/ICarsRepository';

interface IRequest {
  brand?: string;
  category_id?: string;
  name?: string;
}

@injectable()
export class ListAvailableCarsUseCase {
  constructor(
    @inject('CarsRepository') private carsRepository: ICarsRepository,
  ) {}

  async execute({ brand, category_id, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable(
      brand,
      category_id,
      name,
    );
    return cars;
  }
}
