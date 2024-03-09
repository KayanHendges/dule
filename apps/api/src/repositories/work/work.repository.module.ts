import { Module } from '@nestjs/common';
import { PrismaProvider } from '@/providers/prisma/prisma.provider';
import { PrismaWorkRepository } from '@/repositories/work/implementations/prisma.work.repository';
import { IWorkRepository } from '@/repositories/work/work.repository.interface';
@Module({
  controllers: [],
  providers: [
    PrismaProvider,
    {
      provide: IWorkRepository,
      useClass: PrismaWorkRepository,
    },
  ],
  exports: [IWorkRepository],
})
export class WorkRepositoryModule {}
