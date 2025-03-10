import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/getUser')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/addUsers')
  create(@Body() dto: CreateUsersDto) {
    return this.usersService.create(dto);
  }
}
