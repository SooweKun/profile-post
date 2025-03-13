import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateUsersDto) {
    return this.prisma.users.create({
      data: dto,
    });
  }

  async findOne(name: string) {
    return this.prisma.users.findUnique({
      where: { name },
    });
  }
}
