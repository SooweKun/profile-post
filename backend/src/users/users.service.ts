import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Users } from '@prisma/client';
import { CreateUsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }
  create(dto: CreateUsersDto) {
    return this.prisma.users.create({
      data: dto,
    });
  }
}
