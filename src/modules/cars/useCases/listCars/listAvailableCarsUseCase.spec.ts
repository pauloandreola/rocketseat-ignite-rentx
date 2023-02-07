import { CarsRepositoryInMemory } from '../../repositories/in-memory/carsRepositoryInMemory';
import { ListAvailableCarsUseCase } from './listAvailableCarsUseCase';

let listAvailableCarUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('Should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car01',
      description: 'Car_description',
      daily_rate: 110.0,
      license_plate: 'car_plate',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car02',
      description: 'Car_description',
      daily_rate: 110.0,
      license_plate: 'car_plate',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarUseCase.execute({
      brand: 'Car_brand_test',
    });

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car03',
      description: 'Car_description',
      daily_rate: 110.0,
      license_plate: 'car_another_plate',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarUseCase.execute({
      name: 'Car03',
    });

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car04',
      description: 'Car_description',
      daily_rate: 110.0,
      license_plate: 'car_another_plate',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: '1234',
    });

    const cars = await listAvailableCarUseCase.execute({
      category_id: '1234',
    });

    expect(cars).toEqual([car]);
  });
});
