import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  validateSync,
} from "class-validator";
import { Client as IClient } from "database";
import ObjectID from "bson-objectid";
import { EntityCommonOmit } from "../dto";

interface ContructorProps extends Omit<IClient, EntityCommonOmit> {
  id?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

export class Client implements IClient {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  @IsPhoneNumber("BR")
  phone: string | null;

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string | null;

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
