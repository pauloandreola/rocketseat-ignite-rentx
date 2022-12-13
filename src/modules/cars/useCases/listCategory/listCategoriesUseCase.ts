/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe';
import { Category } from '../../infra/typeorm/entities/category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}
