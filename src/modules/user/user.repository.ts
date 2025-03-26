import { InjectModel } from "@nestjs/mongoose";
import { UserDocument, UserEntity } from "./entities/user.entity";
import { IProductRepository } from "./interface/user.repoistory";
import { Model } from "mongoose";
import { ID } from "src/common/type";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";


export class ProductRepository implements IProductRepository {
    constructor(@InjectModel(UserEntity.name) private productModel: Model<UserDocument>){}
    async create(entity: CreateUserDto): Promise<UserEntity> {
        const data = await this.productModel.create({...entity})        
        return data
    }
    async findAll(): Promise<Array<UserEntity>> {
        const data = await this.productModel.find()
        return data
    }
    async update(id: string, dto: UpdateUserDto): Promise<UserEntity | null> {
        const data =  await this.productModel.findByIdAndUpdate(id, dto, { new: true });        
        return data
    }
    
    async delete(id: ID): Promise<UserEntity | null> {
        const data = await this.productModel.findByIdAndDelete({_id:id})
        return data
    }
    async findById(id: ID): Promise<UserEntity | null> {
        const data = await this.productModel.findById(id)
        return data
    }
}