import {
  CreateClientDTO,
  ListClientsQueryDTO,
  UniqueClientParams,
  UpdateClientDTO,
} from 'project-common';
import { ClientService } from '@/modules/client/client.service';
import { CurrentUser } from '@/decorators/user/current.user.decorator';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('categories')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  list(@CurrentUser() user: JwtPayload, @Query() query: ListClientsQueryDTO) {
    return this.clientService.list(query);
  }

  @Get(':unique')
  find(
    @CurrentUser() user: JwtPayload,
    @Param() uniqueParam: UniqueClientParams,
  ) {
    return this.clientService.find(uniqueParam);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() body: CreateClientDTO) {
    return this.clientService.create(body, user);
  }

  @Patch(':unique')
  update(
    @CurrentUser() user: JwtPayload,
    @Param() uniqueParam: UniqueClientParams,
    @Body() body: UpdateClientDTO,
  ) {
    return this.clientService.update(uniqueParam, body, user);
  }

  @Delete(':unique')
  delete(
    @CurrentUser() user: JwtPayload,
    @Param() uniqueParam: UniqueClientParams,
  ) {
    return this.clientService.delete(uniqueParam);
  }
}
