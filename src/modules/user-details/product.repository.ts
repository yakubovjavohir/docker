import { InjectModel } from "@nestjs/mongoose";
import { UserDetailsDocument, UserDetailsEntity } from "./entities/product.entity";
import { IProductRepository } from "./interface/user.repoistory";
import { Model } from "mongoose";
import { ID } from "src/common/type";
import { UpdateUserDetailsDto } from "./dto/update-product.dto";
import { CreateUserDetailsDto } from "./dto/create-product.dto";


export class ProductRepository implements IProductRepository {
    constructor(@InjectModel(UserDetailsEntity.name) private productModel: Model<UserDetailsDocument>){}
    async create(entity: CreateUserDetailsDto): Promise<UserDetailsEntity> {
        const data = await this.productModel.create({...entity})        
        return data
    }
    async findAll(): Promise<Array<UserDetailsEntity>> {
        const data = await this.productModel.find().populate('userId').exec()
        return data
    }
    async update(id: string, dto: UpdateUserDetailsDto): Promise<UserDetailsEntity | null> {
        const data =  await this.productModel.findByIdAndUpdate(id, dto, { new: true });        
        return data
    }
    
    async delete(id: ID): Promise<UserDetailsEntity | null> {
        const data = await this.productModel.findByIdAndDelete({_id:id})
        return data
    }
    async findById(id: ID): Promise<UserDetailsEntity | null> {
        const data = await this.productModel.findById(id)
        return data
    }
}