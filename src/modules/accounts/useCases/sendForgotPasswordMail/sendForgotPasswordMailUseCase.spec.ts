import { UsersTokensRepositoryInMemory } from 'modules/accounts/repositories/in-memory/usersTokensRepositoryInMemory';
import { UsersRepositoryInMemory } from 'modules/accounts/repositories/in-memory/usersRepositoryInMemory';
import { DayjsDateProvider } from 'shared/container/providers/dateProvider/implementations/dayjsDateProvider';
import { MailProviderInMemory } from '@shared/container/providers/mailProvider/in-memory/mailProviderInMemory';
import { AppError } from '@shared/errors/appError';
import { SendForgotPasswordMailUseCase } from './sendForgotPasswordMailUseCase';

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe('Send forgot mail', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider,
    );
  });

  it('should be able to send a forgot password mail to user', async () => {
    const sendMail = spyOn(mailProvider, 'sendMail');
    await usersRepositoryInMemory.create({
      driver_license: '3264475',
      email: 'nima@beimwe.lv',
      name: 'Rena Baker',
      password: '1234',
    });

    await sendForgotPasswordMailUseCase.execute('nima@beimwe.lv');

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to send a forgot password mail to user', async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute('vi@em.kz'),
    ).rejects.toEqual(new AppError('User does not exists!'));
  });

  it('should be able to create an users token', async () => {
    const generateTokenMail = spyOn(usersRepositoryInMemory, 'create');
    await usersRepositoryInMemory.create({
      driver_license: '132161',
      email: 'sehfozna@ho.la',
      name: 'Alan Jackson',
      password: '1234',
    });

    await sendForgotPasswordMailUseCase.execute('sehfozna@ho.la');

    expect(generateTokenMail).toBeCalled();
  });
});
