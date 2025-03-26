import { ResData } from "src/lib/resData";
import { CreateUserDetailsDto } from "../dto/create-product.dto";
import { UserDetailsEntity } from "../entities/product.entity";
import { UpdateUserDetailsDto } from "../dto/update-product.dto";
import { ID } from "src/common/type";

export interface IProductService {
    create(dto:CreateUserDetailsDto):Promise<ResData<UserDetailsEntity>>
    findAll():Promise<ResData<Array<UserDetailsEntity>>>
    update(id:ID, dto:UpdateUserDetailsDto):Promise<ResData<UserDetailsEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<UserDetailsEntity>>
}