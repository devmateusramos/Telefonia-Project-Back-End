import { getRepository } from 'typeorm';

import { Pedidos } from '../../../entities/Pedidos';

interface IPedidosRequest {
  name: string;
  description: string;
}

export class CreatePedidosService {
  async execute({
    name,
    description,
  }: IPedidosRequest): Promise<Pedidos | Error> {
    const repo = getRepository(Pedidos);

    if (await repo.findOne({ name })) {
      return new Error('Pedido Already exists!');
    }

    const pedido = repo.create({
      name,
      description,
    });

    await repo.save(pedido);

    return pedido;
  }
}
