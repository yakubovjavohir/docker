import { Inject, Injectable } from '@nestjs/common';
import { CreateFilialDto } from './dto/create-brand.dto';
import { UpdateFilialDto } from './dto/update-brand.dto';
import { IBrandService } from './interface/user.service';
import { BrandRepository } from './brand.repository';
import { ResData } from 'src/lib/resData';
import { ID } from 'src/common/type';
import { FilialEntity } from './entities/brand.entity';
import { BrandExsist, ProductNotFound } from './exception/error';

@Injectable()
export class BrandsService implements IBrandService{
  constructor(@Inject("IProductRepository") private readonly productRepository:BrandRepository){}
  async create(dto: CreateFilialDto): Promise<ResData<FilialEntity>> {
    const allData = await this.productRepository.findAll()

    const find = allData.find((el)=>{
      return el.filialName === dto.filialName
    })

    if(find){
      throw new BrandExsist()
    }

    const data = await this.productRepository.create(dto)
    const resdata = new ResData<FilialEntity>(201, "malumot yaratildi.", data)
    return resdata
  }
  async findAll(): Promise<ResData<Array<FilialEntity>>> {
    const data = await this.productRepository.findAll()
    const resdata = new ResData<Array<FilialEntity>>(200, "malumotlar olindi.", data)
    return resdata
  }
  async update(id: ID, dto: UpdateFilialDto): Promise<ResData<FilialEntity>> {
    await this.findById(id)
    const data = await this.productRepository.update(id, dto)
    const resdata = new ResData<FilialEntity>(200, "malumot yangilandi.", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<void>> {
    await this.findById(id)
     await this.productRepository.delete(id)
     const resdata = new ResData<null>(200, "malumot o'chirildi.")
     return resdata
  }
  async findById(id: ID): Promise<ResData<FilialEntity>> {
    const data = await this.productRepository.findById(id)
    if(!data){
      throw new ProductNotFound()
    }
    const resdata = new ResData<FilialEntity>(200, "malumot olindi.", data)
    return resdata
  }
}
