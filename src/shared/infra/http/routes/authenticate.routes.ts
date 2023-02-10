import { Router } from 'express';

import { RefreshTokenController } from '../../../../modules/accounts/useCases/refreshToken/refreshTokenController';
import { AuthenticateUserController } from '../../../../modules/accounts/useCases/authenticateUser/authenticateUserController';

export const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post('/refresh-token', refreshTokenController.handle);

authenticateRoutes.post('/sessions', authenticateUserController.handle);
