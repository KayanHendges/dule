import { Module } from '@nestjs/common';
import { PrismaProvider } from '@/providers/prisma/prisma.provider';
import { PrismaClientRepository } from '@/repositories/client/implementations/prisma.client.repository';
import { IClientRepository } from '@/repositories/client/client.repository.interface';
@Module({
  controllers: [],
  providers: [
    PrismaProvider,
    {
      provide: IClientRepository,
      useClass: PrismaClientRepository,
    },
  ],
  exports: [IClientRepository],
})
export class ClientRepositoryModule {}
