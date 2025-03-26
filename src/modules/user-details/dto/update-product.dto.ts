import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsMongoId, IsOptional, IsString } from "class-validator";
import { CreateUserDetailsDto } from "./create-product.dto";

export class UpdateUserDetailsDto extends PartialType(CreateUserDetailsDto){
    @ApiProperty({type:String})
    @IsString()
    @IsOptional()
    fullName:string

    @ApiProperty({type:Number, default:0})
    @IsInt()
    @IsOptional()
    age:number

    @ApiProperty({type:String})
    @IsInt()
    @IsOptional()
    userId:string
}
