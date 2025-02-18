import { IsNotEmpty, IsUUID } from 'class-validator';

export class FetchFolder {
  @IsUUID()
  @IsNotEmpty()
  user: string;
}
