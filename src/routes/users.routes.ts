/* eslint-disable import/prefer-default-export */
import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/uploads";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/createUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/updateUserAvatarController";

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUsersController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUsersController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle,
);
