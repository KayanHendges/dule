import { UserService } from '@/modules/user/user.service';
import { CurrentUser } from '@/decorators/user/current.user.decorator';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@CurrentUser() payload: JwtPayload) {
    return this.userService.getUser(payload);
  }
}
