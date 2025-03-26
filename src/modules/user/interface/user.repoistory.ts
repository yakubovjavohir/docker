import { ID } from "src/common/type";
import { UserEntity } from "../entities/user.entity";
import { UpdateUserDto } from "../dto/update-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";


export interface IProductRepository {
    create(entity:CreateUserDto):Promise<UserEntity>
    findAll():Promise<Array<UserEntity>>
    update(id:ID, dto:UpdateUserDto):Promise<UserEntity | null>
    delete(id:ID):Promise<UserEntity | null>
    findById(id:ID):Promise<UserEntity | null>
}