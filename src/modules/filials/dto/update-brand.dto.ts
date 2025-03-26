import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFilialDto } from './create-brand.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFilialDto extends PartialType(CreateFilialDto) {
        @ApiProperty()
        @IsString()
        @IsOptional()
        filialName:string
}
