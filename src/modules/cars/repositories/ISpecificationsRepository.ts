import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../infra/typeorm/entities/specification';

export interface ISpecificationsRepository {
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
}
