import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { FolderModule } from './folder/folder.module';

@Module({
  imports: [PrismaModule, UserModule, FolderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
