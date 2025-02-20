import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './interfaces/create.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  User(@Body() data: CreateUser) {
    return this.userService.User(data);
  }
}
