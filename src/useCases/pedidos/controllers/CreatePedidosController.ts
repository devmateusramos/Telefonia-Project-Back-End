import { Request, Response } from 'express';

import { CreatePedidosService } from '../services/CreatePedidosService';

export class CreatePedidosController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const service = new CreatePedidosService();

    const result = await service.execute({ name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
