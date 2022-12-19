import { AppError } from '../../../../shared/errors/appError';
import { CarsRepositoryInMemory } from '../../repositories/in-memory/carsRepositoryInMemory';
import { CreateCarUseCase } from './createCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('Should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name car',
      description: 'Description car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'Category',
    });

    expect(car).toHaveProperty('id');
  });

  it('Should not be able to create a new car with exists license plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car01',
        description: 'Description car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'Category',
      });

      await createCarUseCase.execute({
        name: 'Car02',
        description: 'Description car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'Category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Available',
      description: 'Description car',
      daily_rate: 100,
      license_plate: 'ABCD-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'Category',
    });

    expect(car.available).toBe(true);
  });
});
