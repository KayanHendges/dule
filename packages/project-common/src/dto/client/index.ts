import { IsDate, IsOptional, IsString } from "class-validator";
import { PaginationAndSortDTO, entityCommonOmit } from "../globals";
import { Client } from "../../entities/client";
import { OmitClass, PartialClass, PickClass } from "../../mappedClasses";

export class CreateClientDTO extends OmitClass(Client, entityCommonOmit) {}

export class UpdateClientDTO extends PartialClass(CreateClientDTO) {}

export class ListClientsQueryDTO extends PaginationAndSortDTO<Client> {
  @IsString()
  @IsOptional()
  id?: string;
  
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;
}

export class UniqueClientParams extends PickClass(Client, ['id']) {}