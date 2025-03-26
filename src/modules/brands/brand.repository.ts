import { InjectModel } from "@nestjs/mongoose";
import { UserDocument, BrandEntity } from "./entities/brand.entity";
import { IBrandRepository } from "./interface/user.repoistory";
import { Model } from "mongoose";
import { ID } from "src/common/type";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { CreateBrandDto } from "./dto/create-brand.dto";


export class BrandRepository implements IBrandRepository {
    constructor(@InjectModel(BrandEntity.name) private productModel: Model<UserDocument>){}
    async create(entity: CreateBrandDto): Promise<BrandEntity> {
        const data = await this.productModel.create({...entity})        
        return data
    }
    async findAll(): Promise<Array<BrandEntity>> {
        const data = await this.productModel.find()
        return data
    }
    async update(id: string, dto: UpdateBrandDto): Promise<BrandEntity | null> {
        const data =  await this.productModel.findByIdAndUpdate(id, dto, { new: true });        
        return data
    }
    
    async delete(id: ID): Promise<BrandEntity | null> {
        const data = await this.productModel.findByIdAndDelete({_id:id})
        return data
    }
    async findById(id: ID): Promise<BrandEntity | null> {
        const data = await this.productModel.findById(id)
        return data
    }
}