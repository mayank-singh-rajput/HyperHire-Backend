import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateFolder {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsUUID()
    @IsNotEmpty()
    user: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    parentId: string;
}
