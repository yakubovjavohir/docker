import { ID } from "src/common/type";
import { BrandEntity } from "../entities/brand.entity";
import { UpdateBrandDto } from "../dto/update-brand.dto";
import { CreateBrandDto } from "../dto/create-brand.dto";


export interface IBrandRepository {
    create(entity:CreateBrandDto):Promise<BrandEntity>
    findAll():Promise<Array<BrandEntity>>
    update(id:ID, dto:UpdateBrandDto):Promise<BrandEntity | null>
    delete(id:ID):Promise<BrandEntity | null>
    findById(id:ID):Promise<BrandEntity | null>
}