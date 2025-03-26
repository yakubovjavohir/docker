import { ResData } from "src/lib/resData";
import { CreateBrandDto } from "../dto/create-brand.dto";
import { BrandEntity } from "../entities/brand.entity";
import { UpdateBrandDto } from "../dto/update-brand.dto";
import { ID } from "src/common/type";

export interface IBrandService {
    create(dto:CreateBrandDto):Promise<ResData<BrandEntity>>
    findAll():Promise<ResData<Array<BrandEntity>>>
    update(id:ID, dto:UpdateBrandDto):Promise<ResData<BrandEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<BrandEntity>>
}