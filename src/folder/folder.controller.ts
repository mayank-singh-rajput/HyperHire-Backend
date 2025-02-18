import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FolderService } from './folder.service';
import { CreateFolder } from './interfaces/create.interface';
import { FetchFolder } from './interfaces/fetch.interface';

@Controller('folders')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @Post()
  CreateFolder(@Body() data: CreateFolder) {    
    return this.folderService.CreateFolder(data);
  }

  @Get()
  FetchFolder(@Query() data: FetchFolder) {
    return this.folderService.FetchFolder(data);
  }
}
