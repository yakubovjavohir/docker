import { ID } from "src/common/type";
import { FilialEntity } from "../entities/brand.entity";
import { UpdateFilialDto } from "../dto/update-brand.dto";
import { CreateFilialDto } from "../dto/create-brand.dto";


export interface IBrandRepository {
    create(entity:CreateFilialDto):Promise<FilialEntity>
    findAll():Promise<Array<FilialEntity>>
    update(id:ID, dto:UpdateFilialDto):Promise<FilialEntity | null>
    delete(id:ID):Promise<FilialEntity | null>
    findById(id:ID):Promise<FilialEntity | null>
}