import { Router } from 'express';

import { CreateCallController } from './useCases/call/controllers/CreateCallController';

const routes = Router();

const createCallController = new CreateCallController();

routes.post('/call', createCallController.handle);

export { routes };
