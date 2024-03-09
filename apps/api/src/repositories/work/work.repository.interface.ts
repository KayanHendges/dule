import { Prisma, Work } from 'database';
import { IPrismaListParams } from '@/repositories/types';

export type IListWorkParams = IPrismaListParams<Work, Prisma.WorkWhereInput>;
export type IFindWorkParams = Prisma.WorkWhereUniqueInput;
export type ICreateWorkPayload = Prisma.WorkCreateInput;
export type IUpdateWorkPayload = Prisma.WorkUpdateInput;

export abstract class IWorkRepository {
  abstract list(params: IListWorkParams): Promise<Work[]>;

  abstract find(params: IFindWorkParams): Promise<Work>;

  abstract count(params: IListWorkParams): Promise<number>;

  abstract create(payload: ICreateWorkPayload): Promise<Work>;

  abstract update(
    params: IFindWorkParams,
    payload: IUpdateWorkPayload,
  ): Promise<Work>;

  abstract delete(params: IFindWorkParams): Promise<Work>;
}
