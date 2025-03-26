import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoomsDto } from './create-brand.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRoomsDto extends PartialType(CreateRoomsDto) {
        @ApiProperty()
        @IsString()
        @IsOptional()
        roomName:string
}
