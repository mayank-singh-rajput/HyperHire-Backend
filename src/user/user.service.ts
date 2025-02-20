import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUser } from './interfaces/create.interface';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async User(data: CreateUser) {
    let user = await this.prisma.user.findFirst({
      where: { email: data.email },
    });

    if (user) {
      return user;
    }

    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
  }
}
