import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source';
import { ICreateSpecificationDTO } from '../../../dtos/ICreateSpecificationDTO';
import { Specification } from '../entities/specification';
import { ISpecificationsRepository } from '../../../repositories/ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);

    return specification;
  }

  async findById(id: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({ id });
    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({ name });
    return specification;
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }
}
