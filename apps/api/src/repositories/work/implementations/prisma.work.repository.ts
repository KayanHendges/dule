import { Injectable } from '@nestjs/common';
import { Work } from 'database';
import { PrismaProvider } from '@/providers/prisma/prisma.provider';
import { PrismaBaseRepository } from '@/repositories/base/prisma/prisma.abstract.repository';
import {
  ICreateWorkPayload,
  IFindWorkParams,
  IListWorkParams,
  IUpdateWorkPayload,
  IWorkRepository,
} from '@/repositories/work/work.repository.interface';

@Injectable()
export class PrismaWorkRepository
  extends PrismaBaseRepository
  implements IWorkRepository
{
  constructor(private prisma: PrismaProvider) {
    super();
  }

  async list({
    where,
    orderBy,
    page,
    pageSize,
  }: IListWorkParams): Promise<Work[]> {
    return this.prisma.work.findMany({
      where,
      orderBy,
      ...this.mapPagination({ page, pageSize }),
    });
  }

  async find(params: IFindWorkParams): Promise<Work> {
    return this.prisma.work.findUniqueOrThrow({ where: params });
  }

  async count({ where }: IListWorkParams): Promise<number> {
    return this.prisma.work.count({ where });
  }

  async create(payload: ICreateWorkPayload): Promise<Work> {
    return this.prisma.work.create({ data: payload });
  }

  async update(
    params: IFindWorkParams,
    payload: IUpdateWorkPayload,
  ): Promise<Work> {
    return this.prisma.work.update({ where: params, data: payload });
  }

  async delete(params: IFindWorkParams): Promise<Work> {
    return this.prisma.work.delete({ where: params });
  }
}
