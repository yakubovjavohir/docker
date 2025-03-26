import { ResData } from "src/lib/resData";
import { CreateFilialDto } from "../dto/create-brand.dto";
import { FilialEntity } from "../entities/brand.entity";
import { UpdateFilialDto } from "../dto/update-brand.dto";
import { ID } from "src/common/type";

export interface IBrandService {
    create(dto:CreateFilialDto):Promise<ResData<FilialEntity>>
    findAll():Promise<ResData<Array<FilialEntity>>>
    update(id:ID, dto:UpdateFilialDto):Promise<ResData<FilialEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<FilialEntity>>
}