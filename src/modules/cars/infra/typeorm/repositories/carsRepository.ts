import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { AppDataSource } from '@shared/infra/typeorm/data-source';
import { Repository } from 'typeorm';
import { ICarsRepository } from '../../../repositories/ICarsRepository';
import { Car } from '../entities/car';

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
    specifications,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
      specifications,
      id,
    });

    await this.repository.save(car);

    return car;
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]> {
    const carsQuery = await this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    if (brand) {
      carsQuery.andWhere('brand = :brand', { brand });
    }
    if (category_id) {
      carsQuery.andWhere('category_id = :category_id', { category_id });
    }
    if (name) {
      carsQuery.andWhere('name = :name', { name });
    }
    const cars = await carsQuery.getMany();

    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOneBy({ id });
    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOneBy({ license_plate });
    return car;
  }

  async findByName(name: string): Promise<Car> {
    const car = await this.repository.findOneBy({ name });
    return car;
  }

  async list(): Promise<Car[]> {
    const cars = await this.repository.find();
    return cars;
  }
}
