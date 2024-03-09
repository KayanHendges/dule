import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsString,
  ValidateNested,
  validateSync,
} from "class-validator";
import { Appointment as IAppointment } from "database";
import ObjectID from "bson-objectid";
import { EntityCommonOmit } from "../dto";
import { AppointmentWork } from "./appointmentWork";
import { Type } from "class-transformer";

interface ContructorProps extends Omit<IAppointment, EntityCommonOmit> {
  id?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

export class Appointment implements IAppointment {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  businessId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  clientId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AppointmentWork)
  works: AppointmentWork[];

  @IsDate()
  updatedAt: Date = new Date();

  @IsDate()
  createdAt: Date = new Date();

  constructor(props: ContructorProps) {
    props.id = props.id || ObjectID().toHexString();
    Object.assign(this, props);

    const errors = validateSync(this);

    if (errors.length) throw new Error(JSON.stringify(errors, undefined, 2));
  }
}
