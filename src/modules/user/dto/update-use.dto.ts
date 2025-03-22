import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-use.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
        @ApiProperty()
        @IsOptional()
        @IsString()
        username:string
    
        @ApiProperty()
        @IsOptional()
        @IsString()
        password:string
}
