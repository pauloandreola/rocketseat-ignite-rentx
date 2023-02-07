import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../../config/uploads';
import { UpdateUserAvatarController } from '../../../../modules/accounts/useCases/updateUserAvatar/updateUserAvatarController';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/createUserController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUsersController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUsersController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);
