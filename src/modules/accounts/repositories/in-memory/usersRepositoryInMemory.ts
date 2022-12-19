/* eslint-disable no-shadow */
import { User } from '../../infra/typeorm/entities/user';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, { name, email, driver_license, password });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async findByName(name: string): Promise<User> {
    return this.users.find(user => user.name === name);
  }

  async list(): Promise<User[]> {
    return this.users;
  }
}
