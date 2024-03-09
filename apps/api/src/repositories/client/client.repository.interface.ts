import { Prisma, Client } from 'database';
import { IPrismaListParams } from '@/repositories/types';

export type IListClientParams = IPrismaListParams<
  Client,
  Prisma.ClientWhereInput
>;
export type IFindClientParams = Prisma.ClientWhereUniqueInput;
export type ICreateClientPayload = Prisma.ClientCreateInput;
export type IUpdateClientPayload = Prisma.ClientUpdateInput;

export abstract class IClientRepository {
  abstract list(params: IListClientParams): Promise<Client[]>;

  abstract find(params: IFindClientParams): Promise<Client>;

  abstract count(params: IListClientParams): Promise<number>;

  abstract create(payload: ICreateClientPayload): Promise<Client>;

  abstract update(
    params: IFindClientParams,
    payload: IUpdateClientPayload,
  ): Promise<Client>;

  abstract delete(params: IFindClientParams): Promise<Client>;
}
