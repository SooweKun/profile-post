/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/addusers')
  create(@Body() dto: CreateUsersDto) {
    return this.usersService.create(dto);
  }

  @Get('/auth')
  async auth(@Query('name') name: string, @Query('password') password: string) {
    if (!name || !password) {
      throw new UnauthorizedException('succes');
    }

    const user = await this.usersService.findOne(name);

    if (!user || user.password !== password) {
      throw new UnauthorizedException('error');
    }

    const { password: _, ...result } = user;
    return result;
  }
}
