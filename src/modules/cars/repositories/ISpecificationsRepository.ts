import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../entities/specification';

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findById(id: string): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
}
