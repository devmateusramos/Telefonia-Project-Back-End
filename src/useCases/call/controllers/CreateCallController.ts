import { Request, Response } from 'express';

import { CreateCallService } from '../services/CreateCallService';

export class CreateCallController {
  async handle(request: Request, response: Response) {
    const { origin, destiny, minutes } = request.body;

    const service = new CreateCallService();

    const result = service.execute({ origin, destiny, minutes });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
