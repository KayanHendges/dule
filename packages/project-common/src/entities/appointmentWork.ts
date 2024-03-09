import {
  IsArray,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
  validateSync,
} from "class-validator";
import { AppointmentWork as IAppointmentWork } from "database";
import { EntityCommonOmit } from "../dto";

interface ContructorProps extends Omit<IAppointmentWork, EntityCommonOmit> {
  id?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

export class AppointmentWork implements IAppointmentWork {
  @IsString()
  @IsNotEmpty()
  workId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsPositive()
  userId: string;

  @IsDate()
  updatedAt: Date = new Date();

  @IsDate()
  createdAt: Date = new Date();

  constructor(props: ContructorProps) {
    Object.assign(this, props);

    const errors = validateSync(this);

    if (errors.length) throw new Error(JSON.stringify(errors, undefined, 2));
  }
}
