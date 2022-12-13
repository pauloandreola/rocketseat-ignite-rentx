import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/user';

export interface IUsersRepository {
  create({
    name,
    email,
    driver_license,
    password,
  }: // avatar,
  ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findByName(name: string): Promise<User>;
  list(): Promise<User[]>;
}
