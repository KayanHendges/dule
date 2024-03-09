import { IsDate, IsOptional, IsString } from "class-validator";
import { PaginationAndSortDTO, entityCommonOmit } from "../globals";
import { Work } from "../../entities/work";
import { OmitClass, PartialClass, PickClass } from "../../mappedClasses";

export class CreateWorkDTO extends OmitClass(Work, entityCommonOmit) {}

export class UpdateWorkDTO extends PartialClass(CreateWorkDTO) {}

export class ListWorksQueryDTO extends PaginationAndSortDTO<Work> {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  price?: number;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;
}

export class UniqueWorkParams extends PickClass(Work, ['id']) {}