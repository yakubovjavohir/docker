import { ResData } from "src/lib/resData";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserEntity } from "../entities/user.entity";
import { UpdateUserDto } from "../dto/update-user.dto";
import { ID } from "src/common/type";

export interface IProductService {
    create(dto:CreateUserDto):Promise<ResData<UserEntity>>
    findAll():Promise<ResData<Array<UserEntity>>>
    update(id:ID, dto:UpdateUserDto):Promise<ResData<UserEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<UserEntity>>
}