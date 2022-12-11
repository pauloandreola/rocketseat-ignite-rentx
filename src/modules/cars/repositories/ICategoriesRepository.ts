import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../infra/typeorm/entities/category';

export interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  findById(id: string): Promise<Category>;
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
}
