/* eslint-disable import/prefer-default-export */
import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source';

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { User } from '../entities/user';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    email,
    driverLicense,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driverLicense,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id });
    return user;
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOneBy({ name });
    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }
}
