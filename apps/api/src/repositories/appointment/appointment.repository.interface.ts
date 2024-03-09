import { Prisma, Appointment } from 'database';
import { IPrismaListParams } from '@/repositories/types';

export type IListAppointmentParams = IPrismaListParams<
  Appointment,
  Prisma.AppointmentWhereInput
>;
export type IFindAppointmentParams = Prisma.AppointmentWhereUniqueInput;
export type ICreateAppointmentPayload = Prisma.AppointmentCreateInput;
export type IUpdateAppointmentPayload = Prisma.AppointmentUpdateInput;

export abstract class IAppointmentRepository {
  abstract list(params: IListAppointmentParams): Promise<Appointment[]>;

  abstract find(params: IFindAppointmentParams): Promise<Appointment>;

  abstract count(params: IListAppointmentParams): Promise<number>;

  abstract create(payload: ICreateAppointmentPayload): Promise<Appointment>;

  abstract update(
    params: IFindAppointmentParams,
    payload: IUpdateAppointmentPayload,
  ): Promise<Appointment>;

  abstract delete(params: IFindAppointmentParams): Promise<Appointment>;
}
