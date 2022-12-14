import { ICreateRentalDTO } from '@modules/rentals/dtos/ICreateRentalDTO';
import { AppDataSource } from '@shared/infra/typeorm/data-source';
import { getRepository, Repository } from 'typeorm';
import { IRentalsRepository } from '../../../repositories/IRentalsRepository';
import { Rental } from '../entities/rental';

export class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = AppDataSource.getRepository(Rental);
  }

  async create({
    car_id,
    user_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      user_id,
      expected_return_date,
    });

    await this.repository.save(rental);

    return rental;
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOneBy({ car_id });
    return openByCar;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByUser = await this.repository.findOneBy({ user_id });
    return openByUser;
  }
}
