import { mapQueryToService } from '@/global/utils.ts/service';
import { IClientRepository } from '@/repositories/client/client.repository.interface';
import { Injectable } from '@nestjs/common';
import { ListClientsQueryDTO, ResponseList, Client } from 'project-common';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: IClientRepository) {}

  async find(user: JwtPayload, { id }: JwtPayload) {
    return this.clientRepository.find({ id });
  }

  async list(params: ListClientsQueryDTO): Promise<ResponseList<Client>> {
    const query = mapQueryToService(params);
    const { page, pageSize, where } = query;

    const list = await this.clientRepository.list(query);
    const count =
      list.length <= query.pageSize
        ? list.length
        : await this.clientRepository.count({ where });

    return { list, count, page, pageSize };
  }

  async create(payload: CreateCategoryDTO, user: JwtPayload): Promise<any> {
    const category = new Category({
      ...payload,
      createdBy: user.id,
      lastUpdatedBy: user.id,
    });

    return this.categoryRepository.create(category);
  }

  async update(
    params: UniqueCategory,
    payload: UpdateCategoryDTO,
    user: JwtPayload,
  ) {
    const dbCategory = await this.categoryRepository.find(params);
    const { id, ...category } = new Category({
      ...dbCategory,
      ...payload,
      lastUpdatedBy: user.id,
    });

    return this.categoryRepository.update({ id }, category);
  }

  async delete(params: UniqueCategory): Promise<Category> {
    return this.categoryRepository.delete(params);
  }
}
