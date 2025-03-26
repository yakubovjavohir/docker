import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBrandDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    brandName:string
}
