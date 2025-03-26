import { ID } from "src/common/type";
import { RoomsEntity } from "../entities/brand.entity";
import { UpdateRoomsDto } from "../dto/update-brand.dto";
import { CreateRoomsDto } from "../dto/create-brand.dto";


export interface IBrandRepository {
    create(entity:CreateRoomsDto):Promise<RoomsEntity>
    findAll():Promise<Array<RoomsEntity>>
    update(id:ID, dto:UpdateRoomsDto):Promise<RoomsEntity | null>
    delete(id:ID):Promise<RoomsEntity | null>
    findById(id:ID):Promise<RoomsEntity | null>
}