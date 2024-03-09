import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  validateSync,
} from "class-validator";
import { Work as IWork } from "database";
import ObjectID from "bson-objectid";
import { EntityCommonOmit } from "../dto";

interface ContructorProps extends Omit<IWork, EntityCommonOmit> {
  id?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

export class Work implements IWork {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  businessId: string;

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
