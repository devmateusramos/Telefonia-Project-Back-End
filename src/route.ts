import { Router } from 'express';

import { CreatePedidosController } from './useCases/pedidos/controllers/CreatePedidosController';

const routes = Router();

const createPedidosController = new CreatePedidosController();

routes.post('/pedidos', createPedidosController.handle);

export { routes };
