/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe';
import { Specification } from '../../infra/typeorm/entities/specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}
