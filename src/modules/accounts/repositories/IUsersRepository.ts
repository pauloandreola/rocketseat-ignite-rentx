import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/user';

export interface IUsersRepository {
  create({
    name,
    email,
    driverLicense,
    password,
  }: // avatar,
  ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findByName(name: string): Promise<User>;
  list(): Promise<User[]>;
}
