import { Injectable } from '@nestjs/common';
import { Appointment } from 'database';
import { PrismaProvider } from '@/providers/prisma/prisma.provider';
import { PrismaBaseRepository } from '@/repositories/base/prisma/prisma.abstract.repository';
import {
  ICreateAppointmentPayload,
  IFindAppointmentParams,
  IListAppointmentParams,
  IUpdateAppointmentPayload,
  IAppointmentRepository,
} from '@/repositories/appointment/appointment.repository.interface';

@Injectable()
export class PrismaAppointmentRepository
  extends PrismaBaseRepository
  implements IAppointmentRepository
{
  constructor(private prisma: PrismaProvider) {
    super();
  }

  async list({
    where,
    orderBy,
    page,
    pageSize,
  }: IListAppointmentParams): Promise<Appointment[]> {
    return this.prisma.appointment.findMany({
      where,
      orderBy,
      ...this.mapPagination({ page, pageSize }),
    });
  }

  async find(params: IFindAppointmentParams): Promise<Appointment> {
    return this.prisma.appointment.findUniqueOrThrow({ where: params });
  }

  async count({ where }: IListAppointmentParams): Promise<number> {
    return this.prisma.appointment.count({ where });
  }

  async create(payload: ICreateAppointmentPayload): Promise<Appointment> {
    return this.prisma.appointment.create({ data: payload });
  }

  async update(
    params: IFindAppointmentParams,
    payload: IUpdateAppointmentPayload,
  ): Promise<Appointment> {
    return this.prisma.appointment.update({ where: params, data: payload });
  }

  async delete(params: IFindAppointmentParams): Promise<Appointment> {
    return this.prisma.appointment.delete({ where: params });
  }
}
