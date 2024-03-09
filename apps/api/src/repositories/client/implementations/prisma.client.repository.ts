import { Injectable } from '@nestjs/common';
import { Client } from 'database';
import { PrismaProvider } from '@/providers/prisma/prisma.provider';
import { PrismaBaseRepository } from '@/repositories/base/prisma/prisma.abstract.repository';
import {
  ICreateClientPayload,
  IFindClientParams,
  IListClientParams,
  IUpdateClientPayload,
  IClientRepository,
} from '@/repositories/client/client.repository.interface';

@Injectable()
export class PrismaClientRepository
  extends PrismaBaseRepository
  implements IClientRepository
{
  constructor(private prisma: PrismaProvider) {
    super();
  }

  async list({
    where,
    orderBy,
    page,
    pageSize,
  }: IListClientParams): Promise<Client[]> {
    return this.prisma.client.findMany({
      where,
      orderBy,
      ...this.mapPagination({ page, pageSize }),
    });
  }

  async find(params: IFindClientParams): Promise<Client> {
    return this.prisma.client.findUniqueOrThrow({ where: params });
  }

  async count({ where }: IListClientParams): Promise<number> {
    return this.prisma.client.count({ where });
  }

  async create(payload: ICreateClientPayload): Promise<Client> {
    return this.prisma.client.create({ data: payload });
  }

  async update(
    params: IFindClientParams,
    payload: IUpdateClientPayload,
  ): Promise<Client> {
    return this.prisma.client.update({ where: params, data: payload });
  }

  async delete(params: IFindClientParams): Promise<Client> {
    return this.prisma.client.delete({ where: params });
  }
}
