/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("usersRepository") private UsersRepository: IUsersRepository,
  ) {}

  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.UsersRepository.findById(userId);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatarFile;
    await this.UsersRepository.create(user);
  }
}
