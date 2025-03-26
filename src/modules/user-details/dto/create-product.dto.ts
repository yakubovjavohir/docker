import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDetailsDto {
    @ApiProperty({type:String})
    @IsString()
    @IsNotEmpty()
    fullName:string

    @ApiProperty({type:Number})
    @IsInt()
    @IsNotEmpty()
    age:number

    @ApiProperty({type:String})
    @IsString()
    @IsNotEmpty()
    userId:string
}
