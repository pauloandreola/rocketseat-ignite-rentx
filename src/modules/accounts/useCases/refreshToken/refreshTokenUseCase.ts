import { inject, injectable } from 'tsyringe';
import { sign, verify } from 'jsonwebtoken';

import auth from '../../../../config/auth';
import { AppError } from '../../../../shared/errors/appError';

import { IDateProvider } from '../../../../shared/container/providers/dateProvider/IDateProvider';
import { IUsersTokensRepository } from '../../repositories/IUsersTokensRepository';

interface IPayload {
  sub: string;
  email: string;
}

@injectable()
export class RefreshTokenUseCase {
  constructor(
    @inject('UsersTokenRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute(token: string): Promise<string> {
    const { email, sub } = verify(token, auth.secret_refresh_token) as IPayload;

    const user_id = sub;

    const userTokens =
      await this.usersTokensRepository.findByUserIdAndRefreshToken(
        token,
        user_id,
      );
    if (!userTokens) {
      throw new AppError('User token not found');
    }
    await this.usersTokensRepository.deleteById(userTokens.id);

    const refresh_token = sign({ email }, auth.secret_refresh_token, {
      subject: sub,
      expiresIn: 30,
    });

    const expires_date = this.dateProvider.addDays(
      auth.expires_refresh_token_days,
    );

    await this.usersTokensRepository.create({
      refresh_token,
      expires_date,
      user_id,
    });

    return refresh_token;
  }
}
