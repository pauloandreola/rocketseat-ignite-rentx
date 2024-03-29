import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source';
import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { Category } from '../entities/category';
import { ICategoriesRepository } from '../../../repositories/ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  }

  async findById(id: string): Promise<Category> {
    const category = await this.repository.findOneBy({ id });
    return category;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOneBy({ name });
    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
}
