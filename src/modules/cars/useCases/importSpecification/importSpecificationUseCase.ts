/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import { parse } from 'csv-parse';
import * as fs from 'fs';

import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IImportSpecification {
  name: string;
  description: string;
}

@injectable()
export class ImportSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  loadSpecifications(
    file: Express.Multer.File,
  ): Promise<IImportSpecification[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const specifications: IImportSpecification[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          specifications.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(specifications);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const specifications = await this.loadSpecifications(file);

    specifications.map(async specification => {
      const { name, description } = specification;

      const existSpecification = this.specificationsRepository.findByName(name);

      if (!existSpecification) {
        this.specificationsRepository.create({
          name,
          description,
        });
      }
    });
  }
}
