import { InjectModel } from "@nestjs/mongoose";
import { UserDocument, FilialEntity } from "./entities/brand.entity";
import { IBrandRepository } from "./interface/user.repoistory";
import { Model } from "mongoose";
import { ID } from "src/common/type";
import { UpdateFilialDto } from "./dto/update-brand.dto";
import { CreateFilialDto } from "./dto/create-brand.dto";


export class BrandRepository implements IBrandRepository {
    constructor(@InjectModel(FilialEntity.name) private productModel: Model<UserDocument>){}
    async create(entity: CreateFilialDto): Promise<FilialEntity> {
        const data = await this.productModel.create({...entity})        
        return data
    }
    async findAll(): Promise<Array<FilialEntity>> {
        const data = await this.productModel.find()
        return data
    }
    async update(id: string, dto: UpdateFilialDto): Promise<FilialEntity | null> {
        const data =  await this.productModel.findByIdAndUpdate(id, dto, { new: true });        
        return data
    }
    
    async delete(id: ID): Promise<FilialEntity | null> {
        const data = await this.productModel.findByIdAndDelete({_id:id})
        return data
    }
    async findById(id: ID): Promise<FilialEntity | null> {
        const data = await this.productModel.findById(id)
        return data
    }
}