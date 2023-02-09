import { UsersRepositoryInMemory } from '../../repositories/in-memory/usersRepositoryInMemory';
import { AppError } from '../../../../shared/errors/appError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { CreateUserUseCase } from '../createUser/createUserUseCase';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });
  it('Should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      name: 'Paulo',
      email: 'teste@gmail',
      driver_license: '123456',
      password: '123456',
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('Should not be able to authenticate an nonexistent user', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'false@gmail.com',
        password: '1234',
      }),
    ).rejects.toEqual(new AppError('Email or password incorrect!'));
  });

  it('Should not be able to authenticate with incorrect password', async () => {
    const user: ICreateUserDTO = {
      name: 'Errado',
      email: 'errado@gmail',
      driver_license: '1234',
      password: 'User Test Error',
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrectPassword',
      }),
    ).rejects.toEqual(new AppError('Email ou password incorrect!'));
  });
});
