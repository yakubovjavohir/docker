import { ID } from "src/common/type";
import { UserDetailsEntity } from "../entities/product.entity";
import { UpdateUserDetailsDto } from "../dto/update-product.dto";
import { CreateUserDetailsDto } from "../dto/create-product.dto";


export interface IProductRepository {
    create(entity:CreateUserDetailsDto):Promise<UserDetailsEntity>
    findAll():Promise<Array<UserDetailsEntity>>
    update(id:ID, dto:UpdateUserDetailsDto):Promise<UserDetailsEntity | null>
    delete(id:ID):Promise<UserDetailsEntity | null>
    findById(id:ID):Promise<UserDetailsEntity | null>
}