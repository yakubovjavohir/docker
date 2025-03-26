import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateFilialDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    filialName:string
}
