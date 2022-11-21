/* eslint-disable import/prefer-default-export */
import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/authenticateUserController";

export const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
