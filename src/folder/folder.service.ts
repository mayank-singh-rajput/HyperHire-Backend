import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFolder } from './interfaces/create.interface';
import { FetchFolder } from './interfaces/fetch.interface';

@Injectable()
export class FolderService {
  constructor(private prisma: PrismaService) {}

  async CreateFolder(data: CreateFolder) {
    return this.prisma.folder.create({
      data: {
        id: data.id,
        userId: data.user,
        name: data.name,
        parentId: data.parentId || null,
      },
    });
  }

  async FetchFolder(data: FetchFolder) {
    return this.prisma.folder.findMany({
      where: { userId: data.user },
      select: {
        id: true,
        name: true,
        parentId: true,
        userId: true,
      },
    });
  }
}
