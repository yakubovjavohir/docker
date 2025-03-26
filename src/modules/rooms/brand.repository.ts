import { InjectModel } from "@nestjs/mongoose";
import { UserDocument, RoomsEntity } from "./entities/brand.entity";
import { IBrandRepository } from "./interface/user.repoistory";
import { Model } from "mongoose";
import { ID } from "src/common/type";
import { UpdateRoomsDto } from "./dto/update-brand.dto";
import { CreateRoomsDto } from "./dto/create-brand.dto";


export class BrandRepository implements IBrandRepository {
    constructor(@InjectModel(RoomsEntity.name) private productModel: Model<UserDocument>){}
    async create(entity: CreateRoomsDto): Promise<RoomsEntity> {
        const data = await this.productModel.create({...entity})        
        return data
    }
    async findAll(): Promise<Array<RoomsEntity>> {
        const data = await this.productModel.find()
        return data
    }
    async update(id: string, dto: UpdateRoomsDto): Promise<RoomsEntity | null> {
        const data =  await this.productModel.findByIdAndUpdate(id, dto, { new: true });        
        return data
    }
    
    async delete(id: ID): Promise<RoomsEntity | null> {
        const data = await this.productModel.findByIdAndDelete({_id:id})
        return data
    }
    async findById(id: ID): Promise<RoomsEntity | null> {
        const data = await this.productModel.findById(id)
        return data
    }
}