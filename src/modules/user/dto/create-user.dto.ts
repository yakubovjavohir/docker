import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    phone:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password:string
}
