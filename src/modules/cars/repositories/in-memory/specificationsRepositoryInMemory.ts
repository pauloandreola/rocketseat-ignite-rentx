import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import { Specification } from '../../infra/typeorm/entities/specification';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

export class SpecificationsRepositoryInMemory
  implements ISpecificationsRepository
{
  specifications: Specification[] = [];

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
    });
    this.specifications.push(specification);

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const all_specifications = this.specifications.filter(specifications =>
      ids.includes(specifications.id),
    );

    return all_specifications;
  }

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      specifications => specifications.name === name,
    );
  }

  async list(): Promise<Specification[]> {
    const all_specifications = this.specifications;
    return all_specifications;
  }
}
