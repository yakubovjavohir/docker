import { ResData } from "src/lib/resData";
import { CreateRoomsDto } from "../dto/create-brand.dto";
import { RoomsEntity } from "../entities/brand.entity";
import { UpdateRoomsDto } from "../dto/update-brand.dto";
import { ID } from "src/common/type";

export interface IBrandService {
    create(dto:CreateRoomsDto):Promise<ResData<RoomsEntity>>
    findAll():Promise<ResData<Array<RoomsEntity>>>
    update(id:ID, dto:UpdateRoomsDto):Promise<ResData<RoomsEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<RoomsEntity>>
}